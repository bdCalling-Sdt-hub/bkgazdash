import { baseApi } from "../../api/baseApi";


const getAllCoupon = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCoupon: builder.query({
            query : () => `/coupon/all-coupons`,
            providesTags: [{type: "Coupon"}]

        }),
        
    })
})

export const {useGetAllCouponQuery} = getAllCoupon;