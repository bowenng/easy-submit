import React from 'react';
import UploadZone from './UploadZone.js'
import CropZone from './CropZone.js'


class ImageEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgSrc: null
        };
        
        // image source update
        this.updateImageSrc = this.updateImageSrc.bind(this);
        
    }

    updateImageSrc(imgSrc){
        this.setState({imgSrc});
    }

    

    render() {
        const className = "image-editor " + this.props.className;
        return (
            
            <div className={className}>
                {
                   this.state.imgSrc == null? 
                   <UploadZone onUpload={this.updateImageSrc}/> : 
                   <CropZone imgSrc={this.state.imgSrc} addImage={this.props.addImage}/>
                }
            </div>
        );
    }
}

export default ImageEditor;