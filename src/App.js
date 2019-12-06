import React from 'react';
import ImageEditor from './ImageEditor.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import uniqueId from 'lodash/uniqueId';
import {download} from './download.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }

        this.addImage = this.addImage.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
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

    handlePreviewClick(index) {
        const list = [...this.state.images]
        this.setState({
            preview: [list[index]]
        })
    }


    updateCurrentSlide(index) {
        const currentSlide = this.state.currentSlide;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    }


    getPreview() {

    }

    render() {
        return (
            <div className="App">
                <main className="container">
                    <div className="split left">
                        
                        <Carousel emulateTouch = {true} className = "carousel">
                                {
                                    this.state.images.map((imageData) => {
                                        return (
                                            <div className="preview block in" key={uniqueId()}>
                                                <img className="preview" src={imageData.src} alt={imageData.fileName}  />
                                                <input className="legend" type="text" value={imageData.fileName} />
                                            </div>

                                        )
                                    })
                                }
                            </Carousel>
                                                       
                            
                       
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

