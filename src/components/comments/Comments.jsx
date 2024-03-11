import './comments.scss'

import React, { useContext } from 'react'
import {AuthContext} from '../../context/authContext'
const Comments = () => {
    const {currentUser} = useContext(AuthContext);
    const comments = [
        {
            id:1,
            desc: 'Amet consectetur adipisicing elit. Hic animi omnis unde sequi neque corporis modi laudantium alias quae iure.',
            userId:1,
            name: 'Amit Shukla',
            profilePic: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id:2,
            desc: 'Amet consectetur adipisicing elit. Hic animi omnis unde sequi neque corporis modi laudantium alias quae iure.',
            userId:2,
            name: 'Akshay Batra ',
            profilePic: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id:3,
            desc: 'Amet consectetur adipisicing elit. Hic animi omnis unde sequi neque corporis modi laudantium alias quae iure.',
            userId:3,
            name: 'Jeet Sharma ',
            profilePic: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        
    ]
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} />
            <input type='text' placeholder='Write a comment' />
            <button>send</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePic} />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hrs ago</span>

            </div>
        ))}
    </div>
  )
}

export default Comments