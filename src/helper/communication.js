import axios from 'axios';
const backendServer = "http://localhost:4000";

export const fileUpload = async (formData) => {
    const response = await axios({
        method: "post",
        url: backendServer+"/imageUpload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    });
    
    return response;
}

