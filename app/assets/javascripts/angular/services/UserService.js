function UserService($http) {

  this.signUp = function (data) {
    return $http.post('/users', JSON.stringify(data));
  }

  this.logIn = function (data) {
    return $http.post('/sessions', JSON.stringify(data));
  }
}
