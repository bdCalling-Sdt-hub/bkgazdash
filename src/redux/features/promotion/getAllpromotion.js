import { baseApi } from "../../api/baseApi";


const getPromotion = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPromotion: builder.query({
            query: () => `/promotion`,
            providesTags: ["Promotion"],
        }),
    }),
    overrideExisting: false,
})

export const {useGetPromotionQuery} = getPromotion;