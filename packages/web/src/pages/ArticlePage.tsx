import React, { FC, useState, useEffect } from "react";
import { useDraftsQuery, DraftsDocument } from "../generated/graphql";
import {
  useMyArticlesQuery,
  useCreatearticleMutation,
} from "../generated/graphql";

export const ArticlePage: FC = () => {
  const { data, refetch, client, error } = useMyArticlesQuery({});
  const { data: draftData, refetch: refetchDraft } = useDraftsQuery({
    fetchPolicy: "cache-only",
  });
  const articles = data?.user?.articles ?? [];
  const drafts = draftData?.drafts ?? [];

  const [body, setBody] = useState("");
  const [createGroup] = useCreatearticleMutation();

  const handleCreateGroup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createGroup({
      variables: { objects: [{ body, userId: data?.activeUserId }] },
    });
    await refetch();
    setBody("");
  };

  const handleSaveToDraft = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    client.writeQuery({
      query: DraftsDocument,
      data: {
        drafts: [...drafts, { body }],
      },
    });
    setBody("");
  };

  return (
    <>
      <p>activeUserId: {data?.activeUserId}</p>
      <h2>記事一覧</h2>
      {articles.map((article) => (
        <p key={article.id}>
          id: {article.id}, body: {article.body}
        </p>
      ))}
      <h2>下書き一覧</h2>
      {drafts.map((draft, index) => (
        <p key={index}>body: {draft?.body}</p>
      ))}
      <form onSubmit={handleCreateGroup}>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">記事作成</button>
        <button onClick={handleSaveToDraft}>下書き保存</button>
      </form>
    </>
  );
};
