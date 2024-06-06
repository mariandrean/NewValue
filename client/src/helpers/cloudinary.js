import axios from "axios";
import { CLOUD_NAME, PRESET_NAME, RESOURCE_TYPE } from "../../config";

export const uploadImage = async (e) => {
  const data = new FormData();
  data.append("file", e.target.files[0]);
  data.append("upload_preset", PRESET_NAME);
  const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${RESOURCE_TYPE}/upload`, data);
  return response.data.secure_url;
}