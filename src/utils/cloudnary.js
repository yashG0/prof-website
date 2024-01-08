import { v2 as cloudinary, v2 } from 'cloudinary';
import fs from 'fs'

// CLOUDINARY INITIAL CONFIGURATION 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
});


// FILE UPLOAD SYSTEM
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("Could'nt find the file path");
        }
        const res = await cloudinary.uploader.upload(localFilePath, { resource_type: 'auto' })

        // FILE HAS BEEN UPLOADED SUCCESSFULLY -
        console.log("FILE IS UPLOADED ON CLOUDINARY || ", res.url);
        return res

    } catch (error) {
        fs.unlinkSync(localFilePath)  // remove the locally saved temporary file as the upload operation failed
        return null
    }
}



export { uploadOnCloudinary }