import { baseApi } from "../api/baseApi";

const getEarningRecentTransaction = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getEarningRecentTransaction: builder.query({
        query: ({ date, userName }) => {
          let queryStr = '/admin/all-earnings';
  
         
          const queryParams = [];
          if (date) {
            queryParams.push(`date=${date}`);
          }
          if (userName) {
            queryParams.push(`userName=${userName}`);
          }
  
      
          if (queryParams.length > 0) {
            queryStr += `?${queryParams.join('&')}`;
          }
  
          return {
            url: queryStr,
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          };
        }
      })
    })
  });
  
  export const { useGetEarningRecentTransactionQuery } = getEarningRecentTransaction;
  
