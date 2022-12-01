import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:"bookmarksApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({})
    })

