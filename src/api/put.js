import axios from 'axios'

export const changeRoles = (params) => {
  return axios.put('/roles/' + params.id, {name: params.name, id: params.id})
}
export const changeDepartments = (params) => {
  return axios.put('/departments/' + params.id, {name: params.departmentName, id: params.id, code: params.code})
}
