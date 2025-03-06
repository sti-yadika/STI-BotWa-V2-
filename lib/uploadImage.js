const { upload } = require("al-form-data")
async function uploadFile(buffer, filename) {
    const result = await upload({
        type: 'chunk',  
        file: buffer,
        fileName: filename,
        url: 'https://cdn.alands.xyz/upload',
        chunkSize: 1 * 1024 * 1024, 
        onProgress: (progress) => {
            console.log(`Progress: ${progress}%`);
        }
    });
    if (!result) {
        throw new Error('Upload failed' + result);
    }

    return `https://cdn.alands.xyz/files/${result.fileId}?&filename=${filename}`;
}
module.exports = uploadFile