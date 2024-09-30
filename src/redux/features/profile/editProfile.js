import { baseApi } from "../../api/baseApi";

const editProfile = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editProfile: builder.mutation({
            query: ({ id, formData }) => ({  // Destructure `formData` correctly
                url: `/users/updateProfile/${id}`,
                method: "PATCH",
                body: formData // Use formData here
            }),
            invalidatesTags: [{ type: "About" }]
        })
    })
});

export const { useEditProfileMutation } = editProfile;
