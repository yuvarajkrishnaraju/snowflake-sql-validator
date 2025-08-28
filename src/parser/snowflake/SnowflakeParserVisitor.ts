// Generated from src/parser/snowflake/SnowflakeParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SnowflakeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SnowflakeParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `SnowflakeParser.snowflake_file`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSnowflake_file?: (ctx: Snowflake_fileContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.batch`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBatch?: (ctx: BatchContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.sql_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSql_command?: (ctx: Sql_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.ddl_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDdl_command?: (ctx: Ddl_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.dml_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDml_command?: (ctx: Dml_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.insert_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInsert_statement?: (ctx: Insert_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.insert_multi_table_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInsert_multi_table_statement?: (ctx: Insert_multi_table_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.into_clause2`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInto_clause2?: (ctx: Into_clause2Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.values_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValues_list?: (ctx: Values_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.value_item`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValue_item?: (ctx: Value_itemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.merge_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMerge_statement?: (ctx: Merge_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.merge_matches`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMerge_matches?: (ctx: Merge_matchesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.merge_cond`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMerge_cond?: (ctx: Merge_condContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.merge_update_delete`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMerge_update_delete?: (ctx: Merge_update_deleteContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.merge_insert`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMerge_insert?: (ctx: Merge_insertContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.update_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUpdate_statement?: (ctx: Update_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_or_query`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_or_query?: (ctx: Table_or_queryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.delete_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDelete_statement?: (ctx: Delete_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.values_builder`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValues_builder?: (ctx: Values_builderContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.other_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOther_command?: (ctx: Other_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.begin_txn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBegin_txn?: (ctx: Begin_txnContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.copy_into_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCopy_into_table?: (ctx: Copy_into_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.external_location`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternal_location?: (ctx: External_locationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.files`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFiles?: (ctx: FilesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.file_format`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFile_format?: (ctx: File_formatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.format_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFormat_name?: (ctx: Format_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.format_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFormat_type?: (ctx: Format_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_file_format`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_file_format?: (ctx: Stage_file_formatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.copy_into_location`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCopy_into_location?: (ctx: Copy_into_locationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.comment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComment?: (ctx: CommentContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.function_signature`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_signature?: (ctx: Function_signatureContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.commit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCommit?: (ctx: CommitContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.execute_immediate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExecute_immediate?: (ctx: Execute_immediateContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.execute_task`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExecute_task?: (ctx: Execute_taskContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.explain`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExplain?: (ctx: ExplainContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.parallel`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParallel?: (ctx: ParallelContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.get_dml`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGet_dml?: (ctx: Get_dmlContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.grant_ownership`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGrant_ownership?: (ctx: Grant_ownershipContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.grant_to_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGrant_to_role?: (ctx: Grant_to_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.global_privileges`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGlobal_privileges?: (ctx: Global_privilegesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.global_privilege`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGlobal_privilege?: (ctx: Global_privilegeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.account_object_privileges`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAccount_object_privileges?: (ctx: Account_object_privilegesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.account_object_privilege`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAccount_object_privilege?: (ctx: Account_object_privilegeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.schema_privileges`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSchema_privileges?: (ctx: Schema_privilegesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.schema_privilege`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSchema_privilege?: (ctx: Schema_privilegeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.schema_object_privileges`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSchema_object_privileges?: (ctx: Schema_object_privilegesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.schema_object_privilege`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSchema_object_privilege?: (ctx: Schema_object_privilegeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.grant_to_share`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGrant_to_share?: (ctx: Grant_to_shareContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_privilege`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_privilege?: (ctx: Object_privilegeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.grant_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGrant_role?: (ctx: Grant_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.role_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRole_name?: (ctx: Role_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.system_defined_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSystem_defined_role?: (ctx: System_defined_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitList?: (ctx: ListContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.user_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUser_stage?: (ctx: User_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_stage?: (ctx: Table_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.named_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNamed_stage?: (ctx: Named_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_path`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_path?: (ctx: Stage_pathContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.put`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPut?: (ctx: PutContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.remove`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRemove?: (ctx: RemoveContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.revoke_from_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRevoke_from_role?: (ctx: Revoke_from_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.revoke_from_share`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRevoke_from_share?: (ctx: Revoke_from_shareContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.revoke_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRevoke_role?: (ctx: Revoke_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.rollback`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRollback?: (ctx: RollbackContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.set`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSet?: (ctx: SetContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.truncate_materialized_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTruncate_materialized_view?: (ctx: Truncate_materialized_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.truncate_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTruncate_table?: (ctx: Truncate_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.unset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnset?: (ctx: UnsetContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_command?: (ctx: Alter_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.account_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAccount_params?: (ctx: Account_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_params?: (ctx: Object_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.default_ddl_collation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefault_ddl_collation?: (ctx: Default_ddl_collationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_properties`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_properties?: (ctx: Object_propertiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.session_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSession_params?: (ctx: Session_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_account`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_account?: (ctx: Alter_accountContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.enabled_true_false`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnabled_true_false?: (ctx: Enabled_true_falseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_alert`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_alert?: (ctx: Alter_alertContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.resume_suspend`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResume_suspend?: (ctx: Resume_suspendContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alert_set_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlert_set_clause?: (ctx: Alert_set_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alert_unset_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlert_unset_clause?: (ctx: Alert_unset_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_api_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_api_integration?: (ctx: Alter_api_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.api_integration_property`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitApi_integration_property?: (ctx: Api_integration_propertyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_connection`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_connection?: (ctx: Alter_connectionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_database`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_database?: (ctx: Alter_databaseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.database_property`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDatabase_property?: (ctx: Database_propertyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.account_id_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAccount_id_list?: (ctx: Account_id_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_dataset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_dataset?: (ctx: Alter_datasetContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_dynamic_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_dynamic_table?: (ctx: Alter_dynamic_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.id_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId_list?: (ctx: Id_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_external_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_external_table?: (ctx: Alter_external_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.ignore_edition_check`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIgnore_edition_check?: (ctx: Ignore_edition_checkContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.replication_schedule`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReplication_schedule?: (ctx: Replication_scheduleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.db_name_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDb_name_list?: (ctx: Db_name_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.share_name_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShare_name_list?: (ctx: Share_name_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.full_acct_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_acct_list?: (ctx: Full_acct_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_failover_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_failover_group?: (ctx: Alter_failover_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_file_format`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_file_format?: (ctx: Alter_file_formatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_function?: (ctx: Alter_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_function_signature`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_function_signature?: (ctx: Alter_function_signatureContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.data_type_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitData_type_list?: (ctx: Data_type_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_git_repository`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_git_repository?: (ctx: Alter_git_repositoryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_git_set_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_git_set_opts?: (ctx: Alter_git_set_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_git_unset_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_git_unset_opts?: (ctx: Alter_git_unset_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_masking_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_masking_policy?: (ctx: Alter_masking_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_materialized_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_materialized_view?: (ctx: Alter_materialized_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_network_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_network_policy?: (ctx: Alter_network_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_notification_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_notification_integration?: (ctx: Alter_notification_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_pipe`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_pipe?: (ctx: Alter_pipeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_procedure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_procedure?: (ctx: Alter_procedureContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_replication_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_replication_group?: (ctx: Alter_replication_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.credit_quota`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCredit_quota?: (ctx: Credit_quotaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.frequency`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFrequency?: (ctx: FrequencyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.notify_users`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNotify_users?: (ctx: Notify_usersContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.triggerDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTriggerDefinition?: (ctx: TriggerDefinitionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_resource_monitor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_resource_monitor?: (ctx: Alter_resource_monitorContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_role?: (ctx: Alter_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_row_access_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_row_access_policy?: (ctx: Alter_row_access_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_schema`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_schema?: (ctx: Alter_schemaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.schema_property`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSchema_property?: (ctx: Schema_propertyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_sequence`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_sequence?: (ctx: Alter_sequenceContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_secret`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_secret?: (ctx: Alter_secretContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_opts?: (ctx: Secret_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_set_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_set_opts?: (ctx: Secret_set_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_oauth_client_creds_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_oauth_client_creds_opts?: (ctx: Secret_oauth_client_creds_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_oauth_auth_code_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_oauth_auth_code_opts?: (ctx: Secret_oauth_auth_code_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_api_auth_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_api_auth_opts?: (ctx: Secret_api_auth_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_basic_auth_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_basic_auth_opts?: (ctx: Secret_basic_auth_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.secret_generic_string_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecret_generic_string_opts?: (ctx: Secret_generic_string_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_security_integration_external_oauth`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_security_integration_external_oauth?: (
    ctx: Alter_security_integration_external_oauthContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.security_integration_external_oauth_property`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecurity_integration_external_oauth_property?: (
    ctx: Security_integration_external_oauth_propertyContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_security_integration_snowflake_oauth`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_security_integration_snowflake_oauth?: (
    ctx: Alter_security_integration_snowflake_oauthContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.security_integration_snowflake_oauth_property`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecurity_integration_snowflake_oauth_property?: (
    ctx: Security_integration_snowflake_oauth_propertyContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_security_integration_saml2`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_security_integration_saml2?: (ctx: Alter_security_integration_saml2Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_security_integration_scim`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_security_integration_scim?: (ctx: Alter_security_integration_scimContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.security_integration_scim_property`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecurity_integration_scim_property?: (
    ctx: Security_integration_scim_propertyContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_session`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_session?: (ctx: Alter_sessionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_session_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_session_policy?: (ctx: Alter_session_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_password_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_password_policy?: (ctx: Alter_password_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_share`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_share?: (ctx: Alter_shareContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_storage_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_storage_integration?: (ctx: Alter_storage_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_stream`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_stream?: (ctx: Alter_streamContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_table?: (ctx: Alter_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.rls_operations`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRls_operations?: (ctx: Rls_operationsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.clustering_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClustering_action?: (ctx: Clustering_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_column_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_column_action?: (ctx: Table_column_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_column_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_column_clause?: (ctx: Alter_column_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.inline_constraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInline_constraint?: (ctx: Inline_constraintContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.enforced_not_enforced`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnforced_not_enforced?: (ctx: Enforced_not_enforcedContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.deferrable_not_deferrable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeferrable_not_deferrable?: (ctx: Deferrable_not_deferrableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.initially_deferred_or_immediate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitially_deferred_or_immediate?: (ctx: Initially_deferred_or_immediateContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.common_constraint_properties`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCommon_constraint_properties?: (ctx: Common_constraint_propertiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.on_update`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOn_update?: (ctx: On_updateContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.on_delete`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOn_delete?: (ctx: On_deleteContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.foreign_key_match`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForeign_key_match?: (ctx: Foreign_key_matchContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.on_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOn_action?: (ctx: On_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.constraint_properties`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstraint_properties?: (ctx: Constraint_propertiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.ext_table_column_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExt_table_column_action?: (ctx: Ext_table_column_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.constraint_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstraint_action?: (ctx: Constraint_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.search_optimization_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSearch_optimization_action?: (ctx: Search_optimization_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.search_method_with_target`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSearch_method_with_target?: (ctx: Search_method_with_targetContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_table_alter_column`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_table_alter_column?: (ctx: Alter_table_alter_columnContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_column_decl_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_column_decl_list?: (ctx: Alter_column_decl_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_column_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_column_decl?: (ctx: Alter_column_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_column_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_column_opts?: (ctx: Alter_column_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_set_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_set_tags?: (ctx: Column_set_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_unset_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_unset_tags?: (ctx: Column_unset_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_tag`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_tag?: (ctx: Alter_tagContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_task`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_task?: (ctx: Alter_taskContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_user`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_user?: (ctx: Alter_userContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_view?: (ctx: Alter_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_modify`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_modify?: (ctx: Alter_modifyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_warehouse`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_warehouse?: (ctx: Alter_warehouseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_connection_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_connection_opts?: (ctx: Alter_connection_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_user_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_user_opts?: (ctx: Alter_user_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_tag_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_tag_opts?: (ctx: Alter_tag_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_network_policy_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_network_policy_opts?: (ctx: Alter_network_policy_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_warehouse_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_warehouse_opts?: (ctx: Alter_warehouse_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_account_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_account_opts?: (ctx: Alter_account_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.set_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSet_tags?: (ctx: Set_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.tag_decl_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTag_decl_list?: (ctx: Tag_decl_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.unset_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnset_tags?: (ctx: Unset_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.tag_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTag_list?: (ctx: Tag_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_command?: (ctx: Create_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_account`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_account?: (ctx: Create_accountContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_alert`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_alert?: (ctx: Create_alertContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alert_condition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlert_condition?: (ctx: Alert_conditionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alert_action`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlert_action?: (ctx: Alert_actionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_api_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_api_integration?: (ctx: Create_api_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_object_clone`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_object_clone?: (ctx: Create_object_cloneContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_connection`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_connection?: (ctx: Create_connectionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_database`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_database?: (ctx: Create_databaseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.clone_at_before`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClone_at_before?: (ctx: Clone_at_beforeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.at_before1`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAt_before1?: (ctx: At_before1Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.header_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHeader_decl?: (ctx: Header_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.compression_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompression_type?: (ctx: Compression_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.compression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompression?: (ctx: CompressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_dataset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_dataset?: (ctx: Create_datasetContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_dynamic_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_dynamic_table?: (ctx: Create_dynamic_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.dynamic_table_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDynamic_table_params?: (ctx: Dynamic_table_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.dynamic_table_settable_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDynamic_table_settable_params?: (ctx: Dynamic_table_settable_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.dynamic_table_unsettable_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDynamic_table_unsettable_params?: (ctx: Dynamic_table_unsettable_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.data_retention_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitData_retention_params?: (ctx: Data_retention_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.set_data_retention_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSet_data_retention_params?: (ctx: Set_data_retention_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_event_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_event_table?: (ctx: Create_event_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_external_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_external_function?: (ctx: Create_external_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_external_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_external_table?: (ctx: Create_external_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.external_table_column_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternal_table_column_decl?: (ctx: External_table_column_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.external_table_column_decl_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternal_table_column_decl_list?: (ctx: External_table_column_decl_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.full_acct`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_acct?: (ctx: Full_acctContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.integration_type_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntegration_type_name?: (ctx: Integration_type_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_failover_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_failover_group?: (ctx: Create_failover_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.type_fileformat`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_fileformat?: (ctx: Type_fileformatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_file_format`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_file_format?: (ctx: Create_file_formatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.arg_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArg_decl?: (ctx: Arg_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.arg_default_value_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArg_default_value_clause?: (ctx: Arg_default_value_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.col_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCol_decl?: (ctx: Col_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.virtual_column_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVirtual_column_decl?: (ctx: Virtual_column_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.function_definition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_definition?: (ctx: Function_definitionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_function?: (ctx: Create_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_git_repository`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_git_repository?: (ctx: Create_git_repositoryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_git_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_git_opts?: (ctx: Create_git_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_managed_account`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_managed_account?: (ctx: Create_managed_accountContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_masking_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_masking_policy?: (ctx: Create_masking_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.tag_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTag_decl?: (ctx: Tag_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_list_in_parentheses`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_list_in_parentheses?: (ctx: Column_list_in_parenthesesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_materialized_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_materialized_view?: (ctx: Create_materialized_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_network_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_network_policy?: (ctx: Create_network_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cloud_provider_params_auto`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCloud_provider_params_auto?: (ctx: Cloud_provider_params_autoContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cloud_provider_params_push`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCloud_provider_params_push?: (ctx: Cloud_provider_params_pushContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_notification_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_notification_integration?: (ctx: Create_notification_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_pipe`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_pipe?: (ctx: Create_pipeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.caller_owner`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCaller_owner?: (ctx: Caller_ownerContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.executa_as`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExecuta_as?: (ctx: Executa_asContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.procedure_definition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProcedure_definition?: (ctx: Procedure_definitionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.not_null`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNot_null?: (ctx: Not_nullContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_procedure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_procedure?: (ctx: Create_procedureContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_replication_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_replication_group?: (ctx: Create_replication_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_resource_monitor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_resource_monitor?: (ctx: Create_resource_monitorContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_role?: (ctx: Create_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_row_access_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_row_access_policy?: (ctx: Create_row_access_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_schema`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_schema?: (ctx: Create_schemaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_secret`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_secret?: (ctx: Create_secretContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_security_integration_external_oauth`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_security_integration_external_oauth?: (
    ctx: Create_security_integration_external_oauthContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.implicit_none`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitImplicit_none?: (ctx: Implicit_noneContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_security_integration_snowflake_oauth`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_security_integration_snowflake_oauth?: (
    ctx: Create_security_integration_snowflake_oauthContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_security_integration_saml2`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_security_integration_saml2?: (
    ctx: Create_security_integration_saml2Context
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_security_integration_scim`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_security_integration_scim?: (ctx: Create_security_integration_scimContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.network_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNetwork_policy?: (ctx: Network_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.partner_application`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPartner_application?: (ctx: Partner_applicationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.start_with`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart_with?: (ctx: Start_withContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.increment_by`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncrement_by?: (ctx: Increment_byContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_sequence`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_sequence?: (ctx: Create_sequenceContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_session_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_session_policy?: (ctx: Create_session_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.session_policy_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSession_policy_params?: (ctx: Session_policy_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.session_policy_param_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSession_policy_param_name?: (ctx: Session_policy_param_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_password_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_password_policy?: (ctx: Create_password_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.password_policy_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPassword_policy_params?: (ctx: Password_policy_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.password_policy_param_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPassword_policy_param_name?: (ctx: Password_policy_param_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_share`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_share?: (ctx: Create_shareContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.character`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCharacter?: (ctx: CharacterContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.format_type_options`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFormat_type_options?: (ctx: Format_type_optionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.copy_options`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCopy_options?: (ctx: Copy_optionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_encryption_opts_internal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_encryption_opts_internal?: (ctx: Stage_encryption_opts_internalContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_type?: (ctx: Stage_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_master_key`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_master_key?: (ctx: Stage_master_keyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_kms_key`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_kms_key?: (ctx: Stage_kms_keyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_encryption_opts_aws`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_encryption_opts_aws?: (ctx: Stage_encryption_opts_awsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.aws_token`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAws_token?: (ctx: Aws_tokenContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.aws_key_id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAws_key_id?: (ctx: Aws_key_idContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.aws_secret_key`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAws_secret_key?: (ctx: Aws_secret_keyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.aws_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAws_role?: (ctx: Aws_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.azure_encryption_value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAzure_encryption_value?: (ctx: Azure_encryption_valueContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_encryption_opts_az`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_encryption_opts_az?: (ctx: Stage_encryption_opts_azContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.storage_integration_eq_id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStorage_integration_eq_id?: (ctx: Storage_integration_eq_idContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.az_credential_or_storage_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAz_credential_or_storage_integration?: (
    ctx: Az_credential_or_storage_integrationContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.gcp_encryption_value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGcp_encryption_value?: (ctx: Gcp_encryption_valueContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stage_encryption_opts_gcp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStage_encryption_opts_gcp?: (ctx: Stage_encryption_opts_gcpContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.aws_credential_or_storage_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAws_credential_or_storage_integration?: (
    ctx: Aws_credential_or_storage_integrationContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.external_stage_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternal_stage_params?: (ctx: External_stage_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.true_false`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTrue_false?: (ctx: True_falseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.enable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnable?: (ctx: EnableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.refresh_on_create`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefresh_on_create?: (ctx: Refresh_on_createContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.auto_refresh`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAuto_refresh?: (ctx: Auto_refreshContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.notification_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNotification_integration?: (ctx: Notification_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.directory_table_internal_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectory_table_internal_params?: (ctx: Directory_table_internal_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.directory_table_external_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectory_table_external_params?: (ctx: Directory_table_external_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_stage?: (ctx: Create_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alter_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlter_stage?: (ctx: Alter_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_stage?: (ctx: Drop_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_stage`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_stage?: (ctx: Describe_stageContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_stages`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_stages?: (ctx: Show_stagesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cloud_provider_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCloud_provider_params?: (ctx: Cloud_provider_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cloud_provider_params2`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCloud_provider_params2?: (ctx: Cloud_provider_params2Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cloud_provider_params3`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCloud_provider_params3?: (ctx: Cloud_provider_params3Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_storage_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_storage_integration?: (ctx: Create_storage_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.copy_grants`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCopy_grants?: (ctx: Copy_grantsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.append_only`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAppend_only?: (ctx: Append_onlyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.insert_only`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInsert_only?: (ctx: Insert_onlyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_initial_rows`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_initial_rows?: (ctx: Show_initial_rowsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.stream_time`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStream_time?: (ctx: Stream_timeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_stream`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_stream?: (ctx: Create_streamContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.temporary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTemporary?: (ctx: TemporaryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_type?: (ctx: Table_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.with_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWith_tags?: (ctx: With_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.with_row_access_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWith_row_access_policy?: (ctx: With_row_access_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cluster_by`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCluster_by?: (ctx: Cluster_byContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.change_tracking`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitChange_tracking?: (ctx: Change_trackingContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.with_masking_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWith_masking_policy?: (ctx: With_masking_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.collate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCollate?: (ctx: CollateContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.order_noorder`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrder_noorder?: (ctx: Order_noorderContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.default_value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefault_value?: (ctx: Default_valueContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.foreign_key`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForeign_key?: (ctx: Foreign_keyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.primary_key`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimary_key?: (ctx: Primary_keyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.out_of_line_constraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOut_of_line_constraint?: (ctx: Out_of_line_constraintContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.full_col_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_col_decl?: (ctx: Full_col_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.materialized_col_decl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMaterialized_col_decl?: (ctx: Materialized_col_declContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.materialized_col_decl_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMaterialized_col_decl_list?: (ctx: Materialized_col_decl_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_decl_item`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_decl_item?: (ctx: Column_decl_itemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_decl_item_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_decl_item_list?: (ctx: Column_decl_item_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_table?: (ctx: Create_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_decl_item_list_paren`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_decl_item_list_paren?: (ctx: Column_decl_item_list_parenContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_table_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_table_clause?: (ctx: Create_table_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_table_as_select`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_table_as_select?: (ctx: Create_table_as_selectContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_table_like`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_table_like?: (ctx: Create_table_likeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_tag`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_tag?: (ctx: Create_tagContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.tag_allowed_values`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTag_allowed_values?: (ctx: Tag_allowed_valuesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.session_parameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSession_parameter?: (ctx: Session_parameterContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.session_parameter_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSession_parameter_list?: (ctx: Session_parameter_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.session_params_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSession_params_list?: (ctx: Session_params_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_task`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_task?: (ctx: Create_taskContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_parameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_parameters?: (ctx: Task_parametersContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_compute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_compute?: (ctx: Task_computeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_schedule`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_schedule?: (ctx: Task_scheduleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_timeout`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_timeout?: (ctx: Task_timeoutContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_suspend_after_failure_number`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_suspend_after_failure_number?: (
    ctx: Task_suspend_after_failure_numberContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_error_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_error_integration?: (ctx: Task_error_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.task_overlap`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTask_overlap?: (ctx: Task_overlapContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.sql`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSql?: (ctx: SqlContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCall?: (ctx: CallContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_user`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_user?: (ctx: Create_userContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.view_col`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitView_col?: (ctx: View_colContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_view?: (ctx: Create_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.create_warehouse`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCreate_warehouse?: (ctx: Create_warehouseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.wh_common_size`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWh_common_size?: (ctx: Wh_common_sizeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.wh_extra_size`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWh_extra_size?: (ctx: Wh_extra_sizeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.wh_properties`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWh_properties?: (ctx: Wh_propertiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.wh_params`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWh_params?: (ctx: Wh_paramsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.trigger_definition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTrigger_definition?: (ctx: Trigger_definitionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_type_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_type_name?: (ctx: Object_type_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_type_plural`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_type_plural?: (ctx: Object_type_pluralContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_command?: (ctx: Drop_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_object`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_object?: (ctx: Drop_objectContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_alert`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_alert?: (ctx: Drop_alertContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_connection`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_connection?: (ctx: Drop_connectionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_database`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_database?: (ctx: Drop_databaseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_dynamic_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_dynamic_table?: (ctx: Drop_dynamic_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_external_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_external_table?: (ctx: Drop_external_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_failover_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_failover_group?: (ctx: Drop_failover_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_file_format`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_file_format?: (ctx: Drop_file_formatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_function?: (ctx: Drop_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_git_repository`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_git_repository?: (ctx: Drop_git_repositoryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_integration?: (ctx: Drop_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_managed_account`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_managed_account?: (ctx: Drop_managed_accountContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_masking_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_masking_policy?: (ctx: Drop_masking_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_materialized_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_materialized_view?: (ctx: Drop_materialized_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_network_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_network_policy?: (ctx: Drop_network_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_pipe`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_pipe?: (ctx: Drop_pipeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_procedure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_procedure?: (ctx: Drop_procedureContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_replication_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_replication_group?: (ctx: Drop_replication_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_resource_monitor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_resource_monitor?: (ctx: Drop_resource_monitorContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_role?: (ctx: Drop_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_row_access_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_row_access_policy?: (ctx: Drop_row_access_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_schema`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_schema?: (ctx: Drop_schemaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_secret`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_secret?: (ctx: Drop_secretContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_sequence`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_sequence?: (ctx: Drop_sequenceContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_session_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_session_policy?: (ctx: Drop_session_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_password_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_password_policy?: (ctx: Drop_password_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_share`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_share?: (ctx: Drop_shareContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_stream`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_stream?: (ctx: Drop_streamContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_table?: (ctx: Drop_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_tag`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_tag?: (ctx: Drop_tagContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_task`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_task?: (ctx: Drop_taskContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_user`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_user?: (ctx: Drop_userContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_view?: (ctx: Drop_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.drop_warehouse`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDrop_warehouse?: (ctx: Drop_warehouseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cascade_restrict`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCascade_restrict?: (ctx: Cascade_restrictContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.arg_types`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArg_types?: (ctx: Arg_typesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.undrop_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUndrop_command?: (ctx: Undrop_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.undrop_database`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUndrop_database?: (ctx: Undrop_databaseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.undrop_schema`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUndrop_schema?: (ctx: Undrop_schemaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.undrop_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUndrop_table?: (ctx: Undrop_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.undrop_tag`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUndrop_tag?: (ctx: Undrop_tagContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.use_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUse_command?: (ctx: Use_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.use_database`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUse_database?: (ctx: Use_databaseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.use_role`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUse_role?: (ctx: Use_roleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.use_schema`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUse_schema?: (ctx: Use_schemaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.use_secondary_roles`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUse_secondary_roles?: (ctx: Use_secondary_rolesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.use_warehouse`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUse_warehouse?: (ctx: Use_warehouseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.comment_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComment_clause?: (ctx: Comment_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.inline_comment_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInline_comment_clause?: (ctx: Inline_comment_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.if_suspended`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIf_suspended?: (ctx: If_suspendedContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.if_exists`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIf_exists?: (ctx: If_existsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.if_not_exists`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIf_not_exists?: (ctx: If_not_existsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.or_replace`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOr_replace?: (ctx: Or_replaceContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.or_alter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOr_alter?: (ctx: Or_alterContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe?: (ctx: DescribeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_command?: (ctx: Describe_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_alert`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_alert?: (ctx: Describe_alertContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_database`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_database?: (ctx: Describe_databaseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_dynamic_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_dynamic_table?: (ctx: Describe_dynamic_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_event_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_event_table?: (ctx: Describe_event_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_external_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_external_table?: (ctx: Describe_external_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_file_format`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_file_format?: (ctx: Describe_file_formatContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_function?: (ctx: Describe_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_git_repository`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_git_repository?: (ctx: Describe_git_repositoryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_integration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_integration?: (ctx: Describe_integrationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_masking_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_masking_policy?: (ctx: Describe_masking_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_materialized_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_materialized_view?: (ctx: Describe_materialized_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_network_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_network_policy?: (ctx: Describe_network_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_pipe`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_pipe?: (ctx: Describe_pipeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_procedure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_procedure?: (ctx: Describe_procedureContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_result`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_result?: (ctx: Describe_resultContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_row_access_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_row_access_policy?: (ctx: Describe_row_access_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_schema`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_schema?: (ctx: Describe_schemaContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_search_optimization`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_search_optimization?: (ctx: Describe_search_optimizationContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_sequence`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_sequence?: (ctx: Describe_sequenceContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_session_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_session_policy?: (ctx: Describe_session_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_password_policy`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_password_policy?: (ctx: Describe_password_policyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_share`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_share?: (ctx: Describe_shareContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_stream`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_stream?: (ctx: Describe_streamContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_table?: (ctx: Describe_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_task`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_task?: (ctx: Describe_taskContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_transaction`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_transaction?: (ctx: Describe_transactionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_user`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_user?: (ctx: Describe_userContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_view`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_view?: (ctx: Describe_viewContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.describe_warehouse`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescribe_warehouse?: (ctx: Describe_warehouseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_command`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_command?: (ctx: Show_commandContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_alerts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_alerts?: (ctx: Show_alertsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_channels`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_channels?: (ctx: Show_channelsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_columns`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_columns?: (ctx: Show_columnsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_connections`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_connections?: (ctx: Show_connectionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.starts_with`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStarts_with?: (ctx: Starts_withContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.limit_rows`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLimit_rows?: (ctx: Limit_rowsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_databases`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_databases?: (ctx: Show_databasesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_databases_in_failover_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_databases_in_failover_group?: (ctx: Show_databases_in_failover_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_databases_in_replication_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_databases_in_replication_group?: (
    ctx: Show_databases_in_replication_groupContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_datasets`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_datasets?: (ctx: Show_datasetsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_delegated_authorizations`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_delegated_authorizations?: (ctx: Show_delegated_authorizationsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_dynamic_tables`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_dynamic_tables?: (ctx: Show_dynamic_tablesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_event_tables`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_event_tables?: (ctx: Show_event_tablesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_external_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_external_functions?: (ctx: Show_external_functionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_external_tables`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_external_tables?: (ctx: Show_external_tablesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_failover_groups`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_failover_groups?: (ctx: Show_failover_groupsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_file_formats`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_file_formats?: (ctx: Show_file_formatsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_functions?: (ctx: Show_functionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_git_branches`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_git_branches?: (ctx: Show_git_branchesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_git_repositories`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_git_repositories?: (ctx: Show_git_repositoriesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_git_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_git_tags?: (ctx: Show_git_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_global_accounts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_global_accounts?: (ctx: Show_global_accountsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_grants`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_grants?: (ctx: Show_grantsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_grants_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_grants_opts?: (ctx: Show_grants_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_integrations`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_integrations?: (ctx: Show_integrationsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_locks`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_locks?: (ctx: Show_locksContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_managed_accounts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_managed_accounts?: (ctx: Show_managed_accountsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_masking_policies`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_masking_policies?: (ctx: Show_masking_policiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.in_obj`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIn_obj?: (ctx: In_objContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.in_obj_2`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIn_obj_2?: (ctx: In_obj_2Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_materialized_views`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_materialized_views?: (ctx: Show_materialized_viewsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_network_policies`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_network_policies?: (ctx: Show_network_policiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_objects`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_objects?: (ctx: Show_objectsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_organization_accounts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_organization_accounts?: (ctx: Show_organization_accountsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.in_for`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIn_for?: (ctx: In_forContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_parameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_parameters?: (ctx: Show_parametersContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_pipes`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_pipes?: (ctx: Show_pipesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_primary_keys`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_primary_keys?: (ctx: Show_primary_keysContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_procedures`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_procedures?: (ctx: Show_proceduresContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_regions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_regions?: (ctx: Show_regionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_replication_accounts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_replication_accounts?: (ctx: Show_replication_accountsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_replication_databases`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_replication_databases?: (ctx: Show_replication_databasesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_replication_groups`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_replication_groups?: (ctx: Show_replication_groupsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_resource_monitors`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_resource_monitors?: (ctx: Show_resource_monitorsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_roles`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_roles?: (ctx: Show_rolesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_row_access_policies`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_row_access_policies?: (ctx: Show_row_access_policiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_schemas`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_schemas?: (ctx: Show_schemasContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_secrets`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_secrets?: (ctx: Show_secretsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_sequences`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_sequences?: (ctx: Show_sequencesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_session_policies`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_session_policies?: (ctx: Show_session_policiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_password_policies`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_password_policies?: (ctx: Show_password_policiesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_shares`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_shares?: (ctx: Show_sharesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_shares_in_failover_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_shares_in_failover_group?: (ctx: Show_shares_in_failover_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_shares_in_replication_group`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_shares_in_replication_group?: (ctx: Show_shares_in_replication_groupContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_streams`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_streams?: (ctx: Show_streamsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_tables`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_tables?: (ctx: Show_tablesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_tags`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_tags?: (ctx: Show_tagsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_tasks`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_tasks?: (ctx: Show_tasksContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_transactions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_transactions?: (ctx: Show_transactionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_user_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_user_functions?: (ctx: Show_user_functionsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_users`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_users?: (ctx: Show_usersContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_variables`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_variables?: (ctx: Show_variablesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_versions_in_dataset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_versions_in_dataset?: (ctx: Show_versions_in_datasetContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_views`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_views?: (ctx: Show_viewsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.show_warehouses`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShow_warehouses?: (ctx: Show_warehousesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.like_pattern`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLike_pattern?: (ctx: Like_patternContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.account_identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAccount_identifier?: (ctx: Account_identifierContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.schema_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSchema_name?: (ctx: Schema_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_type?: (ctx: Object_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_type_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_type_list?: (ctx: Object_type_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.tag_value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTag_value?: (ctx: Tag_valueContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.arg_data_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArg_data_type?: (ctx: Arg_data_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.arg_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArg_name?: (ctx: Arg_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.param_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParam_name?: (ctx: Param_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.region_group_id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRegion_group_id?: (ctx: Region_group_idContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.snowflake_region_id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSnowflake_region_id?: (ctx: Snowflake_region_idContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.string`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString?: (ctx: StringContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.string_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString_list?: (ctx: String_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.id_fn`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId_fn?: (ctx: Id_fnContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.id_`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId_?: (ctx: Id_Context) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.keyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitKeyword?: (ctx: KeywordContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.non_reserved_words`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNon_reserved_words?: (ctx: Non_reserved_wordsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.builtin_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBuiltin_function?: (ctx: Builtin_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.unary_or_binary_builtin_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_or_binary_builtin_function?: (ctx: Unary_or_binary_builtin_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.binary_builtin_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBinary_builtin_function?: (ctx: Binary_builtin_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.binary_or_ternary_builtin_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBinary_or_ternary_builtin_function?: (
    ctx: Binary_or_ternary_builtin_functionContext
  ) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.ternary_builtin_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTernary_builtin_function?: (ctx: Ternary_builtin_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.list_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitList_function?: (ctx: List_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.pattern`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPattern?: (ctx: PatternContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_name?: (ctx: Column_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_list?: (ctx: Column_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_list_with_comment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_list_with_comment?: (ctx: Column_list_with_commentContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_name?: (ctx: Object_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_name_or_identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_name_or_identifier?: (ctx: Object_name_or_identifierContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.num`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNum?: (ctx: NumContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.expr_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpr_list?: (ctx: Expr_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.expr_list_sorted`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpr_list_sorted?: (ctx: Expr_list_sortedContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpr?: (ctx: ExprContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.iff_expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIff_expr?: (ctx: Iff_exprContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.trim_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTrim_expression?: (ctx: Trim_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.try_cast_expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTry_cast_expr?: (ctx: Try_cast_exprContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.cast_expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCast_expr?: (ctx: Cast_exprContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.json_literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJson_literal?: (ctx: Json_literalContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.kv_pair`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitKv_pair?: (ctx: Kv_pairContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValue?: (ctx: ValueContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.arr_literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArr_literal?: (ctx: Arr_literalContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.data_type_size`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitData_type_size?: (ctx: Data_type_sizeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.data_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitData_type?: (ctx: Data_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.primitive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimitive_expression?: (ctx: Primitive_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.order_by_expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrder_by_expr?: (ctx: Order_by_exprContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.asc_desc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAsc_desc?: (ctx: Asc_descContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.over_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOver_clause?: (ctx: Over_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.function_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_call?: (ctx: Function_callContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.param_assoc_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParam_assoc_list?: (ctx: Param_assoc_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.param_assoc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParam_assoc?: (ctx: Param_assocContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.ignore_or_repect_nulls`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIgnore_or_repect_nulls?: (ctx: Ignore_or_repect_nullsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.ranking_windowed_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.aggregate_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAggregate_function?: (ctx: Aggregate_functionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLiteral?: (ctx: LiteralContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.sign`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSign?: (ctx: SignContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.full_column_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_column_name?: (ctx: Full_column_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.bracket_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBracket_expression?: (ctx: Bracket_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.case_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCase_expression?: (ctx: Case_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.switch_search_condition_section`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.switch_section`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_section?: (ctx: Switch_sectionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.query_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQuery_statement?: (ctx: Query_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.with_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWith_expression?: (ctx: With_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.common_table_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCommon_table_expression?: (ctx: Common_table_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_statement?: (ctx: Select_statementContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.set_operators`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSet_operators?: (ctx: Set_operatorsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.by_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBy_name?: (ctx: By_nameContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_statement_in_parentheses`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_statement_in_parentheses?: (ctx: Select_statement_in_parenthesesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_optional_clauses`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_optional_clauses?: (ctx: Select_optional_clausesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_clause?: (ctx: Select_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_top_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_top_clause?: (ctx: Select_top_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_list_no_top`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_list_no_top?: (ctx: Select_list_no_topContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_list_top`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_list_top?: (ctx: Select_list_topContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_list?: (ctx: Select_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.select_list_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_list_elem?: (ctx: Select_list_elemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_elem_star`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_elem_star?: (ctx: Column_elem_starContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_elem?: (ctx: Column_elemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_name_or_alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_name_or_alias?: (ctx: Object_name_or_aliasContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.exclude_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclude_clause?: (ctx: Exclude_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.as_alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAs_alias?: (ctx: As_aliasContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.expression_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression_elem?: (ctx: Expression_elemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_position`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_position?: (ctx: Column_positionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.all_distinct`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAll_distinct?: (ctx: All_distinctContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.top_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTop_clause?: (ctx: Top_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.into_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInto_clause?: (ctx: Into_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.var_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVar_list?: (ctx: Var_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.var`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVar?: (ctx: VarContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.from_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFrom_clause?: (ctx: From_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_sources`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_sources?: (ctx: Table_sourcesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_source`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_source?: (ctx: Table_sourceContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.table_source_item_joined`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.object_ref`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitObject_ref?: (ctx: Object_refContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.flatten_table_option`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFlatten_table_option?: (ctx: Flatten_table_optionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.flatten_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFlatten_table?: (ctx: Flatten_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.splited_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSplited_table?: (ctx: Splited_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.prior_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrior_list?: (ctx: Prior_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.prior_item`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrior_item?: (ctx: Prior_itemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.outer_join`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOuter_join?: (ctx: Outer_joinContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.join_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJoin_type?: (ctx: Join_typeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.join_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJoin_clause?: (ctx: Join_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.at_before`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAt_before?: (ctx: At_beforeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.end`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnd?: (ctx: EndContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.changes`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitChanges?: (ctx: ChangesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.default_append_only`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefault_append_only?: (ctx: Default_append_onlyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.partition_by`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPartition_by?: (ctx: Partition_byContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlias?: (ctx: AliasContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.expr_alias_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpr_alias_list?: (ctx: Expr_alias_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.measures`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMeasures?: (ctx: MeasuresContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.match_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMatch_opts?: (ctx: Match_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.row_match`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRow_match?: (ctx: Row_matchContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.first_last`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFirst_last?: (ctx: First_lastContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.symbol`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSymbol?: (ctx: SymbolContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.after_match`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAfter_match?: (ctx: After_matchContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.symbol_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSymbol_list?: (ctx: Symbol_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.define`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefine?: (ctx: DefineContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.match_recognize`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMatch_recognize?: (ctx: Match_recognizeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.pivot_unpivot`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPivot_unpivot?: (ctx: Pivot_unpivotContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.column_alias_list_in_brackets`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_alias_list_in_brackets?: (ctx: Column_alias_list_in_bracketsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.expr_list_in_parentheses`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpr_list_in_parentheses?: (ctx: Expr_list_in_parenthesesContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.values_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValues_table?: (ctx: Values_tableContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.values_table_body`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValues_table_body?: (ctx: Values_table_bodyContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.sample_method`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSample_method?: (ctx: Sample_methodContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.repeatable_seed`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRepeatable_seed?: (ctx: Repeatable_seedContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.sample_opts`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSample_opts?: (ctx: Sample_optsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.sample`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSample?: (ctx: SampleContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.search_condition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSearch_condition?: (ctx: Search_conditionContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.comparison_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.null_not_null`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNull_not_null?: (ctx: Null_not_nullContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.not_distinct_from`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNot_distinct_from?: (ctx: Not_distinct_fromContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.subquery`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubquery?: (ctx: SubqueryContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.predicate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPredicate?: (ctx: PredicateContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.where_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhere_clause?: (ctx: Where_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.group_by_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGroup_by_elem?: (ctx: Group_by_elemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.group_by_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGroup_by_list?: (ctx: Group_by_listContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.group_by_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGroup_by_clause?: (ctx: Group_by_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.having_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHaving_clause?: (ctx: Having_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.qualify_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQualify_clause?: (ctx: Qualify_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.order_item`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrder_item?: (ctx: Order_itemContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.order_by_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrder_by_clause?: (ctx: Order_by_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.row_rows`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRow_rows?: (ctx: Row_rowsContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.first_next`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFirst_next?: (ctx: First_nextContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.limit_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLimit_clause?: (ctx: Limit_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.round_mode`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRound_mode?: (ctx: Round_modeContext) => Result;

  /**
   * Visit a parse tree produced by `SnowflakeParser.round_expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRound_expr?: (ctx: Round_exprContext) => Result;
}
