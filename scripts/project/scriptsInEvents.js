


const scriptsInEvents = {

	async GameEvents_Event6_Act16(runtime, localVars)
	{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function() {
			switch(this.responseText){
				case "noconnection":
					return true;
					break;
				case "failure":
					return false;
					break;
				default:
					runtime.globalVars.Score = this.responseText;
					return true;
					break;
			}
		}
		xmlhttp.open("POST", "https://reward.tg/game/color.php?func=getscore&userID="+runtime.globalVars.userId);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.send();
	},

	async GameEvents_Event91_Act1(runtime, localVars)
	{
		if(runtime.globalVars.Score==0)
			return;
		else{
			var xmlhttp = new XMLHttpRequest();
				xmlhttp.onload = function() {
				switch(this.responseText){
					case "noconnection":
						alert("can't connect database");
						return true;
						break;
					case "success":
						return true;
						break;
					case "failure":
						console.log("failure");
						return false;
						break;
					default:
						return false;
						break;
				}
			}
		
			xmlhttp.open("POST", "https://reward.tg/game/color.php?func=savescore&score="+runtime.globalVars.Score+'&userID='+runtime.globalVars.userId);
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
			xmlhttp.send();
		}
		
	},

	async LoginEvents_Event3_Act1(runtime, localVars)
	{
		var userId = document.getElementById("signUserId").value;
		if(userId==''){
			return false;
		}
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function() {
			switch(this.responseText){
				case "noconnection":
					return true;
					break;
				case "success":
					runtime.globalVars.login = 1;
					runtime.globalVars.userId = userId;
					return true;
					break;
				case "failure":
					return false;
					break;
				case "registersuccess":
					runtime.globalVars.login = 1;
					runtime.globalVars.userId = userId;
					return true;
					break;
				default:
					return false;
					break;
			}
		}
		xmlhttp.open("POST", "https://reward.tg/game/color.php?func=login&userId="+userId);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.send();
		
	},

	async LoginEvents_Event4_Act1(runtime, localVars)
	{
		var userId = document.getElementById("signUserId").value;
		if(userId==''){
			return false;
		}
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function() {
			switch(this.responseText){
				case "noconnection":
					return true;
					break;
				case "success":
					runtime.globalVars.login = 1;
					runtime.globalVars.userId = userId;
					return true;
					break;
				case "failure":
					return false;
					break;
				case "registersuccess":
					runtime.globalVars.login = 1;
					runtime.globalVars.userId = userId;
					return true;
					break;
				default:
					return false;
					break;
			}
		}
		xmlhttp.open("POST", "https://reward.tg/game/color.php?func=login&userId="+userId);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.send();
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

