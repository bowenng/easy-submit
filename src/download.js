import { saveAs } from 'file-saver';

export function download(imgDataArray){
    if (!Array.isArray(imgDataArray) || !imgDataArray.length){
        return;
    }

    imgDataArray.forEach((img, i) => {
        saveAs(img.blob, `image${i}.jpg`);
    });
}


