const wrapper = document.getElementById('wrapper');
const input = document.getElementById('input');

let users = []; 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data;  
        renderList(users);
    });

function renderList(users) {
    wrapper.innerHTML = ""; 
    users.forEach(user => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
          <div class="card-body bg-success-content rounded-xl text-white font-bold ">
            <h2 class="card-title flex justify-center text-2xl items-center">
              Ismi: ${user.name}
            </h2>
            <p class="mt-3">Username: ${user.username}</p>
            <p class="mt-2">Manzili: ${user.address.city}</p>
            <p class="mt-3">Email: ${user.email}</p>
          </div>
        </div>
        `;
        wrapper.append(div);
    });
}

input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(query)
    );
    renderList(filtered);
});

  







