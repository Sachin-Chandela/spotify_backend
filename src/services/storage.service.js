import ImageKit from "@imagekit/nodejs";

const client = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"], // This is the default and can be omitted
});


async function upload_file(file){
    const result = await client.files.upload({
        file,
        fileName:"music"+Date.now(),
        folder:"yt-complete-backend/music"

    });


    return result
}


export default upload_file


