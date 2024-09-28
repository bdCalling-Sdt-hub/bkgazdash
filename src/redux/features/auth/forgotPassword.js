import { baseApi } from "../../api/baseApi";

const forgotPassword = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: `/auth/forgot-password`,
                method:`POST`,
                body: data
            })
        })
    })
})

export const {useForgotPasswordMutation} = forgotPassword;