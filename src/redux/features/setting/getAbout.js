import { baseApi } from "../../api/baseApi";

 
 const getAbout = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAbout: builder.query({
            query: () => `/setting/aboutUs`,
            providesTags: [{type: "About"}]

        })
    })
 })


 export const {useGetAboutQuery} = getAbout;