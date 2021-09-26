import User from './Profile';
import users from '../user.json';
import Statistics from './Statistics';
import statisticalData from '../statistical-data.json';
import FriendList from './FriendList';
import friends from '../friends.json';
import TransactionHistory from './Transactions';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
      <User
        name={users[0].name}
        avatar={users[0].avatar}
        tag={users[0].tag}
        location={users[0].location}
        followers={users[0].stats.followers}
        views={users[0].stats.views}
        likes={users[0].stats.likes}
      />
      <Statistics stats={statisticalData} title="Upload stats"></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
}
