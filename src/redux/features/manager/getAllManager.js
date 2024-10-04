import { baseApi } from "../../api/baseApi";


  const allManager = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allManager: builder.query({
            query: (name) =>  
            {
                // If name is empty, fetch all employees, otherwise filter by name
                const baseUrl = '/users?role=manager&limit=100';
                return {
                    url: name ? `${baseUrl}&fullName=${name}` : baseUrl,
                };
            },
            providesTags: [{ type: "Users" }],
        })
    })
})

export const {useAllManagerQuery} = allManager;