import Container from './Container/Container';
import User from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from '../statistical-data.json';
import FriendList from './Friendlist/FriendList';
import friends from '../friends.json';
import TransactionHistory from './Transactions/Transactions';
import transactions from '../transactions.json';

export default function App() {
  return (
    <Container>
      <User
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        // followers={users[0].stats.followers}
        // views={users[0].stats.views}
        // likes={users[0].stats.likes}
      />
      <Statistics stats={statisticalData} title="Upload stats"></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </Container>
  );
}
