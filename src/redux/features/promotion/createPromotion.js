import { baseApi } from "../../api/baseApi";


const addPromotion = baseApi.injectEndpoints({
    endpoints: (builder) => ({
     addPromotion: builder.mutation({
        query: (data) => ({
            url: `/promotion`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ["Promotion"],
     })
    }),
    overrideExisting: false,
})

export const {useAddPromotionMutation} = addPromotion;