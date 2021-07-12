import '../../styles/Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
  <div>
      <div className="content">
        <ProfileInfo ProfileData = {props.ProfileData} jobHunting = {props.jobHunting} />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
