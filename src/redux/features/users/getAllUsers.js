
// import { baseApi } from "../api/baseApi";

import { baseApi } from "../../api/baseApi";

// const getDashEarningApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getDashEarningApi: builder.query({
//             query: (year) => `/admin/earning-chart?year=${year}`,
//         })
//     })
// })

// export const {useGetDashEarningApiQuery} =  getDashEarningApi;
 
const allUsers = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "/users?role=user"
        })
    })
})

export const {useGetAllUsersQuery} = allUsers;