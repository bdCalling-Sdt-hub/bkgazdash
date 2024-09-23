import { baseApi } from "../../api/baseApi";


const deleteCoupon = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deleteCoupon: builder.mutation({
            query: (id) => ({
                url: `/coupon/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type : "Coupon"}] 
        })
    })
})

export const {useDeleteCouponMutation} = deleteCoupon;