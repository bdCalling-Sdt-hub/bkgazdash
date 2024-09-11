import { useEarningStatusQuery } from "../../redux/features/earningStatus";

 


const data = [1, 2, 3]
const EarningsStatus = () => {
  
    const {data: earnStatus, isLoading} = useEarningStatusQuery()
    // console.log("saaaaaaaaaaaaaat",earnStatus);
    
    // if(isLoading){
    //     return <Loading/>
    // }
    // console.log(data?.data?.attributes);
    // const result = data?.data?.attributes;
    return (
        <div className="grid grid-cols-3 gap-12 w-[79vw] mt-[12px]">
            <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg ">
             
                <div className="">
                    <p className="text-black font-bold">Total Earnings</p>
                    <h1 className="text-secondary text-[44px]">${ earnStatus?.data?.attributes?.totalEarnings ||0}</h1>
                </div>
            </div>
            <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg ">
                   
                <div className="">
                    <p className="text-black font-bold">Total Transactions</p>
                    <h1 className="text-secondary text-[44px]">${data?.data?.attributes?.allUsers || 0 }</h1>
                </div>
            </div>
            <div className="bg-[#E8EBF0] px-[20px] py-[32px] flex justify-between items-center rounded-lg">
                {/* <FaUsers size={81} color="white" className="bg-[#FA1131] p-[10px] rounded-full"/> */}
                <div className=" ">
                    <p className="text-black font-bold ">Total Delivery</p>
                    <h1 className="text-secondary text-[44px]">${data?.data?.attributes?.paidUsers || 0}</h1>
                </div>
            </div>
           
        </div>
    );
}

export default EarningsStatus;
