// Generated from src/parser/snowflake/SnowflakeParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { Snowflake_fileContext } from './SnowflakeParser';
import { BatchContext } from './SnowflakeParser';
import { Sql_commandContext } from './SnowflakeParser';
import { Ddl_commandContext } from './SnowflakeParser';
import { Dml_commandContext } from './SnowflakeParser';
import { Insert_statementContext } from './SnowflakeParser';
import { Insert_multi_table_statementContext } from './SnowflakeParser';
import { Into_clause2Context } from './SnowflakeParser';
import { Values_listContext } from './SnowflakeParser';
import { Value_itemContext } from './SnowflakeParser';
import { Merge_statementContext } from './SnowflakeParser';
import { Merge_matchesContext } from './SnowflakeParser';
import { Merge_condContext } from './SnowflakeParser';
import { Merge_update_deleteContext } from './SnowflakeParser';
import { Merge_insertContext } from './SnowflakeParser';
import { Update_statementContext } from './SnowflakeParser';
import { Table_or_queryContext } from './SnowflakeParser';
import { Delete_statementContext } from './SnowflakeParser';
import { Values_builderContext } from './SnowflakeParser';
import { Other_commandContext } from './SnowflakeParser';
import { Begin_txnContext } from './SnowflakeParser';
import { Copy_into_tableContext } from './SnowflakeParser';
import { External_locationContext } from './SnowflakeParser';
import { FilesContext } from './SnowflakeParser';
import { File_formatContext } from './SnowflakeParser';
import { Format_nameContext } from './SnowflakeParser';
import { Format_typeContext } from './SnowflakeParser';
import { Stage_file_formatContext } from './SnowflakeParser';
import { Copy_into_locationContext } from './SnowflakeParser';
import { CommentContext } from './SnowflakeParser';
import { Function_signatureContext } from './SnowflakeParser';
import { CommitContext } from './SnowflakeParser';
import { Execute_immediateContext } from './SnowflakeParser';
import { Execute_taskContext } from './SnowflakeParser';
import { ExplainContext } from './SnowflakeParser';
import { ParallelContext } from './SnowflakeParser';
import { Get_dmlContext } from './SnowflakeParser';
import { Grant_ownershipContext } from './SnowflakeParser';
import { Grant_to_roleContext } from './SnowflakeParser';
import { Global_privilegesContext } from './SnowflakeParser';
import { Global_privilegeContext } from './SnowflakeParser';
import { Account_object_privilegesContext } from './SnowflakeParser';
import { Account_object_privilegeContext } from './SnowflakeParser';
import { Schema_privilegesContext } from './SnowflakeParser';
import { Schema_privilegeContext } from './SnowflakeParser';
import { Schema_object_privilegesContext } from './SnowflakeParser';
import { Schema_object_privilegeContext } from './SnowflakeParser';
import { Grant_to_shareContext } from './SnowflakeParser';
import { Object_privilegeContext } from './SnowflakeParser';
import { Grant_roleContext } from './SnowflakeParser';
import { Role_nameContext } from './SnowflakeParser';
import { System_defined_roleContext } from './SnowflakeParser';
import { ListContext } from './SnowflakeParser';
import { User_stageContext } from './SnowflakeParser';
import { Table_stageContext } from './SnowflakeParser';
import { Named_stageContext } from './SnowflakeParser';
import { Stage_pathContext } from './SnowflakeParser';
import { PutContext } from './SnowflakeParser';
import { RemoveContext } from './SnowflakeParser';
import { Revoke_from_roleContext } from './SnowflakeParser';
import { Revoke_from_shareContext } from './SnowflakeParser';
import { Revoke_roleContext } from './SnowflakeParser';
import { RollbackContext } from './SnowflakeParser';
import { SetContext } from './SnowflakeParser';
import { Truncate_materialized_viewContext } from './SnowflakeParser';
import { Truncate_tableContext } from './SnowflakeParser';
import { UnsetContext } from './SnowflakeParser';
import { Alter_commandContext } from './SnowflakeParser';
import { Account_paramsContext } from './SnowflakeParser';
import { Object_paramsContext } from './SnowflakeParser';
import { Default_ddl_collationContext } from './SnowflakeParser';
import { Object_propertiesContext } from './SnowflakeParser';
import { Session_paramsContext } from './SnowflakeParser';
import { Alter_accountContext } from './SnowflakeParser';
import { Enabled_true_falseContext } from './SnowflakeParser';
import { Alter_alertContext } from './SnowflakeParser';
import { Resume_suspendContext } from './SnowflakeParser';
import { Alert_set_clauseContext } from './SnowflakeParser';
import { Alert_unset_clauseContext } from './SnowflakeParser';
import { Alter_api_integrationContext } from './SnowflakeParser';
import { Api_integration_propertyContext } from './SnowflakeParser';
import { Alter_connectionContext } from './SnowflakeParser';
import { Alter_databaseContext } from './SnowflakeParser';
import { Database_propertyContext } from './SnowflakeParser';
import { Account_id_listContext } from './SnowflakeParser';
import { Alter_datasetContext } from './SnowflakeParser';
import { Alter_dynamic_tableContext } from './SnowflakeParser';
import { Id_listContext } from './SnowflakeParser';
import { Alter_external_tableContext } from './SnowflakeParser';
import { Ignore_edition_checkContext } from './SnowflakeParser';
import { Replication_scheduleContext } from './SnowflakeParser';
import { Db_name_listContext } from './SnowflakeParser';
import { Share_name_listContext } from './SnowflakeParser';
import { Full_acct_listContext } from './SnowflakeParser';
import { Alter_failover_groupContext } from './SnowflakeParser';
import { Alter_file_formatContext } from './SnowflakeParser';
import { Alter_functionContext } from './SnowflakeParser';
import { Alter_function_signatureContext } from './SnowflakeParser';
import { Data_type_listContext } from './SnowflakeParser';
import { Alter_git_repositoryContext } from './SnowflakeParser';
import { Alter_git_set_optsContext } from './SnowflakeParser';
import { Alter_git_unset_optsContext } from './SnowflakeParser';
import { Alter_masking_policyContext } from './SnowflakeParser';
import { Alter_materialized_viewContext } from './SnowflakeParser';
import { Alter_network_policyContext } from './SnowflakeParser';
import { Alter_notification_integrationContext } from './SnowflakeParser';
import { Alter_pipeContext } from './SnowflakeParser';
import { Alter_procedureContext } from './SnowflakeParser';
import { Alter_replication_groupContext } from './SnowflakeParser';
import { Credit_quotaContext } from './SnowflakeParser';
import { FrequencyContext } from './SnowflakeParser';
import { Notify_usersContext } from './SnowflakeParser';
import { TriggerDefinitionContext } from './SnowflakeParser';
import { Alter_resource_monitorContext } from './SnowflakeParser';
import { Alter_roleContext } from './SnowflakeParser';
import { Alter_row_access_policyContext } from './SnowflakeParser';
import { Alter_schemaContext } from './SnowflakeParser';
import { Schema_propertyContext } from './SnowflakeParser';
import { Alter_sequenceContext } from './SnowflakeParser';
import { Alter_secretContext } from './SnowflakeParser';
import { Secret_optsContext } from './SnowflakeParser';
import { Secret_set_optsContext } from './SnowflakeParser';
import { Secret_oauth_client_creds_optsContext } from './SnowflakeParser';
import { Secret_oauth_auth_code_optsContext } from './SnowflakeParser';
import { Secret_api_auth_optsContext } from './SnowflakeParser';
import { Secret_basic_auth_optsContext } from './SnowflakeParser';
import { Secret_generic_string_optsContext } from './SnowflakeParser';
import { Alter_security_integration_external_oauthContext } from './SnowflakeParser';
import { Security_integration_external_oauth_propertyContext } from './SnowflakeParser';
import { Alter_security_integration_snowflake_oauthContext } from './SnowflakeParser';
import { Security_integration_snowflake_oauth_propertyContext } from './SnowflakeParser';
import { Alter_security_integration_saml2Context } from './SnowflakeParser';
import { Alter_security_integration_scimContext } from './SnowflakeParser';
import { Security_integration_scim_propertyContext } from './SnowflakeParser';
import { Alter_sessionContext } from './SnowflakeParser';
import { Alter_session_policyContext } from './SnowflakeParser';
import { Alter_password_policyContext } from './SnowflakeParser';
import { Alter_shareContext } from './SnowflakeParser';
import { Alter_storage_integrationContext } from './SnowflakeParser';
import { Alter_streamContext } from './SnowflakeParser';
import { Alter_tableContext } from './SnowflakeParser';
import { Rls_operationsContext } from './SnowflakeParser';
import { Clustering_actionContext } from './SnowflakeParser';
import { Table_column_actionContext } from './SnowflakeParser';
import { Alter_column_clauseContext } from './SnowflakeParser';
import { Inline_constraintContext } from './SnowflakeParser';
import { Enforced_not_enforcedContext } from './SnowflakeParser';
import { Deferrable_not_deferrableContext } from './SnowflakeParser';
import { Initially_deferred_or_immediateContext } from './SnowflakeParser';
import { Common_constraint_propertiesContext } from './SnowflakeParser';
import { On_updateContext } from './SnowflakeParser';
import { On_deleteContext } from './SnowflakeParser';
import { Foreign_key_matchContext } from './SnowflakeParser';
import { On_actionContext } from './SnowflakeParser';
import { Constraint_propertiesContext } from './SnowflakeParser';
import { Ext_table_column_actionContext } from './SnowflakeParser';
import { Constraint_actionContext } from './SnowflakeParser';
import { Search_optimization_actionContext } from './SnowflakeParser';
import { Search_method_with_targetContext } from './SnowflakeParser';
import { Alter_table_alter_columnContext } from './SnowflakeParser';
import { Alter_column_decl_listContext } from './SnowflakeParser';
import { Alter_column_declContext } from './SnowflakeParser';
import { Alter_column_optsContext } from './SnowflakeParser';
import { Column_set_tagsContext } from './SnowflakeParser';
import { Column_unset_tagsContext } from './SnowflakeParser';
import { Alter_tagContext } from './SnowflakeParser';
import { Alter_taskContext } from './SnowflakeParser';
import { Alter_userContext } from './SnowflakeParser';
import { Alter_viewContext } from './SnowflakeParser';
import { Alter_modifyContext } from './SnowflakeParser';
import { Alter_warehouseContext } from './SnowflakeParser';
import { Alter_connection_optsContext } from './SnowflakeParser';
import { Alter_user_optsContext } from './SnowflakeParser';
import { Alter_tag_optsContext } from './SnowflakeParser';
import { Alter_network_policy_optsContext } from './SnowflakeParser';
import { Alter_warehouse_optsContext } from './SnowflakeParser';
import { Alter_account_optsContext } from './SnowflakeParser';
import { Set_tagsContext } from './SnowflakeParser';
import { Tag_decl_listContext } from './SnowflakeParser';
import { Unset_tagsContext } from './SnowflakeParser';
import { Tag_listContext } from './SnowflakeParser';
import { Create_commandContext } from './SnowflakeParser';
import { Create_accountContext } from './SnowflakeParser';
import { Create_alertContext } from './SnowflakeParser';
import { Alert_conditionContext } from './SnowflakeParser';
import { Alert_actionContext } from './SnowflakeParser';
import { Create_api_integrationContext } from './SnowflakeParser';
import { Create_object_cloneContext } from './SnowflakeParser';
import { Create_connectionContext } from './SnowflakeParser';
import { Create_databaseContext } from './SnowflakeParser';
import { Clone_at_beforeContext } from './SnowflakeParser';
import { At_before1Context } from './SnowflakeParser';
import { Header_declContext } from './SnowflakeParser';
import { Compression_typeContext } from './SnowflakeParser';
import { CompressionContext } from './SnowflakeParser';
import { Create_datasetContext } from './SnowflakeParser';
import { Create_dynamic_tableContext } from './SnowflakeParser';
import { Dynamic_table_paramsContext } from './SnowflakeParser';
import { Dynamic_table_settable_paramsContext } from './SnowflakeParser';
import { Dynamic_table_unsettable_paramsContext } from './SnowflakeParser';
import { Data_retention_paramsContext } from './SnowflakeParser';
import { Set_data_retention_paramsContext } from './SnowflakeParser';
import { Create_event_tableContext } from './SnowflakeParser';
import { Create_external_functionContext } from './SnowflakeParser';
import { Create_external_tableContext } from './SnowflakeParser';
import { External_table_column_declContext } from './SnowflakeParser';
import { External_table_column_decl_listContext } from './SnowflakeParser';
import { Full_acctContext } from './SnowflakeParser';
import { Integration_type_nameContext } from './SnowflakeParser';
import { Create_failover_groupContext } from './SnowflakeParser';
import { Type_fileformatContext } from './SnowflakeParser';
import { Create_file_formatContext } from './SnowflakeParser';
import { Arg_declContext } from './SnowflakeParser';
import { Arg_default_value_clauseContext } from './SnowflakeParser';
import { Col_declContext } from './SnowflakeParser';
import { Virtual_column_declContext } from './SnowflakeParser';
import { Function_definitionContext } from './SnowflakeParser';
import { Create_functionContext } from './SnowflakeParser';
import { Create_git_repositoryContext } from './SnowflakeParser';
import { Create_git_optsContext } from './SnowflakeParser';
import { Create_managed_accountContext } from './SnowflakeParser';
import { Create_masking_policyContext } from './SnowflakeParser';
import { Tag_declContext } from './SnowflakeParser';
import { Column_list_in_parenthesesContext } from './SnowflakeParser';
import { Create_materialized_viewContext } from './SnowflakeParser';
import { Create_network_policyContext } from './SnowflakeParser';
import { Cloud_provider_params_autoContext } from './SnowflakeParser';
import { Cloud_provider_params_pushContext } from './SnowflakeParser';
import { Create_notification_integrationContext } from './SnowflakeParser';
import { Create_pipeContext } from './SnowflakeParser';
import { Caller_ownerContext } from './SnowflakeParser';
import { Executa_asContext } from './SnowflakeParser';
import { Procedure_definitionContext } from './SnowflakeParser';
import { Not_nullContext } from './SnowflakeParser';
import { Create_procedureContext } from './SnowflakeParser';
import { Create_replication_groupContext } from './SnowflakeParser';
import { Create_resource_monitorContext } from './SnowflakeParser';
import { Create_roleContext } from './SnowflakeParser';
import { Create_row_access_policyContext } from './SnowflakeParser';
import { Create_schemaContext } from './SnowflakeParser';
import { Create_secretContext } from './SnowflakeParser';
import { Create_security_integration_external_oauthContext } from './SnowflakeParser';
import { Implicit_noneContext } from './SnowflakeParser';
import { Create_security_integration_snowflake_oauthContext } from './SnowflakeParser';
import { Create_security_integration_saml2Context } from './SnowflakeParser';
import { Create_security_integration_scimContext } from './SnowflakeParser';
import { Network_policyContext } from './SnowflakeParser';
import { Partner_applicationContext } from './SnowflakeParser';
import { Start_withContext } from './SnowflakeParser';
import { Increment_byContext } from './SnowflakeParser';
import { Create_sequenceContext } from './SnowflakeParser';
import { Create_session_policyContext } from './SnowflakeParser';
import { Session_policy_paramsContext } from './SnowflakeParser';
import { Session_policy_param_nameContext } from './SnowflakeParser';
import { Create_password_policyContext } from './SnowflakeParser';
import { Password_policy_paramsContext } from './SnowflakeParser';
import { Password_policy_param_nameContext } from './SnowflakeParser';
import { Create_shareContext } from './SnowflakeParser';
import { CharacterContext } from './SnowflakeParser';
import { Format_type_optionsContext } from './SnowflakeParser';
import { Copy_optionsContext } from './SnowflakeParser';
import { Stage_encryption_opts_internalContext } from './SnowflakeParser';
import { Stage_typeContext } from './SnowflakeParser';
import { Stage_master_keyContext } from './SnowflakeParser';
import { Stage_kms_keyContext } from './SnowflakeParser';
import { Stage_encryption_opts_awsContext } from './SnowflakeParser';
import { Aws_tokenContext } from './SnowflakeParser';
import { Aws_key_idContext } from './SnowflakeParser';
import { Aws_secret_keyContext } from './SnowflakeParser';
import { Aws_roleContext } from './SnowflakeParser';
import { Azure_encryption_valueContext } from './SnowflakeParser';
import { Stage_encryption_opts_azContext } from './SnowflakeParser';
import { Storage_integration_eq_idContext } from './SnowflakeParser';
import { Az_credential_or_storage_integrationContext } from './SnowflakeParser';
import { Gcp_encryption_valueContext } from './SnowflakeParser';
import { Stage_encryption_opts_gcpContext } from './SnowflakeParser';
import { Aws_credential_or_storage_integrationContext } from './SnowflakeParser';
import { External_stage_paramsContext } from './SnowflakeParser';
import { True_falseContext } from './SnowflakeParser';
import { EnableContext } from './SnowflakeParser';
import { Refresh_on_createContext } from './SnowflakeParser';
import { Auto_refreshContext } from './SnowflakeParser';
import { Notification_integrationContext } from './SnowflakeParser';
import { Directory_table_internal_paramsContext } from './SnowflakeParser';
import { Directory_table_external_paramsContext } from './SnowflakeParser';
import { Create_stageContext } from './SnowflakeParser';
import { Alter_stageContext } from './SnowflakeParser';
import { Drop_stageContext } from './SnowflakeParser';
import { Describe_stageContext } from './SnowflakeParser';
import { Show_stagesContext } from './SnowflakeParser';
import { Cloud_provider_paramsContext } from './SnowflakeParser';
import { Cloud_provider_params2Context } from './SnowflakeParser';
import { Cloud_provider_params3Context } from './SnowflakeParser';
import { Create_storage_integrationContext } from './SnowflakeParser';
import { Copy_grantsContext } from './SnowflakeParser';
import { Append_onlyContext } from './SnowflakeParser';
import { Insert_onlyContext } from './SnowflakeParser';
import { Show_initial_rowsContext } from './SnowflakeParser';
import { Stream_timeContext } from './SnowflakeParser';
import { Create_streamContext } from './SnowflakeParser';
import { TemporaryContext } from './SnowflakeParser';
import { Table_typeContext } from './SnowflakeParser';
import { With_tagsContext } from './SnowflakeParser';
import { With_row_access_policyContext } from './SnowflakeParser';
import { Cluster_byContext } from './SnowflakeParser';
import { Change_trackingContext } from './SnowflakeParser';
import { With_masking_policyContext } from './SnowflakeParser';
import { CollateContext } from './SnowflakeParser';
import { Order_noorderContext } from './SnowflakeParser';
import { Default_valueContext } from './SnowflakeParser';
import { Foreign_keyContext } from './SnowflakeParser';
import { Primary_keyContext } from './SnowflakeParser';
import { Out_of_line_constraintContext } from './SnowflakeParser';
import { Full_col_declContext } from './SnowflakeParser';
import { Materialized_col_declContext } from './SnowflakeParser';
import { Materialized_col_decl_listContext } from './SnowflakeParser';
import { Column_decl_itemContext } from './SnowflakeParser';
import { Column_decl_item_listContext } from './SnowflakeParser';
import { Create_tableContext } from './SnowflakeParser';
import { Column_decl_item_list_parenContext } from './SnowflakeParser';
import { Create_table_clauseContext } from './SnowflakeParser';
import { Create_table_as_selectContext } from './SnowflakeParser';
import { Create_table_likeContext } from './SnowflakeParser';
import { Create_tagContext } from './SnowflakeParser';
import { Tag_allowed_valuesContext } from './SnowflakeParser';
import { Session_parameterContext } from './SnowflakeParser';
import { Session_parameter_listContext } from './SnowflakeParser';
import { Session_params_listContext } from './SnowflakeParser';
import { Create_taskContext } from './SnowflakeParser';
import { Task_parametersContext } from './SnowflakeParser';
import { Task_computeContext } from './SnowflakeParser';
import { Task_scheduleContext } from './SnowflakeParser';
import { Task_timeoutContext } from './SnowflakeParser';
import { Task_suspend_after_failure_numberContext } from './SnowflakeParser';
import { Task_error_integrationContext } from './SnowflakeParser';
import { Task_overlapContext } from './SnowflakeParser';
import { SqlContext } from './SnowflakeParser';
import { CallContext } from './SnowflakeParser';
import { Create_userContext } from './SnowflakeParser';
import { View_colContext } from './SnowflakeParser';
import { Create_viewContext } from './SnowflakeParser';
import { Create_warehouseContext } from './SnowflakeParser';
import { Wh_common_sizeContext } from './SnowflakeParser';
import { Wh_extra_sizeContext } from './SnowflakeParser';
import { Wh_propertiesContext } from './SnowflakeParser';
import { Wh_paramsContext } from './SnowflakeParser';
import { Trigger_definitionContext } from './SnowflakeParser';
import { Object_type_nameContext } from './SnowflakeParser';
import { Object_type_pluralContext } from './SnowflakeParser';
import { Drop_commandContext } from './SnowflakeParser';
import { Drop_objectContext } from './SnowflakeParser';
import { Drop_alertContext } from './SnowflakeParser';
import { Drop_connectionContext } from './SnowflakeParser';
import { Drop_databaseContext } from './SnowflakeParser';
import { Drop_dynamic_tableContext } from './SnowflakeParser';
import { Drop_external_tableContext } from './SnowflakeParser';
import { Drop_failover_groupContext } from './SnowflakeParser';
import { Drop_file_formatContext } from './SnowflakeParser';
import { Drop_functionContext } from './SnowflakeParser';
import { Drop_git_repositoryContext } from './SnowflakeParser';
import { Drop_integrationContext } from './SnowflakeParser';
import { Drop_managed_accountContext } from './SnowflakeParser';
import { Drop_masking_policyContext } from './SnowflakeParser';
import { Drop_materialized_viewContext } from './SnowflakeParser';
import { Drop_network_policyContext } from './SnowflakeParser';
import { Drop_pipeContext } from './SnowflakeParser';
import { Drop_procedureContext } from './SnowflakeParser';
import { Drop_replication_groupContext } from './SnowflakeParser';
import { Drop_resource_monitorContext } from './SnowflakeParser';
import { Drop_roleContext } from './SnowflakeParser';
import { Drop_row_access_policyContext } from './SnowflakeParser';
import { Drop_schemaContext } from './SnowflakeParser';
import { Drop_secretContext } from './SnowflakeParser';
import { Drop_sequenceContext } from './SnowflakeParser';
import { Drop_session_policyContext } from './SnowflakeParser';
import { Drop_password_policyContext } from './SnowflakeParser';
import { Drop_shareContext } from './SnowflakeParser';
import { Drop_streamContext } from './SnowflakeParser';
import { Drop_tableContext } from './SnowflakeParser';
import { Drop_tagContext } from './SnowflakeParser';
import { Drop_taskContext } from './SnowflakeParser';
import { Drop_userContext } from './SnowflakeParser';
import { Drop_viewContext } from './SnowflakeParser';
import { Drop_warehouseContext } from './SnowflakeParser';
import { Cascade_restrictContext } from './SnowflakeParser';
import { Arg_typesContext } from './SnowflakeParser';
import { Undrop_commandContext } from './SnowflakeParser';
import { Undrop_databaseContext } from './SnowflakeParser';
import { Undrop_schemaContext } from './SnowflakeParser';
import { Undrop_tableContext } from './SnowflakeParser';
import { Undrop_tagContext } from './SnowflakeParser';
import { Use_commandContext } from './SnowflakeParser';
import { Use_databaseContext } from './SnowflakeParser';
import { Use_roleContext } from './SnowflakeParser';
import { Use_schemaContext } from './SnowflakeParser';
import { Use_secondary_rolesContext } from './SnowflakeParser';
import { Use_warehouseContext } from './SnowflakeParser';
import { Comment_clauseContext } from './SnowflakeParser';
import { Inline_comment_clauseContext } from './SnowflakeParser';
import { If_suspendedContext } from './SnowflakeParser';
import { If_existsContext } from './SnowflakeParser';
import { If_not_existsContext } from './SnowflakeParser';
import { Or_replaceContext } from './SnowflakeParser';
import { Or_alterContext } from './SnowflakeParser';
import { DescribeContext } from './SnowflakeParser';
import { Describe_commandContext } from './SnowflakeParser';
import { Describe_alertContext } from './SnowflakeParser';
import { Describe_databaseContext } from './SnowflakeParser';
import { Describe_dynamic_tableContext } from './SnowflakeParser';
import { Describe_event_tableContext } from './SnowflakeParser';
import { Describe_external_tableContext } from './SnowflakeParser';
import { Describe_file_formatContext } from './SnowflakeParser';
import { Describe_functionContext } from './SnowflakeParser';
import { Describe_git_repositoryContext } from './SnowflakeParser';
import { Describe_integrationContext } from './SnowflakeParser';
import { Describe_masking_policyContext } from './SnowflakeParser';
import { Describe_materialized_viewContext } from './SnowflakeParser';
import { Describe_network_policyContext } from './SnowflakeParser';
import { Describe_pipeContext } from './SnowflakeParser';
import { Describe_procedureContext } from './SnowflakeParser';
import { Describe_resultContext } from './SnowflakeParser';
import { Describe_row_access_policyContext } from './SnowflakeParser';
import { Describe_schemaContext } from './SnowflakeParser';
import { Describe_search_optimizationContext } from './SnowflakeParser';
import { Describe_sequenceContext } from './SnowflakeParser';
import { Describe_session_policyContext } from './SnowflakeParser';
import { Describe_password_policyContext } from './SnowflakeParser';
import { Describe_shareContext } from './SnowflakeParser';
import { Describe_streamContext } from './SnowflakeParser';
import { Describe_tableContext } from './SnowflakeParser';
import { Describe_taskContext } from './SnowflakeParser';
import { Describe_transactionContext } from './SnowflakeParser';
import { Describe_userContext } from './SnowflakeParser';
import { Describe_viewContext } from './SnowflakeParser';
import { Describe_warehouseContext } from './SnowflakeParser';
import { Show_commandContext } from './SnowflakeParser';
import { Show_alertsContext } from './SnowflakeParser';
import { Show_channelsContext } from './SnowflakeParser';
import { Show_columnsContext } from './SnowflakeParser';
import { Show_connectionsContext } from './SnowflakeParser';
import { Starts_withContext } from './SnowflakeParser';
import { Limit_rowsContext } from './SnowflakeParser';
import { Show_databasesContext } from './SnowflakeParser';
import { Show_databases_in_failover_groupContext } from './SnowflakeParser';
import { Show_databases_in_replication_groupContext } from './SnowflakeParser';
import { Show_datasetsContext } from './SnowflakeParser';
import { Show_delegated_authorizationsContext } from './SnowflakeParser';
import { Show_dynamic_tablesContext } from './SnowflakeParser';
import { Show_event_tablesContext } from './SnowflakeParser';
import { Show_external_functionsContext } from './SnowflakeParser';
import { Show_external_tablesContext } from './SnowflakeParser';
import { Show_failover_groupsContext } from './SnowflakeParser';
import { Show_file_formatsContext } from './SnowflakeParser';
import { Show_functionsContext } from './SnowflakeParser';
import { Show_git_branchesContext } from './SnowflakeParser';
import { Show_git_repositoriesContext } from './SnowflakeParser';
import { Show_git_tagsContext } from './SnowflakeParser';
import { Show_global_accountsContext } from './SnowflakeParser';
import { Show_grantsContext } from './SnowflakeParser';
import { Show_grants_optsContext } from './SnowflakeParser';
import { Show_integrationsContext } from './SnowflakeParser';
import { Show_locksContext } from './SnowflakeParser';
import { Show_managed_accountsContext } from './SnowflakeParser';
import { Show_masking_policiesContext } from './SnowflakeParser';
import { In_objContext } from './SnowflakeParser';
import { In_obj_2Context } from './SnowflakeParser';
import { Show_materialized_viewsContext } from './SnowflakeParser';
import { Show_network_policiesContext } from './SnowflakeParser';
import { Show_objectsContext } from './SnowflakeParser';
import { Show_organization_accountsContext } from './SnowflakeParser';
import { In_forContext } from './SnowflakeParser';
import { Show_parametersContext } from './SnowflakeParser';
import { Show_pipesContext } from './SnowflakeParser';
import { Show_primary_keysContext } from './SnowflakeParser';
import { Show_proceduresContext } from './SnowflakeParser';
import { Show_regionsContext } from './SnowflakeParser';
import { Show_replication_accountsContext } from './SnowflakeParser';
import { Show_replication_databasesContext } from './SnowflakeParser';
import { Show_replication_groupsContext } from './SnowflakeParser';
import { Show_resource_monitorsContext } from './SnowflakeParser';
import { Show_rolesContext } from './SnowflakeParser';
import { Show_row_access_policiesContext } from './SnowflakeParser';
import { Show_schemasContext } from './SnowflakeParser';
import { Show_secretsContext } from './SnowflakeParser';
import { Show_sequencesContext } from './SnowflakeParser';
import { Show_session_policiesContext } from './SnowflakeParser';
import { Show_password_policiesContext } from './SnowflakeParser';
import { Show_sharesContext } from './SnowflakeParser';
import { Show_shares_in_failover_groupContext } from './SnowflakeParser';
import { Show_shares_in_replication_groupContext } from './SnowflakeParser';
import { Show_streamsContext } from './SnowflakeParser';
import { Show_tablesContext } from './SnowflakeParser';
import { Show_tagsContext } from './SnowflakeParser';
import { Show_tasksContext } from './SnowflakeParser';
import { Show_transactionsContext } from './SnowflakeParser';
import { Show_user_functionsContext } from './SnowflakeParser';
import { Show_usersContext } from './SnowflakeParser';
import { Show_variablesContext } from './SnowflakeParser';
import { Show_versions_in_datasetContext } from './SnowflakeParser';
import { Show_viewsContext } from './SnowflakeParser';
import { Show_warehousesContext } from './SnowflakeParser';
import { Like_patternContext } from './SnowflakeParser';
import { Account_identifierContext } from './SnowflakeParser';
import { Schema_nameContext } from './SnowflakeParser';
import { Object_typeContext } from './SnowflakeParser';
import { Object_type_listContext } from './SnowflakeParser';
import { Tag_valueContext } from './SnowflakeParser';
import { Arg_data_typeContext } from './SnowflakeParser';
import { Arg_nameContext } from './SnowflakeParser';
import { Param_nameContext } from './SnowflakeParser';
import { Region_group_idContext } from './SnowflakeParser';
import { Snowflake_region_idContext } from './SnowflakeParser';
import { StringContext } from './SnowflakeParser';
import { String_listContext } from './SnowflakeParser';
import { Id_fnContext } from './SnowflakeParser';
import { Id_Context } from './SnowflakeParser';
import { KeywordContext } from './SnowflakeParser';
import { Non_reserved_wordsContext } from './SnowflakeParser';
import { Builtin_functionContext } from './SnowflakeParser';
import { Unary_or_binary_builtin_functionContext } from './SnowflakeParser';
import { Binary_builtin_functionContext } from './SnowflakeParser';
import { Binary_or_ternary_builtin_functionContext } from './SnowflakeParser';
import { Ternary_builtin_functionContext } from './SnowflakeParser';
import { List_functionContext } from './SnowflakeParser';
import { PatternContext } from './SnowflakeParser';
import { Column_nameContext } from './SnowflakeParser';
import { Column_listContext } from './SnowflakeParser';
import { Column_list_with_commentContext } from './SnowflakeParser';
import { Object_nameContext } from './SnowflakeParser';
import { Object_name_or_identifierContext } from './SnowflakeParser';
import { NumContext } from './SnowflakeParser';
import { Expr_listContext } from './SnowflakeParser';
import { Expr_list_sortedContext } from './SnowflakeParser';
import { ExprContext } from './SnowflakeParser';
import { Iff_exprContext } from './SnowflakeParser';
import { Trim_expressionContext } from './SnowflakeParser';
import { Try_cast_exprContext } from './SnowflakeParser';
import { Cast_exprContext } from './SnowflakeParser';
import { Json_literalContext } from './SnowflakeParser';
import { Kv_pairContext } from './SnowflakeParser';
import { ValueContext } from './SnowflakeParser';
import { Arr_literalContext } from './SnowflakeParser';
import { Data_type_sizeContext } from './SnowflakeParser';
import { Data_typeContext } from './SnowflakeParser';
import { Primitive_expressionContext } from './SnowflakeParser';
import { Order_by_exprContext } from './SnowflakeParser';
import { Asc_descContext } from './SnowflakeParser';
import { Over_clauseContext } from './SnowflakeParser';
import { Function_callContext } from './SnowflakeParser';
import { Param_assoc_listContext } from './SnowflakeParser';
import { Param_assocContext } from './SnowflakeParser';
import { Ignore_or_repect_nullsContext } from './SnowflakeParser';
import { Ranking_windowed_functionContext } from './SnowflakeParser';
import { Aggregate_functionContext } from './SnowflakeParser';
import { LiteralContext } from './SnowflakeParser';
import { SignContext } from './SnowflakeParser';
import { Full_column_nameContext } from './SnowflakeParser';
import { Bracket_expressionContext } from './SnowflakeParser';
import { Case_expressionContext } from './SnowflakeParser';
import { Switch_search_condition_sectionContext } from './SnowflakeParser';
import { Switch_sectionContext } from './SnowflakeParser';
import { Query_statementContext } from './SnowflakeParser';
import { With_expressionContext } from './SnowflakeParser';
import { Common_table_expressionContext } from './SnowflakeParser';
import { Select_statementContext } from './SnowflakeParser';
import { Set_operatorsContext } from './SnowflakeParser';
import { By_nameContext } from './SnowflakeParser';
import { Select_statement_in_parenthesesContext } from './SnowflakeParser';
import { Select_optional_clausesContext } from './SnowflakeParser';
import { Select_clauseContext } from './SnowflakeParser';
import { Select_top_clauseContext } from './SnowflakeParser';
import { Select_list_no_topContext } from './SnowflakeParser';
import { Select_list_topContext } from './SnowflakeParser';
import { Select_listContext } from './SnowflakeParser';
import { Select_list_elemContext } from './SnowflakeParser';
import { Column_elem_starContext } from './SnowflakeParser';
import { Column_elemContext } from './SnowflakeParser';
import { Object_name_or_aliasContext } from './SnowflakeParser';
import { Exclude_clauseContext } from './SnowflakeParser';
import { As_aliasContext } from './SnowflakeParser';
import { Expression_elemContext } from './SnowflakeParser';
import { Column_positionContext } from './SnowflakeParser';
import { All_distinctContext } from './SnowflakeParser';
import { Top_clauseContext } from './SnowflakeParser';
import { Into_clauseContext } from './SnowflakeParser';
import { Var_listContext } from './SnowflakeParser';
import { VarContext } from './SnowflakeParser';
import { From_clauseContext } from './SnowflakeParser';
import { Table_sourcesContext } from './SnowflakeParser';
import { Table_sourceContext } from './SnowflakeParser';
import { Table_source_item_joinedContext } from './SnowflakeParser';
import { Object_refContext } from './SnowflakeParser';
import { Flatten_table_optionContext } from './SnowflakeParser';
import { Flatten_tableContext } from './SnowflakeParser';
import { Splited_tableContext } from './SnowflakeParser';
import { Prior_listContext } from './SnowflakeParser';
import { Prior_itemContext } from './SnowflakeParser';
import { Outer_joinContext } from './SnowflakeParser';
import { Join_typeContext } from './SnowflakeParser';
import { Join_clauseContext } from './SnowflakeParser';
import { At_beforeContext } from './SnowflakeParser';
import { EndContext } from './SnowflakeParser';
import { ChangesContext } from './SnowflakeParser';
import { Default_append_onlyContext } from './SnowflakeParser';
import { Partition_byContext } from './SnowflakeParser';
import { AliasContext } from './SnowflakeParser';
import { Expr_alias_listContext } from './SnowflakeParser';
import { MeasuresContext } from './SnowflakeParser';
import { Match_optsContext } from './SnowflakeParser';
import { Row_matchContext } from './SnowflakeParser';
import { First_lastContext } from './SnowflakeParser';
import { SymbolContext } from './SnowflakeParser';
import { After_matchContext } from './SnowflakeParser';
import { Symbol_listContext } from './SnowflakeParser';
import { DefineContext } from './SnowflakeParser';
import { Match_recognizeContext } from './SnowflakeParser';
import { Pivot_unpivotContext } from './SnowflakeParser';
import { Column_alias_list_in_bracketsContext } from './SnowflakeParser';
import { Expr_list_in_parenthesesContext } from './SnowflakeParser';
import { Values_tableContext } from './SnowflakeParser';
import { Values_table_bodyContext } from './SnowflakeParser';
import { Sample_methodContext } from './SnowflakeParser';
import { Repeatable_seedContext } from './SnowflakeParser';
import { Sample_optsContext } from './SnowflakeParser';
import { SampleContext } from './SnowflakeParser';
import { Search_conditionContext } from './SnowflakeParser';
import { Comparison_operatorContext } from './SnowflakeParser';
import { Null_not_nullContext } from './SnowflakeParser';
import { Not_distinct_fromContext } from './SnowflakeParser';
import { SubqueryContext } from './SnowflakeParser';
import { PredicateContext } from './SnowflakeParser';
import { Where_clauseContext } from './SnowflakeParser';
import { Group_by_elemContext } from './SnowflakeParser';
import { Group_by_listContext } from './SnowflakeParser';
import { Group_by_clauseContext } from './SnowflakeParser';
import { Having_clauseContext } from './SnowflakeParser';
import { Qualify_clauseContext } from './SnowflakeParser';
import { Order_itemContext } from './SnowflakeParser';
import { Order_by_clauseContext } from './SnowflakeParser';
import { Row_rowsContext } from './SnowflakeParser';
import { First_nextContext } from './SnowflakeParser';
import { Limit_clauseContext } from './SnowflakeParser';
import { Round_modeContext } from './SnowflakeParser';
import { Round_exprContext } from './SnowflakeParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SnowflakeParser`.
 */
export interface SnowflakeParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `SnowflakeParser.snowflake_file`.
   * @param ctx the parse tree
   */
  enterSnowflake_file?: (ctx: Snowflake_fileContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.snowflake_file`.
   * @param ctx the parse tree
   */
  exitSnowflake_file?: (ctx: Snowflake_fileContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.batch`.
   * @param ctx the parse tree
   */
  enterBatch?: (ctx: BatchContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.batch`.
   * @param ctx the parse tree
   */
  exitBatch?: (ctx: BatchContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.sql_command`.
   * @param ctx the parse tree
   */
  enterSql_command?: (ctx: Sql_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.sql_command`.
   * @param ctx the parse tree
   */
  exitSql_command?: (ctx: Sql_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.ddl_command`.
   * @param ctx the parse tree
   */
  enterDdl_command?: (ctx: Ddl_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.ddl_command`.
   * @param ctx the parse tree
   */
  exitDdl_command?: (ctx: Ddl_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.dml_command`.
   * @param ctx the parse tree
   */
  enterDml_command?: (ctx: Dml_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.dml_command`.
   * @param ctx the parse tree
   */
  exitDml_command?: (ctx: Dml_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.insert_statement`.
   * @param ctx the parse tree
   */
  enterInsert_statement?: (ctx: Insert_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.insert_statement`.
   * @param ctx the parse tree
   */
  exitInsert_statement?: (ctx: Insert_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.insert_multi_table_statement`.
   * @param ctx the parse tree
   */
  enterInsert_multi_table_statement?: (ctx: Insert_multi_table_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.insert_multi_table_statement`.
   * @param ctx the parse tree
   */
  exitInsert_multi_table_statement?: (ctx: Insert_multi_table_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.into_clause2`.
   * @param ctx the parse tree
   */
  enterInto_clause2?: (ctx: Into_clause2Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.into_clause2`.
   * @param ctx the parse tree
   */
  exitInto_clause2?: (ctx: Into_clause2Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.values_list`.
   * @param ctx the parse tree
   */
  enterValues_list?: (ctx: Values_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.values_list`.
   * @param ctx the parse tree
   */
  exitValues_list?: (ctx: Values_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.value_item`.
   * @param ctx the parse tree
   */
  enterValue_item?: (ctx: Value_itemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.value_item`.
   * @param ctx the parse tree
   */
  exitValue_item?: (ctx: Value_itemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.merge_statement`.
   * @param ctx the parse tree
   */
  enterMerge_statement?: (ctx: Merge_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.merge_statement`.
   * @param ctx the parse tree
   */
  exitMerge_statement?: (ctx: Merge_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.merge_matches`.
   * @param ctx the parse tree
   */
  enterMerge_matches?: (ctx: Merge_matchesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.merge_matches`.
   * @param ctx the parse tree
   */
  exitMerge_matches?: (ctx: Merge_matchesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.merge_cond`.
   * @param ctx the parse tree
   */
  enterMerge_cond?: (ctx: Merge_condContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.merge_cond`.
   * @param ctx the parse tree
   */
  exitMerge_cond?: (ctx: Merge_condContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.merge_update_delete`.
   * @param ctx the parse tree
   */
  enterMerge_update_delete?: (ctx: Merge_update_deleteContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.merge_update_delete`.
   * @param ctx the parse tree
   */
  exitMerge_update_delete?: (ctx: Merge_update_deleteContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.merge_insert`.
   * @param ctx the parse tree
   */
  enterMerge_insert?: (ctx: Merge_insertContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.merge_insert`.
   * @param ctx the parse tree
   */
  exitMerge_insert?: (ctx: Merge_insertContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.update_statement`.
   * @param ctx the parse tree
   */
  enterUpdate_statement?: (ctx: Update_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.update_statement`.
   * @param ctx the parse tree
   */
  exitUpdate_statement?: (ctx: Update_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_or_query`.
   * @param ctx the parse tree
   */
  enterTable_or_query?: (ctx: Table_or_queryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_or_query`.
   * @param ctx the parse tree
   */
  exitTable_or_query?: (ctx: Table_or_queryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.delete_statement`.
   * @param ctx the parse tree
   */
  enterDelete_statement?: (ctx: Delete_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.delete_statement`.
   * @param ctx the parse tree
   */
  exitDelete_statement?: (ctx: Delete_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.values_builder`.
   * @param ctx the parse tree
   */
  enterValues_builder?: (ctx: Values_builderContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.values_builder`.
   * @param ctx the parse tree
   */
  exitValues_builder?: (ctx: Values_builderContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.other_command`.
   * @param ctx the parse tree
   */
  enterOther_command?: (ctx: Other_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.other_command`.
   * @param ctx the parse tree
   */
  exitOther_command?: (ctx: Other_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.begin_txn`.
   * @param ctx the parse tree
   */
  enterBegin_txn?: (ctx: Begin_txnContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.begin_txn`.
   * @param ctx the parse tree
   */
  exitBegin_txn?: (ctx: Begin_txnContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.copy_into_table`.
   * @param ctx the parse tree
   */
  enterCopy_into_table?: (ctx: Copy_into_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.copy_into_table`.
   * @param ctx the parse tree
   */
  exitCopy_into_table?: (ctx: Copy_into_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.external_location`.
   * @param ctx the parse tree
   */
  enterExternal_location?: (ctx: External_locationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.external_location`.
   * @param ctx the parse tree
   */
  exitExternal_location?: (ctx: External_locationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.files`.
   * @param ctx the parse tree
   */
  enterFiles?: (ctx: FilesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.files`.
   * @param ctx the parse tree
   */
  exitFiles?: (ctx: FilesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.file_format`.
   * @param ctx the parse tree
   */
  enterFile_format?: (ctx: File_formatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.file_format`.
   * @param ctx the parse tree
   */
  exitFile_format?: (ctx: File_formatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.format_name`.
   * @param ctx the parse tree
   */
  enterFormat_name?: (ctx: Format_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.format_name`.
   * @param ctx the parse tree
   */
  exitFormat_name?: (ctx: Format_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.format_type`.
   * @param ctx the parse tree
   */
  enterFormat_type?: (ctx: Format_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.format_type`.
   * @param ctx the parse tree
   */
  exitFormat_type?: (ctx: Format_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_file_format`.
   * @param ctx the parse tree
   */
  enterStage_file_format?: (ctx: Stage_file_formatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_file_format`.
   * @param ctx the parse tree
   */
  exitStage_file_format?: (ctx: Stage_file_formatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.copy_into_location`.
   * @param ctx the parse tree
   */
  enterCopy_into_location?: (ctx: Copy_into_locationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.copy_into_location`.
   * @param ctx the parse tree
   */
  exitCopy_into_location?: (ctx: Copy_into_locationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.comment`.
   * @param ctx the parse tree
   */
  enterComment?: (ctx: CommentContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.comment`.
   * @param ctx the parse tree
   */
  exitComment?: (ctx: CommentContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.function_signature`.
   * @param ctx the parse tree
   */
  enterFunction_signature?: (ctx: Function_signatureContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.function_signature`.
   * @param ctx the parse tree
   */
  exitFunction_signature?: (ctx: Function_signatureContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.commit`.
   * @param ctx the parse tree
   */
  enterCommit?: (ctx: CommitContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.commit`.
   * @param ctx the parse tree
   */
  exitCommit?: (ctx: CommitContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.execute_immediate`.
   * @param ctx the parse tree
   */
  enterExecute_immediate?: (ctx: Execute_immediateContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.execute_immediate`.
   * @param ctx the parse tree
   */
  exitExecute_immediate?: (ctx: Execute_immediateContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.execute_task`.
   * @param ctx the parse tree
   */
  enterExecute_task?: (ctx: Execute_taskContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.execute_task`.
   * @param ctx the parse tree
   */
  exitExecute_task?: (ctx: Execute_taskContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.explain`.
   * @param ctx the parse tree
   */
  enterExplain?: (ctx: ExplainContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.explain`.
   * @param ctx the parse tree
   */
  exitExplain?: (ctx: ExplainContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.parallel`.
   * @param ctx the parse tree
   */
  enterParallel?: (ctx: ParallelContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.parallel`.
   * @param ctx the parse tree
   */
  exitParallel?: (ctx: ParallelContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.get_dml`.
   * @param ctx the parse tree
   */
  enterGet_dml?: (ctx: Get_dmlContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.get_dml`.
   * @param ctx the parse tree
   */
  exitGet_dml?: (ctx: Get_dmlContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.grant_ownership`.
   * @param ctx the parse tree
   */
  enterGrant_ownership?: (ctx: Grant_ownershipContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.grant_ownership`.
   * @param ctx the parse tree
   */
  exitGrant_ownership?: (ctx: Grant_ownershipContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.grant_to_role`.
   * @param ctx the parse tree
   */
  enterGrant_to_role?: (ctx: Grant_to_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.grant_to_role`.
   * @param ctx the parse tree
   */
  exitGrant_to_role?: (ctx: Grant_to_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.global_privileges`.
   * @param ctx the parse tree
   */
  enterGlobal_privileges?: (ctx: Global_privilegesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.global_privileges`.
   * @param ctx the parse tree
   */
  exitGlobal_privileges?: (ctx: Global_privilegesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.global_privilege`.
   * @param ctx the parse tree
   */
  enterGlobal_privilege?: (ctx: Global_privilegeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.global_privilege`.
   * @param ctx the parse tree
   */
  exitGlobal_privilege?: (ctx: Global_privilegeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.account_object_privileges`.
   * @param ctx the parse tree
   */
  enterAccount_object_privileges?: (ctx: Account_object_privilegesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.account_object_privileges`.
   * @param ctx the parse tree
   */
  exitAccount_object_privileges?: (ctx: Account_object_privilegesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.account_object_privilege`.
   * @param ctx the parse tree
   */
  enterAccount_object_privilege?: (ctx: Account_object_privilegeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.account_object_privilege`.
   * @param ctx the parse tree
   */
  exitAccount_object_privilege?: (ctx: Account_object_privilegeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.schema_privileges`.
   * @param ctx the parse tree
   */
  enterSchema_privileges?: (ctx: Schema_privilegesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.schema_privileges`.
   * @param ctx the parse tree
   */
  exitSchema_privileges?: (ctx: Schema_privilegesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.schema_privilege`.
   * @param ctx the parse tree
   */
  enterSchema_privilege?: (ctx: Schema_privilegeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.schema_privilege`.
   * @param ctx the parse tree
   */
  exitSchema_privilege?: (ctx: Schema_privilegeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.schema_object_privileges`.
   * @param ctx the parse tree
   */
  enterSchema_object_privileges?: (ctx: Schema_object_privilegesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.schema_object_privileges`.
   * @param ctx the parse tree
   */
  exitSchema_object_privileges?: (ctx: Schema_object_privilegesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.schema_object_privilege`.
   * @param ctx the parse tree
   */
  enterSchema_object_privilege?: (ctx: Schema_object_privilegeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.schema_object_privilege`.
   * @param ctx the parse tree
   */
  exitSchema_object_privilege?: (ctx: Schema_object_privilegeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.grant_to_share`.
   * @param ctx the parse tree
   */
  enterGrant_to_share?: (ctx: Grant_to_shareContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.grant_to_share`.
   * @param ctx the parse tree
   */
  exitGrant_to_share?: (ctx: Grant_to_shareContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_privilege`.
   * @param ctx the parse tree
   */
  enterObject_privilege?: (ctx: Object_privilegeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_privilege`.
   * @param ctx the parse tree
   */
  exitObject_privilege?: (ctx: Object_privilegeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.grant_role`.
   * @param ctx the parse tree
   */
  enterGrant_role?: (ctx: Grant_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.grant_role`.
   * @param ctx the parse tree
   */
  exitGrant_role?: (ctx: Grant_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.role_name`.
   * @param ctx the parse tree
   */
  enterRole_name?: (ctx: Role_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.role_name`.
   * @param ctx the parse tree
   */
  exitRole_name?: (ctx: Role_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.system_defined_role`.
   * @param ctx the parse tree
   */
  enterSystem_defined_role?: (ctx: System_defined_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.system_defined_role`.
   * @param ctx the parse tree
   */
  exitSystem_defined_role?: (ctx: System_defined_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.list`.
   * @param ctx the parse tree
   */
  enterList?: (ctx: ListContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.list`.
   * @param ctx the parse tree
   */
  exitList?: (ctx: ListContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.user_stage`.
   * @param ctx the parse tree
   */
  enterUser_stage?: (ctx: User_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.user_stage`.
   * @param ctx the parse tree
   */
  exitUser_stage?: (ctx: User_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_stage`.
   * @param ctx the parse tree
   */
  enterTable_stage?: (ctx: Table_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_stage`.
   * @param ctx the parse tree
   */
  exitTable_stage?: (ctx: Table_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.named_stage`.
   * @param ctx the parse tree
   */
  enterNamed_stage?: (ctx: Named_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.named_stage`.
   * @param ctx the parse tree
   */
  exitNamed_stage?: (ctx: Named_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_path`.
   * @param ctx the parse tree
   */
  enterStage_path?: (ctx: Stage_pathContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_path`.
   * @param ctx the parse tree
   */
  exitStage_path?: (ctx: Stage_pathContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.put`.
   * @param ctx the parse tree
   */
  enterPut?: (ctx: PutContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.put`.
   * @param ctx the parse tree
   */
  exitPut?: (ctx: PutContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.remove`.
   * @param ctx the parse tree
   */
  enterRemove?: (ctx: RemoveContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.remove`.
   * @param ctx the parse tree
   */
  exitRemove?: (ctx: RemoveContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.revoke_from_role`.
   * @param ctx the parse tree
   */
  enterRevoke_from_role?: (ctx: Revoke_from_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.revoke_from_role`.
   * @param ctx the parse tree
   */
  exitRevoke_from_role?: (ctx: Revoke_from_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.revoke_from_share`.
   * @param ctx the parse tree
   */
  enterRevoke_from_share?: (ctx: Revoke_from_shareContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.revoke_from_share`.
   * @param ctx the parse tree
   */
  exitRevoke_from_share?: (ctx: Revoke_from_shareContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.revoke_role`.
   * @param ctx the parse tree
   */
  enterRevoke_role?: (ctx: Revoke_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.revoke_role`.
   * @param ctx the parse tree
   */
  exitRevoke_role?: (ctx: Revoke_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.rollback`.
   * @param ctx the parse tree
   */
  enterRollback?: (ctx: RollbackContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.rollback`.
   * @param ctx the parse tree
   */
  exitRollback?: (ctx: RollbackContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.set`.
   * @param ctx the parse tree
   */
  enterSet?: (ctx: SetContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.set`.
   * @param ctx the parse tree
   */
  exitSet?: (ctx: SetContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.truncate_materialized_view`.
   * @param ctx the parse tree
   */
  enterTruncate_materialized_view?: (ctx: Truncate_materialized_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.truncate_materialized_view`.
   * @param ctx the parse tree
   */
  exitTruncate_materialized_view?: (ctx: Truncate_materialized_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.truncate_table`.
   * @param ctx the parse tree
   */
  enterTruncate_table?: (ctx: Truncate_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.truncate_table`.
   * @param ctx the parse tree
   */
  exitTruncate_table?: (ctx: Truncate_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.unset`.
   * @param ctx the parse tree
   */
  enterUnset?: (ctx: UnsetContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.unset`.
   * @param ctx the parse tree
   */
  exitUnset?: (ctx: UnsetContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_command`.
   * @param ctx the parse tree
   */
  enterAlter_command?: (ctx: Alter_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_command`.
   * @param ctx the parse tree
   */
  exitAlter_command?: (ctx: Alter_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.account_params`.
   * @param ctx the parse tree
   */
  enterAccount_params?: (ctx: Account_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.account_params`.
   * @param ctx the parse tree
   */
  exitAccount_params?: (ctx: Account_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_params`.
   * @param ctx the parse tree
   */
  enterObject_params?: (ctx: Object_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_params`.
   * @param ctx the parse tree
   */
  exitObject_params?: (ctx: Object_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.default_ddl_collation`.
   * @param ctx the parse tree
   */
  enterDefault_ddl_collation?: (ctx: Default_ddl_collationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.default_ddl_collation`.
   * @param ctx the parse tree
   */
  exitDefault_ddl_collation?: (ctx: Default_ddl_collationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_properties`.
   * @param ctx the parse tree
   */
  enterObject_properties?: (ctx: Object_propertiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_properties`.
   * @param ctx the parse tree
   */
  exitObject_properties?: (ctx: Object_propertiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.session_params`.
   * @param ctx the parse tree
   */
  enterSession_params?: (ctx: Session_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.session_params`.
   * @param ctx the parse tree
   */
  exitSession_params?: (ctx: Session_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_account`.
   * @param ctx the parse tree
   */
  enterAlter_account?: (ctx: Alter_accountContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_account`.
   * @param ctx the parse tree
   */
  exitAlter_account?: (ctx: Alter_accountContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.enabled_true_false`.
   * @param ctx the parse tree
   */
  enterEnabled_true_false?: (ctx: Enabled_true_falseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.enabled_true_false`.
   * @param ctx the parse tree
   */
  exitEnabled_true_false?: (ctx: Enabled_true_falseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_alert`.
   * @param ctx the parse tree
   */
  enterAlter_alert?: (ctx: Alter_alertContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_alert`.
   * @param ctx the parse tree
   */
  exitAlter_alert?: (ctx: Alter_alertContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.resume_suspend`.
   * @param ctx the parse tree
   */
  enterResume_suspend?: (ctx: Resume_suspendContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.resume_suspend`.
   * @param ctx the parse tree
   */
  exitResume_suspend?: (ctx: Resume_suspendContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alert_set_clause`.
   * @param ctx the parse tree
   */
  enterAlert_set_clause?: (ctx: Alert_set_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alert_set_clause`.
   * @param ctx the parse tree
   */
  exitAlert_set_clause?: (ctx: Alert_set_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alert_unset_clause`.
   * @param ctx the parse tree
   */
  enterAlert_unset_clause?: (ctx: Alert_unset_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alert_unset_clause`.
   * @param ctx the parse tree
   */
  exitAlert_unset_clause?: (ctx: Alert_unset_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_api_integration`.
   * @param ctx the parse tree
   */
  enterAlter_api_integration?: (ctx: Alter_api_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_api_integration`.
   * @param ctx the parse tree
   */
  exitAlter_api_integration?: (ctx: Alter_api_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.api_integration_property`.
   * @param ctx the parse tree
   */
  enterApi_integration_property?: (ctx: Api_integration_propertyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.api_integration_property`.
   * @param ctx the parse tree
   */
  exitApi_integration_property?: (ctx: Api_integration_propertyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_connection`.
   * @param ctx the parse tree
   */
  enterAlter_connection?: (ctx: Alter_connectionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_connection`.
   * @param ctx the parse tree
   */
  exitAlter_connection?: (ctx: Alter_connectionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_database`.
   * @param ctx the parse tree
   */
  enterAlter_database?: (ctx: Alter_databaseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_database`.
   * @param ctx the parse tree
   */
  exitAlter_database?: (ctx: Alter_databaseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.database_property`.
   * @param ctx the parse tree
   */
  enterDatabase_property?: (ctx: Database_propertyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.database_property`.
   * @param ctx the parse tree
   */
  exitDatabase_property?: (ctx: Database_propertyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.account_id_list`.
   * @param ctx the parse tree
   */
  enterAccount_id_list?: (ctx: Account_id_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.account_id_list`.
   * @param ctx the parse tree
   */
  exitAccount_id_list?: (ctx: Account_id_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_dataset`.
   * @param ctx the parse tree
   */
  enterAlter_dataset?: (ctx: Alter_datasetContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_dataset`.
   * @param ctx the parse tree
   */
  exitAlter_dataset?: (ctx: Alter_datasetContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_dynamic_table`.
   * @param ctx the parse tree
   */
  enterAlter_dynamic_table?: (ctx: Alter_dynamic_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_dynamic_table`.
   * @param ctx the parse tree
   */
  exitAlter_dynamic_table?: (ctx: Alter_dynamic_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.id_list`.
   * @param ctx the parse tree
   */
  enterId_list?: (ctx: Id_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.id_list`.
   * @param ctx the parse tree
   */
  exitId_list?: (ctx: Id_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_external_table`.
   * @param ctx the parse tree
   */
  enterAlter_external_table?: (ctx: Alter_external_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_external_table`.
   * @param ctx the parse tree
   */
  exitAlter_external_table?: (ctx: Alter_external_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.ignore_edition_check`.
   * @param ctx the parse tree
   */
  enterIgnore_edition_check?: (ctx: Ignore_edition_checkContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.ignore_edition_check`.
   * @param ctx the parse tree
   */
  exitIgnore_edition_check?: (ctx: Ignore_edition_checkContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.replication_schedule`.
   * @param ctx the parse tree
   */
  enterReplication_schedule?: (ctx: Replication_scheduleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.replication_schedule`.
   * @param ctx the parse tree
   */
  exitReplication_schedule?: (ctx: Replication_scheduleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.db_name_list`.
   * @param ctx the parse tree
   */
  enterDb_name_list?: (ctx: Db_name_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.db_name_list`.
   * @param ctx the parse tree
   */
  exitDb_name_list?: (ctx: Db_name_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.share_name_list`.
   * @param ctx the parse tree
   */
  enterShare_name_list?: (ctx: Share_name_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.share_name_list`.
   * @param ctx the parse tree
   */
  exitShare_name_list?: (ctx: Share_name_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.full_acct_list`.
   * @param ctx the parse tree
   */
  enterFull_acct_list?: (ctx: Full_acct_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.full_acct_list`.
   * @param ctx the parse tree
   */
  exitFull_acct_list?: (ctx: Full_acct_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_failover_group`.
   * @param ctx the parse tree
   */
  enterAlter_failover_group?: (ctx: Alter_failover_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_failover_group`.
   * @param ctx the parse tree
   */
  exitAlter_failover_group?: (ctx: Alter_failover_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_file_format`.
   * @param ctx the parse tree
   */
  enterAlter_file_format?: (ctx: Alter_file_formatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_file_format`.
   * @param ctx the parse tree
   */
  exitAlter_file_format?: (ctx: Alter_file_formatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_function`.
   * @param ctx the parse tree
   */
  enterAlter_function?: (ctx: Alter_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_function`.
   * @param ctx the parse tree
   */
  exitAlter_function?: (ctx: Alter_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_function_signature`.
   * @param ctx the parse tree
   */
  enterAlter_function_signature?: (ctx: Alter_function_signatureContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_function_signature`.
   * @param ctx the parse tree
   */
  exitAlter_function_signature?: (ctx: Alter_function_signatureContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.data_type_list`.
   * @param ctx the parse tree
   */
  enterData_type_list?: (ctx: Data_type_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.data_type_list`.
   * @param ctx the parse tree
   */
  exitData_type_list?: (ctx: Data_type_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_git_repository`.
   * @param ctx the parse tree
   */
  enterAlter_git_repository?: (ctx: Alter_git_repositoryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_git_repository`.
   * @param ctx the parse tree
   */
  exitAlter_git_repository?: (ctx: Alter_git_repositoryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_git_set_opts`.
   * @param ctx the parse tree
   */
  enterAlter_git_set_opts?: (ctx: Alter_git_set_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_git_set_opts`.
   * @param ctx the parse tree
   */
  exitAlter_git_set_opts?: (ctx: Alter_git_set_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_git_unset_opts`.
   * @param ctx the parse tree
   */
  enterAlter_git_unset_opts?: (ctx: Alter_git_unset_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_git_unset_opts`.
   * @param ctx the parse tree
   */
  exitAlter_git_unset_opts?: (ctx: Alter_git_unset_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_masking_policy`.
   * @param ctx the parse tree
   */
  enterAlter_masking_policy?: (ctx: Alter_masking_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_masking_policy`.
   * @param ctx the parse tree
   */
  exitAlter_masking_policy?: (ctx: Alter_masking_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_materialized_view`.
   * @param ctx the parse tree
   */
  enterAlter_materialized_view?: (ctx: Alter_materialized_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_materialized_view`.
   * @param ctx the parse tree
   */
  exitAlter_materialized_view?: (ctx: Alter_materialized_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_network_policy`.
   * @param ctx the parse tree
   */
  enterAlter_network_policy?: (ctx: Alter_network_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_network_policy`.
   * @param ctx the parse tree
   */
  exitAlter_network_policy?: (ctx: Alter_network_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_notification_integration`.
   * @param ctx the parse tree
   */
  enterAlter_notification_integration?: (ctx: Alter_notification_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_notification_integration`.
   * @param ctx the parse tree
   */
  exitAlter_notification_integration?: (ctx: Alter_notification_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_pipe`.
   * @param ctx the parse tree
   */
  enterAlter_pipe?: (ctx: Alter_pipeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_pipe`.
   * @param ctx the parse tree
   */
  exitAlter_pipe?: (ctx: Alter_pipeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_procedure`.
   * @param ctx the parse tree
   */
  enterAlter_procedure?: (ctx: Alter_procedureContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_procedure`.
   * @param ctx the parse tree
   */
  exitAlter_procedure?: (ctx: Alter_procedureContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_replication_group`.
   * @param ctx the parse tree
   */
  enterAlter_replication_group?: (ctx: Alter_replication_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_replication_group`.
   * @param ctx the parse tree
   */
  exitAlter_replication_group?: (ctx: Alter_replication_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.credit_quota`.
   * @param ctx the parse tree
   */
  enterCredit_quota?: (ctx: Credit_quotaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.credit_quota`.
   * @param ctx the parse tree
   */
  exitCredit_quota?: (ctx: Credit_quotaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.frequency`.
   * @param ctx the parse tree
   */
  enterFrequency?: (ctx: FrequencyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.frequency`.
   * @param ctx the parse tree
   */
  exitFrequency?: (ctx: FrequencyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.notify_users`.
   * @param ctx the parse tree
   */
  enterNotify_users?: (ctx: Notify_usersContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.notify_users`.
   * @param ctx the parse tree
   */
  exitNotify_users?: (ctx: Notify_usersContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.triggerDefinition`.
   * @param ctx the parse tree
   */
  enterTriggerDefinition?: (ctx: TriggerDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.triggerDefinition`.
   * @param ctx the parse tree
   */
  exitTriggerDefinition?: (ctx: TriggerDefinitionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_resource_monitor`.
   * @param ctx the parse tree
   */
  enterAlter_resource_monitor?: (ctx: Alter_resource_monitorContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_resource_monitor`.
   * @param ctx the parse tree
   */
  exitAlter_resource_monitor?: (ctx: Alter_resource_monitorContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_role`.
   * @param ctx the parse tree
   */
  enterAlter_role?: (ctx: Alter_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_role`.
   * @param ctx the parse tree
   */
  exitAlter_role?: (ctx: Alter_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_row_access_policy`.
   * @param ctx the parse tree
   */
  enterAlter_row_access_policy?: (ctx: Alter_row_access_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_row_access_policy`.
   * @param ctx the parse tree
   */
  exitAlter_row_access_policy?: (ctx: Alter_row_access_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_schema`.
   * @param ctx the parse tree
   */
  enterAlter_schema?: (ctx: Alter_schemaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_schema`.
   * @param ctx the parse tree
   */
  exitAlter_schema?: (ctx: Alter_schemaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.schema_property`.
   * @param ctx the parse tree
   */
  enterSchema_property?: (ctx: Schema_propertyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.schema_property`.
   * @param ctx the parse tree
   */
  exitSchema_property?: (ctx: Schema_propertyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_sequence`.
   * @param ctx the parse tree
   */
  enterAlter_sequence?: (ctx: Alter_sequenceContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_sequence`.
   * @param ctx the parse tree
   */
  exitAlter_sequence?: (ctx: Alter_sequenceContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_secret`.
   * @param ctx the parse tree
   */
  enterAlter_secret?: (ctx: Alter_secretContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_secret`.
   * @param ctx the parse tree
   */
  exitAlter_secret?: (ctx: Alter_secretContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_opts`.
   * @param ctx the parse tree
   */
  enterSecret_opts?: (ctx: Secret_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_opts`.
   * @param ctx the parse tree
   */
  exitSecret_opts?: (ctx: Secret_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_set_opts`.
   * @param ctx the parse tree
   */
  enterSecret_set_opts?: (ctx: Secret_set_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_set_opts`.
   * @param ctx the parse tree
   */
  exitSecret_set_opts?: (ctx: Secret_set_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_oauth_client_creds_opts`.
   * @param ctx the parse tree
   */
  enterSecret_oauth_client_creds_opts?: (ctx: Secret_oauth_client_creds_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_oauth_client_creds_opts`.
   * @param ctx the parse tree
   */
  exitSecret_oauth_client_creds_opts?: (ctx: Secret_oauth_client_creds_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_oauth_auth_code_opts`.
   * @param ctx the parse tree
   */
  enterSecret_oauth_auth_code_opts?: (ctx: Secret_oauth_auth_code_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_oauth_auth_code_opts`.
   * @param ctx the parse tree
   */
  exitSecret_oauth_auth_code_opts?: (ctx: Secret_oauth_auth_code_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_api_auth_opts`.
   * @param ctx the parse tree
   */
  enterSecret_api_auth_opts?: (ctx: Secret_api_auth_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_api_auth_opts`.
   * @param ctx the parse tree
   */
  exitSecret_api_auth_opts?: (ctx: Secret_api_auth_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_basic_auth_opts`.
   * @param ctx the parse tree
   */
  enterSecret_basic_auth_opts?: (ctx: Secret_basic_auth_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_basic_auth_opts`.
   * @param ctx the parse tree
   */
  exitSecret_basic_auth_opts?: (ctx: Secret_basic_auth_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.secret_generic_string_opts`.
   * @param ctx the parse tree
   */
  enterSecret_generic_string_opts?: (ctx: Secret_generic_string_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.secret_generic_string_opts`.
   * @param ctx the parse tree
   */
  exitSecret_generic_string_opts?: (ctx: Secret_generic_string_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_security_integration_external_oauth`.
   * @param ctx the parse tree
   */
  enterAlter_security_integration_external_oauth?: (
    ctx: Alter_security_integration_external_oauthContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_security_integration_external_oauth`.
   * @param ctx the parse tree
   */
  exitAlter_security_integration_external_oauth?: (
    ctx: Alter_security_integration_external_oauthContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.security_integration_external_oauth_property`.
   * @param ctx the parse tree
   */
  enterSecurity_integration_external_oauth_property?: (
    ctx: Security_integration_external_oauth_propertyContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.security_integration_external_oauth_property`.
   * @param ctx the parse tree
   */
  exitSecurity_integration_external_oauth_property?: (
    ctx: Security_integration_external_oauth_propertyContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_security_integration_snowflake_oauth`.
   * @param ctx the parse tree
   */
  enterAlter_security_integration_snowflake_oauth?: (
    ctx: Alter_security_integration_snowflake_oauthContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_security_integration_snowflake_oauth`.
   * @param ctx the parse tree
   */
  exitAlter_security_integration_snowflake_oauth?: (
    ctx: Alter_security_integration_snowflake_oauthContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.security_integration_snowflake_oauth_property`.
   * @param ctx the parse tree
   */
  enterSecurity_integration_snowflake_oauth_property?: (
    ctx: Security_integration_snowflake_oauth_propertyContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.security_integration_snowflake_oauth_property`.
   * @param ctx the parse tree
   */
  exitSecurity_integration_snowflake_oauth_property?: (
    ctx: Security_integration_snowflake_oauth_propertyContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_security_integration_saml2`.
   * @param ctx the parse tree
   */
  enterAlter_security_integration_saml2?: (ctx: Alter_security_integration_saml2Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_security_integration_saml2`.
   * @param ctx the parse tree
   */
  exitAlter_security_integration_saml2?: (ctx: Alter_security_integration_saml2Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_security_integration_scim`.
   * @param ctx the parse tree
   */
  enterAlter_security_integration_scim?: (ctx: Alter_security_integration_scimContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_security_integration_scim`.
   * @param ctx the parse tree
   */
  exitAlter_security_integration_scim?: (ctx: Alter_security_integration_scimContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.security_integration_scim_property`.
   * @param ctx the parse tree
   */
  enterSecurity_integration_scim_property?: (
    ctx: Security_integration_scim_propertyContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.security_integration_scim_property`.
   * @param ctx the parse tree
   */
  exitSecurity_integration_scim_property?: (ctx: Security_integration_scim_propertyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_session`.
   * @param ctx the parse tree
   */
  enterAlter_session?: (ctx: Alter_sessionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_session`.
   * @param ctx the parse tree
   */
  exitAlter_session?: (ctx: Alter_sessionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_session_policy`.
   * @param ctx the parse tree
   */
  enterAlter_session_policy?: (ctx: Alter_session_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_session_policy`.
   * @param ctx the parse tree
   */
  exitAlter_session_policy?: (ctx: Alter_session_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_password_policy`.
   * @param ctx the parse tree
   */
  enterAlter_password_policy?: (ctx: Alter_password_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_password_policy`.
   * @param ctx the parse tree
   */
  exitAlter_password_policy?: (ctx: Alter_password_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_share`.
   * @param ctx the parse tree
   */
  enterAlter_share?: (ctx: Alter_shareContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_share`.
   * @param ctx the parse tree
   */
  exitAlter_share?: (ctx: Alter_shareContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_storage_integration`.
   * @param ctx the parse tree
   */
  enterAlter_storage_integration?: (ctx: Alter_storage_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_storage_integration`.
   * @param ctx the parse tree
   */
  exitAlter_storage_integration?: (ctx: Alter_storage_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_stream`.
   * @param ctx the parse tree
   */
  enterAlter_stream?: (ctx: Alter_streamContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_stream`.
   * @param ctx the parse tree
   */
  exitAlter_stream?: (ctx: Alter_streamContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_table`.
   * @param ctx the parse tree
   */
  enterAlter_table?: (ctx: Alter_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_table`.
   * @param ctx the parse tree
   */
  exitAlter_table?: (ctx: Alter_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.rls_operations`.
   * @param ctx the parse tree
   */
  enterRls_operations?: (ctx: Rls_operationsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.rls_operations`.
   * @param ctx the parse tree
   */
  exitRls_operations?: (ctx: Rls_operationsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.clustering_action`.
   * @param ctx the parse tree
   */
  enterClustering_action?: (ctx: Clustering_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.clustering_action`.
   * @param ctx the parse tree
   */
  exitClustering_action?: (ctx: Clustering_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_column_action`.
   * @param ctx the parse tree
   */
  enterTable_column_action?: (ctx: Table_column_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_column_action`.
   * @param ctx the parse tree
   */
  exitTable_column_action?: (ctx: Table_column_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_column_clause`.
   * @param ctx the parse tree
   */
  enterAlter_column_clause?: (ctx: Alter_column_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_column_clause`.
   * @param ctx the parse tree
   */
  exitAlter_column_clause?: (ctx: Alter_column_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.inline_constraint`.
   * @param ctx the parse tree
   */
  enterInline_constraint?: (ctx: Inline_constraintContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.inline_constraint`.
   * @param ctx the parse tree
   */
  exitInline_constraint?: (ctx: Inline_constraintContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.enforced_not_enforced`.
   * @param ctx the parse tree
   */
  enterEnforced_not_enforced?: (ctx: Enforced_not_enforcedContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.enforced_not_enforced`.
   * @param ctx the parse tree
   */
  exitEnforced_not_enforced?: (ctx: Enforced_not_enforcedContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.deferrable_not_deferrable`.
   * @param ctx the parse tree
   */
  enterDeferrable_not_deferrable?: (ctx: Deferrable_not_deferrableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.deferrable_not_deferrable`.
   * @param ctx the parse tree
   */
  exitDeferrable_not_deferrable?: (ctx: Deferrable_not_deferrableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.initially_deferred_or_immediate`.
   * @param ctx the parse tree
   */
  enterInitially_deferred_or_immediate?: (ctx: Initially_deferred_or_immediateContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.initially_deferred_or_immediate`.
   * @param ctx the parse tree
   */
  exitInitially_deferred_or_immediate?: (ctx: Initially_deferred_or_immediateContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.common_constraint_properties`.
   * @param ctx the parse tree
   */
  enterCommon_constraint_properties?: (ctx: Common_constraint_propertiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.common_constraint_properties`.
   * @param ctx the parse tree
   */
  exitCommon_constraint_properties?: (ctx: Common_constraint_propertiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.on_update`.
   * @param ctx the parse tree
   */
  enterOn_update?: (ctx: On_updateContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.on_update`.
   * @param ctx the parse tree
   */
  exitOn_update?: (ctx: On_updateContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.on_delete`.
   * @param ctx the parse tree
   */
  enterOn_delete?: (ctx: On_deleteContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.on_delete`.
   * @param ctx the parse tree
   */
  exitOn_delete?: (ctx: On_deleteContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.foreign_key_match`.
   * @param ctx the parse tree
   */
  enterForeign_key_match?: (ctx: Foreign_key_matchContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.foreign_key_match`.
   * @param ctx the parse tree
   */
  exitForeign_key_match?: (ctx: Foreign_key_matchContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.on_action`.
   * @param ctx the parse tree
   */
  enterOn_action?: (ctx: On_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.on_action`.
   * @param ctx the parse tree
   */
  exitOn_action?: (ctx: On_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.constraint_properties`.
   * @param ctx the parse tree
   */
  enterConstraint_properties?: (ctx: Constraint_propertiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.constraint_properties`.
   * @param ctx the parse tree
   */
  exitConstraint_properties?: (ctx: Constraint_propertiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.ext_table_column_action`.
   * @param ctx the parse tree
   */
  enterExt_table_column_action?: (ctx: Ext_table_column_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.ext_table_column_action`.
   * @param ctx the parse tree
   */
  exitExt_table_column_action?: (ctx: Ext_table_column_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.constraint_action`.
   * @param ctx the parse tree
   */
  enterConstraint_action?: (ctx: Constraint_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.constraint_action`.
   * @param ctx the parse tree
   */
  exitConstraint_action?: (ctx: Constraint_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.search_optimization_action`.
   * @param ctx the parse tree
   */
  enterSearch_optimization_action?: (ctx: Search_optimization_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.search_optimization_action`.
   * @param ctx the parse tree
   */
  exitSearch_optimization_action?: (ctx: Search_optimization_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.search_method_with_target`.
   * @param ctx the parse tree
   */
  enterSearch_method_with_target?: (ctx: Search_method_with_targetContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.search_method_with_target`.
   * @param ctx the parse tree
   */
  exitSearch_method_with_target?: (ctx: Search_method_with_targetContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_table_alter_column`.
   * @param ctx the parse tree
   */
  enterAlter_table_alter_column?: (ctx: Alter_table_alter_columnContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_table_alter_column`.
   * @param ctx the parse tree
   */
  exitAlter_table_alter_column?: (ctx: Alter_table_alter_columnContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_column_decl_list`.
   * @param ctx the parse tree
   */
  enterAlter_column_decl_list?: (ctx: Alter_column_decl_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_column_decl_list`.
   * @param ctx the parse tree
   */
  exitAlter_column_decl_list?: (ctx: Alter_column_decl_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_column_decl`.
   * @param ctx the parse tree
   */
  enterAlter_column_decl?: (ctx: Alter_column_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_column_decl`.
   * @param ctx the parse tree
   */
  exitAlter_column_decl?: (ctx: Alter_column_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_column_opts`.
   * @param ctx the parse tree
   */
  enterAlter_column_opts?: (ctx: Alter_column_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_column_opts`.
   * @param ctx the parse tree
   */
  exitAlter_column_opts?: (ctx: Alter_column_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_set_tags`.
   * @param ctx the parse tree
   */
  enterColumn_set_tags?: (ctx: Column_set_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_set_tags`.
   * @param ctx the parse tree
   */
  exitColumn_set_tags?: (ctx: Column_set_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_unset_tags`.
   * @param ctx the parse tree
   */
  enterColumn_unset_tags?: (ctx: Column_unset_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_unset_tags`.
   * @param ctx the parse tree
   */
  exitColumn_unset_tags?: (ctx: Column_unset_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_tag`.
   * @param ctx the parse tree
   */
  enterAlter_tag?: (ctx: Alter_tagContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_tag`.
   * @param ctx the parse tree
   */
  exitAlter_tag?: (ctx: Alter_tagContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_task`.
   * @param ctx the parse tree
   */
  enterAlter_task?: (ctx: Alter_taskContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_task`.
   * @param ctx the parse tree
   */
  exitAlter_task?: (ctx: Alter_taskContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_user`.
   * @param ctx the parse tree
   */
  enterAlter_user?: (ctx: Alter_userContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_user`.
   * @param ctx the parse tree
   */
  exitAlter_user?: (ctx: Alter_userContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_view`.
   * @param ctx the parse tree
   */
  enterAlter_view?: (ctx: Alter_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_view`.
   * @param ctx the parse tree
   */
  exitAlter_view?: (ctx: Alter_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_modify`.
   * @param ctx the parse tree
   */
  enterAlter_modify?: (ctx: Alter_modifyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_modify`.
   * @param ctx the parse tree
   */
  exitAlter_modify?: (ctx: Alter_modifyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_warehouse`.
   * @param ctx the parse tree
   */
  enterAlter_warehouse?: (ctx: Alter_warehouseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_warehouse`.
   * @param ctx the parse tree
   */
  exitAlter_warehouse?: (ctx: Alter_warehouseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_connection_opts`.
   * @param ctx the parse tree
   */
  enterAlter_connection_opts?: (ctx: Alter_connection_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_connection_opts`.
   * @param ctx the parse tree
   */
  exitAlter_connection_opts?: (ctx: Alter_connection_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_user_opts`.
   * @param ctx the parse tree
   */
  enterAlter_user_opts?: (ctx: Alter_user_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_user_opts`.
   * @param ctx the parse tree
   */
  exitAlter_user_opts?: (ctx: Alter_user_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_tag_opts`.
   * @param ctx the parse tree
   */
  enterAlter_tag_opts?: (ctx: Alter_tag_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_tag_opts`.
   * @param ctx the parse tree
   */
  exitAlter_tag_opts?: (ctx: Alter_tag_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_network_policy_opts`.
   * @param ctx the parse tree
   */
  enterAlter_network_policy_opts?: (ctx: Alter_network_policy_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_network_policy_opts`.
   * @param ctx the parse tree
   */
  exitAlter_network_policy_opts?: (ctx: Alter_network_policy_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_warehouse_opts`.
   * @param ctx the parse tree
   */
  enterAlter_warehouse_opts?: (ctx: Alter_warehouse_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_warehouse_opts`.
   * @param ctx the parse tree
   */
  exitAlter_warehouse_opts?: (ctx: Alter_warehouse_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_account_opts`.
   * @param ctx the parse tree
   */
  enterAlter_account_opts?: (ctx: Alter_account_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_account_opts`.
   * @param ctx the parse tree
   */
  exitAlter_account_opts?: (ctx: Alter_account_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.set_tags`.
   * @param ctx the parse tree
   */
  enterSet_tags?: (ctx: Set_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.set_tags`.
   * @param ctx the parse tree
   */
  exitSet_tags?: (ctx: Set_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.tag_decl_list`.
   * @param ctx the parse tree
   */
  enterTag_decl_list?: (ctx: Tag_decl_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.tag_decl_list`.
   * @param ctx the parse tree
   */
  exitTag_decl_list?: (ctx: Tag_decl_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.unset_tags`.
   * @param ctx the parse tree
   */
  enterUnset_tags?: (ctx: Unset_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.unset_tags`.
   * @param ctx the parse tree
   */
  exitUnset_tags?: (ctx: Unset_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.tag_list`.
   * @param ctx the parse tree
   */
  enterTag_list?: (ctx: Tag_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.tag_list`.
   * @param ctx the parse tree
   */
  exitTag_list?: (ctx: Tag_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_command`.
   * @param ctx the parse tree
   */
  enterCreate_command?: (ctx: Create_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_command`.
   * @param ctx the parse tree
   */
  exitCreate_command?: (ctx: Create_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_account`.
   * @param ctx the parse tree
   */
  enterCreate_account?: (ctx: Create_accountContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_account`.
   * @param ctx the parse tree
   */
  exitCreate_account?: (ctx: Create_accountContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_alert`.
   * @param ctx the parse tree
   */
  enterCreate_alert?: (ctx: Create_alertContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_alert`.
   * @param ctx the parse tree
   */
  exitCreate_alert?: (ctx: Create_alertContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alert_condition`.
   * @param ctx the parse tree
   */
  enterAlert_condition?: (ctx: Alert_conditionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alert_condition`.
   * @param ctx the parse tree
   */
  exitAlert_condition?: (ctx: Alert_conditionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alert_action`.
   * @param ctx the parse tree
   */
  enterAlert_action?: (ctx: Alert_actionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alert_action`.
   * @param ctx the parse tree
   */
  exitAlert_action?: (ctx: Alert_actionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_api_integration`.
   * @param ctx the parse tree
   */
  enterCreate_api_integration?: (ctx: Create_api_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_api_integration`.
   * @param ctx the parse tree
   */
  exitCreate_api_integration?: (ctx: Create_api_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_object_clone`.
   * @param ctx the parse tree
   */
  enterCreate_object_clone?: (ctx: Create_object_cloneContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_object_clone`.
   * @param ctx the parse tree
   */
  exitCreate_object_clone?: (ctx: Create_object_cloneContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_connection`.
   * @param ctx the parse tree
   */
  enterCreate_connection?: (ctx: Create_connectionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_connection`.
   * @param ctx the parse tree
   */
  exitCreate_connection?: (ctx: Create_connectionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_database`.
   * @param ctx the parse tree
   */
  enterCreate_database?: (ctx: Create_databaseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_database`.
   * @param ctx the parse tree
   */
  exitCreate_database?: (ctx: Create_databaseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.clone_at_before`.
   * @param ctx the parse tree
   */
  enterClone_at_before?: (ctx: Clone_at_beforeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.clone_at_before`.
   * @param ctx the parse tree
   */
  exitClone_at_before?: (ctx: Clone_at_beforeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.at_before1`.
   * @param ctx the parse tree
   */
  enterAt_before1?: (ctx: At_before1Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.at_before1`.
   * @param ctx the parse tree
   */
  exitAt_before1?: (ctx: At_before1Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.header_decl`.
   * @param ctx the parse tree
   */
  enterHeader_decl?: (ctx: Header_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.header_decl`.
   * @param ctx the parse tree
   */
  exitHeader_decl?: (ctx: Header_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.compression_type`.
   * @param ctx the parse tree
   */
  enterCompression_type?: (ctx: Compression_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.compression_type`.
   * @param ctx the parse tree
   */
  exitCompression_type?: (ctx: Compression_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.compression`.
   * @param ctx the parse tree
   */
  enterCompression?: (ctx: CompressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.compression`.
   * @param ctx the parse tree
   */
  exitCompression?: (ctx: CompressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_dataset`.
   * @param ctx the parse tree
   */
  enterCreate_dataset?: (ctx: Create_datasetContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_dataset`.
   * @param ctx the parse tree
   */
  exitCreate_dataset?: (ctx: Create_datasetContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_dynamic_table`.
   * @param ctx the parse tree
   */
  enterCreate_dynamic_table?: (ctx: Create_dynamic_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_dynamic_table`.
   * @param ctx the parse tree
   */
  exitCreate_dynamic_table?: (ctx: Create_dynamic_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.dynamic_table_params`.
   * @param ctx the parse tree
   */
  enterDynamic_table_params?: (ctx: Dynamic_table_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.dynamic_table_params`.
   * @param ctx the parse tree
   */
  exitDynamic_table_params?: (ctx: Dynamic_table_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.dynamic_table_settable_params`.
   * @param ctx the parse tree
   */
  enterDynamic_table_settable_params?: (ctx: Dynamic_table_settable_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.dynamic_table_settable_params`.
   * @param ctx the parse tree
   */
  exitDynamic_table_settable_params?: (ctx: Dynamic_table_settable_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.dynamic_table_unsettable_params`.
   * @param ctx the parse tree
   */
  enterDynamic_table_unsettable_params?: (ctx: Dynamic_table_unsettable_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.dynamic_table_unsettable_params`.
   * @param ctx the parse tree
   */
  exitDynamic_table_unsettable_params?: (ctx: Dynamic_table_unsettable_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.data_retention_params`.
   * @param ctx the parse tree
   */
  enterData_retention_params?: (ctx: Data_retention_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.data_retention_params`.
   * @param ctx the parse tree
   */
  exitData_retention_params?: (ctx: Data_retention_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.set_data_retention_params`.
   * @param ctx the parse tree
   */
  enterSet_data_retention_params?: (ctx: Set_data_retention_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.set_data_retention_params`.
   * @param ctx the parse tree
   */
  exitSet_data_retention_params?: (ctx: Set_data_retention_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_event_table`.
   * @param ctx the parse tree
   */
  enterCreate_event_table?: (ctx: Create_event_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_event_table`.
   * @param ctx the parse tree
   */
  exitCreate_event_table?: (ctx: Create_event_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_external_function`.
   * @param ctx the parse tree
   */
  enterCreate_external_function?: (ctx: Create_external_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_external_function`.
   * @param ctx the parse tree
   */
  exitCreate_external_function?: (ctx: Create_external_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_external_table`.
   * @param ctx the parse tree
   */
  enterCreate_external_table?: (ctx: Create_external_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_external_table`.
   * @param ctx the parse tree
   */
  exitCreate_external_table?: (ctx: Create_external_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.external_table_column_decl`.
   * @param ctx the parse tree
   */
  enterExternal_table_column_decl?: (ctx: External_table_column_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.external_table_column_decl`.
   * @param ctx the parse tree
   */
  exitExternal_table_column_decl?: (ctx: External_table_column_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.external_table_column_decl_list`.
   * @param ctx the parse tree
   */
  enterExternal_table_column_decl_list?: (ctx: External_table_column_decl_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.external_table_column_decl_list`.
   * @param ctx the parse tree
   */
  exitExternal_table_column_decl_list?: (ctx: External_table_column_decl_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.full_acct`.
   * @param ctx the parse tree
   */
  enterFull_acct?: (ctx: Full_acctContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.full_acct`.
   * @param ctx the parse tree
   */
  exitFull_acct?: (ctx: Full_acctContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.integration_type_name`.
   * @param ctx the parse tree
   */
  enterIntegration_type_name?: (ctx: Integration_type_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.integration_type_name`.
   * @param ctx the parse tree
   */
  exitIntegration_type_name?: (ctx: Integration_type_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_failover_group`.
   * @param ctx the parse tree
   */
  enterCreate_failover_group?: (ctx: Create_failover_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_failover_group`.
   * @param ctx the parse tree
   */
  exitCreate_failover_group?: (ctx: Create_failover_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.type_fileformat`.
   * @param ctx the parse tree
   */
  enterType_fileformat?: (ctx: Type_fileformatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.type_fileformat`.
   * @param ctx the parse tree
   */
  exitType_fileformat?: (ctx: Type_fileformatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_file_format`.
   * @param ctx the parse tree
   */
  enterCreate_file_format?: (ctx: Create_file_formatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_file_format`.
   * @param ctx the parse tree
   */
  exitCreate_file_format?: (ctx: Create_file_formatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.arg_decl`.
   * @param ctx the parse tree
   */
  enterArg_decl?: (ctx: Arg_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.arg_decl`.
   * @param ctx the parse tree
   */
  exitArg_decl?: (ctx: Arg_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.arg_default_value_clause`.
   * @param ctx the parse tree
   */
  enterArg_default_value_clause?: (ctx: Arg_default_value_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.arg_default_value_clause`.
   * @param ctx the parse tree
   */
  exitArg_default_value_clause?: (ctx: Arg_default_value_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.col_decl`.
   * @param ctx the parse tree
   */
  enterCol_decl?: (ctx: Col_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.col_decl`.
   * @param ctx the parse tree
   */
  exitCol_decl?: (ctx: Col_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.virtual_column_decl`.
   * @param ctx the parse tree
   */
  enterVirtual_column_decl?: (ctx: Virtual_column_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.virtual_column_decl`.
   * @param ctx the parse tree
   */
  exitVirtual_column_decl?: (ctx: Virtual_column_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.function_definition`.
   * @param ctx the parse tree
   */
  enterFunction_definition?: (ctx: Function_definitionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.function_definition`.
   * @param ctx the parse tree
   */
  exitFunction_definition?: (ctx: Function_definitionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_function`.
   * @param ctx the parse tree
   */
  enterCreate_function?: (ctx: Create_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_function`.
   * @param ctx the parse tree
   */
  exitCreate_function?: (ctx: Create_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_git_repository`.
   * @param ctx the parse tree
   */
  enterCreate_git_repository?: (ctx: Create_git_repositoryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_git_repository`.
   * @param ctx the parse tree
   */
  exitCreate_git_repository?: (ctx: Create_git_repositoryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_git_opts`.
   * @param ctx the parse tree
   */
  enterCreate_git_opts?: (ctx: Create_git_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_git_opts`.
   * @param ctx the parse tree
   */
  exitCreate_git_opts?: (ctx: Create_git_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_managed_account`.
   * @param ctx the parse tree
   */
  enterCreate_managed_account?: (ctx: Create_managed_accountContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_managed_account`.
   * @param ctx the parse tree
   */
  exitCreate_managed_account?: (ctx: Create_managed_accountContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_masking_policy`.
   * @param ctx the parse tree
   */
  enterCreate_masking_policy?: (ctx: Create_masking_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_masking_policy`.
   * @param ctx the parse tree
   */
  exitCreate_masking_policy?: (ctx: Create_masking_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.tag_decl`.
   * @param ctx the parse tree
   */
  enterTag_decl?: (ctx: Tag_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.tag_decl`.
   * @param ctx the parse tree
   */
  exitTag_decl?: (ctx: Tag_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_list_in_parentheses`.
   * @param ctx the parse tree
   */
  enterColumn_list_in_parentheses?: (ctx: Column_list_in_parenthesesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_list_in_parentheses`.
   * @param ctx the parse tree
   */
  exitColumn_list_in_parentheses?: (ctx: Column_list_in_parenthesesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_materialized_view`.
   * @param ctx the parse tree
   */
  enterCreate_materialized_view?: (ctx: Create_materialized_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_materialized_view`.
   * @param ctx the parse tree
   */
  exitCreate_materialized_view?: (ctx: Create_materialized_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_network_policy`.
   * @param ctx the parse tree
   */
  enterCreate_network_policy?: (ctx: Create_network_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_network_policy`.
   * @param ctx the parse tree
   */
  exitCreate_network_policy?: (ctx: Create_network_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cloud_provider_params_auto`.
   * @param ctx the parse tree
   */
  enterCloud_provider_params_auto?: (ctx: Cloud_provider_params_autoContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cloud_provider_params_auto`.
   * @param ctx the parse tree
   */
  exitCloud_provider_params_auto?: (ctx: Cloud_provider_params_autoContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cloud_provider_params_push`.
   * @param ctx the parse tree
   */
  enterCloud_provider_params_push?: (ctx: Cloud_provider_params_pushContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cloud_provider_params_push`.
   * @param ctx the parse tree
   */
  exitCloud_provider_params_push?: (ctx: Cloud_provider_params_pushContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_notification_integration`.
   * @param ctx the parse tree
   */
  enterCreate_notification_integration?: (ctx: Create_notification_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_notification_integration`.
   * @param ctx the parse tree
   */
  exitCreate_notification_integration?: (ctx: Create_notification_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_pipe`.
   * @param ctx the parse tree
   */
  enterCreate_pipe?: (ctx: Create_pipeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_pipe`.
   * @param ctx the parse tree
   */
  exitCreate_pipe?: (ctx: Create_pipeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.caller_owner`.
   * @param ctx the parse tree
   */
  enterCaller_owner?: (ctx: Caller_ownerContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.caller_owner`.
   * @param ctx the parse tree
   */
  exitCaller_owner?: (ctx: Caller_ownerContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.executa_as`.
   * @param ctx the parse tree
   */
  enterExecuta_as?: (ctx: Executa_asContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.executa_as`.
   * @param ctx the parse tree
   */
  exitExecuta_as?: (ctx: Executa_asContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.procedure_definition`.
   * @param ctx the parse tree
   */
  enterProcedure_definition?: (ctx: Procedure_definitionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.procedure_definition`.
   * @param ctx the parse tree
   */
  exitProcedure_definition?: (ctx: Procedure_definitionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.not_null`.
   * @param ctx the parse tree
   */
  enterNot_null?: (ctx: Not_nullContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.not_null`.
   * @param ctx the parse tree
   */
  exitNot_null?: (ctx: Not_nullContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_procedure`.
   * @param ctx the parse tree
   */
  enterCreate_procedure?: (ctx: Create_procedureContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_procedure`.
   * @param ctx the parse tree
   */
  exitCreate_procedure?: (ctx: Create_procedureContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_replication_group`.
   * @param ctx the parse tree
   */
  enterCreate_replication_group?: (ctx: Create_replication_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_replication_group`.
   * @param ctx the parse tree
   */
  exitCreate_replication_group?: (ctx: Create_replication_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_resource_monitor`.
   * @param ctx the parse tree
   */
  enterCreate_resource_monitor?: (ctx: Create_resource_monitorContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_resource_monitor`.
   * @param ctx the parse tree
   */
  exitCreate_resource_monitor?: (ctx: Create_resource_monitorContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_role`.
   * @param ctx the parse tree
   */
  enterCreate_role?: (ctx: Create_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_role`.
   * @param ctx the parse tree
   */
  exitCreate_role?: (ctx: Create_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_row_access_policy`.
   * @param ctx the parse tree
   */
  enterCreate_row_access_policy?: (ctx: Create_row_access_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_row_access_policy`.
   * @param ctx the parse tree
   */
  exitCreate_row_access_policy?: (ctx: Create_row_access_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_schema`.
   * @param ctx the parse tree
   */
  enterCreate_schema?: (ctx: Create_schemaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_schema`.
   * @param ctx the parse tree
   */
  exitCreate_schema?: (ctx: Create_schemaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_secret`.
   * @param ctx the parse tree
   */
  enterCreate_secret?: (ctx: Create_secretContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_secret`.
   * @param ctx the parse tree
   */
  exitCreate_secret?: (ctx: Create_secretContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_security_integration_external_oauth`.
   * @param ctx the parse tree
   */
  enterCreate_security_integration_external_oauth?: (
    ctx: Create_security_integration_external_oauthContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_security_integration_external_oauth`.
   * @param ctx the parse tree
   */
  exitCreate_security_integration_external_oauth?: (
    ctx: Create_security_integration_external_oauthContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.implicit_none`.
   * @param ctx the parse tree
   */
  enterImplicit_none?: (ctx: Implicit_noneContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.implicit_none`.
   * @param ctx the parse tree
   */
  exitImplicit_none?: (ctx: Implicit_noneContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_security_integration_snowflake_oauth`.
   * @param ctx the parse tree
   */
  enterCreate_security_integration_snowflake_oauth?: (
    ctx: Create_security_integration_snowflake_oauthContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_security_integration_snowflake_oauth`.
   * @param ctx the parse tree
   */
  exitCreate_security_integration_snowflake_oauth?: (
    ctx: Create_security_integration_snowflake_oauthContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_security_integration_saml2`.
   * @param ctx the parse tree
   */
  enterCreate_security_integration_saml2?: (ctx: Create_security_integration_saml2Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_security_integration_saml2`.
   * @param ctx the parse tree
   */
  exitCreate_security_integration_saml2?: (ctx: Create_security_integration_saml2Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_security_integration_scim`.
   * @param ctx the parse tree
   */
  enterCreate_security_integration_scim?: (ctx: Create_security_integration_scimContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_security_integration_scim`.
   * @param ctx the parse tree
   */
  exitCreate_security_integration_scim?: (ctx: Create_security_integration_scimContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.network_policy`.
   * @param ctx the parse tree
   */
  enterNetwork_policy?: (ctx: Network_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.network_policy`.
   * @param ctx the parse tree
   */
  exitNetwork_policy?: (ctx: Network_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.partner_application`.
   * @param ctx the parse tree
   */
  enterPartner_application?: (ctx: Partner_applicationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.partner_application`.
   * @param ctx the parse tree
   */
  exitPartner_application?: (ctx: Partner_applicationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.start_with`.
   * @param ctx the parse tree
   */
  enterStart_with?: (ctx: Start_withContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.start_with`.
   * @param ctx the parse tree
   */
  exitStart_with?: (ctx: Start_withContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.increment_by`.
   * @param ctx the parse tree
   */
  enterIncrement_by?: (ctx: Increment_byContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.increment_by`.
   * @param ctx the parse tree
   */
  exitIncrement_by?: (ctx: Increment_byContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_sequence`.
   * @param ctx the parse tree
   */
  enterCreate_sequence?: (ctx: Create_sequenceContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_sequence`.
   * @param ctx the parse tree
   */
  exitCreate_sequence?: (ctx: Create_sequenceContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_session_policy`.
   * @param ctx the parse tree
   */
  enterCreate_session_policy?: (ctx: Create_session_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_session_policy`.
   * @param ctx the parse tree
   */
  exitCreate_session_policy?: (ctx: Create_session_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.session_policy_params`.
   * @param ctx the parse tree
   */
  enterSession_policy_params?: (ctx: Session_policy_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.session_policy_params`.
   * @param ctx the parse tree
   */
  exitSession_policy_params?: (ctx: Session_policy_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.session_policy_param_name`.
   * @param ctx the parse tree
   */
  enterSession_policy_param_name?: (ctx: Session_policy_param_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.session_policy_param_name`.
   * @param ctx the parse tree
   */
  exitSession_policy_param_name?: (ctx: Session_policy_param_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_password_policy`.
   * @param ctx the parse tree
   */
  enterCreate_password_policy?: (ctx: Create_password_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_password_policy`.
   * @param ctx the parse tree
   */
  exitCreate_password_policy?: (ctx: Create_password_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.password_policy_params`.
   * @param ctx the parse tree
   */
  enterPassword_policy_params?: (ctx: Password_policy_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.password_policy_params`.
   * @param ctx the parse tree
   */
  exitPassword_policy_params?: (ctx: Password_policy_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.password_policy_param_name`.
   * @param ctx the parse tree
   */
  enterPassword_policy_param_name?: (ctx: Password_policy_param_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.password_policy_param_name`.
   * @param ctx the parse tree
   */
  exitPassword_policy_param_name?: (ctx: Password_policy_param_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_share`.
   * @param ctx the parse tree
   */
  enterCreate_share?: (ctx: Create_shareContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_share`.
   * @param ctx the parse tree
   */
  exitCreate_share?: (ctx: Create_shareContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.character`.
   * @param ctx the parse tree
   */
  enterCharacter?: (ctx: CharacterContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.character`.
   * @param ctx the parse tree
   */
  exitCharacter?: (ctx: CharacterContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.format_type_options`.
   * @param ctx the parse tree
   */
  enterFormat_type_options?: (ctx: Format_type_optionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.format_type_options`.
   * @param ctx the parse tree
   */
  exitFormat_type_options?: (ctx: Format_type_optionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.copy_options`.
   * @param ctx the parse tree
   */
  enterCopy_options?: (ctx: Copy_optionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.copy_options`.
   * @param ctx the parse tree
   */
  exitCopy_options?: (ctx: Copy_optionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_encryption_opts_internal`.
   * @param ctx the parse tree
   */
  enterStage_encryption_opts_internal?: (ctx: Stage_encryption_opts_internalContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_encryption_opts_internal`.
   * @param ctx the parse tree
   */
  exitStage_encryption_opts_internal?: (ctx: Stage_encryption_opts_internalContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_type`.
   * @param ctx the parse tree
   */
  enterStage_type?: (ctx: Stage_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_type`.
   * @param ctx the parse tree
   */
  exitStage_type?: (ctx: Stage_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_master_key`.
   * @param ctx the parse tree
   */
  enterStage_master_key?: (ctx: Stage_master_keyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_master_key`.
   * @param ctx the parse tree
   */
  exitStage_master_key?: (ctx: Stage_master_keyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_kms_key`.
   * @param ctx the parse tree
   */
  enterStage_kms_key?: (ctx: Stage_kms_keyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_kms_key`.
   * @param ctx the parse tree
   */
  exitStage_kms_key?: (ctx: Stage_kms_keyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_encryption_opts_aws`.
   * @param ctx the parse tree
   */
  enterStage_encryption_opts_aws?: (ctx: Stage_encryption_opts_awsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_encryption_opts_aws`.
   * @param ctx the parse tree
   */
  exitStage_encryption_opts_aws?: (ctx: Stage_encryption_opts_awsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.aws_token`.
   * @param ctx the parse tree
   */
  enterAws_token?: (ctx: Aws_tokenContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.aws_token`.
   * @param ctx the parse tree
   */
  exitAws_token?: (ctx: Aws_tokenContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.aws_key_id`.
   * @param ctx the parse tree
   */
  enterAws_key_id?: (ctx: Aws_key_idContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.aws_key_id`.
   * @param ctx the parse tree
   */
  exitAws_key_id?: (ctx: Aws_key_idContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.aws_secret_key`.
   * @param ctx the parse tree
   */
  enterAws_secret_key?: (ctx: Aws_secret_keyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.aws_secret_key`.
   * @param ctx the parse tree
   */
  exitAws_secret_key?: (ctx: Aws_secret_keyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.aws_role`.
   * @param ctx the parse tree
   */
  enterAws_role?: (ctx: Aws_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.aws_role`.
   * @param ctx the parse tree
   */
  exitAws_role?: (ctx: Aws_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.azure_encryption_value`.
   * @param ctx the parse tree
   */
  enterAzure_encryption_value?: (ctx: Azure_encryption_valueContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.azure_encryption_value`.
   * @param ctx the parse tree
   */
  exitAzure_encryption_value?: (ctx: Azure_encryption_valueContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_encryption_opts_az`.
   * @param ctx the parse tree
   */
  enterStage_encryption_opts_az?: (ctx: Stage_encryption_opts_azContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_encryption_opts_az`.
   * @param ctx the parse tree
   */
  exitStage_encryption_opts_az?: (ctx: Stage_encryption_opts_azContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.storage_integration_eq_id`.
   * @param ctx the parse tree
   */
  enterStorage_integration_eq_id?: (ctx: Storage_integration_eq_idContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.storage_integration_eq_id`.
   * @param ctx the parse tree
   */
  exitStorage_integration_eq_id?: (ctx: Storage_integration_eq_idContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.az_credential_or_storage_integration`.
   * @param ctx the parse tree
   */
  enterAz_credential_or_storage_integration?: (
    ctx: Az_credential_or_storage_integrationContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.az_credential_or_storage_integration`.
   * @param ctx the parse tree
   */
  exitAz_credential_or_storage_integration?: (
    ctx: Az_credential_or_storage_integrationContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.gcp_encryption_value`.
   * @param ctx the parse tree
   */
  enterGcp_encryption_value?: (ctx: Gcp_encryption_valueContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.gcp_encryption_value`.
   * @param ctx the parse tree
   */
  exitGcp_encryption_value?: (ctx: Gcp_encryption_valueContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stage_encryption_opts_gcp`.
   * @param ctx the parse tree
   */
  enterStage_encryption_opts_gcp?: (ctx: Stage_encryption_opts_gcpContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stage_encryption_opts_gcp`.
   * @param ctx the parse tree
   */
  exitStage_encryption_opts_gcp?: (ctx: Stage_encryption_opts_gcpContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.aws_credential_or_storage_integration`.
   * @param ctx the parse tree
   */
  enterAws_credential_or_storage_integration?: (
    ctx: Aws_credential_or_storage_integrationContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.aws_credential_or_storage_integration`.
   * @param ctx the parse tree
   */
  exitAws_credential_or_storage_integration?: (
    ctx: Aws_credential_or_storage_integrationContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.external_stage_params`.
   * @param ctx the parse tree
   */
  enterExternal_stage_params?: (ctx: External_stage_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.external_stage_params`.
   * @param ctx the parse tree
   */
  exitExternal_stage_params?: (ctx: External_stage_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.true_false`.
   * @param ctx the parse tree
   */
  enterTrue_false?: (ctx: True_falseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.true_false`.
   * @param ctx the parse tree
   */
  exitTrue_false?: (ctx: True_falseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.enable`.
   * @param ctx the parse tree
   */
  enterEnable?: (ctx: EnableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.enable`.
   * @param ctx the parse tree
   */
  exitEnable?: (ctx: EnableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.refresh_on_create`.
   * @param ctx the parse tree
   */
  enterRefresh_on_create?: (ctx: Refresh_on_createContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.refresh_on_create`.
   * @param ctx the parse tree
   */
  exitRefresh_on_create?: (ctx: Refresh_on_createContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.auto_refresh`.
   * @param ctx the parse tree
   */
  enterAuto_refresh?: (ctx: Auto_refreshContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.auto_refresh`.
   * @param ctx the parse tree
   */
  exitAuto_refresh?: (ctx: Auto_refreshContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.notification_integration`.
   * @param ctx the parse tree
   */
  enterNotification_integration?: (ctx: Notification_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.notification_integration`.
   * @param ctx the parse tree
   */
  exitNotification_integration?: (ctx: Notification_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.directory_table_internal_params`.
   * @param ctx the parse tree
   */
  enterDirectory_table_internal_params?: (ctx: Directory_table_internal_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.directory_table_internal_params`.
   * @param ctx the parse tree
   */
  exitDirectory_table_internal_params?: (ctx: Directory_table_internal_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.directory_table_external_params`.
   * @param ctx the parse tree
   */
  enterDirectory_table_external_params?: (ctx: Directory_table_external_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.directory_table_external_params`.
   * @param ctx the parse tree
   */
  exitDirectory_table_external_params?: (ctx: Directory_table_external_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_stage`.
   * @param ctx the parse tree
   */
  enterCreate_stage?: (ctx: Create_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_stage`.
   * @param ctx the parse tree
   */
  exitCreate_stage?: (ctx: Create_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alter_stage`.
   * @param ctx the parse tree
   */
  enterAlter_stage?: (ctx: Alter_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alter_stage`.
   * @param ctx the parse tree
   */
  exitAlter_stage?: (ctx: Alter_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_stage`.
   * @param ctx the parse tree
   */
  enterDrop_stage?: (ctx: Drop_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_stage`.
   * @param ctx the parse tree
   */
  exitDrop_stage?: (ctx: Drop_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_stage`.
   * @param ctx the parse tree
   */
  enterDescribe_stage?: (ctx: Describe_stageContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_stage`.
   * @param ctx the parse tree
   */
  exitDescribe_stage?: (ctx: Describe_stageContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_stages`.
   * @param ctx the parse tree
   */
  enterShow_stages?: (ctx: Show_stagesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_stages`.
   * @param ctx the parse tree
   */
  exitShow_stages?: (ctx: Show_stagesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cloud_provider_params`.
   * @param ctx the parse tree
   */
  enterCloud_provider_params?: (ctx: Cloud_provider_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cloud_provider_params`.
   * @param ctx the parse tree
   */
  exitCloud_provider_params?: (ctx: Cloud_provider_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cloud_provider_params2`.
   * @param ctx the parse tree
   */
  enterCloud_provider_params2?: (ctx: Cloud_provider_params2Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cloud_provider_params2`.
   * @param ctx the parse tree
   */
  exitCloud_provider_params2?: (ctx: Cloud_provider_params2Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cloud_provider_params3`.
   * @param ctx the parse tree
   */
  enterCloud_provider_params3?: (ctx: Cloud_provider_params3Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cloud_provider_params3`.
   * @param ctx the parse tree
   */
  exitCloud_provider_params3?: (ctx: Cloud_provider_params3Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_storage_integration`.
   * @param ctx the parse tree
   */
  enterCreate_storage_integration?: (ctx: Create_storage_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_storage_integration`.
   * @param ctx the parse tree
   */
  exitCreate_storage_integration?: (ctx: Create_storage_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.copy_grants`.
   * @param ctx the parse tree
   */
  enterCopy_grants?: (ctx: Copy_grantsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.copy_grants`.
   * @param ctx the parse tree
   */
  exitCopy_grants?: (ctx: Copy_grantsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.append_only`.
   * @param ctx the parse tree
   */
  enterAppend_only?: (ctx: Append_onlyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.append_only`.
   * @param ctx the parse tree
   */
  exitAppend_only?: (ctx: Append_onlyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.insert_only`.
   * @param ctx the parse tree
   */
  enterInsert_only?: (ctx: Insert_onlyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.insert_only`.
   * @param ctx the parse tree
   */
  exitInsert_only?: (ctx: Insert_onlyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_initial_rows`.
   * @param ctx the parse tree
   */
  enterShow_initial_rows?: (ctx: Show_initial_rowsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_initial_rows`.
   * @param ctx the parse tree
   */
  exitShow_initial_rows?: (ctx: Show_initial_rowsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.stream_time`.
   * @param ctx the parse tree
   */
  enterStream_time?: (ctx: Stream_timeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.stream_time`.
   * @param ctx the parse tree
   */
  exitStream_time?: (ctx: Stream_timeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_stream`.
   * @param ctx the parse tree
   */
  enterCreate_stream?: (ctx: Create_streamContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_stream`.
   * @param ctx the parse tree
   */
  exitCreate_stream?: (ctx: Create_streamContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.temporary`.
   * @param ctx the parse tree
   */
  enterTemporary?: (ctx: TemporaryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.temporary`.
   * @param ctx the parse tree
   */
  exitTemporary?: (ctx: TemporaryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_type`.
   * @param ctx the parse tree
   */
  enterTable_type?: (ctx: Table_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_type`.
   * @param ctx the parse tree
   */
  exitTable_type?: (ctx: Table_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.with_tags`.
   * @param ctx the parse tree
   */
  enterWith_tags?: (ctx: With_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.with_tags`.
   * @param ctx the parse tree
   */
  exitWith_tags?: (ctx: With_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.with_row_access_policy`.
   * @param ctx the parse tree
   */
  enterWith_row_access_policy?: (ctx: With_row_access_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.with_row_access_policy`.
   * @param ctx the parse tree
   */
  exitWith_row_access_policy?: (ctx: With_row_access_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cluster_by`.
   * @param ctx the parse tree
   */
  enterCluster_by?: (ctx: Cluster_byContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cluster_by`.
   * @param ctx the parse tree
   */
  exitCluster_by?: (ctx: Cluster_byContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.change_tracking`.
   * @param ctx the parse tree
   */
  enterChange_tracking?: (ctx: Change_trackingContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.change_tracking`.
   * @param ctx the parse tree
   */
  exitChange_tracking?: (ctx: Change_trackingContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.with_masking_policy`.
   * @param ctx the parse tree
   */
  enterWith_masking_policy?: (ctx: With_masking_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.with_masking_policy`.
   * @param ctx the parse tree
   */
  exitWith_masking_policy?: (ctx: With_masking_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.collate`.
   * @param ctx the parse tree
   */
  enterCollate?: (ctx: CollateContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.collate`.
   * @param ctx the parse tree
   */
  exitCollate?: (ctx: CollateContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.order_noorder`.
   * @param ctx the parse tree
   */
  enterOrder_noorder?: (ctx: Order_noorderContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.order_noorder`.
   * @param ctx the parse tree
   */
  exitOrder_noorder?: (ctx: Order_noorderContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.default_value`.
   * @param ctx the parse tree
   */
  enterDefault_value?: (ctx: Default_valueContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.default_value`.
   * @param ctx the parse tree
   */
  exitDefault_value?: (ctx: Default_valueContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.foreign_key`.
   * @param ctx the parse tree
   */
  enterForeign_key?: (ctx: Foreign_keyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.foreign_key`.
   * @param ctx the parse tree
   */
  exitForeign_key?: (ctx: Foreign_keyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.primary_key`.
   * @param ctx the parse tree
   */
  enterPrimary_key?: (ctx: Primary_keyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.primary_key`.
   * @param ctx the parse tree
   */
  exitPrimary_key?: (ctx: Primary_keyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.out_of_line_constraint`.
   * @param ctx the parse tree
   */
  enterOut_of_line_constraint?: (ctx: Out_of_line_constraintContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.out_of_line_constraint`.
   * @param ctx the parse tree
   */
  exitOut_of_line_constraint?: (ctx: Out_of_line_constraintContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.full_col_decl`.
   * @param ctx the parse tree
   */
  enterFull_col_decl?: (ctx: Full_col_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.full_col_decl`.
   * @param ctx the parse tree
   */
  exitFull_col_decl?: (ctx: Full_col_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.materialized_col_decl`.
   * @param ctx the parse tree
   */
  enterMaterialized_col_decl?: (ctx: Materialized_col_declContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.materialized_col_decl`.
   * @param ctx the parse tree
   */
  exitMaterialized_col_decl?: (ctx: Materialized_col_declContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.materialized_col_decl_list`.
   * @param ctx the parse tree
   */
  enterMaterialized_col_decl_list?: (ctx: Materialized_col_decl_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.materialized_col_decl_list`.
   * @param ctx the parse tree
   */
  exitMaterialized_col_decl_list?: (ctx: Materialized_col_decl_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_decl_item`.
   * @param ctx the parse tree
   */
  enterColumn_decl_item?: (ctx: Column_decl_itemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_decl_item`.
   * @param ctx the parse tree
   */
  exitColumn_decl_item?: (ctx: Column_decl_itemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_decl_item_list`.
   * @param ctx the parse tree
   */
  enterColumn_decl_item_list?: (ctx: Column_decl_item_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_decl_item_list`.
   * @param ctx the parse tree
   */
  exitColumn_decl_item_list?: (ctx: Column_decl_item_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_table`.
   * @param ctx the parse tree
   */
  enterCreate_table?: (ctx: Create_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_table`.
   * @param ctx the parse tree
   */
  exitCreate_table?: (ctx: Create_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_decl_item_list_paren`.
   * @param ctx the parse tree
   */
  enterColumn_decl_item_list_paren?: (ctx: Column_decl_item_list_parenContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_decl_item_list_paren`.
   * @param ctx the parse tree
   */
  exitColumn_decl_item_list_paren?: (ctx: Column_decl_item_list_parenContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_table_clause`.
   * @param ctx the parse tree
   */
  enterCreate_table_clause?: (ctx: Create_table_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_table_clause`.
   * @param ctx the parse tree
   */
  exitCreate_table_clause?: (ctx: Create_table_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_table_as_select`.
   * @param ctx the parse tree
   */
  enterCreate_table_as_select?: (ctx: Create_table_as_selectContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_table_as_select`.
   * @param ctx the parse tree
   */
  exitCreate_table_as_select?: (ctx: Create_table_as_selectContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_table_like`.
   * @param ctx the parse tree
   */
  enterCreate_table_like?: (ctx: Create_table_likeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_table_like`.
   * @param ctx the parse tree
   */
  exitCreate_table_like?: (ctx: Create_table_likeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_tag`.
   * @param ctx the parse tree
   */
  enterCreate_tag?: (ctx: Create_tagContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_tag`.
   * @param ctx the parse tree
   */
  exitCreate_tag?: (ctx: Create_tagContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.tag_allowed_values`.
   * @param ctx the parse tree
   */
  enterTag_allowed_values?: (ctx: Tag_allowed_valuesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.tag_allowed_values`.
   * @param ctx the parse tree
   */
  exitTag_allowed_values?: (ctx: Tag_allowed_valuesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.session_parameter`.
   * @param ctx the parse tree
   */
  enterSession_parameter?: (ctx: Session_parameterContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.session_parameter`.
   * @param ctx the parse tree
   */
  exitSession_parameter?: (ctx: Session_parameterContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.session_parameter_list`.
   * @param ctx the parse tree
   */
  enterSession_parameter_list?: (ctx: Session_parameter_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.session_parameter_list`.
   * @param ctx the parse tree
   */
  exitSession_parameter_list?: (ctx: Session_parameter_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.session_params_list`.
   * @param ctx the parse tree
   */
  enterSession_params_list?: (ctx: Session_params_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.session_params_list`.
   * @param ctx the parse tree
   */
  exitSession_params_list?: (ctx: Session_params_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_task`.
   * @param ctx the parse tree
   */
  enterCreate_task?: (ctx: Create_taskContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_task`.
   * @param ctx the parse tree
   */
  exitCreate_task?: (ctx: Create_taskContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_parameters`.
   * @param ctx the parse tree
   */
  enterTask_parameters?: (ctx: Task_parametersContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_parameters`.
   * @param ctx the parse tree
   */
  exitTask_parameters?: (ctx: Task_parametersContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_compute`.
   * @param ctx the parse tree
   */
  enterTask_compute?: (ctx: Task_computeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_compute`.
   * @param ctx the parse tree
   */
  exitTask_compute?: (ctx: Task_computeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_schedule`.
   * @param ctx the parse tree
   */
  enterTask_schedule?: (ctx: Task_scheduleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_schedule`.
   * @param ctx the parse tree
   */
  exitTask_schedule?: (ctx: Task_scheduleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_timeout`.
   * @param ctx the parse tree
   */
  enterTask_timeout?: (ctx: Task_timeoutContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_timeout`.
   * @param ctx the parse tree
   */
  exitTask_timeout?: (ctx: Task_timeoutContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_suspend_after_failure_number`.
   * @param ctx the parse tree
   */
  enterTask_suspend_after_failure_number?: (ctx: Task_suspend_after_failure_numberContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_suspend_after_failure_number`.
   * @param ctx the parse tree
   */
  exitTask_suspend_after_failure_number?: (ctx: Task_suspend_after_failure_numberContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_error_integration`.
   * @param ctx the parse tree
   */
  enterTask_error_integration?: (ctx: Task_error_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_error_integration`.
   * @param ctx the parse tree
   */
  exitTask_error_integration?: (ctx: Task_error_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.task_overlap`.
   * @param ctx the parse tree
   */
  enterTask_overlap?: (ctx: Task_overlapContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.task_overlap`.
   * @param ctx the parse tree
   */
  exitTask_overlap?: (ctx: Task_overlapContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.sql`.
   * @param ctx the parse tree
   */
  enterSql?: (ctx: SqlContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.sql`.
   * @param ctx the parse tree
   */
  exitSql?: (ctx: SqlContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.call`.
   * @param ctx the parse tree
   */
  enterCall?: (ctx: CallContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.call`.
   * @param ctx the parse tree
   */
  exitCall?: (ctx: CallContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_user`.
   * @param ctx the parse tree
   */
  enterCreate_user?: (ctx: Create_userContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_user`.
   * @param ctx the parse tree
   */
  exitCreate_user?: (ctx: Create_userContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.view_col`.
   * @param ctx the parse tree
   */
  enterView_col?: (ctx: View_colContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.view_col`.
   * @param ctx the parse tree
   */
  exitView_col?: (ctx: View_colContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_view`.
   * @param ctx the parse tree
   */
  enterCreate_view?: (ctx: Create_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_view`.
   * @param ctx the parse tree
   */
  exitCreate_view?: (ctx: Create_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.create_warehouse`.
   * @param ctx the parse tree
   */
  enterCreate_warehouse?: (ctx: Create_warehouseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.create_warehouse`.
   * @param ctx the parse tree
   */
  exitCreate_warehouse?: (ctx: Create_warehouseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.wh_common_size`.
   * @param ctx the parse tree
   */
  enterWh_common_size?: (ctx: Wh_common_sizeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.wh_common_size`.
   * @param ctx the parse tree
   */
  exitWh_common_size?: (ctx: Wh_common_sizeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.wh_extra_size`.
   * @param ctx the parse tree
   */
  enterWh_extra_size?: (ctx: Wh_extra_sizeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.wh_extra_size`.
   * @param ctx the parse tree
   */
  exitWh_extra_size?: (ctx: Wh_extra_sizeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.wh_properties`.
   * @param ctx the parse tree
   */
  enterWh_properties?: (ctx: Wh_propertiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.wh_properties`.
   * @param ctx the parse tree
   */
  exitWh_properties?: (ctx: Wh_propertiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.wh_params`.
   * @param ctx the parse tree
   */
  enterWh_params?: (ctx: Wh_paramsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.wh_params`.
   * @param ctx the parse tree
   */
  exitWh_params?: (ctx: Wh_paramsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.trigger_definition`.
   * @param ctx the parse tree
   */
  enterTrigger_definition?: (ctx: Trigger_definitionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.trigger_definition`.
   * @param ctx the parse tree
   */
  exitTrigger_definition?: (ctx: Trigger_definitionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_type_name`.
   * @param ctx the parse tree
   */
  enterObject_type_name?: (ctx: Object_type_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_type_name`.
   * @param ctx the parse tree
   */
  exitObject_type_name?: (ctx: Object_type_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_type_plural`.
   * @param ctx the parse tree
   */
  enterObject_type_plural?: (ctx: Object_type_pluralContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_type_plural`.
   * @param ctx the parse tree
   */
  exitObject_type_plural?: (ctx: Object_type_pluralContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_command`.
   * @param ctx the parse tree
   */
  enterDrop_command?: (ctx: Drop_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_command`.
   * @param ctx the parse tree
   */
  exitDrop_command?: (ctx: Drop_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_object`.
   * @param ctx the parse tree
   */
  enterDrop_object?: (ctx: Drop_objectContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_object`.
   * @param ctx the parse tree
   */
  exitDrop_object?: (ctx: Drop_objectContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_alert`.
   * @param ctx the parse tree
   */
  enterDrop_alert?: (ctx: Drop_alertContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_alert`.
   * @param ctx the parse tree
   */
  exitDrop_alert?: (ctx: Drop_alertContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_connection`.
   * @param ctx the parse tree
   */
  enterDrop_connection?: (ctx: Drop_connectionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_connection`.
   * @param ctx the parse tree
   */
  exitDrop_connection?: (ctx: Drop_connectionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_database`.
   * @param ctx the parse tree
   */
  enterDrop_database?: (ctx: Drop_databaseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_database`.
   * @param ctx the parse tree
   */
  exitDrop_database?: (ctx: Drop_databaseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_dynamic_table`.
   * @param ctx the parse tree
   */
  enterDrop_dynamic_table?: (ctx: Drop_dynamic_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_dynamic_table`.
   * @param ctx the parse tree
   */
  exitDrop_dynamic_table?: (ctx: Drop_dynamic_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_external_table`.
   * @param ctx the parse tree
   */
  enterDrop_external_table?: (ctx: Drop_external_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_external_table`.
   * @param ctx the parse tree
   */
  exitDrop_external_table?: (ctx: Drop_external_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_failover_group`.
   * @param ctx the parse tree
   */
  enterDrop_failover_group?: (ctx: Drop_failover_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_failover_group`.
   * @param ctx the parse tree
   */
  exitDrop_failover_group?: (ctx: Drop_failover_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_file_format`.
   * @param ctx the parse tree
   */
  enterDrop_file_format?: (ctx: Drop_file_formatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_file_format`.
   * @param ctx the parse tree
   */
  exitDrop_file_format?: (ctx: Drop_file_formatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_function`.
   * @param ctx the parse tree
   */
  enterDrop_function?: (ctx: Drop_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_function`.
   * @param ctx the parse tree
   */
  exitDrop_function?: (ctx: Drop_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_git_repository`.
   * @param ctx the parse tree
   */
  enterDrop_git_repository?: (ctx: Drop_git_repositoryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_git_repository`.
   * @param ctx the parse tree
   */
  exitDrop_git_repository?: (ctx: Drop_git_repositoryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_integration`.
   * @param ctx the parse tree
   */
  enterDrop_integration?: (ctx: Drop_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_integration`.
   * @param ctx the parse tree
   */
  exitDrop_integration?: (ctx: Drop_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_managed_account`.
   * @param ctx the parse tree
   */
  enterDrop_managed_account?: (ctx: Drop_managed_accountContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_managed_account`.
   * @param ctx the parse tree
   */
  exitDrop_managed_account?: (ctx: Drop_managed_accountContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_masking_policy`.
   * @param ctx the parse tree
   */
  enterDrop_masking_policy?: (ctx: Drop_masking_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_masking_policy`.
   * @param ctx the parse tree
   */
  exitDrop_masking_policy?: (ctx: Drop_masking_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_materialized_view`.
   * @param ctx the parse tree
   */
  enterDrop_materialized_view?: (ctx: Drop_materialized_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_materialized_view`.
   * @param ctx the parse tree
   */
  exitDrop_materialized_view?: (ctx: Drop_materialized_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_network_policy`.
   * @param ctx the parse tree
   */
  enterDrop_network_policy?: (ctx: Drop_network_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_network_policy`.
   * @param ctx the parse tree
   */
  exitDrop_network_policy?: (ctx: Drop_network_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_pipe`.
   * @param ctx the parse tree
   */
  enterDrop_pipe?: (ctx: Drop_pipeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_pipe`.
   * @param ctx the parse tree
   */
  exitDrop_pipe?: (ctx: Drop_pipeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_procedure`.
   * @param ctx the parse tree
   */
  enterDrop_procedure?: (ctx: Drop_procedureContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_procedure`.
   * @param ctx the parse tree
   */
  exitDrop_procedure?: (ctx: Drop_procedureContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_replication_group`.
   * @param ctx the parse tree
   */
  enterDrop_replication_group?: (ctx: Drop_replication_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_replication_group`.
   * @param ctx the parse tree
   */
  exitDrop_replication_group?: (ctx: Drop_replication_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_resource_monitor`.
   * @param ctx the parse tree
   */
  enterDrop_resource_monitor?: (ctx: Drop_resource_monitorContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_resource_monitor`.
   * @param ctx the parse tree
   */
  exitDrop_resource_monitor?: (ctx: Drop_resource_monitorContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_role`.
   * @param ctx the parse tree
   */
  enterDrop_role?: (ctx: Drop_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_role`.
   * @param ctx the parse tree
   */
  exitDrop_role?: (ctx: Drop_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_row_access_policy`.
   * @param ctx the parse tree
   */
  enterDrop_row_access_policy?: (ctx: Drop_row_access_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_row_access_policy`.
   * @param ctx the parse tree
   */
  exitDrop_row_access_policy?: (ctx: Drop_row_access_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_schema`.
   * @param ctx the parse tree
   */
  enterDrop_schema?: (ctx: Drop_schemaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_schema`.
   * @param ctx the parse tree
   */
  exitDrop_schema?: (ctx: Drop_schemaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_secret`.
   * @param ctx the parse tree
   */
  enterDrop_secret?: (ctx: Drop_secretContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_secret`.
   * @param ctx the parse tree
   */
  exitDrop_secret?: (ctx: Drop_secretContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_sequence`.
   * @param ctx the parse tree
   */
  enterDrop_sequence?: (ctx: Drop_sequenceContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_sequence`.
   * @param ctx the parse tree
   */
  exitDrop_sequence?: (ctx: Drop_sequenceContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_session_policy`.
   * @param ctx the parse tree
   */
  enterDrop_session_policy?: (ctx: Drop_session_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_session_policy`.
   * @param ctx the parse tree
   */
  exitDrop_session_policy?: (ctx: Drop_session_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_password_policy`.
   * @param ctx the parse tree
   */
  enterDrop_password_policy?: (ctx: Drop_password_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_password_policy`.
   * @param ctx the parse tree
   */
  exitDrop_password_policy?: (ctx: Drop_password_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_share`.
   * @param ctx the parse tree
   */
  enterDrop_share?: (ctx: Drop_shareContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_share`.
   * @param ctx the parse tree
   */
  exitDrop_share?: (ctx: Drop_shareContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_stream`.
   * @param ctx the parse tree
   */
  enterDrop_stream?: (ctx: Drop_streamContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_stream`.
   * @param ctx the parse tree
   */
  exitDrop_stream?: (ctx: Drop_streamContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_table`.
   * @param ctx the parse tree
   */
  enterDrop_table?: (ctx: Drop_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_table`.
   * @param ctx the parse tree
   */
  exitDrop_table?: (ctx: Drop_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_tag`.
   * @param ctx the parse tree
   */
  enterDrop_tag?: (ctx: Drop_tagContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_tag`.
   * @param ctx the parse tree
   */
  exitDrop_tag?: (ctx: Drop_tagContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_task`.
   * @param ctx the parse tree
   */
  enterDrop_task?: (ctx: Drop_taskContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_task`.
   * @param ctx the parse tree
   */
  exitDrop_task?: (ctx: Drop_taskContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_user`.
   * @param ctx the parse tree
   */
  enterDrop_user?: (ctx: Drop_userContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_user`.
   * @param ctx the parse tree
   */
  exitDrop_user?: (ctx: Drop_userContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_view`.
   * @param ctx the parse tree
   */
  enterDrop_view?: (ctx: Drop_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_view`.
   * @param ctx the parse tree
   */
  exitDrop_view?: (ctx: Drop_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.drop_warehouse`.
   * @param ctx the parse tree
   */
  enterDrop_warehouse?: (ctx: Drop_warehouseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.drop_warehouse`.
   * @param ctx the parse tree
   */
  exitDrop_warehouse?: (ctx: Drop_warehouseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cascade_restrict`.
   * @param ctx the parse tree
   */
  enterCascade_restrict?: (ctx: Cascade_restrictContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cascade_restrict`.
   * @param ctx the parse tree
   */
  exitCascade_restrict?: (ctx: Cascade_restrictContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.arg_types`.
   * @param ctx the parse tree
   */
  enterArg_types?: (ctx: Arg_typesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.arg_types`.
   * @param ctx the parse tree
   */
  exitArg_types?: (ctx: Arg_typesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.undrop_command`.
   * @param ctx the parse tree
   */
  enterUndrop_command?: (ctx: Undrop_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.undrop_command`.
   * @param ctx the parse tree
   */
  exitUndrop_command?: (ctx: Undrop_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.undrop_database`.
   * @param ctx the parse tree
   */
  enterUndrop_database?: (ctx: Undrop_databaseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.undrop_database`.
   * @param ctx the parse tree
   */
  exitUndrop_database?: (ctx: Undrop_databaseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.undrop_schema`.
   * @param ctx the parse tree
   */
  enterUndrop_schema?: (ctx: Undrop_schemaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.undrop_schema`.
   * @param ctx the parse tree
   */
  exitUndrop_schema?: (ctx: Undrop_schemaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.undrop_table`.
   * @param ctx the parse tree
   */
  enterUndrop_table?: (ctx: Undrop_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.undrop_table`.
   * @param ctx the parse tree
   */
  exitUndrop_table?: (ctx: Undrop_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.undrop_tag`.
   * @param ctx the parse tree
   */
  enterUndrop_tag?: (ctx: Undrop_tagContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.undrop_tag`.
   * @param ctx the parse tree
   */
  exitUndrop_tag?: (ctx: Undrop_tagContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.use_command`.
   * @param ctx the parse tree
   */
  enterUse_command?: (ctx: Use_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.use_command`.
   * @param ctx the parse tree
   */
  exitUse_command?: (ctx: Use_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.use_database`.
   * @param ctx the parse tree
   */
  enterUse_database?: (ctx: Use_databaseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.use_database`.
   * @param ctx the parse tree
   */
  exitUse_database?: (ctx: Use_databaseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.use_role`.
   * @param ctx the parse tree
   */
  enterUse_role?: (ctx: Use_roleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.use_role`.
   * @param ctx the parse tree
   */
  exitUse_role?: (ctx: Use_roleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.use_schema`.
   * @param ctx the parse tree
   */
  enterUse_schema?: (ctx: Use_schemaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.use_schema`.
   * @param ctx the parse tree
   */
  exitUse_schema?: (ctx: Use_schemaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.use_secondary_roles`.
   * @param ctx the parse tree
   */
  enterUse_secondary_roles?: (ctx: Use_secondary_rolesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.use_secondary_roles`.
   * @param ctx the parse tree
   */
  exitUse_secondary_roles?: (ctx: Use_secondary_rolesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.use_warehouse`.
   * @param ctx the parse tree
   */
  enterUse_warehouse?: (ctx: Use_warehouseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.use_warehouse`.
   * @param ctx the parse tree
   */
  exitUse_warehouse?: (ctx: Use_warehouseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.comment_clause`.
   * @param ctx the parse tree
   */
  enterComment_clause?: (ctx: Comment_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.comment_clause`.
   * @param ctx the parse tree
   */
  exitComment_clause?: (ctx: Comment_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.inline_comment_clause`.
   * @param ctx the parse tree
   */
  enterInline_comment_clause?: (ctx: Inline_comment_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.inline_comment_clause`.
   * @param ctx the parse tree
   */
  exitInline_comment_clause?: (ctx: Inline_comment_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.if_suspended`.
   * @param ctx the parse tree
   */
  enterIf_suspended?: (ctx: If_suspendedContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.if_suspended`.
   * @param ctx the parse tree
   */
  exitIf_suspended?: (ctx: If_suspendedContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.if_exists`.
   * @param ctx the parse tree
   */
  enterIf_exists?: (ctx: If_existsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.if_exists`.
   * @param ctx the parse tree
   */
  exitIf_exists?: (ctx: If_existsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.if_not_exists`.
   * @param ctx the parse tree
   */
  enterIf_not_exists?: (ctx: If_not_existsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.if_not_exists`.
   * @param ctx the parse tree
   */
  exitIf_not_exists?: (ctx: If_not_existsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.or_replace`.
   * @param ctx the parse tree
   */
  enterOr_replace?: (ctx: Or_replaceContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.or_replace`.
   * @param ctx the parse tree
   */
  exitOr_replace?: (ctx: Or_replaceContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.or_alter`.
   * @param ctx the parse tree
   */
  enterOr_alter?: (ctx: Or_alterContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.or_alter`.
   * @param ctx the parse tree
   */
  exitOr_alter?: (ctx: Or_alterContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe`.
   * @param ctx the parse tree
   */
  enterDescribe?: (ctx: DescribeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe`.
   * @param ctx the parse tree
   */
  exitDescribe?: (ctx: DescribeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_command`.
   * @param ctx the parse tree
   */
  enterDescribe_command?: (ctx: Describe_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_command`.
   * @param ctx the parse tree
   */
  exitDescribe_command?: (ctx: Describe_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_alert`.
   * @param ctx the parse tree
   */
  enterDescribe_alert?: (ctx: Describe_alertContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_alert`.
   * @param ctx the parse tree
   */
  exitDescribe_alert?: (ctx: Describe_alertContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_database`.
   * @param ctx the parse tree
   */
  enterDescribe_database?: (ctx: Describe_databaseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_database`.
   * @param ctx the parse tree
   */
  exitDescribe_database?: (ctx: Describe_databaseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_dynamic_table`.
   * @param ctx the parse tree
   */
  enterDescribe_dynamic_table?: (ctx: Describe_dynamic_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_dynamic_table`.
   * @param ctx the parse tree
   */
  exitDescribe_dynamic_table?: (ctx: Describe_dynamic_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_event_table`.
   * @param ctx the parse tree
   */
  enterDescribe_event_table?: (ctx: Describe_event_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_event_table`.
   * @param ctx the parse tree
   */
  exitDescribe_event_table?: (ctx: Describe_event_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_external_table`.
   * @param ctx the parse tree
   */
  enterDescribe_external_table?: (ctx: Describe_external_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_external_table`.
   * @param ctx the parse tree
   */
  exitDescribe_external_table?: (ctx: Describe_external_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_file_format`.
   * @param ctx the parse tree
   */
  enterDescribe_file_format?: (ctx: Describe_file_formatContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_file_format`.
   * @param ctx the parse tree
   */
  exitDescribe_file_format?: (ctx: Describe_file_formatContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_function`.
   * @param ctx the parse tree
   */
  enterDescribe_function?: (ctx: Describe_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_function`.
   * @param ctx the parse tree
   */
  exitDescribe_function?: (ctx: Describe_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_git_repository`.
   * @param ctx the parse tree
   */
  enterDescribe_git_repository?: (ctx: Describe_git_repositoryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_git_repository`.
   * @param ctx the parse tree
   */
  exitDescribe_git_repository?: (ctx: Describe_git_repositoryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_integration`.
   * @param ctx the parse tree
   */
  enterDescribe_integration?: (ctx: Describe_integrationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_integration`.
   * @param ctx the parse tree
   */
  exitDescribe_integration?: (ctx: Describe_integrationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_masking_policy`.
   * @param ctx the parse tree
   */
  enterDescribe_masking_policy?: (ctx: Describe_masking_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_masking_policy`.
   * @param ctx the parse tree
   */
  exitDescribe_masking_policy?: (ctx: Describe_masking_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_materialized_view`.
   * @param ctx the parse tree
   */
  enterDescribe_materialized_view?: (ctx: Describe_materialized_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_materialized_view`.
   * @param ctx the parse tree
   */
  exitDescribe_materialized_view?: (ctx: Describe_materialized_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_network_policy`.
   * @param ctx the parse tree
   */
  enterDescribe_network_policy?: (ctx: Describe_network_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_network_policy`.
   * @param ctx the parse tree
   */
  exitDescribe_network_policy?: (ctx: Describe_network_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_pipe`.
   * @param ctx the parse tree
   */
  enterDescribe_pipe?: (ctx: Describe_pipeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_pipe`.
   * @param ctx the parse tree
   */
  exitDescribe_pipe?: (ctx: Describe_pipeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_procedure`.
   * @param ctx the parse tree
   */
  enterDescribe_procedure?: (ctx: Describe_procedureContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_procedure`.
   * @param ctx the parse tree
   */
  exitDescribe_procedure?: (ctx: Describe_procedureContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_result`.
   * @param ctx the parse tree
   */
  enterDescribe_result?: (ctx: Describe_resultContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_result`.
   * @param ctx the parse tree
   */
  exitDescribe_result?: (ctx: Describe_resultContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_row_access_policy`.
   * @param ctx the parse tree
   */
  enterDescribe_row_access_policy?: (ctx: Describe_row_access_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_row_access_policy`.
   * @param ctx the parse tree
   */
  exitDescribe_row_access_policy?: (ctx: Describe_row_access_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_schema`.
   * @param ctx the parse tree
   */
  enterDescribe_schema?: (ctx: Describe_schemaContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_schema`.
   * @param ctx the parse tree
   */
  exitDescribe_schema?: (ctx: Describe_schemaContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_search_optimization`.
   * @param ctx the parse tree
   */
  enterDescribe_search_optimization?: (ctx: Describe_search_optimizationContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_search_optimization`.
   * @param ctx the parse tree
   */
  exitDescribe_search_optimization?: (ctx: Describe_search_optimizationContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_sequence`.
   * @param ctx the parse tree
   */
  enterDescribe_sequence?: (ctx: Describe_sequenceContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_sequence`.
   * @param ctx the parse tree
   */
  exitDescribe_sequence?: (ctx: Describe_sequenceContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_session_policy`.
   * @param ctx the parse tree
   */
  enterDescribe_session_policy?: (ctx: Describe_session_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_session_policy`.
   * @param ctx the parse tree
   */
  exitDescribe_session_policy?: (ctx: Describe_session_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_password_policy`.
   * @param ctx the parse tree
   */
  enterDescribe_password_policy?: (ctx: Describe_password_policyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_password_policy`.
   * @param ctx the parse tree
   */
  exitDescribe_password_policy?: (ctx: Describe_password_policyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_share`.
   * @param ctx the parse tree
   */
  enterDescribe_share?: (ctx: Describe_shareContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_share`.
   * @param ctx the parse tree
   */
  exitDescribe_share?: (ctx: Describe_shareContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_stream`.
   * @param ctx the parse tree
   */
  enterDescribe_stream?: (ctx: Describe_streamContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_stream`.
   * @param ctx the parse tree
   */
  exitDescribe_stream?: (ctx: Describe_streamContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_table`.
   * @param ctx the parse tree
   */
  enterDescribe_table?: (ctx: Describe_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_table`.
   * @param ctx the parse tree
   */
  exitDescribe_table?: (ctx: Describe_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_task`.
   * @param ctx the parse tree
   */
  enterDescribe_task?: (ctx: Describe_taskContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_task`.
   * @param ctx the parse tree
   */
  exitDescribe_task?: (ctx: Describe_taskContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_transaction`.
   * @param ctx the parse tree
   */
  enterDescribe_transaction?: (ctx: Describe_transactionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_transaction`.
   * @param ctx the parse tree
   */
  exitDescribe_transaction?: (ctx: Describe_transactionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_user`.
   * @param ctx the parse tree
   */
  enterDescribe_user?: (ctx: Describe_userContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_user`.
   * @param ctx the parse tree
   */
  exitDescribe_user?: (ctx: Describe_userContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_view`.
   * @param ctx the parse tree
   */
  enterDescribe_view?: (ctx: Describe_viewContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_view`.
   * @param ctx the parse tree
   */
  exitDescribe_view?: (ctx: Describe_viewContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.describe_warehouse`.
   * @param ctx the parse tree
   */
  enterDescribe_warehouse?: (ctx: Describe_warehouseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.describe_warehouse`.
   * @param ctx the parse tree
   */
  exitDescribe_warehouse?: (ctx: Describe_warehouseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_command`.
   * @param ctx the parse tree
   */
  enterShow_command?: (ctx: Show_commandContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_command`.
   * @param ctx the parse tree
   */
  exitShow_command?: (ctx: Show_commandContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_alerts`.
   * @param ctx the parse tree
   */
  enterShow_alerts?: (ctx: Show_alertsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_alerts`.
   * @param ctx the parse tree
   */
  exitShow_alerts?: (ctx: Show_alertsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_channels`.
   * @param ctx the parse tree
   */
  enterShow_channels?: (ctx: Show_channelsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_channels`.
   * @param ctx the parse tree
   */
  exitShow_channels?: (ctx: Show_channelsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_columns`.
   * @param ctx the parse tree
   */
  enterShow_columns?: (ctx: Show_columnsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_columns`.
   * @param ctx the parse tree
   */
  exitShow_columns?: (ctx: Show_columnsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_connections`.
   * @param ctx the parse tree
   */
  enterShow_connections?: (ctx: Show_connectionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_connections`.
   * @param ctx the parse tree
   */
  exitShow_connections?: (ctx: Show_connectionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.starts_with`.
   * @param ctx the parse tree
   */
  enterStarts_with?: (ctx: Starts_withContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.starts_with`.
   * @param ctx the parse tree
   */
  exitStarts_with?: (ctx: Starts_withContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.limit_rows`.
   * @param ctx the parse tree
   */
  enterLimit_rows?: (ctx: Limit_rowsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.limit_rows`.
   * @param ctx the parse tree
   */
  exitLimit_rows?: (ctx: Limit_rowsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_databases`.
   * @param ctx the parse tree
   */
  enterShow_databases?: (ctx: Show_databasesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_databases`.
   * @param ctx the parse tree
   */
  exitShow_databases?: (ctx: Show_databasesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_databases_in_failover_group`.
   * @param ctx the parse tree
   */
  enterShow_databases_in_failover_group?: (ctx: Show_databases_in_failover_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_databases_in_failover_group`.
   * @param ctx the parse tree
   */
  exitShow_databases_in_failover_group?: (ctx: Show_databases_in_failover_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_databases_in_replication_group`.
   * @param ctx the parse tree
   */
  enterShow_databases_in_replication_group?: (
    ctx: Show_databases_in_replication_groupContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_databases_in_replication_group`.
   * @param ctx the parse tree
   */
  exitShow_databases_in_replication_group?: (
    ctx: Show_databases_in_replication_groupContext
  ) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_datasets`.
   * @param ctx the parse tree
   */
  enterShow_datasets?: (ctx: Show_datasetsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_datasets`.
   * @param ctx the parse tree
   */
  exitShow_datasets?: (ctx: Show_datasetsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_delegated_authorizations`.
   * @param ctx the parse tree
   */
  enterShow_delegated_authorizations?: (ctx: Show_delegated_authorizationsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_delegated_authorizations`.
   * @param ctx the parse tree
   */
  exitShow_delegated_authorizations?: (ctx: Show_delegated_authorizationsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_dynamic_tables`.
   * @param ctx the parse tree
   */
  enterShow_dynamic_tables?: (ctx: Show_dynamic_tablesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_dynamic_tables`.
   * @param ctx the parse tree
   */
  exitShow_dynamic_tables?: (ctx: Show_dynamic_tablesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_event_tables`.
   * @param ctx the parse tree
   */
  enterShow_event_tables?: (ctx: Show_event_tablesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_event_tables`.
   * @param ctx the parse tree
   */
  exitShow_event_tables?: (ctx: Show_event_tablesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_external_functions`.
   * @param ctx the parse tree
   */
  enterShow_external_functions?: (ctx: Show_external_functionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_external_functions`.
   * @param ctx the parse tree
   */
  exitShow_external_functions?: (ctx: Show_external_functionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_external_tables`.
   * @param ctx the parse tree
   */
  enterShow_external_tables?: (ctx: Show_external_tablesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_external_tables`.
   * @param ctx the parse tree
   */
  exitShow_external_tables?: (ctx: Show_external_tablesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_failover_groups`.
   * @param ctx the parse tree
   */
  enterShow_failover_groups?: (ctx: Show_failover_groupsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_failover_groups`.
   * @param ctx the parse tree
   */
  exitShow_failover_groups?: (ctx: Show_failover_groupsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_file_formats`.
   * @param ctx the parse tree
   */
  enterShow_file_formats?: (ctx: Show_file_formatsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_file_formats`.
   * @param ctx the parse tree
   */
  exitShow_file_formats?: (ctx: Show_file_formatsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_functions`.
   * @param ctx the parse tree
   */
  enterShow_functions?: (ctx: Show_functionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_functions`.
   * @param ctx the parse tree
   */
  exitShow_functions?: (ctx: Show_functionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_git_branches`.
   * @param ctx the parse tree
   */
  enterShow_git_branches?: (ctx: Show_git_branchesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_git_branches`.
   * @param ctx the parse tree
   */
  exitShow_git_branches?: (ctx: Show_git_branchesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_git_repositories`.
   * @param ctx the parse tree
   */
  enterShow_git_repositories?: (ctx: Show_git_repositoriesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_git_repositories`.
   * @param ctx the parse tree
   */
  exitShow_git_repositories?: (ctx: Show_git_repositoriesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_git_tags`.
   * @param ctx the parse tree
   */
  enterShow_git_tags?: (ctx: Show_git_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_git_tags`.
   * @param ctx the parse tree
   */
  exitShow_git_tags?: (ctx: Show_git_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_global_accounts`.
   * @param ctx the parse tree
   */
  enterShow_global_accounts?: (ctx: Show_global_accountsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_global_accounts`.
   * @param ctx the parse tree
   */
  exitShow_global_accounts?: (ctx: Show_global_accountsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_grants`.
   * @param ctx the parse tree
   */
  enterShow_grants?: (ctx: Show_grantsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_grants`.
   * @param ctx the parse tree
   */
  exitShow_grants?: (ctx: Show_grantsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_grants_opts`.
   * @param ctx the parse tree
   */
  enterShow_grants_opts?: (ctx: Show_grants_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_grants_opts`.
   * @param ctx the parse tree
   */
  exitShow_grants_opts?: (ctx: Show_grants_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_integrations`.
   * @param ctx the parse tree
   */
  enterShow_integrations?: (ctx: Show_integrationsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_integrations`.
   * @param ctx the parse tree
   */
  exitShow_integrations?: (ctx: Show_integrationsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_locks`.
   * @param ctx the parse tree
   */
  enterShow_locks?: (ctx: Show_locksContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_locks`.
   * @param ctx the parse tree
   */
  exitShow_locks?: (ctx: Show_locksContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_managed_accounts`.
   * @param ctx the parse tree
   */
  enterShow_managed_accounts?: (ctx: Show_managed_accountsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_managed_accounts`.
   * @param ctx the parse tree
   */
  exitShow_managed_accounts?: (ctx: Show_managed_accountsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_masking_policies`.
   * @param ctx the parse tree
   */
  enterShow_masking_policies?: (ctx: Show_masking_policiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_masking_policies`.
   * @param ctx the parse tree
   */
  exitShow_masking_policies?: (ctx: Show_masking_policiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.in_obj`.
   * @param ctx the parse tree
   */
  enterIn_obj?: (ctx: In_objContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.in_obj`.
   * @param ctx the parse tree
   */
  exitIn_obj?: (ctx: In_objContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.in_obj_2`.
   * @param ctx the parse tree
   */
  enterIn_obj_2?: (ctx: In_obj_2Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.in_obj_2`.
   * @param ctx the parse tree
   */
  exitIn_obj_2?: (ctx: In_obj_2Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_materialized_views`.
   * @param ctx the parse tree
   */
  enterShow_materialized_views?: (ctx: Show_materialized_viewsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_materialized_views`.
   * @param ctx the parse tree
   */
  exitShow_materialized_views?: (ctx: Show_materialized_viewsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_network_policies`.
   * @param ctx the parse tree
   */
  enterShow_network_policies?: (ctx: Show_network_policiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_network_policies`.
   * @param ctx the parse tree
   */
  exitShow_network_policies?: (ctx: Show_network_policiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_objects`.
   * @param ctx the parse tree
   */
  enterShow_objects?: (ctx: Show_objectsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_objects`.
   * @param ctx the parse tree
   */
  exitShow_objects?: (ctx: Show_objectsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_organization_accounts`.
   * @param ctx the parse tree
   */
  enterShow_organization_accounts?: (ctx: Show_organization_accountsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_organization_accounts`.
   * @param ctx the parse tree
   */
  exitShow_organization_accounts?: (ctx: Show_organization_accountsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.in_for`.
   * @param ctx the parse tree
   */
  enterIn_for?: (ctx: In_forContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.in_for`.
   * @param ctx the parse tree
   */
  exitIn_for?: (ctx: In_forContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_parameters`.
   * @param ctx the parse tree
   */
  enterShow_parameters?: (ctx: Show_parametersContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_parameters`.
   * @param ctx the parse tree
   */
  exitShow_parameters?: (ctx: Show_parametersContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_pipes`.
   * @param ctx the parse tree
   */
  enterShow_pipes?: (ctx: Show_pipesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_pipes`.
   * @param ctx the parse tree
   */
  exitShow_pipes?: (ctx: Show_pipesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_primary_keys`.
   * @param ctx the parse tree
   */
  enterShow_primary_keys?: (ctx: Show_primary_keysContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_primary_keys`.
   * @param ctx the parse tree
   */
  exitShow_primary_keys?: (ctx: Show_primary_keysContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_procedures`.
   * @param ctx the parse tree
   */
  enterShow_procedures?: (ctx: Show_proceduresContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_procedures`.
   * @param ctx the parse tree
   */
  exitShow_procedures?: (ctx: Show_proceduresContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_regions`.
   * @param ctx the parse tree
   */
  enterShow_regions?: (ctx: Show_regionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_regions`.
   * @param ctx the parse tree
   */
  exitShow_regions?: (ctx: Show_regionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_replication_accounts`.
   * @param ctx the parse tree
   */
  enterShow_replication_accounts?: (ctx: Show_replication_accountsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_replication_accounts`.
   * @param ctx the parse tree
   */
  exitShow_replication_accounts?: (ctx: Show_replication_accountsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_replication_databases`.
   * @param ctx the parse tree
   */
  enterShow_replication_databases?: (ctx: Show_replication_databasesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_replication_databases`.
   * @param ctx the parse tree
   */
  exitShow_replication_databases?: (ctx: Show_replication_databasesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_replication_groups`.
   * @param ctx the parse tree
   */
  enterShow_replication_groups?: (ctx: Show_replication_groupsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_replication_groups`.
   * @param ctx the parse tree
   */
  exitShow_replication_groups?: (ctx: Show_replication_groupsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_resource_monitors`.
   * @param ctx the parse tree
   */
  enterShow_resource_monitors?: (ctx: Show_resource_monitorsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_resource_monitors`.
   * @param ctx the parse tree
   */
  exitShow_resource_monitors?: (ctx: Show_resource_monitorsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_roles`.
   * @param ctx the parse tree
   */
  enterShow_roles?: (ctx: Show_rolesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_roles`.
   * @param ctx the parse tree
   */
  exitShow_roles?: (ctx: Show_rolesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_row_access_policies`.
   * @param ctx the parse tree
   */
  enterShow_row_access_policies?: (ctx: Show_row_access_policiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_row_access_policies`.
   * @param ctx the parse tree
   */
  exitShow_row_access_policies?: (ctx: Show_row_access_policiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_schemas`.
   * @param ctx the parse tree
   */
  enterShow_schemas?: (ctx: Show_schemasContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_schemas`.
   * @param ctx the parse tree
   */
  exitShow_schemas?: (ctx: Show_schemasContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_secrets`.
   * @param ctx the parse tree
   */
  enterShow_secrets?: (ctx: Show_secretsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_secrets`.
   * @param ctx the parse tree
   */
  exitShow_secrets?: (ctx: Show_secretsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_sequences`.
   * @param ctx the parse tree
   */
  enterShow_sequences?: (ctx: Show_sequencesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_sequences`.
   * @param ctx the parse tree
   */
  exitShow_sequences?: (ctx: Show_sequencesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_session_policies`.
   * @param ctx the parse tree
   */
  enterShow_session_policies?: (ctx: Show_session_policiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_session_policies`.
   * @param ctx the parse tree
   */
  exitShow_session_policies?: (ctx: Show_session_policiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_password_policies`.
   * @param ctx the parse tree
   */
  enterShow_password_policies?: (ctx: Show_password_policiesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_password_policies`.
   * @param ctx the parse tree
   */
  exitShow_password_policies?: (ctx: Show_password_policiesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_shares`.
   * @param ctx the parse tree
   */
  enterShow_shares?: (ctx: Show_sharesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_shares`.
   * @param ctx the parse tree
   */
  exitShow_shares?: (ctx: Show_sharesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_shares_in_failover_group`.
   * @param ctx the parse tree
   */
  enterShow_shares_in_failover_group?: (ctx: Show_shares_in_failover_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_shares_in_failover_group`.
   * @param ctx the parse tree
   */
  exitShow_shares_in_failover_group?: (ctx: Show_shares_in_failover_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_shares_in_replication_group`.
   * @param ctx the parse tree
   */
  enterShow_shares_in_replication_group?: (ctx: Show_shares_in_replication_groupContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_shares_in_replication_group`.
   * @param ctx the parse tree
   */
  exitShow_shares_in_replication_group?: (ctx: Show_shares_in_replication_groupContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_streams`.
   * @param ctx the parse tree
   */
  enterShow_streams?: (ctx: Show_streamsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_streams`.
   * @param ctx the parse tree
   */
  exitShow_streams?: (ctx: Show_streamsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_tables`.
   * @param ctx the parse tree
   */
  enterShow_tables?: (ctx: Show_tablesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_tables`.
   * @param ctx the parse tree
   */
  exitShow_tables?: (ctx: Show_tablesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_tags`.
   * @param ctx the parse tree
   */
  enterShow_tags?: (ctx: Show_tagsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_tags`.
   * @param ctx the parse tree
   */
  exitShow_tags?: (ctx: Show_tagsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_tasks`.
   * @param ctx the parse tree
   */
  enterShow_tasks?: (ctx: Show_tasksContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_tasks`.
   * @param ctx the parse tree
   */
  exitShow_tasks?: (ctx: Show_tasksContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_transactions`.
   * @param ctx the parse tree
   */
  enterShow_transactions?: (ctx: Show_transactionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_transactions`.
   * @param ctx the parse tree
   */
  exitShow_transactions?: (ctx: Show_transactionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_user_functions`.
   * @param ctx the parse tree
   */
  enterShow_user_functions?: (ctx: Show_user_functionsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_user_functions`.
   * @param ctx the parse tree
   */
  exitShow_user_functions?: (ctx: Show_user_functionsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_users`.
   * @param ctx the parse tree
   */
  enterShow_users?: (ctx: Show_usersContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_users`.
   * @param ctx the parse tree
   */
  exitShow_users?: (ctx: Show_usersContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_variables`.
   * @param ctx the parse tree
   */
  enterShow_variables?: (ctx: Show_variablesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_variables`.
   * @param ctx the parse tree
   */
  exitShow_variables?: (ctx: Show_variablesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_versions_in_dataset`.
   * @param ctx the parse tree
   */
  enterShow_versions_in_dataset?: (ctx: Show_versions_in_datasetContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_versions_in_dataset`.
   * @param ctx the parse tree
   */
  exitShow_versions_in_dataset?: (ctx: Show_versions_in_datasetContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_views`.
   * @param ctx the parse tree
   */
  enterShow_views?: (ctx: Show_viewsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_views`.
   * @param ctx the parse tree
   */
  exitShow_views?: (ctx: Show_viewsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.show_warehouses`.
   * @param ctx the parse tree
   */
  enterShow_warehouses?: (ctx: Show_warehousesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.show_warehouses`.
   * @param ctx the parse tree
   */
  exitShow_warehouses?: (ctx: Show_warehousesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.like_pattern`.
   * @param ctx the parse tree
   */
  enterLike_pattern?: (ctx: Like_patternContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.like_pattern`.
   * @param ctx the parse tree
   */
  exitLike_pattern?: (ctx: Like_patternContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.account_identifier`.
   * @param ctx the parse tree
   */
  enterAccount_identifier?: (ctx: Account_identifierContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.account_identifier`.
   * @param ctx the parse tree
   */
  exitAccount_identifier?: (ctx: Account_identifierContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.schema_name`.
   * @param ctx the parse tree
   */
  enterSchema_name?: (ctx: Schema_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.schema_name`.
   * @param ctx the parse tree
   */
  exitSchema_name?: (ctx: Schema_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_type`.
   * @param ctx the parse tree
   */
  enterObject_type?: (ctx: Object_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_type`.
   * @param ctx the parse tree
   */
  exitObject_type?: (ctx: Object_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_type_list`.
   * @param ctx the parse tree
   */
  enterObject_type_list?: (ctx: Object_type_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_type_list`.
   * @param ctx the parse tree
   */
  exitObject_type_list?: (ctx: Object_type_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.tag_value`.
   * @param ctx the parse tree
   */
  enterTag_value?: (ctx: Tag_valueContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.tag_value`.
   * @param ctx the parse tree
   */
  exitTag_value?: (ctx: Tag_valueContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.arg_data_type`.
   * @param ctx the parse tree
   */
  enterArg_data_type?: (ctx: Arg_data_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.arg_data_type`.
   * @param ctx the parse tree
   */
  exitArg_data_type?: (ctx: Arg_data_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.arg_name`.
   * @param ctx the parse tree
   */
  enterArg_name?: (ctx: Arg_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.arg_name`.
   * @param ctx the parse tree
   */
  exitArg_name?: (ctx: Arg_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.param_name`.
   * @param ctx the parse tree
   */
  enterParam_name?: (ctx: Param_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.param_name`.
   * @param ctx the parse tree
   */
  exitParam_name?: (ctx: Param_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.region_group_id`.
   * @param ctx the parse tree
   */
  enterRegion_group_id?: (ctx: Region_group_idContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.region_group_id`.
   * @param ctx the parse tree
   */
  exitRegion_group_id?: (ctx: Region_group_idContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.snowflake_region_id`.
   * @param ctx the parse tree
   */
  enterSnowflake_region_id?: (ctx: Snowflake_region_idContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.snowflake_region_id`.
   * @param ctx the parse tree
   */
  exitSnowflake_region_id?: (ctx: Snowflake_region_idContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.string`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.string`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.string_list`.
   * @param ctx the parse tree
   */
  enterString_list?: (ctx: String_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.string_list`.
   * @param ctx the parse tree
   */
  exitString_list?: (ctx: String_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.id_fn`.
   * @param ctx the parse tree
   */
  enterId_fn?: (ctx: Id_fnContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.id_fn`.
   * @param ctx the parse tree
   */
  exitId_fn?: (ctx: Id_fnContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.id_`.
   * @param ctx the parse tree
   */
  enterId_?: (ctx: Id_Context) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.id_`.
   * @param ctx the parse tree
   */
  exitId_?: (ctx: Id_Context) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.keyword`.
   * @param ctx the parse tree
   */
  enterKeyword?: (ctx: KeywordContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.keyword`.
   * @param ctx the parse tree
   */
  exitKeyword?: (ctx: KeywordContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.non_reserved_words`.
   * @param ctx the parse tree
   */
  enterNon_reserved_words?: (ctx: Non_reserved_wordsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.non_reserved_words`.
   * @param ctx the parse tree
   */
  exitNon_reserved_words?: (ctx: Non_reserved_wordsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.builtin_function`.
   * @param ctx the parse tree
   */
  enterBuiltin_function?: (ctx: Builtin_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.builtin_function`.
   * @param ctx the parse tree
   */
  exitBuiltin_function?: (ctx: Builtin_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.unary_or_binary_builtin_function`.
   * @param ctx the parse tree
   */
  enterUnary_or_binary_builtin_function?: (ctx: Unary_or_binary_builtin_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.unary_or_binary_builtin_function`.
   * @param ctx the parse tree
   */
  exitUnary_or_binary_builtin_function?: (ctx: Unary_or_binary_builtin_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.binary_builtin_function`.
   * @param ctx the parse tree
   */
  enterBinary_builtin_function?: (ctx: Binary_builtin_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.binary_builtin_function`.
   * @param ctx the parse tree
   */
  exitBinary_builtin_function?: (ctx: Binary_builtin_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.binary_or_ternary_builtin_function`.
   * @param ctx the parse tree
   */
  enterBinary_or_ternary_builtin_function?: (
    ctx: Binary_or_ternary_builtin_functionContext
  ) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.binary_or_ternary_builtin_function`.
   * @param ctx the parse tree
   */
  exitBinary_or_ternary_builtin_function?: (ctx: Binary_or_ternary_builtin_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.ternary_builtin_function`.
   * @param ctx the parse tree
   */
  enterTernary_builtin_function?: (ctx: Ternary_builtin_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.ternary_builtin_function`.
   * @param ctx the parse tree
   */
  exitTernary_builtin_function?: (ctx: Ternary_builtin_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.list_function`.
   * @param ctx the parse tree
   */
  enterList_function?: (ctx: List_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.list_function`.
   * @param ctx the parse tree
   */
  exitList_function?: (ctx: List_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.pattern`.
   * @param ctx the parse tree
   */
  enterPattern?: (ctx: PatternContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.pattern`.
   * @param ctx the parse tree
   */
  exitPattern?: (ctx: PatternContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_name`.
   * @param ctx the parse tree
   */
  enterColumn_name?: (ctx: Column_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_name`.
   * @param ctx the parse tree
   */
  exitColumn_name?: (ctx: Column_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_list`.
   * @param ctx the parse tree
   */
  enterColumn_list?: (ctx: Column_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_list`.
   * @param ctx the parse tree
   */
  exitColumn_list?: (ctx: Column_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_list_with_comment`.
   * @param ctx the parse tree
   */
  enterColumn_list_with_comment?: (ctx: Column_list_with_commentContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_list_with_comment`.
   * @param ctx the parse tree
   */
  exitColumn_list_with_comment?: (ctx: Column_list_with_commentContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_name`.
   * @param ctx the parse tree
   */
  enterObject_name?: (ctx: Object_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_name`.
   * @param ctx the parse tree
   */
  exitObject_name?: (ctx: Object_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_name_or_identifier`.
   * @param ctx the parse tree
   */
  enterObject_name_or_identifier?: (ctx: Object_name_or_identifierContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_name_or_identifier`.
   * @param ctx the parse tree
   */
  exitObject_name_or_identifier?: (ctx: Object_name_or_identifierContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.num`.
   * @param ctx the parse tree
   */
  enterNum?: (ctx: NumContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.num`.
   * @param ctx the parse tree
   */
  exitNum?: (ctx: NumContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.expr_list`.
   * @param ctx the parse tree
   */
  enterExpr_list?: (ctx: Expr_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.expr_list`.
   * @param ctx the parse tree
   */
  exitExpr_list?: (ctx: Expr_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.expr_list_sorted`.
   * @param ctx the parse tree
   */
  enterExpr_list_sorted?: (ctx: Expr_list_sortedContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.expr_list_sorted`.
   * @param ctx the parse tree
   */
  exitExpr_list_sorted?: (ctx: Expr_list_sortedContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.expr`.
   * @param ctx the parse tree
   */
  enterExpr?: (ctx: ExprContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.expr`.
   * @param ctx the parse tree
   */
  exitExpr?: (ctx: ExprContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.iff_expr`.
   * @param ctx the parse tree
   */
  enterIff_expr?: (ctx: Iff_exprContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.iff_expr`.
   * @param ctx the parse tree
   */
  exitIff_expr?: (ctx: Iff_exprContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.trim_expression`.
   * @param ctx the parse tree
   */
  enterTrim_expression?: (ctx: Trim_expressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.trim_expression`.
   * @param ctx the parse tree
   */
  exitTrim_expression?: (ctx: Trim_expressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.try_cast_expr`.
   * @param ctx the parse tree
   */
  enterTry_cast_expr?: (ctx: Try_cast_exprContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.try_cast_expr`.
   * @param ctx the parse tree
   */
  exitTry_cast_expr?: (ctx: Try_cast_exprContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.cast_expr`.
   * @param ctx the parse tree
   */
  enterCast_expr?: (ctx: Cast_exprContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.cast_expr`.
   * @param ctx the parse tree
   */
  exitCast_expr?: (ctx: Cast_exprContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.json_literal`.
   * @param ctx the parse tree
   */
  enterJson_literal?: (ctx: Json_literalContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.json_literal`.
   * @param ctx the parse tree
   */
  exitJson_literal?: (ctx: Json_literalContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.kv_pair`.
   * @param ctx the parse tree
   */
  enterKv_pair?: (ctx: Kv_pairContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.kv_pair`.
   * @param ctx the parse tree
   */
  exitKv_pair?: (ctx: Kv_pairContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.value`.
   * @param ctx the parse tree
   */
  enterValue?: (ctx: ValueContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.value`.
   * @param ctx the parse tree
   */
  exitValue?: (ctx: ValueContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.arr_literal`.
   * @param ctx the parse tree
   */
  enterArr_literal?: (ctx: Arr_literalContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.arr_literal`.
   * @param ctx the parse tree
   */
  exitArr_literal?: (ctx: Arr_literalContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.data_type_size`.
   * @param ctx the parse tree
   */
  enterData_type_size?: (ctx: Data_type_sizeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.data_type_size`.
   * @param ctx the parse tree
   */
  exitData_type_size?: (ctx: Data_type_sizeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.data_type`.
   * @param ctx the parse tree
   */
  enterData_type?: (ctx: Data_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.data_type`.
   * @param ctx the parse tree
   */
  exitData_type?: (ctx: Data_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.primitive_expression`.
   * @param ctx the parse tree
   */
  enterPrimitive_expression?: (ctx: Primitive_expressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.primitive_expression`.
   * @param ctx the parse tree
   */
  exitPrimitive_expression?: (ctx: Primitive_expressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.order_by_expr`.
   * @param ctx the parse tree
   */
  enterOrder_by_expr?: (ctx: Order_by_exprContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.order_by_expr`.
   * @param ctx the parse tree
   */
  exitOrder_by_expr?: (ctx: Order_by_exprContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.asc_desc`.
   * @param ctx the parse tree
   */
  enterAsc_desc?: (ctx: Asc_descContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.asc_desc`.
   * @param ctx the parse tree
   */
  exitAsc_desc?: (ctx: Asc_descContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.over_clause`.
   * @param ctx the parse tree
   */
  enterOver_clause?: (ctx: Over_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.over_clause`.
   * @param ctx the parse tree
   */
  exitOver_clause?: (ctx: Over_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.function_call`.
   * @param ctx the parse tree
   */
  enterFunction_call?: (ctx: Function_callContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.function_call`.
   * @param ctx the parse tree
   */
  exitFunction_call?: (ctx: Function_callContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.param_assoc_list`.
   * @param ctx the parse tree
   */
  enterParam_assoc_list?: (ctx: Param_assoc_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.param_assoc_list`.
   * @param ctx the parse tree
   */
  exitParam_assoc_list?: (ctx: Param_assoc_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.param_assoc`.
   * @param ctx the parse tree
   */
  enterParam_assoc?: (ctx: Param_assocContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.param_assoc`.
   * @param ctx the parse tree
   */
  exitParam_assoc?: (ctx: Param_assocContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.ignore_or_repect_nulls`.
   * @param ctx the parse tree
   */
  enterIgnore_or_repect_nulls?: (ctx: Ignore_or_repect_nullsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.ignore_or_repect_nulls`.
   * @param ctx the parse tree
   */
  exitIgnore_or_repect_nulls?: (ctx: Ignore_or_repect_nullsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.ranking_windowed_function`.
   * @param ctx the parse tree
   */
  enterRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.ranking_windowed_function`.
   * @param ctx the parse tree
   */
  exitRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.aggregate_function`.
   * @param ctx the parse tree
   */
  enterAggregate_function?: (ctx: Aggregate_functionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.aggregate_function`.
   * @param ctx the parse tree
   */
  exitAggregate_function?: (ctx: Aggregate_functionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.sign`.
   * @param ctx the parse tree
   */
  enterSign?: (ctx: SignContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.sign`.
   * @param ctx the parse tree
   */
  exitSign?: (ctx: SignContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.full_column_name`.
   * @param ctx the parse tree
   */
  enterFull_column_name?: (ctx: Full_column_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.full_column_name`.
   * @param ctx the parse tree
   */
  exitFull_column_name?: (ctx: Full_column_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.bracket_expression`.
   * @param ctx the parse tree
   */
  enterBracket_expression?: (ctx: Bracket_expressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.bracket_expression`.
   * @param ctx the parse tree
   */
  exitBracket_expression?: (ctx: Bracket_expressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.case_expression`.
   * @param ctx the parse tree
   */
  enterCase_expression?: (ctx: Case_expressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.case_expression`.
   * @param ctx the parse tree
   */
  exitCase_expression?: (ctx: Case_expressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.switch_search_condition_section`.
   * @param ctx the parse tree
   */
  enterSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.switch_search_condition_section`.
   * @param ctx the parse tree
   */
  exitSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.switch_section`.
   * @param ctx the parse tree
   */
  enterSwitch_section?: (ctx: Switch_sectionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.switch_section`.
   * @param ctx the parse tree
   */
  exitSwitch_section?: (ctx: Switch_sectionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.query_statement`.
   * @param ctx the parse tree
   */
  enterQuery_statement?: (ctx: Query_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.query_statement`.
   * @param ctx the parse tree
   */
  exitQuery_statement?: (ctx: Query_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.with_expression`.
   * @param ctx the parse tree
   */
  enterWith_expression?: (ctx: With_expressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.with_expression`.
   * @param ctx the parse tree
   */
  exitWith_expression?: (ctx: With_expressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.common_table_expression`.
   * @param ctx the parse tree
   */
  enterCommon_table_expression?: (ctx: Common_table_expressionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.common_table_expression`.
   * @param ctx the parse tree
   */
  exitCommon_table_expression?: (ctx: Common_table_expressionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_statement`.
   * @param ctx the parse tree
   */
  enterSelect_statement?: (ctx: Select_statementContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_statement`.
   * @param ctx the parse tree
   */
  exitSelect_statement?: (ctx: Select_statementContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.set_operators`.
   * @param ctx the parse tree
   */
  enterSet_operators?: (ctx: Set_operatorsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.set_operators`.
   * @param ctx the parse tree
   */
  exitSet_operators?: (ctx: Set_operatorsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.by_name`.
   * @param ctx the parse tree
   */
  enterBy_name?: (ctx: By_nameContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.by_name`.
   * @param ctx the parse tree
   */
  exitBy_name?: (ctx: By_nameContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_statement_in_parentheses`.
   * @param ctx the parse tree
   */
  enterSelect_statement_in_parentheses?: (ctx: Select_statement_in_parenthesesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_statement_in_parentheses`.
   * @param ctx the parse tree
   */
  exitSelect_statement_in_parentheses?: (ctx: Select_statement_in_parenthesesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_optional_clauses`.
   * @param ctx the parse tree
   */
  enterSelect_optional_clauses?: (ctx: Select_optional_clausesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_optional_clauses`.
   * @param ctx the parse tree
   */
  exitSelect_optional_clauses?: (ctx: Select_optional_clausesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_clause`.
   * @param ctx the parse tree
   */
  enterSelect_clause?: (ctx: Select_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_clause`.
   * @param ctx the parse tree
   */
  exitSelect_clause?: (ctx: Select_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_top_clause`.
   * @param ctx the parse tree
   */
  enterSelect_top_clause?: (ctx: Select_top_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_top_clause`.
   * @param ctx the parse tree
   */
  exitSelect_top_clause?: (ctx: Select_top_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_list_no_top`.
   * @param ctx the parse tree
   */
  enterSelect_list_no_top?: (ctx: Select_list_no_topContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_list_no_top`.
   * @param ctx the parse tree
   */
  exitSelect_list_no_top?: (ctx: Select_list_no_topContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_list_top`.
   * @param ctx the parse tree
   */
  enterSelect_list_top?: (ctx: Select_list_topContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_list_top`.
   * @param ctx the parse tree
   */
  exitSelect_list_top?: (ctx: Select_list_topContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_list`.
   * @param ctx the parse tree
   */
  enterSelect_list?: (ctx: Select_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_list`.
   * @param ctx the parse tree
   */
  exitSelect_list?: (ctx: Select_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.select_list_elem`.
   * @param ctx the parse tree
   */
  enterSelect_list_elem?: (ctx: Select_list_elemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.select_list_elem`.
   * @param ctx the parse tree
   */
  exitSelect_list_elem?: (ctx: Select_list_elemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_elem_star`.
   * @param ctx the parse tree
   */
  enterColumn_elem_star?: (ctx: Column_elem_starContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_elem_star`.
   * @param ctx the parse tree
   */
  exitColumn_elem_star?: (ctx: Column_elem_starContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_elem`.
   * @param ctx the parse tree
   */
  enterColumn_elem?: (ctx: Column_elemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_elem`.
   * @param ctx the parse tree
   */
  exitColumn_elem?: (ctx: Column_elemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_name_or_alias`.
   * @param ctx the parse tree
   */
  enterObject_name_or_alias?: (ctx: Object_name_or_aliasContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_name_or_alias`.
   * @param ctx the parse tree
   */
  exitObject_name_or_alias?: (ctx: Object_name_or_aliasContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.exclude_clause`.
   * @param ctx the parse tree
   */
  enterExclude_clause?: (ctx: Exclude_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.exclude_clause`.
   * @param ctx the parse tree
   */
  exitExclude_clause?: (ctx: Exclude_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.as_alias`.
   * @param ctx the parse tree
   */
  enterAs_alias?: (ctx: As_aliasContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.as_alias`.
   * @param ctx the parse tree
   */
  exitAs_alias?: (ctx: As_aliasContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.expression_elem`.
   * @param ctx the parse tree
   */
  enterExpression_elem?: (ctx: Expression_elemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.expression_elem`.
   * @param ctx the parse tree
   */
  exitExpression_elem?: (ctx: Expression_elemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_position`.
   * @param ctx the parse tree
   */
  enterColumn_position?: (ctx: Column_positionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_position`.
   * @param ctx the parse tree
   */
  exitColumn_position?: (ctx: Column_positionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.all_distinct`.
   * @param ctx the parse tree
   */
  enterAll_distinct?: (ctx: All_distinctContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.all_distinct`.
   * @param ctx the parse tree
   */
  exitAll_distinct?: (ctx: All_distinctContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.top_clause`.
   * @param ctx the parse tree
   */
  enterTop_clause?: (ctx: Top_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.top_clause`.
   * @param ctx the parse tree
   */
  exitTop_clause?: (ctx: Top_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.into_clause`.
   * @param ctx the parse tree
   */
  enterInto_clause?: (ctx: Into_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.into_clause`.
   * @param ctx the parse tree
   */
  exitInto_clause?: (ctx: Into_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.var_list`.
   * @param ctx the parse tree
   */
  enterVar_list?: (ctx: Var_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.var_list`.
   * @param ctx the parse tree
   */
  exitVar_list?: (ctx: Var_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.var`.
   * @param ctx the parse tree
   */
  enterVar?: (ctx: VarContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.var`.
   * @param ctx the parse tree
   */
  exitVar?: (ctx: VarContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.from_clause`.
   * @param ctx the parse tree
   */
  enterFrom_clause?: (ctx: From_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.from_clause`.
   * @param ctx the parse tree
   */
  exitFrom_clause?: (ctx: From_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_sources`.
   * @param ctx the parse tree
   */
  enterTable_sources?: (ctx: Table_sourcesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_sources`.
   * @param ctx the parse tree
   */
  exitTable_sources?: (ctx: Table_sourcesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_source`.
   * @param ctx the parse tree
   */
  enterTable_source?: (ctx: Table_sourceContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_source`.
   * @param ctx the parse tree
   */
  exitTable_source?: (ctx: Table_sourceContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.table_source_item_joined`.
   * @param ctx the parse tree
   */
  enterTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.table_source_item_joined`.
   * @param ctx the parse tree
   */
  exitTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.object_ref`.
   * @param ctx the parse tree
   */
  enterObject_ref?: (ctx: Object_refContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.object_ref`.
   * @param ctx the parse tree
   */
  exitObject_ref?: (ctx: Object_refContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.flatten_table_option`.
   * @param ctx the parse tree
   */
  enterFlatten_table_option?: (ctx: Flatten_table_optionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.flatten_table_option`.
   * @param ctx the parse tree
   */
  exitFlatten_table_option?: (ctx: Flatten_table_optionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.flatten_table`.
   * @param ctx the parse tree
   */
  enterFlatten_table?: (ctx: Flatten_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.flatten_table`.
   * @param ctx the parse tree
   */
  exitFlatten_table?: (ctx: Flatten_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.splited_table`.
   * @param ctx the parse tree
   */
  enterSplited_table?: (ctx: Splited_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.splited_table`.
   * @param ctx the parse tree
   */
  exitSplited_table?: (ctx: Splited_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.prior_list`.
   * @param ctx the parse tree
   */
  enterPrior_list?: (ctx: Prior_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.prior_list`.
   * @param ctx the parse tree
   */
  exitPrior_list?: (ctx: Prior_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.prior_item`.
   * @param ctx the parse tree
   */
  enterPrior_item?: (ctx: Prior_itemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.prior_item`.
   * @param ctx the parse tree
   */
  exitPrior_item?: (ctx: Prior_itemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.outer_join`.
   * @param ctx the parse tree
   */
  enterOuter_join?: (ctx: Outer_joinContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.outer_join`.
   * @param ctx the parse tree
   */
  exitOuter_join?: (ctx: Outer_joinContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.join_type`.
   * @param ctx the parse tree
   */
  enterJoin_type?: (ctx: Join_typeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.join_type`.
   * @param ctx the parse tree
   */
  exitJoin_type?: (ctx: Join_typeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.join_clause`.
   * @param ctx the parse tree
   */
  enterJoin_clause?: (ctx: Join_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.join_clause`.
   * @param ctx the parse tree
   */
  exitJoin_clause?: (ctx: Join_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.at_before`.
   * @param ctx the parse tree
   */
  enterAt_before?: (ctx: At_beforeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.at_before`.
   * @param ctx the parse tree
   */
  exitAt_before?: (ctx: At_beforeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.end`.
   * @param ctx the parse tree
   */
  enterEnd?: (ctx: EndContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.end`.
   * @param ctx the parse tree
   */
  exitEnd?: (ctx: EndContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.changes`.
   * @param ctx the parse tree
   */
  enterChanges?: (ctx: ChangesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.changes`.
   * @param ctx the parse tree
   */
  exitChanges?: (ctx: ChangesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.default_append_only`.
   * @param ctx the parse tree
   */
  enterDefault_append_only?: (ctx: Default_append_onlyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.default_append_only`.
   * @param ctx the parse tree
   */
  exitDefault_append_only?: (ctx: Default_append_onlyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.partition_by`.
   * @param ctx the parse tree
   */
  enterPartition_by?: (ctx: Partition_byContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.partition_by`.
   * @param ctx the parse tree
   */
  exitPartition_by?: (ctx: Partition_byContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.alias`.
   * @param ctx the parse tree
   */
  enterAlias?: (ctx: AliasContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.alias`.
   * @param ctx the parse tree
   */
  exitAlias?: (ctx: AliasContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.expr_alias_list`.
   * @param ctx the parse tree
   */
  enterExpr_alias_list?: (ctx: Expr_alias_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.expr_alias_list`.
   * @param ctx the parse tree
   */
  exitExpr_alias_list?: (ctx: Expr_alias_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.measures`.
   * @param ctx the parse tree
   */
  enterMeasures?: (ctx: MeasuresContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.measures`.
   * @param ctx the parse tree
   */
  exitMeasures?: (ctx: MeasuresContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.match_opts`.
   * @param ctx the parse tree
   */
  enterMatch_opts?: (ctx: Match_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.match_opts`.
   * @param ctx the parse tree
   */
  exitMatch_opts?: (ctx: Match_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.row_match`.
   * @param ctx the parse tree
   */
  enterRow_match?: (ctx: Row_matchContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.row_match`.
   * @param ctx the parse tree
   */
  exitRow_match?: (ctx: Row_matchContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.first_last`.
   * @param ctx the parse tree
   */
  enterFirst_last?: (ctx: First_lastContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.first_last`.
   * @param ctx the parse tree
   */
  exitFirst_last?: (ctx: First_lastContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.symbol`.
   * @param ctx the parse tree
   */
  enterSymbol?: (ctx: SymbolContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.symbol`.
   * @param ctx the parse tree
   */
  exitSymbol?: (ctx: SymbolContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.after_match`.
   * @param ctx the parse tree
   */
  enterAfter_match?: (ctx: After_matchContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.after_match`.
   * @param ctx the parse tree
   */
  exitAfter_match?: (ctx: After_matchContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.symbol_list`.
   * @param ctx the parse tree
   */
  enterSymbol_list?: (ctx: Symbol_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.symbol_list`.
   * @param ctx the parse tree
   */
  exitSymbol_list?: (ctx: Symbol_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.define`.
   * @param ctx the parse tree
   */
  enterDefine?: (ctx: DefineContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.define`.
   * @param ctx the parse tree
   */
  exitDefine?: (ctx: DefineContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.match_recognize`.
   * @param ctx the parse tree
   */
  enterMatch_recognize?: (ctx: Match_recognizeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.match_recognize`.
   * @param ctx the parse tree
   */
  exitMatch_recognize?: (ctx: Match_recognizeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.pivot_unpivot`.
   * @param ctx the parse tree
   */
  enterPivot_unpivot?: (ctx: Pivot_unpivotContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.pivot_unpivot`.
   * @param ctx the parse tree
   */
  exitPivot_unpivot?: (ctx: Pivot_unpivotContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.column_alias_list_in_brackets`.
   * @param ctx the parse tree
   */
  enterColumn_alias_list_in_brackets?: (ctx: Column_alias_list_in_bracketsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.column_alias_list_in_brackets`.
   * @param ctx the parse tree
   */
  exitColumn_alias_list_in_brackets?: (ctx: Column_alias_list_in_bracketsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.expr_list_in_parentheses`.
   * @param ctx the parse tree
   */
  enterExpr_list_in_parentheses?: (ctx: Expr_list_in_parenthesesContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.expr_list_in_parentheses`.
   * @param ctx the parse tree
   */
  exitExpr_list_in_parentheses?: (ctx: Expr_list_in_parenthesesContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.values_table`.
   * @param ctx the parse tree
   */
  enterValues_table?: (ctx: Values_tableContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.values_table`.
   * @param ctx the parse tree
   */
  exitValues_table?: (ctx: Values_tableContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.values_table_body`.
   * @param ctx the parse tree
   */
  enterValues_table_body?: (ctx: Values_table_bodyContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.values_table_body`.
   * @param ctx the parse tree
   */
  exitValues_table_body?: (ctx: Values_table_bodyContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.sample_method`.
   * @param ctx the parse tree
   */
  enterSample_method?: (ctx: Sample_methodContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.sample_method`.
   * @param ctx the parse tree
   */
  exitSample_method?: (ctx: Sample_methodContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.repeatable_seed`.
   * @param ctx the parse tree
   */
  enterRepeatable_seed?: (ctx: Repeatable_seedContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.repeatable_seed`.
   * @param ctx the parse tree
   */
  exitRepeatable_seed?: (ctx: Repeatable_seedContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.sample_opts`.
   * @param ctx the parse tree
   */
  enterSample_opts?: (ctx: Sample_optsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.sample_opts`.
   * @param ctx the parse tree
   */
  exitSample_opts?: (ctx: Sample_optsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.sample`.
   * @param ctx the parse tree
   */
  enterSample?: (ctx: SampleContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.sample`.
   * @param ctx the parse tree
   */
  exitSample?: (ctx: SampleContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.search_condition`.
   * @param ctx the parse tree
   */
  enterSearch_condition?: (ctx: Search_conditionContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.search_condition`.
   * @param ctx the parse tree
   */
  exitSearch_condition?: (ctx: Search_conditionContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.comparison_operator`.
   * @param ctx the parse tree
   */
  enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.comparison_operator`.
   * @param ctx the parse tree
   */
  exitComparison_operator?: (ctx: Comparison_operatorContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.null_not_null`.
   * @param ctx the parse tree
   */
  enterNull_not_null?: (ctx: Null_not_nullContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.null_not_null`.
   * @param ctx the parse tree
   */
  exitNull_not_null?: (ctx: Null_not_nullContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.not_distinct_from`.
   * @param ctx the parse tree
   */
  enterNot_distinct_from?: (ctx: Not_distinct_fromContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.not_distinct_from`.
   * @param ctx the parse tree
   */
  exitNot_distinct_from?: (ctx: Not_distinct_fromContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.subquery`.
   * @param ctx the parse tree
   */
  enterSubquery?: (ctx: SubqueryContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.subquery`.
   * @param ctx the parse tree
   */
  exitSubquery?: (ctx: SubqueryContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.predicate`.
   * @param ctx the parse tree
   */
  enterPredicate?: (ctx: PredicateContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.predicate`.
   * @param ctx the parse tree
   */
  exitPredicate?: (ctx: PredicateContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.where_clause`.
   * @param ctx the parse tree
   */
  enterWhere_clause?: (ctx: Where_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.where_clause`.
   * @param ctx the parse tree
   */
  exitWhere_clause?: (ctx: Where_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.group_by_elem`.
   * @param ctx the parse tree
   */
  enterGroup_by_elem?: (ctx: Group_by_elemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.group_by_elem`.
   * @param ctx the parse tree
   */
  exitGroup_by_elem?: (ctx: Group_by_elemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.group_by_list`.
   * @param ctx the parse tree
   */
  enterGroup_by_list?: (ctx: Group_by_listContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.group_by_list`.
   * @param ctx the parse tree
   */
  exitGroup_by_list?: (ctx: Group_by_listContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.group_by_clause`.
   * @param ctx the parse tree
   */
  enterGroup_by_clause?: (ctx: Group_by_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.group_by_clause`.
   * @param ctx the parse tree
   */
  exitGroup_by_clause?: (ctx: Group_by_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.having_clause`.
   * @param ctx the parse tree
   */
  enterHaving_clause?: (ctx: Having_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.having_clause`.
   * @param ctx the parse tree
   */
  exitHaving_clause?: (ctx: Having_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.qualify_clause`.
   * @param ctx the parse tree
   */
  enterQualify_clause?: (ctx: Qualify_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.qualify_clause`.
   * @param ctx the parse tree
   */
  exitQualify_clause?: (ctx: Qualify_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.order_item`.
   * @param ctx the parse tree
   */
  enterOrder_item?: (ctx: Order_itemContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.order_item`.
   * @param ctx the parse tree
   */
  exitOrder_item?: (ctx: Order_itemContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.order_by_clause`.
   * @param ctx the parse tree
   */
  enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.order_by_clause`.
   * @param ctx the parse tree
   */
  exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.row_rows`.
   * @param ctx the parse tree
   */
  enterRow_rows?: (ctx: Row_rowsContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.row_rows`.
   * @param ctx the parse tree
   */
  exitRow_rows?: (ctx: Row_rowsContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.first_next`.
   * @param ctx the parse tree
   */
  enterFirst_next?: (ctx: First_nextContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.first_next`.
   * @param ctx the parse tree
   */
  exitFirst_next?: (ctx: First_nextContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.limit_clause`.
   * @param ctx the parse tree
   */
  enterLimit_clause?: (ctx: Limit_clauseContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.limit_clause`.
   * @param ctx the parse tree
   */
  exitLimit_clause?: (ctx: Limit_clauseContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.round_mode`.
   * @param ctx the parse tree
   */
  enterRound_mode?: (ctx: Round_modeContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.round_mode`.
   * @param ctx the parse tree
   */
  exitRound_mode?: (ctx: Round_modeContext) => void;

  /**
   * Enter a parse tree produced by `SnowflakeParser.round_expr`.
   * @param ctx the parse tree
   */
  enterRound_expr?: (ctx: Round_exprContext) => void;
  /**
   * Exit a parse tree produced by `SnowflakeParser.round_expr`.
   * @param ctx the parse tree
   */
  exitRound_expr?: (ctx: Round_exprContext) => void;
}
