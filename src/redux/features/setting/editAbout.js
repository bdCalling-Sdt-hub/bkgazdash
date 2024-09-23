

import { baseApi } from "../../api/baseApi";


const editAbout = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editAbout: builder.mutation({
            query: ({id, content}) => ({
                url: `/setting/aboutUs/${id}`,
                method: "PATCH",
                body: { content }
            }),
            invalidatesTags: ["About"],
        })
    })
})

export const {useEditAboutMutation} = editAbout;