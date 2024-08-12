import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//GET


//POST
function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "Teni 990",
  "price": 990,
  "description": "Jordan Fake",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

//DELETE
const deletePost = (urlApi, id) => {
    const response = fetch(`${urlApi}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response
}

deletePost(`${API}/products`, 138)
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    
//PUT
