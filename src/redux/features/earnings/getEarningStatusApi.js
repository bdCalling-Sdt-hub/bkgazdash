import { baseApi } from "../../api/baseApi";


const getEarningStatusApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEarningStatusApi: builder.query({
            query: () => `admin/earnings-status`,
        })
    })
})

export const {useGetEarningStatusApiQuery} = getEarningStatusApi;