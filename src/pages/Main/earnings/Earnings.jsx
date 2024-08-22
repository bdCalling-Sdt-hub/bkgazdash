import EarningsTransactionTable from "../../../component/earnings/earningTransactionTable/EarningsTransactionTable"
import EarningsStatus from "../../../component/status/EarningsStatus"



const Earnings = () => {
  return (
    <div>
   <EarningsStatus />
    <EarningsTransactionTable />
    </div>
  )
}

export default Earnings