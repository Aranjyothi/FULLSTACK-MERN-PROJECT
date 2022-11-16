import axios from 'axios'
import baseURL from './baseUrl'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosBook = () => axios.create({
    baseURL: baseURL + '/auth',
    // baseURL: 'http://localhost:8080/todos',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosBook().get('/index')
}

const add = (newbook) => {
    return axiosBook().post('/add', newbook)
}

const services = {
    index,
    add
}

export default services