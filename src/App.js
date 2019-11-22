import React from 'react';
import ImageEditor from './ImageEditor.js';
import PreviewList from './PreviewList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: []
        }
        this.addImage = this.addImage.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    addImage(imageUrl){
        this.setState((prevState, prevProps)=>{
            const images = prevState.images.slice();
            images.push(imageUrl);
            
            return {images:images};
        })
    }

    removeImage(i){
        this.setState((prevState, prevProps)=>{
            const images = prevState.images.slice();
            
            return { images: images };
        })
    }
    updateOrder(newImages){
        this.setState({images:newImages})
    }

    render () {
        const images = this.state.images;
        const previews = images.map(
            (imageUrl, i) => (<li>
                <img key={i} src={imageUrl} alt="none"/>
             </li>)
        );
        console.log(previews);
        
        return (
          <div className="App">
              <main className="container">
                  <div className="split left">
                      <ol>

                            {previews}
                      </ol>
                  </div>
                  <div className="split right">
                    <ImageEditor addImage={this.addImage}/>
                  </div>
              </main>
              
          </div>
      );
    }
}

export default App;
