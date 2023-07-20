function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.error(err);
    });
}


function addTodo() {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false,
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function updateTodo() {
  axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo',
      completed: true,
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function removeTodo() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getData() {
  axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
    ])
    .then(axios.spread((todos, posts) => {
      showOutput(todos);
      showOutput(posts);
    }))
    .catch((err) => {
      console.error(err);
    });
}

function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer YOUR_TOKEN',
    },
  };

  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false,
    }, config)
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.error(err);
    });
}
function transformResponse() {
  const options = {
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios
    .get('https://jsonplaceholder.typicode.com/todos/1', options)
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/invalid-url')
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      if (err.response) {
        console.error(`Status: ${err.response.status}`);
        console.error(err.response.data);
      } else if (err.request) {
       
        console.error(err.request);
      } else {
      
        console.error(err.message);
      }
    });
}

function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token,
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.error('Request canceled:', err.message);
      } else {
        console.error(err);
      }
    });

  setTimeout(() => {
    source.cancel('Request canceled by user');
  }, 3000);
}


const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance
  .get('/todos')
  .then((res) => {
    showOutput(res);
  })
  .catch((err) => {
    console.error(err);
  });


document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);