import React from 'react';
import ImageEditor from './ImageEditor.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Preview from './Preview.js';
import { download } from './download.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }

        this.addImage = this.addImage.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.getPreview = this.getPreview.bind(this);
    }

    addImage(image){
        this.setState((prevState, prevProps)=>{
            const images = prevState.images.slice();
            images.push(image);
            return {images:images};
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
                    <div className="preview block in">
                        <Preview src={imageData.src} alt={imageData.fileName}/>
                    </div>

                )
            })
        );
    }

    handleClick(){

    }

    render() {
        return (
            <div className="App">
                <main className="container">
                    <div className="split left">
                        <div className = "previews">
                            <div className = "preview block out">
                                {this.getPreview()}
                            </div>
                        </div>
                    </div>
                    <div className="split right">
                        <ImageEditor addImage={this.addImage} />
                    </div>
                </main>

            </div>
        );
    }
}

export default App;

