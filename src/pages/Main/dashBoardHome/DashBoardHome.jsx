

// import RecentTransaction from '../../../Components/RecentTransaction';

import RecentTransactionsTable from "../../../component/status/recentTransactionTable/RecentTransactionTable";
import Status from "../../../component/status/Status";
import EarningsChart from "../../../component/status/subscriptionChart/EarningsChart";

const DashboardHome = () => {
    return (
        <div className=''>
            <Status/>
        <EarningsChart />
          <RecentTransactionsTable />
           
        </div>
    );
}

export default DashboardHome;
