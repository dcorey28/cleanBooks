$(document).ready(function() {
        $.getJSON('allBooks', function(books) {
            console.log(books);
            var everything = "<ul>";
            for (var book in books) {
                b = books[book];
                everything += "<li><a href='bookRating/" + b.title + "'><img src='" + b.cover + "'</img></a></li>";
            }
            everything += "</ul>";
            $("#books").html(everything);
        })
	
});
