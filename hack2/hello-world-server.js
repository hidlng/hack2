   var request = require("request");
   var status = "";
   var id = "";
   var img_cctv="";
   var helmet = "";

  
   request({
		  uri: "http://52.79.138.81/saint/worker/update?id="+id+"&status="+status+"&img_cctv="+img_cctv+"&helmet="+helmet,
	  method: "GET"
	  }, function(error, response, body) {
		 console.log(response); 
	});
