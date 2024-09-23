
import { baseApi } from "../../api/baseApi";


const editPrivacy = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editPrivacy: builder.mutation({
            query: ({id, content}) => ({
                url: `/setting/privacyPolicy/${id}`,
                method: "PATCH",
                body: { content }
            }),
            invalidatesTags: ["About"],
        })
    })
})

export const {useEditPrivacyMutation} = editPrivacy;