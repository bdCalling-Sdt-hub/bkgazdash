
import { baseApi } from "../../api/baseApi";


const getTerms = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTerms: builder.query({
            query:() =>`/setting/termsConditions`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetTermsQuery} = getTerms;