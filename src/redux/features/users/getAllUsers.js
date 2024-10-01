
 
import { baseApi } from "../../api/baseApi"; 

const allUsers = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ date, fullName }) => {
        let queryStr = '/users?role=user';
        
        if (date) {
          queryStr += `&date=${date}`;
        }
        
        if (fullName) {
          queryStr += `&fullName=${fullName}`;
        }

        return queryStr;
      },
    }),
  }),
});

export const { useGetAllUsersQuery } = allUsers;

