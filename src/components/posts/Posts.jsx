import Post from '../post/Post';
import './posts.scss'
import React from 'react'

const Posts = () => {
    const posts = [
        {
            id:1,
            userId:1,
            name: "Harsh Suthar",
            profilePic: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam!'
        },
        {
            id:2,
            userId:2,
            name: "Harsh Suthar",
            img: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam!'
        },
        {
            id:3,
            userId:3,
            name: "Harsh Suthar",
            img: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            profilePic: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            desc: 'Quibusdam culpa fuga ea voluptate illum necessiEst distinctio consequatur eveniet similique qui eligendi!'
        },
    ];
  return (
    <div className='posts'>
        {posts.map((post)=>(
            <Post post = {post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts