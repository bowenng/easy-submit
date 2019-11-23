import ImageData from './ImageData.js';

function getCroppedImgCanvas(imageUrl, crop) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext('2d');

            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height,
            );

            resolve(canvas)
        }
        image.src = imageUrl;
    })
}



export function getCroppedImgDataUrl(imageUrl, crop){
    return getCroppedImgCanvas(imageUrl, crop).then(
        (canvas)=>{
            return dataUrlExecutor(canvas);
    });
}

export function getCroppedImgBlob(imageUrl, crop){
    return getCroppedImgCanvas(imageUrl, crop).then((canvas)=>{
        return blobExecutor(canvas);
    })
}

export function createImageData(imageUrl, crop, fileName){
    console.log("creating image data");
    
    const canvasPromise = getCroppedImgCanvas(imageUrl, crop);
    const dataUrlPromise = 
    canvasPromise.then((canvas)=>{
        return dataUrlExecutor(canvas);
    });
    const blobPromise = 
    canvasPromise.then((canvas)=>{
        return blobExecutor(canvas);
    });
    return Promise.all([dataUrlPromise, blobPromise]).then(([imgUrl, imgBlob])=>{
        
        return new Promise((resolve, reject)=>{
            const imageData = new ImageData(imgUrl, imgBlob, fileName);
            resolve(imageData);
        });
    });
}

const dataUrlExecutor = (canvas) => {
    return new Promise((resolve, reject) => {
        const base64Image = canvas.toDataURL('image/jpeg');
        resolve(base64Image);
    });
} 

const blobExecutor = (canvas) => {
    return new Promise((resolve, reject) => {
        
        
        canvas.toBlob(blob => {
            //blob.name = fileName;
            resolve(blob);
        }, 'image/jpeg', 1);
        
    });
}