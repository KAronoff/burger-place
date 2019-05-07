$(document).ready(
  $("#burgerAdd").on("submit", function(event){
    
    event.preventDefault();
    
    // putting together the obj for the ajax call
    const burger = {
      title: $("#name-input").val().trim()
    }
    // making the post request
    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burger
    })
    .then(
      () => location.reload()
    )
    .catch( err => console.log(err));
  })
);