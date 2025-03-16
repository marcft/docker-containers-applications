import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL
const baseUrl = `${backendUrl}/api/persons`

const getAll = () => axios.get(baseUrl).then((response) => response.data)

const create = (newObject) =>
  axios.post(baseUrl, newObject).then((response) => response.data)

const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data)

const remove = (id) => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, remove }
