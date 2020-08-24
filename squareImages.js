const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'images');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log(err)
    }
    files.forEach(file => {
        console.log(file);
        squareImage(file);
    })
});

function squareImage(image) {
    const targetImage = sharp(`./images/${image}`)
    targetImage
        .metadata()
        .then(metadata => {
            const format = metadata.format;
            let width = metadata.width;
            let height = metadata.height;

            if(height > width) {
                width = height;
            } else {
                height = width;
            }

            const data = { format, height, width };
            return data;
        })
        .then(data => {
            targetImage
                .resize(data.height, data.width, {
                    fit: 'contain',
                    background: { 
                        r: 255, 
                        g: 255, 
                        b: 255, 
                        alpha: 0.0 
                    }
                })
                .toFile(`./processed-images/${image}`);
        }).catch(error => console.log(error));
}


    