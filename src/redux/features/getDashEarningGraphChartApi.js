import { baseApi } from "../api/baseApi";

const getDashEarningApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashEarningApi: builder.query({
            query: (year) => `/admin/earning-chart?year=${year}`,
        })
    })
})

export const {useGetDashEarningApiQuery} =  getDashEarningApi;
 