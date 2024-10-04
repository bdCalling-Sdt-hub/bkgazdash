

import { baseApi } from "../../api/baseApi";


const getNotification = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotification: builder.query({
            query: (id) => `/notification/admin`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetNotificationQuery} = getNotification;