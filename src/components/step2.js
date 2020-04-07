import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, {UPDATE_STATE, ADD_POST} from './../redux/store';

class Step2 extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleChange = e => {
        let action = {
            type: UPDATE_STATE,
            stateKey: e.target.name,
            payload: e.target.value
        }
        store.dispatch(action)
    }

    createPost = () => {
        let action = {
            type: ADD_POST
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <h1>Step 2</h1>
                <h3>Text:</h3>
                <input type="text" onChange={this.handleChange} name='text' />
                <Link to='/'><button onClick={this.createPost}>Create Post</button></Link>
            </div>
        )
    }
}

export default Step2;