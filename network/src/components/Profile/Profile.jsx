import '../../styles/Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
  <div>
      <div className="content">
        <ProfileInfo />
        <MyPostsContainer store = {props.store}/>
      </div>
    </div>
  );
};

export default Profile;
