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
const update = (id,newNotes) =>{
    return axiosBooks().put('/edit/'+id,{notes:newNotes})
}
const clear = (clearBook) =>{
    return axiosBooks().delete('/clear',clearBook)
}
const clearAll= (removeAllBooks) =>{
    return axiosBooks().put('/delete',removeAllBooks)
}

const services = {
    index,
    add,
    update,
    clear,
    clearAll
}

export default services