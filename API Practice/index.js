// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userListEl = document.querySelector(".user-list");

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users") //fetching the data
    const userData = await users.json(); //convert backend to front end
    

    userListEl.innerHTML = userData
        .map((user) => userHTML(user)).join(""); //clean way of hard coding data
}


main();

function showUserPosts(id){
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user.html` //how to route to new page to show user posts, location of origin, dynamic
}

function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
</div>`;
}