import React from 'react';
import Dropzone from 'react-dropzone'

class UploadZone extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    handleOnDrop = (files, rejectedFiles) => {
        const img = files[0];
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            var imgSrc = reader.result;
            this.props.onUpload(imgSrc)
        }, false);

        reader.readAsDataURL(img);
    }

    

    render() {

        return (
                <Dropzone onDrop={this.handleOnDrop} accept="image/*" multiple={false}>{
                    ({ getRootProps, getInputProps }) => {
                        return (
                            <div className="upload-outer-area">
                                <div className="upload-area" {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div >
                                        <i className="fas fa-file-image upload-icon"></i>
                                    </div>
                                </div>
                                <div className="uploadDescriptions">
                                    <p>Drop/Click to Upload</p>
                                </div>
                            </div>
                                
                           
                        )
                    }

                }
                </Dropzone>
        )
    }
}

export default UploadZone;