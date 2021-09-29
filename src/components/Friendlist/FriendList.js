import Friends from './Friends';
import PropTypes from 'prop-types';
import classes from './FriendList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={classes.friend_list}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <li key={id} className={classes.item}>
          <Friends name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default FriendsList;
