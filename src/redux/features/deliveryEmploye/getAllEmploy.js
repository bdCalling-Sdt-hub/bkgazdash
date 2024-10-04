import { baseApi } from "../../api/baseApi";

 
const getEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: (name) => {
                // If name is empty, fetch all employees, otherwise filter by name
                const baseUrl = '/users?role=employee&limit=500';
                return {
                    url: name ? `${baseUrl}&fullName=${name}` : baseUrl,
                };
            },
            providesTags: [{ type: "Users" }],
        }),
    }),
});

export const { useGetEmployeeQuery } = getEmployee;