import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState([]);

  const  cat = useLocation().search

  useEffect(()=>{
     const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts${cat}`);
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

  const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent;
  };

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) =>(
           <div className="post" keys={post.id}>
              <div className="img">
                <img src={`../upload/${post.img}`} alt=''/>
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default Home