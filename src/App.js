import React from 'react';
import ImageEditor from './ImageEditor.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Preview from './Preview.js';
import { download } from './download.js'
import CropZone from './CropZone.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            previewing: -1
        }

        this.addImage = this.addImage.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getPreview = this.getPreview.bind(this);
        this.showPreview = this.showPreview.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
    }

    addImage(image) {
        this.setState((prevState, prevProps) => {
            const images = prevState.images.slice();
            images.push(image);
            return { images: images };
        })
    }

    removeImage(i) {
        this.setState((prevState, prevProps) => {
            const images = prevState.images.slice();
            return { images: images };
        })
    }
    updateOrder(newImages) {
        this.setState({ images: newImages })
    }

    getPreview() {
        return (
            this.state.images.map((imageData, i) => {
                return (
                    <Preview
                        src={imageData.src}
                        alt={imageData.fileName}
                        index={i}
                        onClick={this.handleClick}
                    />
                )
            })
        );
    }

    handleClick(index) {
        this.setState({ previewing: index })
    }

    handleLeft(){
        const previewing = this.state.previewing;
        if(previewing - 1 !== -1){
            this.setState({previewing:previewing-1})
        }
    }

    handleRight() {
        const previewing = this.state.previewing;
        if (previewing + 1 !== this.state.images.length) {
            this.setState({ previewing: previewing + 1 })
        }
    }

    showPreview() {
        if (this.state.previewing !== -1) {
            const imageData = this.state.images[this.state.previewing]
            return (
                <div className="inner">
                    <div className="left_arrow" onClick={this.handleLeft}>
                        <i className="far fa-caret-square-left"></i>
                    </div>
                    < img className="previewing" src={imageData.src} alt={imageData.alt} />
                    <div className="right_arrow" onClick={this.handleRight}>
                        <i className="far fa-caret-square-right"></i>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="App">
                <main className="container">
                    <CropZone className="split left editor-panel" addImage={this.addImage} />
                    

                    <div className="split right preview-panel">
                        
                        <div className="large">
                            {this.showPreview()}
                        </div>
                        <div className="previews">
                            <div className="out">
                                {this.getPreview()}
                            </div>
                        </div>
                    </div>
                    
                </main>

            </div>
        );
    }
}

export default App;

