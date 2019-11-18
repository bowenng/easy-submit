import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import ToolBar from './ToolBar.js';
import ToolButton from './ToolButton';

class CropZone extends React.Component{
    constructor(props){
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
            activeButton: null
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.resetCrop = this.resetCrop.bind(this);
    }
    
    
    handleOnChange = (crop) => {
        this.setState({ crop });
    };
    
    handleOnClick = (buttonId) => {
        this.setState((prevState, prevProps)=>{
            var activeButton = prevState.activeButton === buttonId ? null : buttonId;
            console.log(activeButton);
            return { activeButton: activeButton }
        })
    }

    resetCrop = () => {

        this.setState((prevState, prevProps)=>{
            if(prevState.activeButton === "Crop"){
                return { crop: this.DISABLED_CROP};
            } else {
                return { crop: this.DEFAULT_CROP};
            }
        });
    }

    render(){
        return (
            <div className="crop-zone">
                <ToolBar >
                    <ToolButton toolName="Crop"
                        icon="fas fa-crop"
                        isActive={this.state.activeButton === "Crop"}
                        onClick={(buttonId) => {
                            this.resetCrop();
                            this.handleOnClick(buttonId);
                        }}
                    />
                </ToolBar>
                <ReactCrop src={this.props.imgSrc} crop={this.state.crop} onChange={this.handleOnChange} disabled={this.state.activeButton !== "Crop"} />
            </div>
            
        );
    }
}

export {CropZone};