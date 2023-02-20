var api = 'http://localhost:1001/'

$(document).on("click", "#btn_check", function(){
    var id = $("#id").val();
    var email = $("#email").val();

    var filter = "{'userid': '"+id+"', 'email': '"+email+"' }"
	$.ajax({
		url: api+'Password',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'Accept': '*/*',  },
		type: 'GET',
		data: { 'filter': filter },
		dataType: "JSON",
		success: function (result) {
			if(result.success == true){
                localStorage.setItem("adId", result.adId);
                location.href = './forgot_passwd2.html';
            }
        },  error: function (err) {
			console.log(err);
		}
	})
});