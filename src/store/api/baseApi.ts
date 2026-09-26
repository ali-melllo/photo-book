import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Central RTK Query API slice. All feature endpoints (products, orders, user, ...)
 * are injected into this via `baseApi.injectEndpoints` so there's a single cache
 * and a single place to configure base URL / auth headers once the backend exists.
 */
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Product", "Category", "Template", "User", "Order", "Cart"],
  endpoints: () => ({}),
});
