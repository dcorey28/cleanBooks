$(document).ready(function() {
    $("#postRating").click(function(){
		console.log("button clicked");
        var myobj = {
			title:$("#title").val(),
			author: $("#author").val(),
			cover: $("#cover").val(),
			description: $("#description").val(),
			rating: {
				violence: $('input[name=violence]:checked', '#ratingForm').val(),
				substance: $('input[name=substance]:checked', '#ratingForm').val(),
				language: $('input[name=language]:checked', '#ratingForm').val(),
				sexual: $('input[name=sexual]:checked', '#ratingForm').val()
			}
		};
		console.log(myobj);
		console.log(myobj.rating);
        jobj = JSON.stringify(myobj);
        //$("#json").text(jobj);

        var url = "book";
        $.ajax({
            url:url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                //$("#done").html(textStatus);
            }
        });
    });
});
