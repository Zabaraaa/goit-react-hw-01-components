import PropTypes from 'prop-types'; 
import { FriendsList, FriendsItem, Status, Name} from './friends.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsList class="friend-list">
        {friends.map(friend => 
    <FriendsItem key={friend.id} class="item">
    <Status isOnline = {friend.isOnline === true}>{friend.isOnline}</Status>
  <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <Name class="name">{friend.name}</Name>
</FriendsItem>)}
</FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
}