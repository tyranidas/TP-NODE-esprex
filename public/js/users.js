 fetch("api/users")
.then((res) => res.json())
.then((data) => {
    let docUsers = document.querySelector(".Users");

    let newUl = document.createElement('ul');
    data.users.forEach(user => {
        let newLi = document.createElement('li');
        newLi.textContent = `${user.pseudo} habite au ${user.address.street}
        dans la ville de ${user.address.city}.`;
        newUl.append(newLi);
    })
    docUsers.append(newUl);
});