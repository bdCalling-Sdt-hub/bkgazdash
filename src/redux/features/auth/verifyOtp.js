

import { baseApi } from "../../api/baseApi";

const verifyOtp = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: `/auth/verify-otp`,
                method:`POST`,
                body: data
            })
        })
    })
})

export const { useVerifyOtpMutation} = verifyOtp;