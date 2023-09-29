import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
     const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err);
      }
     };

     fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title:"Lorem ipsum dolor sit amet consectetur",
  //     desc:"Lorem ipsum dolor sit amet consectetur",
  //     img:"https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  //   },
  //   {
  //     id: 2,
  //     title:"Lorem ipsum dolor sit amet consectetur",
  //     desc:"Lorem ipsum dolor sit amet consectetur",
  //     img:"https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title:"Lorem ipsum dolor sit amet consectetur",
  //     desc:"Lorem ipsum dolor sit amet consectetur",
  //     img:"https://images.pexels.com/photos/3681641/pexels-photo-3681641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  //   },
  //   {
  //     id: 4,
  //     title:"Lorem ipsum dolor sit amet consectetur",
  //     desc:"Lorem ipsum dolor sit amet consectetur",
  //     img:"https://images.pexels.com/photos/2105104/pexels-photo-2105104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className='menu'>
      <h1>Other post you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;