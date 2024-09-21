import { baseApi } from "../../api/baseApi";


const editPromotion = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editPromotion: builder.mutation({
            query: ({id, data}) => ({
                url: `/promotion/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Promotion"],
        })
    })
})

export const {useEditPromotionMutation} = editPromotion;