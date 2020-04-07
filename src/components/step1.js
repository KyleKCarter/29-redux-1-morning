import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, {UPDATE_STATE} from './../redux/store';

class Step1 extends Component {
    constructor() {
        super()
        this.state = {
    
        }
    }

    handleChange = e => {
        store.dispatch({
            type: UPDATE_STATE,
            stateKey: e.target.name,
            payload: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Step 1</h1>
                <h3>Title:</h3>
                <input type="text" onChange={this.handleChange} name='title' />
                <h3>Img:</h3>
                <input type="text" onChange={this.handleChange} name='img' />
                <Link to='/step2'><button>Step 2</button></Link>
            </div>
        )
    }
}

export default Step1