

import { baseApi } from "../../api/baseApi";


const getTime = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTime: builder.query({
            query:() =>`/admin/shop-timing`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetTimeQuery} = getTime;