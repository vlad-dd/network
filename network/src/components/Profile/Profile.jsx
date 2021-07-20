import '../../styles/Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
  <div>
      <div className="content">
        <ProfileInfo ProfileData = {props.ProfileData} jobHunting = {props.jobHunting} 
        status = {props.status} updateStatusThunkCreator = {props.updateStatusThunkCreator}
        isFetching = {props.isFetching}/>
        <MyPostsContainer />
      </div>
    </div>
  );
  
};

export default Profile;
