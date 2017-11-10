$(document).ready(function(){
	$("#searchbtn").click(function(){

		var searchTerm  = $("#searchAr").val();

		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";


		$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType :"json",

			success: function(data){
				$("#output").html('');
				for(var i = 0; i<data[3].length;i++){
					 $("#output").prepend("<div class =division><li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li></div>");
				}
				$("#searchAr").val('');
			},

			error: function(errormessage){
				alert("Error");
			}

		});//ajax
	});//click function
	$("#searchAr").keypress(function(e){
		if(e.which==13){
			$("#searchbtn").click();
		}
	});

});//document ready function 