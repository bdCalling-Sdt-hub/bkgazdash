

import { baseApi } from "../../api/baseApi";

const statusChange = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        statusChange: builder.mutation({
            query: (data) => ({
                url: `/admin/shop-timing`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{type: "About"}]
        })
    })
})

export const {useStatusChangeMutation} = statusChange