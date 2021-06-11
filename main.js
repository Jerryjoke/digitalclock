function showTime(){					//getting started
		var date = new Date();			//adding new Date() in date variable
		var h = date.getHours();		//getting hour 0-23
		var m = date.getMinutes();		//getting minutes 0-59
		var s = date.getSeconds();		//getting seconds 0-59
		var session="AM";				// set the am in session
		if(h==0){						//check wheather the hour is equal to zero
			h=12;
		}
		if(h>12){						//check wheather the hour is greater than 12 it will change the session into pm
			h=h-12;
			session = "PM";
		}
		h = (h<10)?"0" + h:h;			//if the hour is less than ten then it will add zero before the number 
		m = (m<10)?"0" + m:m;			//if the minute is less than ten then it will add zero before the number
		s = (s<10)?"0" + s:s;			//if the second is less than ten then it will add zero before the number
		
		var time = h + ":" + m + ":" + s + " " + session;	//the value to be displayed are given to time variavle
		
		document.getElementById("mydigiclock").innerText = time;	//it is used to get the text content 
		document.getElementById("mydigiclock").textContent = time;
		setTimeout(showTime,1000);		//it is used to loop the program
	}
	showTime();							//display the ouput 