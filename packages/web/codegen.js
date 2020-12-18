module.exports = {
  schema: [

      "http://localhost:8080/v1/graphql",
      "src/graphql/local-schema.graphql",

  ],
  documents: [
    "./src/graphql/queries/*.graphql",
    "./src/graphql/mutations/*.graphql",
    "./src/graphql/subscriptions/*.graphql",

  ],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
