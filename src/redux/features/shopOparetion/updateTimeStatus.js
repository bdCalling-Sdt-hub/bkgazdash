import { baseApi } from "../../api/baseApi";

const updateTime = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateTime: builder.mutation({
            query: (data) => ({
                url: `/admin/update-shop-timing`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{type: "About"}]
        })
    })
})

export const {useUpdateTimeMutation} = updateTime