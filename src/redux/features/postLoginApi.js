import { baseApi } from "../api/baseApi";

const postLoginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       postLogin: builder.mutation({
        query: (data) => {
            console.log("7, postLoginApi", data);
            return{
                url: '/auth/login',
                method: 'POST',
                body: data,
            }
        },
        invalidatesTags: ["Poftfolio"]
       })
    })
})

export const {usePostLoginMutation} = postLoginApi;