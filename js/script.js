const randomFolks = document.querySelector(".random-peeps");
const divNumUsers = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await userRequest.json();
    //console.log(data.results);
    const userResults = data.results; //Have a look at what your data variable returns. (You’ll need to call your getData function). You want to drill down to the array of user objects. Once you have found the property name for the array of objects, create a new variable called userResults and map it to that property.
    displayUsers(userResults);
};
getData(1);

const displayUsers  = function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${country}</p>
                <img src=${imageUrl} alt="User avatar" />
            `;
        randomFolks.append(userDiv);
    }
};

divNumUsers.classList.remove("hide");

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);
});



