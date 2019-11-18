import React from 'react';

class ToolBar extends React.Component{

    render() {
        return(
            <div className="tool-bar">
                {this.props.children}
            </div>
        );
    }
}

export default ToolBar;