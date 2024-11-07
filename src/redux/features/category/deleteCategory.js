

import { baseApi } from "../../api/baseApi";


const deleteCategory = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type : "Category"}] 
        })
    })
})

export const {useDeleteCategoryMutation} = deleteCategory;