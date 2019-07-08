// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0
    //   devoured: $("[name=devoured]:checked").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });


$(".devoured").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    // var devouredState = $(this).data("newdevour");
    var devouredState = {
      devoured: 1
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger has been devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


$(".delete-burger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function(res) {
        console.log("Deleted burger: ", id);

        location.reload();
        });
});
});