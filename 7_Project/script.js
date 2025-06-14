//https://api.github.com/users/{username}

const inputElement = document.querySelector(".username");
const btn = document.querySelector(".search");
const img = document.querySelector("img");
const name = document.querySelector(".name");
const followers = document.querySelector(".followers-number");
const following = document.querySelector(".following-number");
const repoCount = document.querySelector(".repo-count");
let username = "";

inputElement.addEventListener("input", (e) => {
    username = e.target.value.trim();
});

btn.addEventListener("click", async () => {
    if(!username) {
        alert("Please Enter a valid Username!!");
        return;
    }

    btn.disabled = true;
    btn.textContent = "Loading...";

    const URL = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(URL);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        img.src = data.avatar_url;
        name.textContent = data.name;
        followers.textContent = (data.followers < 10) ? "0" + data.followers : data.followers;
        following.textContent = (data.following < 10 ? "0" + data.following : data.following);
        repoCount.textContent = (data.public_repos < 10) ? "0" + data.public_repos : data.public_repos;

        inputElement.value = "";
        username = ""
    } catch (error) {
        alert(error.message)
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.textContent = "Search User"
    }
})