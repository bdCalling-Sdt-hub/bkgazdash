import { baseApi } from "../../api/baseApi";


const allCategory = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      allCategory: builder.query({
        query: () => "/category",
        providesTags: [{type: "Category"}]
      })
    })
})

export const {useAllCategoryQuery} = allCategory