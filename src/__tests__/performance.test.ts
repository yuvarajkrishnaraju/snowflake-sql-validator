import { SnowflakeSQL } from '../SnowflakeSQL';
import { PerformanceOptimizer } from '../PerformanceOptimizer';
import { validateSnowflakeSQL } from '../index';

describe('Performance Tests', () => {
  let parser: SnowflakeSQL;

  beforeEach(() => {
    parser = new SnowflakeSQL();
    // Clear caches before each test
    SnowflakeSQL.clearCache();
    PerformanceOptimizer.clearAllCaches();
  });

  afterEach(() => {
    // Clear performance stats after each test
    SnowflakeSQL.clearPerformanceStats();
  });

  it('should demonstrate caching performance improvement', () => {
    const sql = 'select column1, column2 from table1 where column1 = 1';

    // First parse (cache miss)
    const start1 = performance.now();
    const result1 = parser.parse(sql);
    const time1 = performance.now() - start1;

    // Second parse (cache hit)
    const start2 = performance.now();
    const result2 = parser.parse(sql);
    const time2 = performance.now() - start2;

    expect(result1.errors).toHaveLength(0);
    expect(result2.errors).toHaveLength(0);

    // Second parse should be faster due to caching
    expect(time2).toBeLessThan(time1);

    // Verify cache is working
    const cacheStats = SnowflakeSQL.getCacheStats();
    expect(cacheStats.size).toBeGreaterThan(0);
  });

  it('should handle multiple SQL statements efficiently', () => {
    const sqlStatements = [
      'select * from table1',
      'select column1 from table2',
      'insert into table3 values (1, 2)',
      'update table4 set col1 = 10',
      'delete from table5 where id = 1'
    ];

    const start = performance.now();

    // Parse all statements
    sqlStatements.forEach((sql) => {
      const result = parser.parse(sql);
      expect(result.errors).toHaveLength(0);
    });

    const totalTime = performance.now() - start;

    // Should complete in reasonable time
    expect(totalTime).toBeLessThan(1000); // Less than 1 second

    // Check cache utilization
    const cacheStats = SnowflakeSQL.getCacheStats();
    expect(cacheStats.size).toBeGreaterThan(0);
  });

  it('should demonstrate lexer optimization performance - COMPLEX SQL 1', () => {
    const complexSQL = `
      select t1.id, t1.name, t2.category
      from table1 t1
      left join table2 t2 on t1.id = t2.id
      where t1.active = true
      group by t1.category
      having count(*) > 1
      order by t1.name
      limit 10
    `;

    const start = performance.now();
    const result = parser.parse(complexSQL);
    const parseTime = performance.now() - start;

    expect(result.errors).toHaveLength(0);

    // Complex SQL should parse in reasonable time (increased threshold for CI environments)
    expect(parseTime).toBeLessThan(10000); // Less than 10 seconds
  });

  it('should demonstrate lexer optimization performance - COMPLEX SQL 2', () => {
    const complexSQL = `
      CREATE OR REPLACE TABLE TEMP.PL_NEW_SIGNUPS AS
 
 WITH EXCLUDED_MEMBERS AS (
     SELECT DISTINCT member_id
     FROM campaign_asset.member_group
     WHERE group_id = 5746
       AND (
           end_timestamp > CURRENT_TIMESTAMP()
           OR end_timestamp IS NULL
       )
 )
 
 SELECT m.member_id, m.guid, m.region_id
 FROM DW.MEMBER_PROFILE m
 LEFT JOIN EXCLUDED_MEMBERS em
   ON m.member_id = em.member_id
 WHERE m.MEMBER_STATUS = TRUE
   AND m.MEMBER_ENGAGED IN ('Engaged', 'Not-Engaged')
   AND m.TENANT = 'ebates.com'
   AND m.GUID IS NOT NULL
   AND m.created_ts IS NOT NULL
   AND m.created_ts < CURRENT_TIMESTAMP()
   AND m.created_ts >= DATEADD(DAY, -7, CURRENT_TIMESTAMP())
   AND em.member_id IS NULL;
    `;

    const start = performance.now();
    const result = validateSnowflakeSQL(complexSQL);
    const parseTime = performance.now() - start;
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);

    // Complex SQL should validate in reasonable time (increased threshold for CI environments)
    expect(parseTime).toBeLessThan(10000); // Less than 10 seconds
  });

  it('should demonstrate lexer optimization performance - COMPLEX SQL 3', () => {
    const complexSQL = `WITH RESULT_TABLE AS (WITH CAMPAIGN_PERFORMANCE AS (
   SELECT
     *
   FROM
     (
       SELECT
         MAX(C.TENANT) OVER () AS TENANT,
         MAX(C.STORE_ID) OVER (PARTITION BY QUOTE_NUM) AS STORE_ID,
         MAX(DS.STORE_NAME) OVER (PARTITION BY QUOTE_NUM) AS STORE_NAME,
         C.CPA_RATE,
         C.AGREED_CASH_BACK_RATE,
         C.TCB_DEAL_TYPE,
         C.IS_TCB_PRODUCT,
         C.PRODUCT_NAME,
         C.CAMPAIGN_TYPE,
         C.COMMISSION_UNIT,
         C.COMMISSION AS COMMISSION_VALUE,
         MAX(C.PRODUCT_DATE_AVAILABLE) OVER (PARTITION BY QUOTE_NUM) AS CAMPAIGN_START_DATE,
         MAX(C.PRODUCT_CUSTOM_END_DATE) OVER (PARTITION BY QUOTE_NUM) AS CAMPAIGN_END_DATE,
         C.BUDGET,
         QUOTE_LINE,
         QUOTE_NUM,
         A.PROMOTION_ID,
         A.GROUP_ID,
         GN.GROUP_NAME,
         CASE WHEN GROUP_NAME ILIKE '%%control%%' THEN SUBSTR(GROUP_NAME,CHARINDEX('control',LOWER(GROUP_NAME)),7) ELSE 'test' END AS TEST_CONTROL,
         CASE WHEN (CASE WHEN GROUP_NAME ILIKE '%%retention%%' THEN SUBSTR(GROUP_NAME,CHARINDEX('retention',LOWER(GROUP_NAME)),9) ELSE NULL END) = 'retention' THEN 'retention' ELSE NULL END AS RETENTION_IND,
         CASE WHEN (CASE WHEN GROUP_NAME ILIKE '%%ntf%%' THEN SUBSTR(GROUP_NAME,CHARINDEX('ntf',LOWER(GROUP_NAME)),3) ELSE NULL END) = 'ntf' THEN 'ntf' ELSE NULL END AS NTF_IND,
         CASE WHEN (CASE WHEN GROUP_NAME ILIKE '%%tcb%%' THEN SUBSTR(GROUP_NAME,CHARINDEX('tcb',LOWER(GROUP_NAME)),3) ELSE NULL END) = 'tcb' THEN 'tcb' ELSE NULL END AS TCB_IND,
         CASE WHEN CURRENT_DATE BETWEEN C.PRODUCT_DATE_AVAILABLE
         AND C.PRODUCT_CUSTOM_END_DATE THEN 'Y' ELSE 'N' END AS ACTIVE_CAMPAIGN_IND
       FROM
         (
           SELECT
             TRIM(regexp_substr(attrs, 'QL\\W+\\w+', 1, 1, 'e', 0)) AS QUOTE_LINE,
             TRIM(regexp_substr(attrs, 'Q\\W+\\w+', 1, 1, 'e', 0)) AS QUOTE_NUM,
             P.PROMOTION_ID,
             P.GROUP_ID
           FROM
             "ODS"."EBATESCOM_PROMOTION_PROMOTION_GROUP" P
             JOIN (
               SELECT
                 ID,
                 MAX(INSERT_TIMESTAMP) AS MAX_TS
               FROM
                 "ODS"."EBATESCOM_PROMOTION_PROMOTION_GROUP"
               GROUP BY
                 1
             ) S ON (
               P.ID = S.ID
               AND P.INSERT_TIMESTAMP = S.MAX_TS
             )
           WHERE
             QUOTE_NUM IN (
               SELECT
                 DISTINCT QUOTE_QUOTE_NUM
               FROM
                 "DW"."CRM_PRODUCTS" C
               WHERE
                 1 = 1
                 AND (C.PRODUCT_NAME ILIKE '%%Personalized%%' OR C.PRODUCT_NAME ILIKE '%%Targeted%%'
                       OR C.PRODUCT_NAME IN (
                       'TCB Campaign Standard'
                       , 'PR Campaign Standard'
                       , 'TCB Campaign Custom'
                       , 'PR Campaign Custom'
                       )
                 )
                 AND C.CAMPAIGN_TYPE = 'Single Merchant'
                 AND C.TCB_DEAL_TYPE IS NOT NULL
                 AND C.TCB_DEAL_TYPE != ''
             )
         ) A
         LEFT JOIN (
           SELECT
             TENANT,
             GROUP_ID,
             GROUP_NAME,
             DATE(
               MAX(END_TIMESTAMP)
             ) END_TIMESTAMP
           FROM
             "CAMPAIGN_ASSET"."MEMBER_GROUP"
           WHERE
             TENANT = 'ebates.com'
             AND IS_TARGETSET = TRUE
           GROUP BY
             1,2,3
         ) GN ON A.GROUP_ID = GN.GROUP_ID
         LEFT JOIN "DW"."CRM_PRODUCTS" C ON C.QUOTE_QUOTE_NUM = A.QUOTE_NUM
         AND C.QUOTELINE_NAME = QUOTE_LINE
         LEFT JOIN "DW"."STORES" DS ON DS.STORE_ID = C.STORE_ID
         AND DS.TENANT = 'ebates.com'
     )
   WHERE
     PROMOTION_ID NOT IN (SELECT DISTINCT PROMOTION_ID FROM "ASSET"."PRTCB_SM_MULTI_MERCHANT_WITH")
 ) SELECT
     DISTINCT TENANT
     , STORE_ID
     , STORE_NAME
     , TCB_DEAL_TYPE
     , QUOTE_NUM QUOTE_QUOTE_NUM
     , IS_RAD
     , IS_CAMPAIGN_ACTIVE
     , ARRAY_DISTINCT(
         ARRAY_COMPACT(
             ARRAY_CAT(
                 IFNULL(GRA_GROUP_ID_LIST, ARRAY_CONSTRUCT())
                 , IFNULL(GROUP_ID_LIST, ARRAY_CONSTRUCT())
             )
         )
     ) GROUP_ID_LIST
     
     , MIN(CAMPAIGN_START_DATE) CAMPAIGN_START_DATE
     , MAX(CAMPAIGN_END_DATE) CAMPAIGN_END_DATE
     , MAX(PROMOTION_EXPIRE_UNIQUE) PROMOTION_EXPIRE
     , MAX(MEMBER_GRP_END_DATE) MEMBER_GRP_END_DATE
     
     , MAX(COALESCE(BUDGET, 0)) BUDGET
     , SUM(NTFS) NTFS
     , SUM(ORDERS) ORDERS
     , SUM(BUYERS) BUYERS
     , COALESCE(SUM(SALES), 0)  SALES 
   
     , COALESCE(SUM(CASHBACK), 0)  CASHBACK 
   
     , COALESCE(SUM(COMMISSION), 0)  COMMISSION 
     , COALESCE(SUM(COMMISSION_OWED), 0) COMMISSION_OWED
     , COALESCE(SUM(EXPECTED_COMMISSION), 0)  EXPECTED_COMMISSION 
 FROM
 ( 
 SELECT
   DISTINCT 'ebates.com' TENANT
   , CP.STORE_ID
   , CP.STORE_NAME
   , 'Commission' TCB_DEAL_TYPE
   , CP.QUOTE_NUM
   , 0 IS_RAD
   , CP.RAD_IND
   , 'Y' IS_CAMPAIGN_ACTIVE
   
   , ARRAY_DISTINCT(ARRAY_COMPACT(GRA.GROUP_ID_LIST_GRA)) GRA_GROUP_ID_LIST
   , ARRAY_AGG(DISTINCT CP.GROUP_ID) GROUP_ID_LIST
     
   , MIN(CP.CAMPAIGN_START_DATE) CAMPAIGN_START_DATE
   , MAX(CP.CAMPAIGN_END_DATE) CAMPAIGN_END_DATE
   , MAX(CP.PROMOTION_EXPIRE_DATE) PROMOTION_EXPIRE_UNIQUE
   , MAX(END_TIMESTAMP
   ) AS MEMBER_GRP_END_DATE
     
   , MAX(COALESCE(CP.BUDGET, 0)) BUDGET
   , SUM(CP.NTFS) NTFS
   , SUM(CP.ORDERS) ORDERS
   , SUM(CP.BUYERS) BUYERS
   , SUM(CASE WHEN (CP.QUOTE_NUM = TQ.QUOTE_NUM OR CP.TIERED_FLAG = 'tiered') THEN APPLIED_TIER_SALES ELSE CP.SALES END) SALES
   
   , SUM(CP.CASHBACK_UNADJUSTED) CASHBACK
   
   , SUM(CP.NETWORK_COMMISSION) COMMISSION
   , SUM(CASE WHEN (CP.QUOTE_NUM = TQ.QUOTE_NUM OR CP.TIERED_FLAG = 'tiered') THEN APPLIED_TIER_COMMISSION_EXPECTED ELSE CP.COMMISSION_EXPECTED END) COMMISSION_OWED
   , SUM(CASE WHEN (CP.QUOTE_NUM = TQ.QUOTE_NUM OR CP.TIERED_FLAG = 'tiered') THEN APPLIED_TIER_COMMISSION_EXPECTED ELSE CP.COMMISSION_EXPECTED END) EXPECTED_COMMISSION FROM
   (
     SELECT
       DISTINCT UPDATE_TIMESTAMP
       , QUOTE_NUM
       , PENDING_TRAVEL_YN
       , STORE_ID
       , STORE_NAME
       , STORE_CATEGORY
       , GROUP_ID
       , GROUP_NAME
       , GROUP_NAME_CB
       , RAD_IND
       , TEST_CONTROL_IND
       , TRACKING_TICKET_NUMBER
       , ORDER_ID
       , TIERED_FLAG
       , TO_DATE(CLICK_DATE) CLICK_DATE
       , TRAVEL_APPRVL_RT CANCELLATION_RATE
       , ABS(1 - TRAVEL_APPRVL_RT) APPROVAL_RATE
       , MAX(CLICK_DATE) LAST_CLICK_DATE
       , MAX(REPORTING_DELAY_HOUR) REPORTING_DELAY_HOUR
       , MAX(AGREED_COMMISSION_RATE) AGREED_COMMISSION_RATE
       , MAX(AGREED_CASH_BACK_RATE) AGREED_CASH_BACK_RATE
       , MIN(CAMPAIGN_START_DATE) CAMPAIGN_START_DATE
       , YEAR(MIN(CAMPAIGN_START_DATE)) CAMPAIGN_YEAR
       , MAX(CAMPAIGN_END_DATE) CAMPAIGN_END_DATE
       , MAX(PROMOTION_EXPIRE_DATE) PROMOTION_EXPIRE_DATE
       , MAX(COALESCE(BUDGET, 0)) BUDGET
       , SUM(COALESCE(MEDIA, 0)) MEDIA
       , SUM(AUDIENCE) AUDIENCE
       , SUM(TRIPS) TRIPS
       , MAX(GRP_TRIPS) GRP_TRIPS
       , SUM(SHOPPERS) SHOPPERS
       , MAX(GRP_SHOPPERS) GRP_SHOPPERS
       , SUM(BUYERS) BUYERS
       , SUM(NTFS) NTFS
       , MAX(GRP_BUYERS) GRP_BUYERS
       , MAX(GRP_NTFS) GRP_NTFS
       , SUM(SALES) SALES
       , SUM(TEST_SALES) TEST_SALES
       , SUM(COMMISSION_EXPECTED) COMMISSION_EXPECTED
       , SUM(TEST_COMMISSION_EXPECTED) TEST_COMMISSION_EXPECTED
       , SUM(INV_NETWORK_COMMISSION) NETWORK_COMMISSION
       , SUM(INVOICED_COMMISSION) INVOICED_COMMISSION
       , SUM(CASHBACK_UNADJUSTED) CASHBACK_UNADJUSTED
       , COUNT(DISTINCT ORDER_ID) ORDERS
       , COUNT(DISTINCT APPRVD_ORDER) APPROVED_ORDERS
       , SUM(APPLIED_TIER_COMMISSION_EXPECTED) APPLIED_TIER_COMMISSION_EXPECTED
       , SUM(APPLIED_TIER_SALES) APPLIED_TIER_SALES
       , SUM(APPLIED_TIER_INVOICED_COMMISSION) APPLIED_TIER_INVOICED_COMMISSION
     FROM
       "ASSET"."SINGLE_MERCHANT_CAMPAIGN_INVOICING"
     WHERE
       1 = 1
       AND INVOICING_TYPE = 'PR-TCB-Single-Merchant-Invoicing'
       AND TEST_CONTROL_IND = 'Test'
     GROUP BY
       1,2,3,4,5,6,7,8,9,10,11,12,13
       ,14
       ,15,16, 17
   ) CP
           LEFT JOIN (
             SELECT
               DISTINCT GROUP_ID,
               DATE(MAX(END_TIMESTAMP)) END_TIMESTAMP
             FROM
               "CAMPAIGN_ASSET"."MEMBER_GROUP"
             WHERE
               TENANT = 'ebates.com'
               AND IS_TARGETSET = TRUE
               AND UPDATED_BY IN ('PR_MONITOR_BOT')
               AND GROUP_ID != 4492
             GROUP BY
               1
           ) T ON CP.GROUP_ID = T.GROUP_ID
     LEFT JOIN (
             SELECT
               DISTINCT GRA.STORE_ID
               , CP.QUOTE_NUM
               , ARRAY_COMPACT(ARRAY_AGG(DISTINCT GRA.GROUP_ID)) GROUP_ID_LIST_GRA
             FROM
               (
                 SELECT
                   DISTINCT G.STORE_ID,
                   G.GROUP_ID,
                   G.PROMOTION_ID PROMOTION_ID_,
                   G.GROUP_START_TIMESTAMP :: DATE GROUP_START_DATE,
                   G.GROUP_END_TIMESTAMP :: DATE GROUP_END_DATE
                 FROM
                   CAMPAIGN_ASSET.GROUP_RULE_ASSOCIATION G
                 WHERE
                   1 = 1
                   AND G.PROMOTION_ID IS NOT NULL
                 GROUP BY
                   1, 2, 3, 4, 5
               ) GRA
               LEFT JOIN (
                 SELECT
                   DISTINCT TENANT,
                   STORE_ID,
                   QUOTE_NUM,
                   GROUP_ID,
                   PROMOTION_ID,
                   MIN(CAMPAIGN_START_DATE) CAMPAIGN_START_DATE,
                   MAX(CAMPAIGN_END_DATE) CAMPAIGN_END_DATE
                 FROM
                   CAMPAIGN_PERFORMANCE
                 GROUP BY
                   1, 2, 3, 4, 5
               ) CP ON GRA.STORE_ID = CP.STORE_ID
               AND GRA.PROMOTION_ID_ = CP.PROMOTION_ID
             WHERE
               CP.QUOTE_NUM IS NOT NULL
             GROUP BY
               1, 2
           ) GRA ON 1 = 1
           AND CP.STORE_ID = GRA.STORE_ID
           AND CP.QUOTE_NUM = GRA.QUOTE_NUM 
         
         LEFT JOIN ASSET.PRTCB_TIERED_QUOTES_SETUP_MANUAL TQ
         ON
             CP.QUOTE_NUM = TQ.QUOTE_NUM
 WHERE
   1 = 1 
 GROUP BY
   1,2,3,4,5,6,7,8,9
 HAVING
   1 = 1
   AND MAX(COALESCE(CP.BUDGET, 0)) != 0
 ) 
 WHERE
     1 = 1
     AND (
         MEMBER_GRP_END_DATE IS NULL
         OR MEMBER_GRP_END_DATE > CURRENT_TIMESTAMP::DATE
     )
     AND (
         CURRENT_TIMESTAMP::DATE BETWEEN CAMPAIGN_START_DATE AND PROMOTION_EXPIRE_UNIQUE
     )
 GROUP BY
     1,2,3,4,5,6,7,8
     ) SELECT '' AS key, object_construct('tenant', RESULT_TABLE.tenant, 'store_id',RESULT_TABLE.store_id,'store_name',RESULT_TABLE.store_name,'tcb_deal_type',RESULT_TABLE.tcb_deal_type,'quote_quote_num',RESULT_TABLE.quote_quote_num,'is_rad',RESULT_TABLE.is_rad,'is_campaign_active',RESULT_TABLE.is_campaign_active,'group_id_list',RESULT_TABLE.group_id_list,'campaign_start_date',RESULT_TABLE.campaign_start_date,'campaign_end_date',RESULT_TABLE.campaign_end_date,'promotion_expire',RESULT_TABLE.promotion_expire,'member_grp_end_date',RESULT_TABLE.member_grp_end_date,'budget',RESULT_TABLE.budget,'ntfs',RESULT_TABLE.ntfs,'orders',RESULT_TABLE.orders,'buyers',RESULT_TABLE.buyers,'sales',RESULT_TABLE.sales,'cashback',RESULT_TABLE.cashback,'commission',RESULT_TABLE.commission,'commission_owed',RESULT_TABLE.commission_owed,'expected_commission',RESULT_TABLE.expected_commission) as value, PROMOTION_EXPIRE from RESULT_TABLE;
    `;

    const start = performance.now();
    const result = validateSnowflakeSQL(complexSQL);
    const parseTime = performance.now() - start;
    console.log(result, parseTime);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);

    // Complex SQL should validate in reasonable time (increased threshold for CI environments)
    expect(parseTime).toBeLessThan(10000); // Less than 10 seconds
  });

  it('should handle case-insensitive parsing efficiently', () => {
    const mixedCaseSQLs = [
      'select column1 from table1',
      'SELECT COLUMN1 FROM TABLE1',
      'SeLeCt CoLuMn1 FrOm TaBlE1'
    ];

    const start = performance.now();

    mixedCaseSQLs.forEach((sql) => {
      const result = parser.parse(sql);
      // First two should pass, third should fail
      if (sql === 'SeLeCt CoLuMn1 FrOm TaBlE1') {
        expect(result.errors.length).toBeGreaterThan(0);
      } else {
        expect(result.errors).toHaveLength(0);
      }
    });

    const totalTime = performance.now() - start;

    // Should complete quickly
    expect(totalTime).toBeLessThan(200); // Less than 200ms
  });

  it('should provide performance statistics', () => {
    // Parse a few SQL statements
    const sql = 'select * from table1';
    parser.parse(sql);
    parser.parse(sql);
    parser.parse('insert into table2 values (1)');

    const stats = SnowflakeSQL.getPerformanceStats();

    expect(stats.totalParses).toBe(3);
    expect(stats.averageParseTime).toBeGreaterThan(0);
    expect(typeof stats.cacheHitRate).toBe('number');
  });

  it('should handle cache size limits properly', () => {
    // Generate many unique SQL statements to test cache limits
    const sqlStatements: any[] = [];
    for (let i = 0; i < 1100; i++) {
      sqlStatements.push(`select column${i} from table${i}`);
    }

    // Parse all statements
    sqlStatements.forEach((sql) => {
      parser.parse(sql);
    });

    const cacheStats = SnowflakeSQL.getCacheStats();

    // Cache should not exceed the limit
    expect(cacheStats.size).toBeLessThanOrEqual(cacheStats.limit);

    // Performance should remain good even with cache management
    const start = performance.now();
    parser.parse('select * from test_table');
    const parseTime = performance.now() - start;

    expect(parseTime).toBeLessThan(100); // Should still be fast
  });

  it('should demonstrate batch processing performance', () => {
    const items = Array.from({ length: 1000 }, (_, i) => `select * from table${i}`);

    const start = performance.now();

    // Process in batches
    PerformanceOptimizer.batch(items, 100, (batch) => {
      batch.forEach((sql) => {
        parser.parse(sql);
      });
    });

    const totalTime = performance.now() - start;

    // Batch processing should be efficient (increased threshold for CI environments)
    expect(totalTime).toBeLessThan(10000); // Less than 10 seconds for 1000 statements

    const stats = SnowflakeSQL.getPerformanceStats();
    expect(stats.totalParses).toBe(1000);
  });
});
