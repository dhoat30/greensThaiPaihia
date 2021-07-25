import axios from "axios";

async function apiCall(url) {

    const response = await axios(url)

    return response.data

}

export default apiCall