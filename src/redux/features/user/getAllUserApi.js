import { baseApi } from "../../api/baseApi";


const getAllUserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUserApi: builder.query({
            query: () => `/users?role=user`,
        })
    })
})

export const {useGetAllUserApiQuery} = getAllUserApi;