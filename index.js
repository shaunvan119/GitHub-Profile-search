
//html varibles
let formInput = document.getElementById("formInput")




function renderContent() {

}

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
      const renderElments = document.getElementById("main")
      renderElments.innerHTML = `
                <h1>${data.login}</h1>
                <img src="${data.avatar_url}">
                <p>${data.bio}</p>
                <p>${data.created_at}</p>
                <p>${data.public_repos}</p>
                <p>${data.followers}</p>
                <p>${data.following}</p>
                <p>${data.location}</p>
                <p>${data.blog}</p>
                <p>${data.html_url}</p>
      `



      /*document.getElementById("user-name").innerHTML = `
      <h1>${data.login}</h1>
      `
      document.getElementById("user-img").innerHTML = `
      <img src="${data.avatar_url}">
      `
      document.getElementById("user-bio").innerHTML = `
      <p>${data.bio}</p>
      `

      document.getElementById("user-Joined-date").innerHTML = `
      <p>${data.created_at}</p>
      `

      document.getElementById("user-repos").innerHTML = `
      <p>${data.public_repos}</p>
      `

      document.getElementById("user-followers").innerHTML = `
      <p>${data.followers}</p>
      `

      document.getElementById("user-following").innerHTML = `
      <p>${data.following}</p>
      `

      document.getElementById("user-location").innerHTML = `
      <p>${data.location}</p>
      `

      document.getElementById("user-github-blog").innerHTML = `
      <p>${data.blog}</p>
      `

      document.getElementById("user-github-link").innerHTML = `
      <p>${data.html_url}</p>
      `*/


  });

})








