// server to load information my website;

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => displayUser(data));

  const div = document.getElementById('user-container');
function displayUser(users){

const userName = users.map(x => x.username);
for (let i = 0; i < userName.length; i++) {
  const user = userName[i];
  const li = document.createElement('li');
li.innerHTML = user;
div.appendChild(li);
  
  
}

}

