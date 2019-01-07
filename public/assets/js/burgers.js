$(function() {
    $(".eat-btn").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");
        console.log(newEaten);

        var newEatenState = {
            eaten: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
            console.log("changed sleep to ", newEaten);
            location.reload();
        });
    });

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();
        console.log("clicked");
        var newBurger = {
            name: $("#burger").val().trim()
        };
        console.log("New Burger: ", newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        })
    })
});