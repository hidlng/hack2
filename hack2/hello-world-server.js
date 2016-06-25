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
	      console.log('data : ' + data);

	    	
	      serialPort.write(new Buffer('10','ascii'), function(err, results) {
	        console.log('err ' + err);
	        console.log('results ' + results);
	      });

	    });