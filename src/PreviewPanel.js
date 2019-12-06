import React from 'react';

class PreviewPanel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="split right preview-panel">
                <div className="large">
                    {this.props.showPreview()}
                </div>
                <div className="preview-bar">
                    <div className="left_arrow" onClick={this.props.handleLeft}>
                        <i className="fas fa-caret-left"></i>
                    </div>
                    <div className="previews">
                        <div className="out">
                            {this.props.getPreview()}
                        </div>
                    </div>
                    <div className="right_arrow" onClick={this.props.handleRight}>
                        <i className="fas fa-caret-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewPanel;