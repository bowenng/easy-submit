import React from 'react';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import ToolBar from './ToolBar.js';
import ToolButton from './ToolButton';

import { createImageData } from './utils.js';


class CropZone extends React.Component {
    constructor(props) {
        super(props);
        this.DEFAULT_CROP = {
            unit: 'px',
            x: 130,
            y: 50,
            width: 200,
            height: 200
        };
        this.DISABLED_CROP = {
            unit: 'px'
        }
        this.state = {
            crop: {
                unit: 'px' // default, can be 'px' or '%'
            },
            isCropActive: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.resetCrop = this.resetCrop.bind(this);
        this.handleOnImageLoaded = this.handleOnImageLoaded.bind(this);
        this.imageRef = null;
    }


    handleOnChange = (crop) => {
        this.setState({ crop });
    };

    handleOnImageLoaded = image => {
        console.log(image);
        
        this.imageRef = image;
    }

    resetCrop = () => {
        this.setState((prevState, prevProps) => {
            var crop;
            const { isCropActive } = prevState;
            if (isCropActive) {
                crop = this.DISABLED_CROP;
            } else {
                crop = this.DEFAULT_CROP;
            }
            return { crop: crop, isCropActive: !isCropActive }
        });
    }

    handleOnAdd = ()=>{
        createImageData(this.imageRef, this.state.crop, "untitled").then((imageData) => {
            this.props.addImage(imageData)
        });
    }

    render() {
        return (
            <div className="crop-zone">
                <ToolBar >
                    <ToolButton
                        toolName="Crop"
                        icon="fas fa-crop"
                        isActive={this.state.isCropActive}
                        onClick={this.resetCrop}
                    />
                    <ToolButton
                        toolName="Add"
                        icon=""
                        onClick={this.handleOnAdd}
                    />
                </ToolBar>
                <ReactCrop
                    src={this.props.imgSrc}
                    crop={this.state.crop}
                    onChange={this.handleOnChange}
                    onImageLoaded={this.handleOnImageLoaded}
                    disabled={!this.state.isCropActive}
                />
            </div>

        );
    }
}

export default CropZone;