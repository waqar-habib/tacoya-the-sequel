$(document).ready(function() {
    
  $(".picked_up-form").on("click", function(event) {
    event.preventDefault();

    var taco_id = $(this).val();
    var queryURL = `/${taco_id}`;
    console.log(queryURL);
    $.ajax({
      method: "PUT",
      url: queryURL 
    }).then(function(data) {
      // reload page to display picked up taco in proper column
      console.log("hello", data);
      location.reload();
    });

  });
});
