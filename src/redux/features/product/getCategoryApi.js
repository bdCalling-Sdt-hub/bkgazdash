import { baseApi } from "../../api/baseApi";

const getCategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query:() => `/category`,
            providesTags: ["castegory"]
        })
    })
})

export const {useGetCategoryQuery} = getCategoryApi;