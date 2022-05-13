var loading = document.getElementById('loading');
var mensaje = document.getElementById('mensaje');

var boton = document.getElementById('carga_ajax');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.get('./src/Index.html', {
    responseType: 'html'
  })
    .then(function(res) {
      if(res.status==200) {
        mensaje.innerHTML = res.data;
      }
      console.log(res);
    })
    .catch(function(err) {
      mensaje.innerText = 'Error de conexión ' + err;
    })
    .then(function() {
      loading.style.display = 'none';
    });
});

var boton = document.getElementById('json_get');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data);
        mensaje.innerHTML = res.data.title;
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
});

var boton = document.getElementById('json_post');
boton.addEventListener('click', function() {
  loading.style.display = 'block';
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      userId: 1,
      title: 'Esto es un post nuevo',
      body: 'cuerpo de este post. Me gusta la librería Axios!!'
    }
  })
    .then(function(res) {
      if(res.status==201) {
        mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res.data.id;
      }
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
});