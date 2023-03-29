import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./contract";

const client = initQueryClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});

export const Index = () => {
  const { data, isLoading, error } = client.getPost.useQuery({
    params: { id: "1" },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data?.status !== 200 || error) {
    return <div>Error</div>;
  }

  return <div>{data.body.title}</div>;
};
