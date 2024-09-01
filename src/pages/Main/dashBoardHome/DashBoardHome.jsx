

// import RecentTransaction from '../../../Components/RecentTransaction';

import RecentTransactionsTable from "../../../component/dashHome/recentTransactionTable/RecentTransactionTable";

import EarningsChart from "../../../component/dashHome/earningsChart/EarningsChart";
// import Status from "../../../component/status/Status";
import DashHomeStatus from "../../../component/dashHome/dashHomeStatus/DashHomeStatus";

const DashboardHome = () => {

  const token = localStorage.getItem("token");
  console.log(token)

    return (
        <div className=''>
        <DashHomeStatus />
        <EarningsChart />
          <RecentTransactionsTable />
           
        </div>
    );
}

export default DashboardHome;
