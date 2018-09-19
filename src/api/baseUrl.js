export default {
  login: '/users/login',
  usersRoles: params => {
    return '/users/' + params.userId + '/roles/' + params.roles
  }
}