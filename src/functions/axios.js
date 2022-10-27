import axios from "axios";

export const axiosGet = (url, callback) => {
    axios.get(url)
        .then(function (response) {
            callback(response.data)
        })
        .catch((error) => {
            console.log(error)
            if (error.toJSON().code === 'ERR_NETWORK') {
                router.push('/404')
            }
            // console.log(error.toJSON().code === 'ERR_NETWORK')
        })
}
