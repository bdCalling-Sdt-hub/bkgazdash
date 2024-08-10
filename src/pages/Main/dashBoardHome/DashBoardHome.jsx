

// import RecentTransaction from '../../../Components/RecentTransaction';

import RecentTransactionsTable from "../../../component/status/recentTransactionTable/RecentTransactionTable";
import Status from "../../../component/status/Status";
import SubscriptionBarChart from "../../../component/status/subscriptionChart/SubscriptionChart";

const DashboardHome = () => {
    return (
        <div className=''>
            <Status/>
           <SubscriptionBarChart />
          <RecentTransactionsTable />
           
        </div>
    );
}

export default DashboardHome;
