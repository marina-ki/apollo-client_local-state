import React, { FC, useState, useEffect } from "react";
import {
  useJoiningGroupsQuery,
  useCreatearticleMutation,
} from "../generated/graphql";

export const ArticlePage: FC = () => {
  const { data, refetch } = useJoiningGroupsQuery({});
  const [body, setBody] = useState("");
  const [createGroup] = useCreatearticleMutation();
  const handleCreateGroup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createGroup({
      variables: { objects: [{ body, user_id: data?.activeUserId }] },
    });
    await refetch();
    setBody("");
  };

  return (
    <>
      <p>activeUserId: {data?.activeUserId}</p>
      <p>記事一覧</p>
      {data?.user?.articles.map((article) => (
        <p key={article.id}>
          id: {article.id}, body: {article.body}
        </p>
      ))}
      <form onSubmit={handleCreateGroup}>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">記事作成</button>
      </form>
    </>
  );
};
