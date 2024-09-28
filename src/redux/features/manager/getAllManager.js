import { baseApi } from "../../api/baseApi";


  const allManager = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allManager: builder.query({
            query: () => ({
                url: `/users?role=manager&limit=20`,
                
            }),
            providesTags: [{ type: "Users" }],
        })
    })
})

export const {useAllManagerQuery} = allManager;