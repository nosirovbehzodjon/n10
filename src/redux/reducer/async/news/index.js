import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token =
    "eyJhbGciOiJIUzI1NiJ9.ZjQ0NmNiM2YtMGViMy00NTdkLWE4ZWEtYWFhMTc0MjRkY2Ew.CB0c9GualVYDcxWdVGcZVjqWaFNsIsIHU4ULrO4xonU";
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakesoftalim.mquvonchbek.uz/api/v1",
    }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => "/news",
            providesTags: ["news"],
        }),
        deleteNews: builder.mutation({
            query: (data) => ({
                url: "/news/delete",
                body: data,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ["news"],
        }),
    }),
});

export const { useGetNewsQuery, useDeleteNewsMutation } = api;
