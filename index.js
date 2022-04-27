
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
  .then(data => {
      console.log(data)
    

      if( updatedSearch == data.login) {
      let renderElments = document.getElementById("main")
      renderElments.innerHTML = `
               <div class="user-profile-info1">
                    <img src="${data.avatar_url}">
                    <h1>${data.login}</h1>
                    <p>${data.bio}</p>
                    <p>${data.created_at}</p>
                </div>
                <div class="user-profile-info2">
                    <p>${data.public_repos}</p>
                    <p>${data.followers}</p>
                    <p>${data.following}</p>
                </div>
                <div class="user-profile-info2">
                    <p>${data.location}</p>
                    <p>${data.blog}</p>
                    <p>${data.html_url}</p>
                </div>
      `
    } else {
                alert("NO USER FOUND")
        }

  });

})








