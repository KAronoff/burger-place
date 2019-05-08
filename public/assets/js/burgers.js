$(document).ready(function(){
  $("#burgerAdd").on("submit", function(event){
    
    event.preventDefault();
    
    // putting together the obj for the ajax call
    const burger = {
      name: $("#name-input").val().trim()
    }
    console.log("click!")
    // making the post request
    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burger
    })
    .then(function(){
      location.reload();
    })
    .catch( err => console.log(err));
  })

  $(".destroyBurger").on("click", function(event){
    const burgerData = $(this).data("id")


    $.ajax({
      url: "api/burgers/"+ burgerData,
      method: "DELETE"
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  })

  $(".updateDevoured").on("click", function (event){

    const isDevoured = $(this).data("devoured")
    const burgerId = $(this).data("id")

    if (!isDevoured){
      $(this).data("devoured", "true");

      const burgerData = {
        devoured: true
      }

      $.ajax({
        url: "/api/burgers/"+burgerId,
        method: "PUT",
        data: burgerData
      })
      .then(() => alert("Mmmm, delicious dead cow.")
      .catch( err => console.log(err))
      )
    }
    else {
      alert("This burger has already been devoured.")
    }
  })
});
