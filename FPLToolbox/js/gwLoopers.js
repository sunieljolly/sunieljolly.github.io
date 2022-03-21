///////////////////////ADD EACH MANAGERS GAME WEEK DATA TO MANAGER DATA//////////////////////////////////
function addAllGw(){
	addGw1();
	addGw2();
	addGw3();
	addGw4();
	addGw5();
	addGw6();
	addGw7();
	addGw8();
	addGw9();
	addGw10();
	addGw11();
	addGw12();
	addGw13();
	addGw14();
	addGw15();
	addGw16();
	addGw17();
	addGw18();
	addGw19();
	addGw20();
	addGw21();
	addGw22();
	addGw23();
	addGw24();
	addGw25();
	addGw26();
	addGw27();
	addGw28();
	addGw29();
	addGw30();
	addGw31();
	addGw32();
	addGw33();
	addGw34();
	addGw35();
	addGw36();
	addGw37();
	addGw38();
	//addGw39();	
}

var gw1Looper = [];
async function addGw1(){
	function makeFunction(i){
		return function(){
			if(1 <= currentGw){
			$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/event/" + 1 + "/picks/",
					type: "GET",
					success: function (gw1_data){
						if(gw1_data){
							league[i].gameweeks = [];
							league[i].autoSubs = [];
							league[i].bestRank = [];
							league[i].weeklyCaptains = [];
							//league[i].gw1 = [];
							//league[i].gw1.push(gw1_data);
							league[i].gameweeks.push(gw1_data)
							league[i].autoSubs.push(gw1_data.automatic_subs.length)
							league[i].bestRank.push(gw1_data.entry_history.overall_rank)
							if(gw1_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[0].element)
							}
							if(gw1_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[1].element)
							}
							if(gw1_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[2].element)
							}
							if(gw1_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[3].element)
							}
							if(gw1_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[4].element)
							}
							if(gw1_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[5].element)
							}
							if(gw1_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[6].element)
							}
							if(gw1_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[7].element)
							}
							if(gw1_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[8].element)
							}
							if(gw1_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[9].element)
							}
							if(gw1_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[10].element)
							}
							if(gw1_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[11].element)
							}
							if(gw1_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[12].element)
							}
							if(gw1_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[13].element)
							}
							if(gw1_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw1_data.picks[14].element)
							}
						
						}
					}			
				})
			}
		}
	}		
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		gw1Looper[i] = makeFunction(i);
	}
	//RUN EACH ONE
	for (var j = 0; j < league.length; j++){
		gw1Looper[j](); 
	}
}
var gw2Looper = [];
async function addGw2(){

	function makeFunction(i){
		
		return function(){
			if(2 <= currentGw){
				$.ajax({
				url: BASE_URL + "entry/" + league[i].entry + "/event/" + 2 + "/picks/",
				type: "GET",
				success: function (gw2_data){
					if(gw2_data){
						//league[i].gw2 = [];
						//league[i].gw2.push(gw2_data);
						league[i].gameweeks.push(gw2_data)
						league[i].autoSubs.push(gw2_data.automatic_subs.length)
						league[i].bestRank.push(gw2_data.entry_history.overall_rank)

						if(gw2_data.picks[0].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[0].element)
						}
						if(gw2_data.picks[1].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[1].element)
						}
						if(gw2_data.picks[2].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[2].element)
						}
						if(gw2_data.picks[3].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[3].element)
						}
						if(gw2_data.picks[4].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[4].element)
						}
						if(gw2_data.picks[5].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[5].element)
						}
						if(gw2_data.picks[6].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[6].element)
						}
						if(gw2_data.picks[7].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[7].element)
						}
						if(gw2_data.picks[8].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[8].element)
						}
						if(gw2_data.picks[9].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[9].element)
						}
						if(gw2_data.picks[10].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[10].element)
						}
						if(gw2_data.picks[11].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[11].element)
						}
						if(gw2_data.picks[12].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[12].element)
						}
						if(gw2_data.picks[13].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[13].element)
						}
						if(gw2_data.picks[14].is_captain == true){
							league[i].weeklyCaptains.push(gw2_data.picks[14].element)
						}
					}
				}			
				})
			}
		}
	}		
	//CREATE AS MANY FUNCTIONS AS NUMBER OF ENTRIES IN LEAGUE
	for (var i = 0; i < league.length; i++){
		gw2Looper[i] = makeFunction(i);
	}	
	for (var j = 0; j < league.length; j++){
		gw2Looper[j](); 
	}
}
var gw3Looper = [];
async function addGw3(){
	function makeFunction(i){
		return function(){
			if(3 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 3 + "/picks/",
					type: "GET",
					success: function (gw3_data){
						if(gw3_data){
							//league[i].gw3 = [];
							//league[i].gw3.push(gw3_data);
							league[i].gameweeks.push(gw3_data)
							league[i].autoSubs.push(gw3_data.automatic_subs.length)	
							league[i].bestRank.push(gw3_data.entry_history.overall_rank)
							if(gw3_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[0].element)
							}
							if(gw3_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[1].element)
							}
							if(gw3_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[2].element)
							}
							if(gw3_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[3].element)
							}
							if(gw3_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[4].element)
							}
							if(gw3_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[5].element)
							}
							if(gw3_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[6].element)
							}
							if(gw3_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[7].element)
							}
							if(gw3_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[8].element)
							}
							if(gw3_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[9].element)
							}
							if(gw3_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[10].element)
							}
							if(gw3_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[11].element)
							}
							if(gw3_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[12].element)
							}
							if(gw3_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[13].element)
							}
							if(gw3_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw3_data.picks[14].element)
							}
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw3Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw3Looper[j]();}
}
var gw4Looper = [];
async function addGw4(){
	function makeFunction(i){
		return function(){
			if(4 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 4 + "/picks/",
					type: "GET",
					success: function (gw4_data){
						if(gw4_data){
							//league[i].gw4 = [];
							//league[i].gw4.push(gw4_data);
							league[i].gameweeks.push(gw4_data)	
							league[i].autoSubs.push(gw4_data.automatic_subs.length)	
							league[i].bestRank.push(gw4_data.entry_history.overall_rank)
							if(gw4_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[0].element)
							}
							if(gw4_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[1].element)
							}
							if(gw4_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[2].element)
							}
							if(gw4_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[3].element)
							}
							if(gw4_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[4].element)
							}
							if(gw4_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[5].element)
							}
							if(gw4_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[6].element)
							}
							if(gw4_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[7].element)
							}
							if(gw4_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[8].element)
							}
							if(gw4_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[9].element)
							}
							if(gw4_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[10].element)
							}
							if(gw4_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[11].element)
							}
							if(gw4_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[12].element)
							}
							if(gw4_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[13].element)
							}
							if(gw4_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw4_data.picks[14].element)
							}
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw4Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw4Looper[j]();}
}
var gw5Looper = [];
async function addGw5(){
	function makeFunction(i){
		return function(){
			if(5 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 5 + "/picks/",
					type: "GET",
					success: function (gw5_data){
						if(gw5_data){
							//league[i].gw5 = [];
							//league[i].gw5.push(gw5_data);
							league[i].gameweeks.push(gw5_data)	
							league[i].autoSubs.push(gw5_data.automatic_subs.length)	
							league[i].bestRank.push(gw5_data.entry_history.overall_rank)
							if(gw5_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[0].element)
							}
							if(gw5_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[1].element)
							}
							if(gw5_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[2].element)
							}
							if(gw5_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[3].element)
							}
							if(gw5_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[4].element)
							}
							if(gw5_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[5].element)
							}
							if(gw5_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[6].element)
							}
							if(gw5_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[7].element)
							}
							if(gw5_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[8].element)
							}
							if(gw5_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[9].element)
							}
							if(gw5_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[10].element)
							}
							if(gw5_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[11].element)
							}
							if(gw5_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[12].element)
							}
							if(gw5_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[13].element)
							}
							if(gw5_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw5_data.picks[14].element)
							}
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw5Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw5Looper[j]();}
}
var gw6Looper = [];
async function addGw6(){
	function makeFunction(i){
		return function(){
			if(6 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 6 + "/picks/",
					type: "GET",
					success: function (gw6_data){
						if(gw6_data){
							//league[i].gw6 = [];
							//league[i].gw6.push(gw6_data);
							league[i].gameweeks.push(gw6_data)
							league[i].autoSubs.push(gw6_data.automatic_subs.length)	
							league[i].bestRank.push(gw6_data.entry_history.overall_rank)
							if(gw6_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[0].element)
							}
							if(gw6_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[1].element)
							}
							if(gw6_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[2].element)
							}
							if(gw6_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[3].element)
							}
							if(gw6_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[4].element)
							}
							if(gw6_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[5].element)
							}
							if(gw6_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[6].element)
							}
							if(gw6_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[7].element)
							}
							if(gw6_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[8].element)
							}
							if(gw6_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[9].element)
							}
							if(gw6_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[10].element)
							}
							if(gw6_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[11].element)
							}
							if(gw6_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[12].element)
							}
							if(gw6_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[13].element)
							}
							if(gw6_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw6_data.picks[14].element)
							}
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw6Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw6Looper[j]();}
}
var gw7Looper = [];
async function addGw7(){
	function makeFunction(i){
		return function(){
			if(7 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 7 + "/picks/",
					type: "GET",
					success: function (gw7_data){
						if(gw7_data){
							//league[i].gw7 = [];
							//league[i].gw7.push(gw7_data);
							league[i].gameweeks.push(gw7_data)
							league[i].autoSubs.push(gw7_data.automatic_subs.length)	
							league[i].bestRank.push(gw7_data.entry_history.overall_rank)
							if(gw7_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[0].element)
							}
							if(gw7_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[1].element)
							}
							if(gw7_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[2].element)
							}
							if(gw7_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[3].element)
							}
							if(gw7_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[4].element)
							}
							if(gw7_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[5].element)
							}
							if(gw7_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[6].element)
							}
							if(gw7_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[7].element)
							}
							if(gw7_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[8].element)
							}
							if(gw7_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[9].element)
							}
							if(gw7_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[10].element)
							}
							if(gw7_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[11].element)
							}
							if(gw7_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[12].element)
							}
							if(gw7_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[13].element)
							}
							if(gw7_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw7_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw7Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw7Looper[j]();}
}
var gw8Looper = [];
async function addGw8(){
	function makeFunction(i){
		return function(){
			if(8 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 8 + "/picks/",
					type: "GET",
					success: function (gw8_data){
						if(gw8_data){
							//league[i].gw8 = [];
							//league[i].gw8.push(gw8_data);
							league[i].gameweeks.push(gw8_data)
							league[i].autoSubs.push(gw8_data.automatic_subs.length)	
							league[i].bestRank.push(gw8_data.entry_history.overall_rank)
							if(gw8_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[0].element)
							}
							if(gw8_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[1].element)
							}
							if(gw8_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[2].element)
							}
							if(gw8_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[3].element)
							}
							if(gw8_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[4].element)
							}
							if(gw8_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[5].element)
							}
							if(gw8_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[6].element)
							}
							if(gw8_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[7].element)
							}
							if(gw8_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[8].element)
							}
							if(gw8_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[9].element)
							}
							if(gw8_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[10].element)
							}
							if(gw8_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[11].element)
							}
							if(gw8_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[12].element)
							}
							if(gw8_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[13].element)
							}
							if(gw8_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw8_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw8Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw8Looper[j]();}
}
var gw9Looper = [];
async function addGw9(){
	function makeFunction(i){
		return function(){
			if(9 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 9 + "/picks/",
					type: "GET",
					success: function (gw9_data){
						if(gw9_data){
							//league[i].gw9 = [];
							//league[i].gw9.push(gw9_data);
							league[i].gameweeks.push(gw9_data)	
							league[i].autoSubs.push(gw9_data.automatic_subs.length)
							league[i].bestRank.push(gw9_data.entry_history.overall_rank)
							if(gw9_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[0].element)
							}
							if(gw9_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[1].element)
							}
							if(gw9_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[2].element)
							}
							if(gw9_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[3].element)
							}
							if(gw9_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[4].element)
							}
							if(gw9_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[5].element)
							}
							if(gw9_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[6].element)
							}
							if(gw9_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[7].element)
							}
							if(gw9_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[8].element)
							}
							if(gw9_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[9].element)
							}
							if(gw9_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[10].element)
							}
							if(gw9_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[11].element)
							}
							if(gw9_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[12].element)
							}
							if(gw9_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[13].element)
							}
							if(gw9_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw9_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw9Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw9Looper[j]();}
}
var gw10Looper = [];
async function addGw10(){
	function makeFunction(i){
		return function(){
			if(10 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 10 + "/picks/",
					type: "GET",
					success: function (gw10_data){
						if(gw10_data){
							//league[i].gw10 = [];
							//league[i].gw10.push(gw10_data);	
							league[i].gameweeks.push(gw10_data)
							league[i].autoSubs.push(gw10_data.automatic_subs.length)
							league[i].bestRank.push(gw10_data.entry_history.overall_rank)
							if(gw10_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[0].element)
							}
							if(gw10_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[1].element)
							}
							if(gw10_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[2].element)
							}
							if(gw10_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[3].element)
							}
							if(gw10_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[4].element)
							}
							if(gw10_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[5].element)
							}
							if(gw10_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[6].element)
							}
							if(gw10_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[7].element)
							}
							if(gw10_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[8].element)
							}
							if(gw10_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[9].element)
							}
							if(gw10_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[10].element)
							}
							if(gw10_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[11].element)
							}
							if(gw10_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[12].element)
							}
							if(gw10_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[13].element)
							}
							if(gw10_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw10_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw10Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw10Looper[j]();}
}
var gw11Looper = [];
async function addGw11(){
	function makeFunction(i){
		return function(){
			if(11 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 11 + "/picks/",
					type: "GET",
					success: function (gw11_data){
						if(gw11_data){
							//league[i].gw11 = [];
							//league[i].gw11.push(gw11_data);
							league[i].gameweeks.push(gw11_data)	
							league[i].autoSubs.push(gw11_data.automatic_subs.length)
							league[i].bestRank.push(gw11_data.entry_history.overall_rank)
							if(gw11_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[0].element)
							}
							if(gw11_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[1].element)
							}
							if(gw11_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[2].element)
							}
							if(gw11_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[3].element)
							}
							if(gw11_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[4].element)
							}
							if(gw11_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[5].element)
							}
							if(gw11_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[6].element)
							}
							if(gw11_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[7].element)
							}
							if(gw11_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[8].element)
							}
							if(gw11_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[9].element)
							}
							if(gw11_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[10].element)
							}
							if(gw11_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[11].element)
							}
							if(gw11_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[12].element)
							}
							if(gw11_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[13].element)
							}
							if(gw11_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw11_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw11Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw11Looper[j]();}
}
var gw12Looper = [];
async function addGw12(){
	function makeFunction(i){
		return function(){
			if(12 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 12 + "/picks/",
					type: "GET",
					success: function (gw12_data){
						if(gw12_data){
							//league[i].gw12 = [];
							//league[i].gw12.push(gw12_data);
							league[i].gameweeks.push(gw12_data)	
							league[i].autoSubs.push(gw12_data.automatic_subs.length)
							league[i].bestRank.push(gw12_data.entry_history.overall_rank)
							if(gw12_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[0].element)
							}
							if(gw12_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[1].element)
							}
							if(gw12_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[2].element)
							}
							if(gw12_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[3].element)
							}
							if(gw12_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[4].element)
							}
							if(gw12_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[5].element)
							}
							if(gw12_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[6].element)
							}
							if(gw12_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[7].element)
							}
							if(gw12_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[8].element)
							}
							if(gw12_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[9].element)
							}
							if(gw12_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[10].element)
							}
							if(gw12_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[11].element)
							}
							if(gw12_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[12].element)
							}
							if(gw12_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[13].element)
							}
							if(gw12_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw12_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw12Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw12Looper[j]();}
}
var gw13Looper = [];
async function addGw13(){
	function makeFunction(i){
		return function(){
			if(13 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 13 + "/picks/",
					type: "GET",
					success: function (gw13_data){
						if(gw13_data){
							//league[i].gw13 = [];
							//league[i].gw13.push(gw13_data);
							league[i].gameweeks.push(gw13_data)	
							league[i].autoSubs.push(gw13_data.automatic_subs.length)
							league[i].bestRank.push(gw13_data.entry_history.overall_rank)
							if(gw13_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[0].element)
							}
							if(gw13_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[1].element)
							}
							if(gw13_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[2].element)
							}
							if(gw13_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[3].element)
							}
							if(gw13_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[4].element)
							}
							if(gw13_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[5].element)
							}
							if(gw13_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[6].element)
							}
							if(gw13_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[7].element)
							}
							if(gw13_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[8].element)
							}
							if(gw13_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[9].element)
							}
							if(gw13_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[10].element)
							}
							if(gw13_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[11].element)
							}
							if(gw13_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[12].element)
							}
							if(gw13_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[13].element)
							}
							if(gw13_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw13_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw13Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw13Looper[j]();}
}
var gw14Looper = [];
async function addGw14(){
	function makeFunction(i){
		return function(){
			if(14 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 14 + "/picks/",
					type: "GET",
					success: function (gw14_data){
						if(gw14_data){
							//league[i].gw14 = [];
							//league[i].gw14.push(gw14_data);
							league[i].gameweeks.push(gw14_data)	
							league[i].autoSubs.push(gw14_data.automatic_subs.length)
							league[i].bestRank.push(gw14_data.entry_history.overall_rank)
							if(gw14_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[0].element)
							}
							if(gw14_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[1].element)
							}
							if(gw14_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[2].element)
							}
							if(gw14_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[3].element)
							}
							if(gw14_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[4].element)
							}
							if(gw14_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[5].element)
							}
							if(gw14_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[6].element)
							}
							if(gw14_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[7].element)
							}
							if(gw14_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[8].element)
							}
							if(gw14_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[9].element)
							}
							if(gw14_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[10].element)
							}
							if(gw14_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[11].element)
							}
							if(gw14_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[12].element)
							}
							if(gw14_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[13].element)
							}
							if(gw14_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw14_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw14Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw14Looper[j]();}
}
var gw15Looper = [];
async function addGw15(){
	function makeFunction(i){
		return function(){
			if(15 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 15 + "/picks/",
					type: "GET",
					success: function (gw15_data){
						if(gw15_data){
							//league[i].gw15 = [];
							//league[i].gw15.push(gw15_data);
							league[i].gameweeks.push(gw15_data)	
							league[i].autoSubs.push(gw15_data.automatic_subs.length)
							league[i].bestRank.push(gw15_data.entry_history.overall_rank)
							if(gw15_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[0].element)
							}
							if(gw15_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[1].element)
							}
							if(gw15_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[2].element)
							}
							if(gw15_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[3].element)
							}
							if(gw15_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[4].element)
							}
							if(gw15_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[5].element)
							}
							if(gw15_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[6].element)
							}
							if(gw15_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[7].element)
							}
							if(gw15_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[8].element)
							}
							if(gw15_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[9].element)
							}
							if(gw15_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[10].element)
							}
							if(gw15_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[11].element)
							}
							if(gw15_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[12].element)
							}
							if(gw15_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[13].element)
							}
							if(gw15_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw15_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw15Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw15Looper[j]();}
}
var gw16Looper = [];
async function addGw16(){
	function makeFunction(i){
		return function(){
			if(16 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 16 + "/picks/",
					type: "GET",
					success: function (gw16_data){
						if(gw16_data){
							//league[i].gw16 = [];
							//league[i].gw16.push(gw16_data);
							league[i].gameweeks.push(gw16_data)	
							league[i].autoSubs.push(gw16_data.automatic_subs.length)
							league[i].bestRank.push(gw16_data.entry_history.overall_rank)
							if(gw16_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[0].element)
							}
							if(gw16_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[1].element)
							}
							if(gw16_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[2].element)
							}
							if(gw16_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[3].element)
							}
							if(gw16_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[4].element)
							}
							if(gw16_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[5].element)
							}
							if(gw16_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[6].element)
							}
							if(gw16_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[7].element)
							}
							if(gw16_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[8].element)
							}
							if(gw16_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[9].element)
							}
							if(gw16_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[10].element)
							}
							if(gw16_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[11].element)
							}
							if(gw16_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[12].element)
							}
							if(gw16_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[13].element)
							}
							if(gw16_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw16_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw16Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw16Looper[j]();}
}
var gw17Looper = [];
async function addGw17(){
	function makeFunction(i){
		return function(){
			if(17 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 17 + "/picks/",
					type: "GET",
					success: function (gw17_data){
						if(gw17_data){
							//league[i].gw17 = [];
							//league[i].gw17.push(gw17_data);
							league[i].gameweeks.push(gw17_data)	
							league[i].autoSubs.push(gw17_data.automatic_subs.length)
							league[i].bestRank.push(gw17_data.entry_history.overall_rank)
							if(gw17_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[0].element)
							}
							if(gw17_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[1].element)
							}
							if(gw17_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[2].element)
							}
							if(gw17_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[3].element)
							}
							if(gw17_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[4].element)
							}
							if(gw17_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[5].element)
							}
							if(gw17_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[6].element)
							}
							if(gw17_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[7].element)
							}
							if(gw17_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[8].element)
							}
							if(gw17_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[9].element)
							}
							if(gw17_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[10].element)
							}
							if(gw17_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[11].element)
							}
							if(gw17_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[12].element)
							}
							if(gw17_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[13].element)
							}
							if(gw17_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw17_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw17Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw17Looper[j]();}
}
var gw18Looper = [];
async function addGw18(){
	function makeFunction(i){
		return function(){
			if(18 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 18 + "/picks/",
					type: "GET",
					success: function (gw18_data){
						if(gw18_data){
							//league[i].gw18 = [];
							//league[i].gw18.push(gw18_data);
							league[i].gameweeks.push(gw18_data)	
							league[i].autoSubs.push(gw18_data.automatic_subs.length)
							league[i].bestRank.push(gw18_data.entry_history.overall_rank)
							if(gw18_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[0].element)
							}
							if(gw18_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[1].element)
							}
							if(gw18_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[2].element)
							}
							if(gw18_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[3].element)
							}
							if(gw18_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[4].element)
							}
							if(gw18_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[5].element)
							}
							if(gw18_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[6].element)
							}
							if(gw18_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[7].element)
							}
							if(gw18_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[8].element)
							}
							if(gw18_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[9].element)
							}
							if(gw18_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[10].element)
							}
							if(gw18_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[11].element)
							}
							if(gw18_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[12].element)
							}
							if(gw18_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[13].element)
							}
							if(gw18_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw18_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw18Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw18Looper[j]();}
}
var gw19Looper = [];
async function addGw19(){
	function makeFunction(i){
		return function(){
			if(19 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 19 + "/picks/",
					type: "GET",
					success: function (gw19_data){
						if(gw19_data){
							//league[i].gw19 = [];
							//league[i].gw19.push(gw19_data);
							league[i].gameweeks.push(gw19_data)	
							league[i].autoSubs.push(gw19_data.automatic_subs.length)
							league[i].bestRank.push(gw19_data.entry_history.overall_rank)
							if(gw19_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[0].element)
							}
							if(gw19_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[1].element)
							}
							if(gw19_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[2].element)
							}
							if(gw19_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[3].element)
							}
							if(gw19_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[4].element)
							}
							if(gw19_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[5].element)
							}
							if(gw19_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[6].element)
							}
							if(gw19_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[7].element)
							}
							if(gw19_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[8].element)
							}
							if(gw19_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[9].element)
							}
							if(gw19_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[10].element)
							}
							if(gw19_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[11].element)
							}
							if(gw19_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[12].element)
							}
							if(gw19_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[13].element)
							}
							if(gw19_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw19_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw19Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw19Looper[j]();}
}
var gw20Looper = [];
async function addGw20(){
	function makeFunction(i){
		return function(){
			if(20 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 20 + "/picks/",
					type: "GET",
					success: function (gw20_data){
						if(gw20_data){
							//league[i].gw20 = [];
							//league[i].gw20.push(gw20_data);
							league[i].gameweeks.push(gw20_data)	
							league[i].autoSubs.push(gw20_data.automatic_subs.length)
							league[i].bestRank.push(gw20_data.entry_history.overall_rank)
							if(gw20_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[0].element)
							}
							if(gw20_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[1].element)
							}
							if(gw20_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[2].element)
							}
							if(gw20_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[3].element)
							}
							if(gw20_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[4].element)
							}
							if(gw20_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[5].element)
							}
							if(gw20_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[6].element)
							}
							if(gw20_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[7].element)
							}
							if(gw20_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[8].element)
							}
							if(gw20_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[9].element)
							}
							if(gw20_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[10].element)
							}
							if(gw20_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[11].element)
							}
							if(gw20_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[12].element)
							}
							if(gw20_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[13].element)
							}
							if(gw20_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw20_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw20Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw20Looper[j]();}
}
var gw21Looper = [];
async function addGw21(){
	function makeFunction(i){
		return function(){
			if(21 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 21 + "/picks/",
					type: "GET",
					success: function (gw21_data){
						if(gw21_data){
							//league[i].gw21 = [];
							//league[i].gw21.push(gw21_data);
							league[i].gameweeks.push(gw21_data)	
							league[i].autoSubs.push(gw21_data.automatic_subs.length)
							league[i].bestRank.push(gw21_data.entry_history.overall_rank)
							if(gw21_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[0].element)
							}
							if(gw21_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[1].element)
							}
							if(gw21_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[2].element)
							}
							if(gw21_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[3].element)
							}
							if(gw21_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[4].element)
							}
							if(gw21_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[5].element)
							}
							if(gw21_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[6].element)
							}
							if(gw21_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[7].element)
							}
							if(gw21_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[8].element)
							}
							if(gw21_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[9].element)
							}
							if(gw21_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[10].element)
							}
							if(gw21_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[11].element)
							}
							if(gw21_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[12].element)
							}
							if(gw21_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[13].element)
							}
							if(gw21_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw21_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw21Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw21Looper[j]();}
}
var gw22Looper = [];
async function addGw22(){
	function makeFunction(i){
		return function(){
			if(22 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 22 + "/picks/",
					type: "GET",
					success: function (gw22_data){
						if(gw22_data){
							//league[i].gw22 = [];
							//league[i].gw22.push(gw22_data);
							league[i].gameweeks.push(gw22_data)
							league[i].autoSubs.push(gw22_data.automatic_subs.length)
							league[i].bestRank.push(gw22_data.entry_history.overall_rank)
							if(gw22_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[0].element)
							}
							if(gw22_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[1].element)
							}
							if(gw22_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[2].element)
							}
							if(gw22_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[3].element)
							}
							if(gw22_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[4].element)
							}
							if(gw22_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[5].element)
							}
							if(gw22_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[6].element)
							}
							if(gw22_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[7].element)
							}
							if(gw22_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[8].element)
							}
							if(gw22_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[9].element)
							}
							if(gw22_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[10].element)
							}
							if(gw22_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[11].element)
							}
							if(gw22_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[12].element)
							}
							if(gw22_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[13].element)
							}
							if(gw22_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw22_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw22Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw22Looper[j]();}
}
var gw23Looper = [];
async function addGw23(){
	function makeFunction(i){
		return function(){
			if(23 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 23 + "/picks/",
					type: "GET",
					success: function (gw23_data){
						if(gw23_data){
							//league[i].gw23 = [];
							//league[i].gw23.push(gw23_data);
							league[i].gameweeks.push(gw23_data)	
							league[i].autoSubs.push(gw23_data.automatic_subs.length)
							league[i].bestRank.push(gw23_data.entry_history.overall_rank)
							if(gw23_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[0].element)
							}
							if(gw23_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[1].element)
							}
							if(gw23_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[2].element)
							}
							if(gw23_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[3].element)
							}
							if(gw23_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[4].element)
							}
							if(gw23_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[5].element)
							}
							if(gw23_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[6].element)
							}
							if(gw23_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[7].element)
							}
							if(gw23_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[8].element)
							}
							if(gw23_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[9].element)
							}
							if(gw23_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[10].element)
							}
							if(gw23_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[11].element)
							}
							if(gw23_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[12].element)
							}
							if(gw23_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[13].element)
							}
							if(gw23_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw23_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw23Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw23Looper[j]();}
}
var gw24Looper = [];
async function addGw24(){
	function makeFunction(i){
		return function(){
			if(24 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 24 + "/picks/",
					type: "GET",
					success: function (gw24_data){
						if(gw24_data){
							//league[i].gw24 = [];
							//league[i].gw24.push(gw24_data);
							league[i].gameweeks.push(gw24_data)	
							league[i].autoSubs.push(gw24_data.automatic_subs.length)
							league[i].bestRank.push(gw24_data.entry_history.overall_rank)
							if(gw24_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[0].element)
							}
							if(gw24_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[1].element)
							}
							if(gw24_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[2].element)
							}
							if(gw24_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[3].element)
							}
							if(gw24_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[4].element)
							}
							if(gw24_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[5].element)
							}
							if(gw24_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[6].element)
							}
							if(gw24_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[7].element)
							}
							if(gw24_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[8].element)
							}
							if(gw24_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[9].element)
							}
							if(gw24_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[10].element)
							}
							if(gw24_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[11].element)
							}
							if(gw24_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[12].element)
							}
							if(gw24_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[13].element)
							}
							if(gw24_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw24_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw24Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw24Looper[j]();}
}
var gw25Looper = [];
async function addGw25(){
	function makeFunction(i){
		return function(){
			if(25 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 25 + "/picks/",
					type: "GET",
					success: function (gw25_data){
						if(gw25_data){
							//league[i].gw25 = [];
							//league[i].gw25.push(gw25_data);
							league[i].gameweeks.push(gw25_data)
							league[i].autoSubs.push(gw25_data.automatic_subs.length)
							league[i].bestRank.push(gw25_data.entry_history.overall_rank)	
							if(gw25_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[0].element)
							}
							if(gw25_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[1].element)
							}
							if(gw25_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[2].element)
							}
							if(gw25_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[3].element)
							}
							if(gw25_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[4].element)
							}
							if(gw25_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[5].element)
							}
							if(gw25_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[6].element)
							}
							if(gw25_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[7].element)
							}
							if(gw25_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[8].element)
							}
							if(gw25_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[9].element)
							}
							if(gw25_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[10].element)
							}
							if(gw25_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[11].element)
							}
							if(gw25_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[12].element)
							}
							if(gw25_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[13].element)
							}
							if(gw25_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw25_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw25Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw25Looper[j]();}
}
var gw26Looper = [];
async function addGw26(){
	function makeFunction(i){
		return function(){
			if(26 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 26 + "/picks/",
					type: "GET",
					success: function (gw26_data){
						if(gw26_data){
							//league[i].gw26 = [];
							//league[i].gw26.push(gw26_data);
							league[i].gameweeks.push(gw26_data)	
							league[i].autoSubs.push(gw26_data.automatic_subs.length)
							league[i].bestRank.push(gw26_data.entry_history.overall_rank)
							if(gw26_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[0].element)
							}
							if(gw26_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[1].element)
							}
							if(gw26_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[2].element)
							}
							if(gw26_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[3].element)
							}
							if(gw26_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[4].element)
							}
							if(gw26_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[5].element)
							}
							if(gw26_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[6].element)
							}
							if(gw26_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[7].element)
							}
							if(gw26_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[8].element)
							}
							if(gw26_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[9].element)
							}
							if(gw26_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[10].element)
							}
							if(gw26_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[11].element)
							}
							if(gw26_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[12].element)
							}
							if(gw26_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[13].element)
							}
							if(gw26_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw26_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw26Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw26Looper[j]();}
}
var gw27Looper = [];
async function addGw27(){
	function makeFunction(i){
		return function(){
			if(27 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 27 + "/picks/",
					type: "GET",
					success: function (gw27_data){
						if(gw27_data){
							//league[i].gw27 = [];
							//league[i].gw27.push(gw27_data);
							league[i].gameweeks.push(gw27_data)	
							league[i].autoSubs.push(gw27_data.automatic_subs.length)
							league[i].bestRank.push(gw27_data.entry_history.overall_rank)
							if(gw27_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[0].element)
							}
							if(gw27_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[1].element)
							}
							if(gw27_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[2].element)
							}
							if(gw27_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[3].element)
							}
							if(gw27_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[4].element)
							}
							if(gw27_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[5].element)
							}
							if(gw27_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[6].element)
							}
							if(gw27_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[7].element)
							}
							if(gw27_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[8].element)
							}
							if(gw27_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[9].element)
							}
							if(gw27_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[10].element)
							}
							if(gw27_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[11].element)
							}
							if(gw27_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[12].element)
							}
							if(gw27_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[13].element)
							}
							if(gw27_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw27_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw27Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw27Looper[j]();}
}
var gw28Looper = [];
async function addGw28(){
	function makeFunction(i){
		return function(){
			if(28 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 28 + "/picks/",
					type: "GET",
					success: function (gw28_data){
						if(gw28_data){
							//league[i].gw28 = [];
							//league[i].gw28.push(gw28_data);
							league[i].gameweeks.push(gw28_data)	
							league[i].autoSubs.push(gw28_data.automatic_subs.length)
							league[i].bestRank.push(gw28_data.entry_history.overall_rank)
							if(gw28_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[0].element)
							}
							if(gw28_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[1].element)
							}
							if(gw28_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[2].element)
							}
							if(gw28_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[3].element)
							}
							if(gw28_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[4].element)
							}
							if(gw28_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[5].element)
							}
							if(gw28_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[6].element)
							}
							if(gw28_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[7].element)
							}
							if(gw28_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[8].element)
							}
							if(gw28_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[9].element)
							}
							if(gw28_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[10].element)
							}
							if(gw28_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[11].element)
							}
							if(gw28_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[12].element)
							}
							if(gw28_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[13].element)
							}
							if(gw28_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw28_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw28Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw28Looper[j]();}
}
var gw29Looper = [];
async function addGw29(){
	function makeFunction(i){
		return function(){
			if(29 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 29 + "/picks/",
					type: "GET",
					success: function (gw29_data){
						if(gw29_data){
							//league[i].gw29 = [];
							//league[i].gw29.push(gw29_data);
							league[i].gameweeks.push(gw29_data)	
							league[i].autoSubs.push(gw29_data.automatic_subs.length)
							league[i].bestRank.push(gw29_data.entry_history.overall_rank)
							if(gw29_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[0].element)
							}
							if(gw29_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[1].element)
							}
							if(gw29_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[2].element)
							}
							if(gw29_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[3].element)
							}
							if(gw29_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[4].element)
							}
							if(gw29_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[5].element)
							}
							if(gw29_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[6].element)
							}
							if(gw29_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[7].element)
							}
							if(gw29_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[8].element)
							}
							if(gw29_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[9].element)
							}
							if(gw29_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[10].element)
							}
							if(gw29_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[11].element)
							}
							if(gw29_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[12].element)
							}
							if(gw29_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[13].element)
							}
							if(gw29_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw29_data.picks[14].element)
							}
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw29Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw29Looper[j]();}
}
var gw30Looper = [];
async function addGw30(){
	function makeFunction(i){
		return function(){
			if(30 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 30 + "/picks/",
					type: "GET",
					success: function (gw30_data){
						if(gw30_data){
							//league[i].gw30 = [];
							//league[i].gw30.push(gw30_data);
							league[i].gameweeks.push(gw30_data)	
							league[i].autoSubs.push(gw30_data.automatic_subs.length)
							league[i].bestRank.push(gw30_data.entry_history.overall_rank)
							if(gw30_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[0].element)
							}
							if(gw30_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[1].element)
							}
							if(gw30_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[2].element)
							}
							if(gw30_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[3].element)
							}
							if(gw30_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[4].element)
							}
							if(gw30_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[5].element)
							}
							if(gw30_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[6].element)
							}
							if(gw30_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[7].element)
							}
							if(gw30_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[8].element)
							}
							if(gw30_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[9].element)
							}
							if(gw30_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[10].element)
							}
							if(gw30_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[11].element)
							}
							if(gw30_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[12].element)
							}
							if(gw30_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[13].element)
							}
							if(gw30_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw30_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw30Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw30Looper[j]();}
}
var gw31Looper = [];
async function addGw31(){
	function makeFunction(i){
		return function(){
			if(31 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 31 + "/picks/",
					type: "GET",
					success: function (gw31_data){
						if(gw31_data){
							//league[i].gw31 = [];
							//league[i].gw31.push(gw31_data);
							league[i].gameweeks.push(gw31_data)	
							league[i].autoSubs.push(gw31_data.automatic_subs.length)
							league[i].bestRank.push(gw31_data.entry_history.overall_rank)
							if(gw31_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[0].element)
							}
							if(gw31_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[1].element)
							}
							if(gw31_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[2].element)
							}
							if(gw31_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[3].element)
							}
							if(gw31_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[4].element)
							}
							if(gw31_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[5].element)
							}
							if(gw31_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[6].element)
							}
							if(gw31_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[7].element)
							}
							if(gw31_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[8].element)
							}
							if(gw31_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[9].element)
							}
							if(gw31_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[10].element)
							}
							if(gw31_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[11].element)
							}
							if(gw31_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[12].element)
							}
							if(gw31_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[13].element)
							}
							if(gw31_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw31_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw31Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw31Looper[j]();}
}
var gw32Looper = [];
async function addGw32(){
	function makeFunction(i){
		return function(){
			if(32 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 32 + "/picks/",
					type: "GET",
					success: function (gw32_data){
						if(gw32_data){
							//league[i].gw32 = [];
							//league[i].gw32.push(gw32_data);
							league[i].gameweeks.push(gw32_data)	
							league[i].autoSubs.push(gw32_data.automatic_subs.length)
							league[i].bestRank.push(gw32_data.entry_history.overall_rank)
							if(gw32_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[0].element)
							}
							if(gw32_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[1].element)
							}
							if(gw32_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[2].element)
							}
							if(gw32_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[3].element)
							}
							if(gw32_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[4].element)
							}
							if(gw32_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[5].element)
							}
							if(gw32_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[6].element)
							}
							if(gw32_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[7].element)
							}
							if(gw32_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[8].element)
							}
							if(gw32_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[9].element)
							}
							if(gw32_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[10].element)
							}
							if(gw32_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[11].element)
							}
							if(gw32_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[12].element)
							}
							if(gw32_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[13].element)
							}
							if(gw32_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw32_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw32Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw32Looper[j]();}
}
var gw33Looper = [];
async function addGw33(){
	function makeFunction(i){
		return function(){
			if(33 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 33 + "/picks/",
					type: "GET",
					success: function (gw33_data){
						if(gw33_data){
							//league[i].gw33 = [];
							//league[i].gw33.push(gw33_data);
							league[i].gameweeks.push(gw33_data)	
							league[i].autoSubs.push(gw33_data.automatic_subs.length)
							league[i].bestRank.push(gw33_data.entry_history.overall_rank)
							if(gw33_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[0].element)
							}
							if(gw33_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[1].element)
							}
							if(gw33_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[2].element)
							}
							if(gw33_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[3].element)
							}
							if(gw33_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[4].element)
							}
							if(gw33_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[5].element)
							}
							if(gw33_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[6].element)
							}
							if(gw33_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[7].element)
							}
							if(gw33_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[8].element)
							}
							if(gw33_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[9].element)
							}
							if(gw33_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[10].element)
							}
							if(gw33_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[11].element)
							}
							if(gw33_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[12].element)
							}
							if(gw33_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[13].element)
							}
							if(gw33_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw33_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw33Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw33Looper[j]();}
}
var gw34Looper = [];
async function addGw34(){
	function makeFunction(i){
		return function(){
			if(34 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 34 + "/picks/",
					type: "GET",
					success: function (gw34_data){
						if(gw34_data){
							//league[i].gw34 = [];
							//league[i].gw34.push(gw34_data);
							league[i].gameweeks.push(gw34_data)	
							league[i].autoSubs.push(gw34_data.automatic_subs.length)
							league[i].bestRank.push(gw34_data.entry_history.overall_rank)
							if(gw34_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[0].element)
							}
							if(gw34_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[1].element)
							}
							if(gw34_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[2].element)
							}
							if(gw34_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[3].element)
							}
							if(gw34_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[4].element)
							}
							if(gw34_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[5].element)
							}
							if(gw34_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[6].element)
							}
							if(gw34_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[7].element)
							}
							if(gw34_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[8].element)
							}
							if(gw34_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[9].element)
							}
							if(gw34_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[10].element)
							}
							if(gw34_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[11].element)
							}
							if(gw34_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[12].element)
							}
							if(gw34_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[13].element)
							}
							if(gw34_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw34_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw34Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw34Looper[j]();}
}
var gw35Looper = [];
async function addGw35(){
	function makeFunction(i){
		return function(){
			if(35 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 35 + "/picks/",
					type: "GET",
					success: function (gw35_data){
						if(gw35_data){
							//league[i].gw35 = [];
							//league[i].gw35.push(gw35_data);	
							league[i].gameweeks.push(gw35_data)
							league[i].autoSubs.push(gw35_data.automatic_subs.length)
							league[i].bestRank.push(gw35_data.entry_history.overall_rank)
							if(gw35_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[0].element)
							}
							if(gw35_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[1].element)
							}
							if(gw35_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[2].element)
							}
							if(gw35_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[3].element)
							}
							if(gw35_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[4].element)
							}
							if(gw35_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[5].element)
							}
							if(gw35_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[6].element)
							}
							if(gw35_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[7].element)
							}
							if(gw35_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[8].element)
							}
							if(gw35_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[9].element)
							}
							if(gw35_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[10].element)
							}
							if(gw35_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[11].element)
							}
							if(gw35_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[12].element)
							}
							if(gw35_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[13].element)
							}
							if(gw35_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw35_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw35Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw35Looper[j]();}
}
var gw36Looper = [];
async function addGw36(){
	function makeFunction(i){
		return function(){
			if(36 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 36 + "/picks/",
					type: "GET",
					success: function (gw36_data){
						if(gw36_data){
							//league[i].gw36 = [];
							//league[i].gw36.push(gw36_data);
							league[i].gameweeks.push(gw36_data)	
							league[i].autoSubs.push(gw36_data.automatic_subs.length)
							league[i].bestRank.push(gw36_data.entry_history.overall_rank)	
							if(gw36_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[0].element)
							}
							if(gw36_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[1].element)
							}
							if(gw36_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[2].element)
							}
							if(gw36_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[3].element)
							}
							if(gw36_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[4].element)
							}
							if(gw36_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[5].element)
							}
							if(gw36_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[6].element)
							}
							if(gw36_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[7].element)
							}
							if(gw36_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[8].element)
							}
							if(gw36_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[9].element)
							}
							if(gw36_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[10].element)
							}
							if(gw36_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[11].element)
							}
							if(gw36_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[12].element)
							}
							if(gw36_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[13].element)
							}
							if(gw36_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw36_data.picks[14].element)
							}
						}
					}
				})
		}
		}
	}
	for (var i = 0; i < league.length; i++){gw36Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw36Looper[j]();}
}
var gw37Looper = [];
async function addGw37(){
	function makeFunction(i){
		return function(){
			if(37 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 37 + "/picks/",
					type: "GET",
					success: function (gw37_data){
						if(gw37_data){
							//league[i].gw37 = [];
							//league[i].gw37.push(gw37_data);
							league[i].gameweeks.push(gw37_data)
							league[i].autoSubs.push(gw37_data.automatic_subs.length)
							league[i].bestRank.push(gw37_data.entry_history.overall_rank)
							if(gw37_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[0].element)
							}
							if(gw37_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[1].element)
							}
							if(gw37_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[2].element)
							}
							if(gw37_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[3].element)
							}
							if(gw37_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[4].element)
							}
							if(gw37_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[5].element)
							}
							if(gw37_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[6].element)
							}
							if(gw37_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[7].element)
							}
							if(gw37_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[8].element)
							}
							if(gw37_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[9].element)
							}
							if(gw37_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[10].element)
							}
							if(gw37_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[11].element)
							}
							if(gw37_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[12].element)
							}
							if(gw37_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[13].element)
							}
							if(gw37_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw37_data.picks[14].element)
							}		
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw37Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw37Looper[j]();}
}
var gw38Looper = [];
async function addGw38(){
	function makeFunction(i){
		return function(){			
			if(38 <= currentGw){
				$.ajax({
					url: BASE_URL + "entry/" + league[i].entry + "/event/" + 38 + "/picks/",
					type: "GET",
					success: function (gw38_data){
						if(gw38_data){
							//league[i].gw38 = [];
							//league[i].gw38.push(gw38_data);
							league[i].gameweeks.push(gw38_data)	
							league[i].autoSubs.push(gw38_data.automatic_subs.length)
							league[i].bestRank.push(gw38_data.entry_history.overall_rank)
							if(gw38_data.picks[0].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[0].element)
							}
							if(gw38_data.picks[1].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[1].element)
							}
							if(gw38_data.picks[2].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[2].element)
							}
							if(gw38_data.picks[3].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[3].element)
							}
							if(gw38_data.picks[4].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[4].element)
							}
							if(gw38_data.picks[5].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[5].element)
							}
							if(gw38_data.picks[6].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[6].element)
							}
							if(gw38_data.picks[7].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[7].element)
							}
							if(gw38_data.picks[8].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[8].element)
							}
							if(gw38_data.picks[9].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[9].element)
							}
							if(gw38_data.picks[10].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[10].element)
							}
							if(gw38_data.picks[11].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[11].element)
							}
							if(gw38_data.picks[12].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[12].element)
							}
							if(gw38_data.picks[13].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[13].element)
							}
							if(gw38_data.picks[14].is_captain == true){
								league[i].weeklyCaptains.push(gw38_data.picks[14].element)
							}	
						}
					}
				})
			}
		}
	}
	for (var i = 0; i < league.length; i++){gw38Looper[i] = makeFunction(i);}
	for (var j = 0; j < league.length; j++){gw38Looper[j]();}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////









