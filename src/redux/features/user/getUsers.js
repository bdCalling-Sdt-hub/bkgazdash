
import { baseApi } from "../../api/baseApi";

const allUsers = baseApi.injectEndpoints({
    endpoints: (builder) => ({
         allUsers: builder.query({
            query: () => `/users`,
        })
    })
})

export const {useAllUsersQuery} =  allUsers;