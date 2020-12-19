import React, { FC, useState, useEffect } from "react";
import {
  useUserQuery,
  UserDocument,
  useCreateUserMutation,
} from "../generated/graphql";
import { useHistory } from "react-router-dom";

export const TopPage: FC = () => {
  const { data, client, refetch } = useUserQuery({
    fetchPolicy: "cache-and-network",
  });
  const activeUser = data?.user;
  const [name, setName] = useState("");
  const history = useHistory();

  const [createUser] = useCreateUserMutation();

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createUser({
      variables: { objects: [{ name: name }] },
    });
    const userId = res.data?.insert_users?.returning[0].id;
    await client.writeQuery({
      query: UserDocument,
      data: { activeUserId: userId },
    });
    setName("");
  };

  const handleToGroup = () => {
    history.push("/articles");
  };

  return (
    <>
      {activeUser ? (
        <>
          <p>userId: {activeUser.id}</p>
          <p>userName: {activeUser.name}</p>
          <p>activeUserId: {data?.activeUserId}</p>
          <button onClick={handleToGroup}>GroupPageへ</button>
        </>
      ) : (
        <form onSubmit={handleCreateUser}>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">ユーザー作成</button>
        </form>
      )}
    </>
  );
};
