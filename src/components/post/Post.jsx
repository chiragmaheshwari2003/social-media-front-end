import './post.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";

import React, { useState } from 'react'
import Comments from '../comments/Comments';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentOpen,setCommentOpen] = useState(false);

    const toggle = () => {
        setLiked(prev => !prev)
    }

    return (
        <div className='post'>
            <div className="container">

                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} />
                        <div className="details">
                            <Link to={`profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item" >
                        {liked? <FavoriteOutlinedIcon onClick= {toggle}/> : <FavoriteBorderOutlinedIcon onClick= {toggle}/>}
                        12 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post