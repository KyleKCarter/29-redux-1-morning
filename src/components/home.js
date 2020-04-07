import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import store from './../redux/store';

class Home extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            posts: reduxState.posts
        }
    }

    render() {
        let mappedPosts = this.state.posts.map((val, index) => {
            return (
                <div key={index} className='post'>
                    <h1>{val.title}</h1>
                    <img src={val.img} alt="image"/>
                    <p>{val.text}</p>
                </div>
            )
        })
        return (
            <div>
                <header>
                    <Link to='/step1'><button>New Post</button></Link>
                </header>
                {mappedPosts}
            </div>
        )
    }
}

export default Home;