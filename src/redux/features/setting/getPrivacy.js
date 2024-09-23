import { baseApi } from "../../api/baseApi";


const getPrivacy = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPrivacy: builder.query({
            query:() =>`/setting/privacyPolicy`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetPrivacyQuery} = getPrivacy;
