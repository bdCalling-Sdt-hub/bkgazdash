import { baseApi } from "../../api/baseApi";

const resetPassword = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        resetPassword: builder.mutation({
            query: (data) => ({
                url: `/auth/reset-password`,
                method:`POST`,
                body: data
            })
        })
    })
})

export const {useResetPasswordMutation} = resetPassword;