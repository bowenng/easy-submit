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
        return (
            
            <div className="image-editor">
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