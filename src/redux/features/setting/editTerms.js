

import { baseApi } from "../../api/baseApi";


const editTerms = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editTerms: builder.mutation({
            query: ({id, content}) => ({
                url: `/setting/termsConditions/${id}`,
                method: "PATCH",
                body: { content }
            }),
            invalidatesTags: ["About"],
        })
    })
})

export const {useEditTermsMutation} = editTerms;