import PropTypes from 'prop-types'; 
import { ProfileContainer, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation, ProfileList, ProfileItem } from './profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer class="profile">
            <ProfileDescription class="description">
                <ProfileImg src={avatar} alt="User avatar" class="avatar" />
                <ProfileName class="name">{username}</ProfileName>
                <ProfileTag class="tag">@{tag}</ProfileTag>
                <ProfileLocation class="location">{location}</ProfileLocation>
            </ProfileDescription>

            <ProfileList class="stats">
                <ProfileItem>
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </ProfileItem>
                <ProfileItem>
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                </ProfileItem>
                <ProfileItem>
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                </ProfileItem>
            </ProfileList>
        </ProfileContainer>
    );
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};