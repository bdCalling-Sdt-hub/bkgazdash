import { baseApi } from "../../api/baseApi";

const addCoupon = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCoupon: builder.mutation({
            query: (data) => ({
                url: `/coupon`,
                method: "POST",
                body: data
            }),
            invalidatesTags: [ {type: "Coupon"}]
        })
    })
})


export const {useAddCouponMutation} = addCoupon;