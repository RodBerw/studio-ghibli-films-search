var requestURL = "https://ghibliapi.herokuapp.com/films"
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = main;
//request.addEventListener('load', search);
//request.onload

var searchbar = document.getElementById("searchbarInput");
document.getElementById("submitB").addEventListener('click', search);

function main(){
 /*
    var submit = document.getElementsByClassName("search")[0];
    submit.addEventListener('submit', (e) => {
        search();
        console.log(e);
    });
    */

    console.log(searchbar.value);
    search(searchbar.value);
}
    

function search(){
    var searchResult = searchbar.value;
    console.log(searchResult);
    var data = request.response;
    console.log(data.length);

    document.querySelectorAll(".card").forEach(e => {
        e.remove();
    })

    var container = document.getElementById("container");
    for(let i = 0; i < data.length; i++){
        if(data[i]["director"].toLowerCase().includes(searchResult.toLowerCase()) || data[i]["producer"].toLowerCase().includes(searchResult.toLowerCase())
            || data[i]["title"].toLowerCase().includes(searchResult.toLowerCase()) || data[i]["original_title"].toLowerCase().includes(searchResult.toLowerCase())){
            console.log(data[i]);

            var div = document.createElement("img");
            div.setAttribute("src", data[i]["image"]);
            div.className = "card";

            container.appendChild(div);
        }
    }
}






/*Converte o arquivo json em uma array em javascript
var data = JSON.parse(response)
console.log(data);

var data = JSON.parse(_data)

    data.forEach(movie => {
        console.log(movie.title)
    })
*/