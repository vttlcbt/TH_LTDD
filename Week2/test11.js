// Update a user
var url = 'https://my-json-server.typicode.com/typicode/demo/posts/2';

// Delete a user
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.log("deleted");
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);