import React from 'react';

const Preview = (props) => {
    const { src, alt } = props;
    return (
        <div className="preview block in">
            <img class="preview" src={src} alt={alt} />
            <p className="legend">NAME</p>
        </div>
    )
}
// class Preview extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         const {src,alt} = this.props;
//         return (
//             <div className = "preview block in">
//                 <img class = "preview" src={src} alt={alt}/>  
//                 <p className="legend">NAME</p>                            
//             </div>
//         )
//     }
// }

export default Preview;


//<p>{this.props.filename}</p>