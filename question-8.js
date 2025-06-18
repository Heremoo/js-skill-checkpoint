// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

let newUsers = [];

// function getData() {
//     return fetch("https://jsonplaceholder.typicode.com/users")

// }
// function onSuccess(data) {
//     newUsers.push(data)
// }

const getData = () => {
    return fetch ("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
}
const onSuccess = (data) => {
    newUsers.push(data)
    console.log(data);
}


getData()
.then(onSuccess)




