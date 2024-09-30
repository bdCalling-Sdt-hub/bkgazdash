import { baseApi } from "../../api/baseApi";


const allOrder = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: ({startDate,endDate}) => `/order/all-orders?startDate=${startDate}&endDate=${endDate}`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetAllOrderQuery} = allOrder;