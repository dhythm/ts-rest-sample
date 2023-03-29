import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./contract";
import React from "react";

const client = initQueryClient(contract, {
  baseUrl: "http://localhost:3333",
  baseHeaders: {},
});

export const Index = () => {
  const { data, isLoading, error } = client.getPost.useQuery(["post"], {
    params: { id: "1" },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data?.status !== 200 || error) {
    return <div>Error</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
