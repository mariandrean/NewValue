import axios from "axios";

export const uploadImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "new_value_preset");
    const response = await axios.post("https://api.cloudinary.com/v1_1/dgi5ujtli/image/upload", data);
    return response.data.secure_url;
}