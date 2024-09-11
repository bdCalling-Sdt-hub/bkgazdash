import { baseApi } from "../../api/baseApi";


const deletePromotion = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deletePromotion: builder.mutation({
            query: (id) => ({
                url: `/promotion/${id}`,
                method: "DELETE", 
            }),
            invalidatesTags: ["Promotion"],
        })
    }),
    overrideExisting: false,
})

export const {useDeletePromotionMutation} = deletePromotion;