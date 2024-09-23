 
import { baseApi } from "../../api/baseApi";
 


const editCoupon = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editCoupon: builder.mutation({
            query: ({id , data}) => ({ 
             url: `/coupon/${id}`,
            method : "PATCH",
            body:  data
            }),
            invalidatesTags: [{type: "Coupon"}]
        })
    })
})

export const {useEditCouponMutation} = editCoupon