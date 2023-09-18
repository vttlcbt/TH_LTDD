// Update a user
var url = 'https://my-json-server.typicode.com/typicode/demo/posts/2';
// var url = "http://localhost:8080/api/v1/users/3";
var data = {};
data.firstname = "John2";
data.lastname = "Snow2";

var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();

xhr.open("PUT", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);