import { baseApi } from "../../api/baseApi";


const addEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addEmployee: builder.mutation({ 
                query: (formData) => ({
                url: `/users/create-user`,
                method: "POST",
                body: formData,
            }),
            invalidatesTags: [{ type: "Users" }],
        }),
    
    }),
     
})

export const {useAddEmployeeMutation} = addEmployee;