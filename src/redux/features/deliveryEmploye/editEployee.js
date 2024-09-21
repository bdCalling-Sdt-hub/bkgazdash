import { baseApi } from "../../api/baseApi";


const editEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editEmployee: builder.mutation({
            query: ({id, data}) =>  ({
                url: `/users/updateProfile/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{ type: "Users" }],
            
        })
    }),
  
})
 

export const {useEditEmployeeMutation} = editEmployee;