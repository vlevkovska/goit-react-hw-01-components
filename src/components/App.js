import User from './Profile';
import users from '../user.json';

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
    </div>
  );
}