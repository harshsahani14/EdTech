const cloudinary = require('cloudinary').v2

exports.imgUploadToCloud =  async (file,folder,height,quality) => {

    try{
        const options = {folder}
        if(height) {
            options.height = height
        }
        
        if(quality){
            options.quality = quality
        }

        return await cloudinary.uploader.upload(file.tempFilePath,options);    

    }
    catch(e){

        console.log("Error in uploading image to cloud",e.message);
    }   
}

