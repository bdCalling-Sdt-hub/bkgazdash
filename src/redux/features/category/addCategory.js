

import { baseApi } from "../../api/baseApi";

const addCategory = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (data) => ({
                url: `/category`,
                method: "POST",
                body: data
            }),
            invalidatesTags: [ {type: "Category"}]
        })
    })
})


export const {useAddCategoryMutation} = addCategory;