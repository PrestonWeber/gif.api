$(document).ready(function () {
    $("#search").on("click", function (event) {
        event.preventDefault();

        var searchQuery = $("#searchInput").val().trim();
        var newButtonClass = "button";
        var newButton = $("<button>");
        newButton.attr("class", newButtonClass);
        newButton.text(searchQuery);
        $("#newButton").append(newButton);

        newButton.on("click", function (event) {
            event.preventDefault();
            console.log(searchQuery);
            
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=bhqvXaF8TfOmk3JWmZfTYsVi7Jj6XYGW&q=" + searchQuery + "&limit=25&offset=0&rating=PG&lang=en"
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response.data);
                for (i = 0; i < response.data.length; i++) {
                    var source = response.data[i].images.original.url;
                    var imageTag = $("<img>").attr("src", source);
                    $("#results").prepend(imageTag);
                }



            });
        });
    });
});
