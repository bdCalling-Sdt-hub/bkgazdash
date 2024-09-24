import { baseApi } from "../../api/baseApi";


const assignEmployee = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        assignEmployee: builder.mutation({
            query: (data) => ({
                url: `/order/assign-employee`,
                method: "POST",
                body: data
            }),
            invalidatesTags: [{type: "About"}]
        })
    })
})

export const {useAssignEmployeeMutation} = assignEmployee;