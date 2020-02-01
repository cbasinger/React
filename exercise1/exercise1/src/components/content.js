import React from 'react';
import App from '../App';

class Content extends React.Component {
    render(){
        return (
            <div>
            <h2>Exercise 1 Content</h2>
            <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Content; 