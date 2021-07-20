import '../../../styles/ProfileInfo.css';
import Preloader from '../../Common/Preloader';
import status_gif from '../../../images/giphy.gif';
import notInterested_gif from '../../../images/notInterested.gif';
import Status from './Status';
import axios from 'axios';


const ProfileInfo = (props) => {
  // if(props.profileData === null || props.profileData === undefined) {
  //   return <Preloader />
  // }

  
  return (
    <div>
        <div>
          {/* <img className="logo" src="https://marketingland.com/wp-content/ml-loads/2018/04/AI-model.png"></img> */}
          <img className="logo" src="https://i.pinimg.com/originals/20/4c/42/204c420e096e4706ee89dd37031dc33e.jpg" alt='profile_img'></img>
        </div>
        <div className='main_container'>
        <div className="decription_block">
          <h2 className='fonts'>{props.ProfileData.fullName}</h2>
          <img src = {props.ProfileData.photos.large} className='gif_status'/>
          <Status status = {props.status} updateStatusThunkCreator = {props.updateStatusThunkCreator} isFetching = {props.isFetching}/>
          <p><strong>About me: </strong>{props.ProfileData.aboutMe}</p>
        </div>
        <div className="jobHunting_status">
          <h4>{props.jobHunting ? <span >Job status: <img className='gif_status' src = {status_gif }/></span> :
           <span>Job status: <img className='gif_status' src = {notInterested_gif} /></span>}</h4>
           <p>Preferences to job: {props.ProfileData.lookingForAJobDescription}</p>
        </div>
        <div className="contacts_info">
          <div>My links:</div>
          <div><span>Facebook: {props.ProfileData.contacts.facebook}</span></div>
          <div><span>Website: {props.ProfileData.contacts.website}</span></div>
          <div><span>Twitter: {props.ProfileData.contacts.twitter}</span></div>
          <div><span>Instagram: {props.ProfileData.contacts.instagram}</span></div>
          <div><span>Youtube: {props.ProfileData.contacts.youtube}</span></div>
          <div><span>Github: {props.ProfileData.contacts.github}</span></div>  
        </div>
        </div>
    </div>
  );
};

export default ProfileInfo;
