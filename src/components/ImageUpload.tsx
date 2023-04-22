const egg = ""
export const ImageUpload = () => {
    return (
        <>
            <div>
                <h3>Image Upload</h3>
                <input type="file" name="image" />
                <img src={egg} alt="" />
            </div>
        </>
    );
};

export default ImageUpload;