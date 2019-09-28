$(document).ready(function () {
    console.log("test")
    $("#search").on("click", function (event){
        event.preventDefault();
        console.log("string");
        var searchQuery = $("#searchInput").val().trim();
        console.log(searchQuery);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=bhqvXaF8TfOmk3JWmZfTYsVi7Jj6XYGW&q=" + searchQuery +"&limit=25&offset=0&rating=PG&lang=en"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.data);
            for(i = 0; i < response.data.length; i++) {
                var source = response.data[i].images.original.url;
            var imageTag = $("<img>").attr("src", source);
            $("#results").append(imageTag);
            }
            
            
            
        });
    });
});