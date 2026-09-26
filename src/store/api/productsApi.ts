import { baseApi } from "./baseApi";
import { products as mockProducts } from "@/data/products";
import { Product } from "@/types/product";

/**
 * Product endpoints. Until the real backend exists, queryFn resolves from local
 * mock data — swap each queryFn for a normal `query: () => "/products"` once the
 * API is live; consuming components (using the generated hooks) won't need to change.
 */
export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { category?: string } | void>({
      queryFn: (arg) => {
        const category = arg?.category;
        const data = category ? mockProducts.filter((p) => p.category === category) : mockProducts;
        return { data };
      },
      providesTags: ["Product"],
    }),
    getProduct: builder.query<Product | undefined, string>({
      queryFn: (slug) => ({ data: mockProducts.find((p) => p.slug === slug) }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
