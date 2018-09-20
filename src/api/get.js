import axios from 'axios'

// 用户登陆
export const userLogin = (params) => {
  return axios.get('/users/login', { params })
}

// 角色模块 - 获取角色信息
export const getRoles = () => {
  return axios.get('/roles')
}

// 角色模块 - 根据用户id获取用户权限模块
export const getRoleModulePermissions = (userId) => {
  return axios.get('/roleModulePermissions/' + userId)
}

export const getDepartments = (params) => {
  let query = params || {}
  return axios.get('/departments', query)
}
