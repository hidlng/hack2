   var request = require("request");
   var status = "";
   var id = "";
   var img_cctv="";
   var helmet = "";
   var SerialPort = require("serialport").SerialPort;

   var serialPort = new SerialPort("/dev/ttyAMA0", {
	      baudrate: 115200
	    });
	    serialPort.on("open", function (data) {
	      serialPort.on('data', function(data) {
	    	 /* 
	    	 request({
				  uri: "http://52.79.138.81/saint/worker/update?id="+id+"&status="+status+"&img_cctv="+img_cctv+"&helmet="+helmet,
				  method: "GET"
				  }, function(error, response, body) {
					 console.log(response); 
				});
	    	 */

    		  if( data.indexOf("panic") > 0 ) {
    			  console.log('data : ' + data); 
    		  }

    		  if( data.indexOf("fall") > 0 ) {
    			  console.log('data : ' + data); 
    		  }

    		  
    		  if( data.indexOf("wakeup") > 0 ) {
    			  console.log('data : ' + data); 
    		  }

	    	  
	    	  
	    	 
	    		  
	      });
	      
	      serialPort.write(new Buffer('10','ascii'), function(err, results) {
	        console.log('err ' + err);
	        console.log('results ' + results);
	      });

	    });