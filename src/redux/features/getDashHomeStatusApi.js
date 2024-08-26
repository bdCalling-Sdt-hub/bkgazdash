import { baseApi } from "../api/baseApi";

const getDashHomeStatusApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashHomeStatusApi: builder.query({
            query: () => `admin/total-status`,
        })
    })
})

export const {useGetDashHomeStatusApiQuery} = getDashHomeStatusApi;