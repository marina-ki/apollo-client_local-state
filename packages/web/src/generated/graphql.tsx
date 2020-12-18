import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "group_users" */
export type Group_Users = {
  __typename?: 'group_users';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "group_users" */
export type Group_Users_Aggregate = {
  __typename?: 'group_users_aggregate';
  aggregate?: Maybe<Group_Users_Aggregate_Fields>;
  nodes: Array<Group_Users>;
};

/** aggregate fields of "group_users" */
export type Group_Users_Aggregate_Fields = {
  __typename?: 'group_users_aggregate_fields';
  avg?: Maybe<Group_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Users_Max_Fields>;
  min?: Maybe<Group_Users_Min_Fields>;
  stddev?: Maybe<Group_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Users_Sum_Fields>;
  var_pop?: Maybe<Group_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Users_Var_Samp_Fields>;
  variance?: Maybe<Group_Users_Variance_Fields>;
};


/** aggregate fields of "group_users" */
export type Group_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_users" */
export type Group_Users_Aggregate_Order_By = {
  avg?: Maybe<Group_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Users_Max_Order_By>;
  min?: Maybe<Group_Users_Min_Order_By>;
  stddev?: Maybe<Group_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Group_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Group_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Group_Users_Sum_Order_By>;
  var_pop?: Maybe<Group_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Group_Users_Var_Samp_Order_By>;
  variance?: Maybe<Group_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group_users" */
export type Group_Users_Arr_Rel_Insert_Input = {
  data: Array<Group_Users_Insert_Input>;
  on_conflict?: Maybe<Group_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Group_Users_Avg_Fields = {
  __typename?: 'group_users_avg_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_users" */
export type Group_Users_Avg_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_users". All fields are combined with a logical 'AND'. */
export type Group_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Users_Bool_Exp>>>;
  _not?: Maybe<Group_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Users_Bool_Exp>>>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_users" */
export enum Group_Users_Constraint {
  /** unique or primary key constraint */
  GroupUsersPkey = 'group_users_pkey'
}

/** input type for incrementing integer column in table "group_users" */
export type Group_Users_Inc_Input = {
  group_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group_users" */
export type Group_Users_Insert_Input = {
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Group_Users_Max_Fields = {
  __typename?: 'group_users_max_fields';
  group_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "group_users" */
export type Group_Users_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Users_Min_Fields = {
  __typename?: 'group_users_min_fields';
  group_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "group_users" */
export type Group_Users_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_users" */
export type Group_Users_Mutation_Response = {
  __typename?: 'group_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Group_Users>;
};

/** input type for inserting object relation for remote table "group_users" */
export type Group_Users_Obj_Rel_Insert_Input = {
  data: Group_Users_Insert_Input;
  on_conflict?: Maybe<Group_Users_On_Conflict>;
};

/** on conflict condition type for table "group_users" */
export type Group_Users_On_Conflict = {
  constraint: Group_Users_Constraint;
  update_columns: Array<Group_Users_Update_Column>;
  where?: Maybe<Group_Users_Bool_Exp>;
};

/** ordering options when selecting data from "group_users" */
export type Group_Users_Order_By = {
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "group_users" */
export type Group_Users_Pk_Columns_Input = {
  group_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

/** select columns of table "group_users" */
export enum Group_Users_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "group_users" */
export type Group_Users_Set_Input = {
  group_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Group_Users_Stddev_Fields = {
  __typename?: 'group_users_stddev_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_users" */
export type Group_Users_Stddev_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Users_Stddev_Pop_Fields = {
  __typename?: 'group_users_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_users" */
export type Group_Users_Stddev_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Users_Stddev_Samp_Fields = {
  __typename?: 'group_users_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_users" */
export type Group_Users_Stddev_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Users_Sum_Fields = {
  __typename?: 'group_users_sum_fields';
  group_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_users" */
export type Group_Users_Sum_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "group_users" */
export enum Group_Users_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Group_Users_Var_Pop_Fields = {
  __typename?: 'group_users_var_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_users" */
export type Group_Users_Var_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Users_Var_Samp_Fields = {
  __typename?: 'group_users_var_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_users" */
export type Group_Users_Var_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Users_Variance_Fields = {
  __typename?: 'group_users_variance_fields';
  group_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_users" */
export type Group_Users_Variance_Order_By = {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  /** An array relationship */
  group_users: Array<Group_Users>;
  /** An aggregated array relationship */
  group_users_aggregate: Group_Users_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "groups" */
export type GroupsGroup_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsGroup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  avg?: Maybe<Groups_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
  stddev?: Maybe<Groups_Stddev_Fields>;
  stddev_pop?: Maybe<Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Groups_Stddev_Samp_Fields>;
  sum?: Maybe<Groups_Sum_Fields>;
  var_pop?: Maybe<Groups_Var_Pop_Fields>;
  var_samp?: Maybe<Groups_Var_Samp_Fields>;
  variance?: Maybe<Groups_Variance_Fields>;
};


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "groups" */
export type Groups_Aggregate_Order_By = {
  avg?: Maybe<Groups_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Groups_Max_Order_By>;
  min?: Maybe<Groups_Min_Order_By>;
  stddev?: Maybe<Groups_Stddev_Order_By>;
  stddev_pop?: Maybe<Groups_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Groups_Stddev_Samp_Order_By>;
  sum?: Maybe<Groups_Sum_Order_By>;
  var_pop?: Maybe<Groups_Var_Pop_Order_By>;
  var_samp?: Maybe<Groups_Var_Samp_Order_By>;
  variance?: Maybe<Groups_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "groups" */
export type Groups_Arr_Rel_Insert_Input = {
  data: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** aggregate avg on columns */
export type Groups_Avg_Fields = {
  __typename?: 'groups_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "groups" */
export type Groups_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Groups_Bool_Exp>>>;
  _not?: Maybe<Groups_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Groups_Bool_Exp>>>;
  group_users?: Maybe<Group_Users_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey'
}

/** input type for incrementing integer column in table "groups" */
export type Groups_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  group_users?: Maybe<Group_Users_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "groups" */
export type Groups_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "groups" */
export type Groups_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};

/** on conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns: Array<Groups_Update_Column>;
  where?: Maybe<Groups_Bool_Exp>;
};

/** ordering options when selecting data from "groups" */
export type Groups_Order_By = {
  group_users_aggregate?: Maybe<Group_Users_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "groups" */
export type Groups_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Groups_Stddev_Fields = {
  __typename?: 'groups_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "groups" */
export type Groups_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Groups_Stddev_Pop_Fields = {
  __typename?: 'groups_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "groups" */
export type Groups_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Groups_Stddev_Samp_Fields = {
  __typename?: 'groups_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "groups" */
export type Groups_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Groups_Sum_Fields = {
  __typename?: 'groups_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "groups" */
export type Groups_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Groups_Var_Pop_Fields = {
  __typename?: 'groups_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "groups" */
export type Groups_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Groups_Var_Samp_Fields = {
  __typename?: 'groups_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "groups" */
export type Groups_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Groups_Variance_Fields = {
  __typename?: 'groups_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "groups" */
export type Groups_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "group_users" */
  delete_group_users?: Maybe<Group_Users_Mutation_Response>;
  /** delete single row from the table: "group_users" */
  delete_group_users_by_pk?: Maybe<Group_Users>;
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "group_users" */
  insert_group_users?: Maybe<Group_Users_Mutation_Response>;
  /** insert a single row into the table: "group_users" */
  insert_group_users_one?: Maybe<Group_Users>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "group_users" */
  update_group_users?: Maybe<Group_Users_Mutation_Response>;
  /** update single row of the table: "group_users" */
  update_group_users_by_pk?: Maybe<Group_Users>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Group_UsersArgs = {
  where: Group_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Users_By_PkArgs = {
  group_id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Group_UsersArgs = {
  objects: Array<Group_Users_Insert_Input>;
  on_conflict?: Maybe<Group_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Users_OneArgs = {
  object: Group_Users_Insert_Input;
  on_conflict?: Maybe<Group_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_UsersArgs = {
  _inc?: Maybe<Group_Users_Inc_Input>;
  _set?: Maybe<Group_Users_Set_Input>;
  where: Group_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Users_By_PkArgs = {
  _inc?: Maybe<Group_Users_Inc_Input>;
  _set?: Maybe<Group_Users_Set_Input>;
  pk_columns: Group_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _inc?: Maybe<Groups_Inc_Input>;
  _set?: Maybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _inc?: Maybe<Groups_Inc_Input>;
  _set?: Maybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  activeUserId: Scalars['Int'];
  /** fetch data from the table: "group_users" */
  group_users: Array<Group_Users>;
  /** fetch aggregated fields from the table: "group_users" */
  group_users_aggregate: Group_Users_Aggregate;
  /** fetch data from the table: "group_users" using primary key columns */
  group_users_by_pk?: Maybe<Group_Users>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootGroup_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_Users_By_PkArgs = {
  group_id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** query root */
export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** query root */
export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** query root */
export type Query_RootGroups_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "group_users" */
  group_users: Array<Group_Users>;
  /** fetch aggregated fields from the table: "group_users" */
  group_users_aggregate: Group_Users_Aggregate;
  /** fetch data from the table: "group_users" using primary key columns */
  group_users_by_pk?: Maybe<Group_Users>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootGroup_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_Users_By_PkArgs = {
  group_id: Scalars['Int'];
  user_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  group_users: Array<Group_Users>;
  /** An aggregated array relationship */
  group_users_aggregate: Group_Users_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersGroup_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGroup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Users_Order_By>>;
  where?: Maybe<Group_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  group_users?: Maybe<Group_Users_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  group_users?: Maybe<Group_Users_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  group_users_aggregate?: Maybe<Group_Users_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type CreateUserMutationVariables = Exact<{
  objects: Array<Users_Insert_Input>;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    )> }
  )> }
);

export type JoiningGroupsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type JoiningGroupsQuery = (
  { __typename?: 'query_root' }
  & Pick<Query_Root, 'activeUserId'>
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
    & { group_users: Array<(
      { __typename?: 'group_users' }
      & { group: (
        { __typename?: 'groups' }
        & Pick<Groups, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = (
  { __typename?: 'query_root' }
  & Pick<Query_Root, 'activeUserId'>
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($objects: [users_insert_input!]!) {
  insert_users(objects: $objects) {
    returning {
      id
      name
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const JoiningGroupsDocument = gql`
    query JoiningGroups($id: Int!) {
  activeUserId @client @export(as: "id")
  users_by_pk(id: $id) {
    id
    name
    group_users {
      group {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useJoiningGroupsQuery__
 *
 * To run a query within a React component, call `useJoiningGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJoiningGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJoiningGroupsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJoiningGroupsQuery(baseOptions: Apollo.QueryHookOptions<JoiningGroupsQuery, JoiningGroupsQueryVariables>) {
        return Apollo.useQuery<JoiningGroupsQuery, JoiningGroupsQueryVariables>(JoiningGroupsDocument, baseOptions);
      }
export function useJoiningGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JoiningGroupsQuery, JoiningGroupsQueryVariables>) {
          return Apollo.useLazyQuery<JoiningGroupsQuery, JoiningGroupsQueryVariables>(JoiningGroupsDocument, baseOptions);
        }
export type JoiningGroupsQueryHookResult = ReturnType<typeof useJoiningGroupsQuery>;
export type JoiningGroupsLazyQueryHookResult = ReturnType<typeof useJoiningGroupsLazyQuery>;
export type JoiningGroupsQueryResult = Apollo.QueryResult<JoiningGroupsQuery, JoiningGroupsQueryVariables>;
export const UserDocument = gql`
    query User($id: Int!) {
  activeUserId @client @export(as: "id")
  users_by_pk(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;