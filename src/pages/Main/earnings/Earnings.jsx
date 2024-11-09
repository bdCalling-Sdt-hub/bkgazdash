import RecentTransactionTable from "../../../component/dashHome/recentTransactionTable/RecentTransactionTable"
import EarningsTransactionTable from "../../../component/earnings/earningTransactionTable/EarningsTransactionTable"
import EarningsStatus from "../../../component/status/EarningsStatus"



const Earnings = () => {
  return (
    <div>
   <EarningsStatus />
    <EarningsTransactionTable />
    {/* <RecentTransactionTable /> */}
    </div>
  )
}

export default Earnings