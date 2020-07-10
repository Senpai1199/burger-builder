import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-burger-builder-11bd3.firebaseio.com/"

})

export default instance