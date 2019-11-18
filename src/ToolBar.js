import React from 'react';
import ToolButton from './ToolButton.js';

class ToolBar extends React.Component{

    render() {
        return(
            <div className="tool-bar">
                <ToolButton toolName="Crop" 
                            icon="fas fa-crop" 
                            isActive={this.props.activeButton==="Crop"} 
                            onClick={(buttonId)=>{
                                this.props.resetCrop();
                                this.props.onClick(buttonId);
                            }}
                />
            </div>
        );
    }
}

export default ToolBar;