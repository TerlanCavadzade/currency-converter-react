import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const querySlice = createApi({
  reducerPath: "currency",
  tagTypes: ["currency", "RUB", "USD", "EUR", "GBP"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.exchangerate.host" }),
  endpoints: (builder) => ({
    getRate: builder.query({
      query: ({ from, to }) => `latest?base=${from}&symbols=${to}`,
      providesTags: (result, error, { from, to }) => ["currency", from, to],
      transformResponse: (data) => {
        return data.rates[Object.keys(data.rates)[0]];
      }
    })
  })
});

export const { useGetRateQuery } = querySlice;
