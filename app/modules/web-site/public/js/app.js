(function (window) {
  var app = document.querySelector('#app');

  app.authenticated = !localStorage.getItem('accessToken');

  app.onMenuSelect = function (route) {
    console.log(route);
  };

  window.app = app;
})(window);