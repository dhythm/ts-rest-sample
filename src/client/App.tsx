import { Index } from "./client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Hello, TS-REST App!</h1>
        <Index />
      </div>
    </QueryClientProvider>
  );
}
