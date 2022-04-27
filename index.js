
//html varibles
let formInput = document.getElementById("formInput")


// event listener, listining for a submit
formInput.addEventListener('submit', function(e){
    e.preventDefault() // prevent being directed to another page
   // .value of the search input and storing into serach varible
   let search = document.getElementById("search-user").value
   
   let updatedSearch = search.split(' ').join('')

   
// fetching user data from git hub
fetch('https://api.github.com/users/'+updatedSearch)
  .then(response => response.json())
  .then(data => console.log(data));

})







