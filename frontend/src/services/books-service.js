import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosBooks = () => axios.create({
    baseURL: 'http://localhost:8080/books',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosBooks().get('/index')
}

const add = (newBook) => {
    return axiosBooks().post('/add', newBook)
}
const edit = (editBook) =>{
    return axiosBooks().put('/edit',editBook)
}
const clear = (clearBook) =>{
    return axiosBooks().put('/delete',clearBook)
}
const clearAll= (removeAllBooks) =>{
    return axiosBooks().put('/delete',removeAllBooks)
}

const services = {
    index,
    add,
    edit,
    clear,
    clearAll
}

export default services