


import { baseApi } from "../api/baseApi";

const earningStatus = baseApi.injectEndpoints({
    endpoints: (builder) => ({
         earningStatus: builder.query({
            query: (year) => `/admin/earnings-status?year=${year}`,
        })
    })
})

export const {useEarningStatusQuery} =  earningStatus;