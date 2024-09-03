import { baseApi } from "../api/baseApi";

const getEarningRecentTransaction = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEarningRecentTransaction: builder.query({
            query: (page) => ({
                url: `/admin/all-earnings?limit=1$page=${page}`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        })
    })
});

export const {useGetEarningRecentTransactionQuery} = getEarningRecentTransaction;
