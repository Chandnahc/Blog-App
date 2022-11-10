import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas : []
        }
    }
    
    load = async () => {
         fetch("https://dummyapi.io/data/v1/post?limit=10", {
            headers: {
                'Content-Type': 'application/json',
                'app-id': '63689c2d5eba72e97b3e54a7',
            },
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                datas: json.data
            })
            console.log(this.state.datas);
        })
    }
    
    render(){
        const {datas} = this.state;
        return (
            <div>
                <h1>Home Page</h1>
                <br/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/post">Post</Link>
                    </li> */}
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>  
                <button onClick={this.load}>Get Posts</button>
                <ul className='posts'>
                    {datas.map((item)=>{
                        return (
                            <>
                                <Link to="/post" state={{current: item}}>
                                    <li key={item.id}>
                                        <div className='Post-card'>
                                            <img src={item.image} alt="post" height="240px" width="100%" />
                                            <h2>{item.text}</h2>
                                        </div>
                                    </li>
                                </Link>
                            </>  
                        )
                    })}
                </ul>  
            </div>
        );
    }
};

export default Home;