import React from 'react';

class ToolButton extends React.Component{

    render(){
        var toolName = this.props.toolName;
        var btnClassName = (this.props.isActive ? "active " : "") + this.props.className;
        var icon = this.props.icon;
        var iconClassName = icon + " tool-icon";
        return (
            <button id={toolName} className={btnClassName} onClick={()=>(this.props.onClick(toolName))}>
                <i className={iconClassName}></i>
            </button>
        );
    }
}

export default ToolButton;