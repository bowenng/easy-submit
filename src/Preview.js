import React from 'react';

class Preview extends React.Component{
    render(){
        return (
            <li>
                <img src={this.props.src} alt={this.props.alt}/>
                <p>{this.props.filename}</p>
            </li>
        );
    }
}

export default Preview;