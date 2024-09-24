

import { baseApi } from "../../api/baseApi";


const getProductReview = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProductReview: builder.query({
            query: (id) =>  `/review?productId=${id}`,
            providesTags: [{type: "About"}]
        })
    })
})

export const {useGetProductReviewQuery} = getProductReview;