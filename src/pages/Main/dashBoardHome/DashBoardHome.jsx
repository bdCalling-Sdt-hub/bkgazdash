

// import RecentTransaction from '../../../Components/RecentTransaction';

import RecentTransactionsTable from "../../../component/dashHome/recentTransactionTable/RecentTransactionTable";

import EarningsChart from "../../../component/dashHome/earningsChart/EarningsChart";
import Status from "../../../component/status/Status";

const DashboardHome = () => {
    return (
        <div className=''>
          <Status />
        <EarningsChart />
          <RecentTransactionsTable />
           
        </div>
    );
}

export default DashboardHome;
