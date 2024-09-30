import { baseApi } from "../../api/baseApi";


const getProfile = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetProfileQuery} = getProfile;