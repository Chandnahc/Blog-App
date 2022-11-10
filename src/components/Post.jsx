import React from 'react';
import { useLocation } from 'react-router-dom';

const Post = (props) => {
    const location = useLocation();
    const currentitem = location.state?.current;
    console.log(currentitem);
    return (
        <div className='post'>
            <h1>Post page</h1>
            <img src={currentitem.image} alt="pic" height="780px" width="100%" />
            <h1>Owner: {currentitem.owner.title + " " + currentitem.owner.firstName +" "+ currentitem.owner.lastName}</h1>
            <img src={currentitem.owner.picture} alt="profile" height="100px" width="100px" />
            <h3>Likes: {currentitem.likes}</h3>
            <h3>Title: {currentitem.text}</h3>
            <h5>Publish on: {currentitem.publishDate}</h5>
            <h3>Tags:</h3>
            <ul>
                {currentitem.tags.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>

        </div> 
    );
};

export default Post;