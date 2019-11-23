class ImageData{
    constructor(src, blob, fileName){
        this.src = src;
        this.blob = blob;
        this.fileName = fileName;
    }

    setSrc(src){
        this.src = src;
    }

    setBlob(blob){
        this.blob = blob;
    }

    setFileName(fileName){
        this.fileName = fileName;
    }

}

export default ImageData;