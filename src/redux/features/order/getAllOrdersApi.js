import { baseApi } from "../../api/baseApi";


const getAllOrdersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrdersApi: builder.query({
            query: () => `/admin/order`,
        })
    })
})

export const {useGetAllOrdersApiQuery} = getAllOrdersApi;