import { baseApi } from "../../api/baseApi";


const allOrder = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: ({startDate, endDate, productName}) => {
                let queryParams = `/order/all-orders?startDate=${startDate}&endDate=${endDate}`;
                if (productName) {
                    queryParams += `&productName=${productName}`;
                }
                return queryParams;
            },
            providesTags: [{ type: "About" }]
        })
    })
});

export const { useGetAllOrderQuery } = allOrder;