import { apiSlice } from "../api/apiSlice";


const bookmarksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBookmarks: builder.query({
            queryFn(){
                return {data: "passed"}
            }
        })
    })
})

export const {useGetBookmarksQuery} = bookmarksApi;