import './profile.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="cover" />
        <img src="https://images.pexels.com/photos/19510924/pexels-photo-19510924/free-photo-of-women-in-coats-in-forest-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookIcon fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <InstagramIcon fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <TwitterIcon fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <LinkedInIcon fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <PinterestIcon fontSize='large' />
            </a>
          </div>

          <div className="center">
            <span>Chirag</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>abc.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default Profile