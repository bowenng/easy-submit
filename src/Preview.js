import React from 'react';

class Preview extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick(this.props.index);
    }

    render(){
        const {src,alt} = this.props;
        return (
            <div className = "in" onClick={this.handleClick}>
                <img className = "preview" src={src} alt={alt}/>  
                {/*<input className="legend" value={alt}/>*/}                            
            </div>
        )
    }
}

export default Preview;


//<p>{this.props.filename}</p>