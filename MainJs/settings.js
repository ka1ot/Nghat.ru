window.onload = function(){
	var BackGround = document.getElementById('body').style;
	var BackColor = [[255,249,210],[25,6,41]];
	var ChangeBack = document.getElementById('tumbler-light');
	var ChangeLang = document.getElementById('tumbler-lang');
	ChangeBack.value = 1;
	ChangeLang.value = 1;

	ChangeBack.onclick = function(){
		if(ChangeBack.value == true){
			ChangeColor(true);
			ChangePos(true, document.getElementById('light'));
			ChangeBack.value--;
		}else{
			ChangeColor(false);
			ChangePos(false, document.getElementById('light'));
			ChangeBack.value++;
		}
	}

	ChangeLang.onclick = function(){
		if(ChangeLang.value == 1){
			ChangePos(true, document.getElementById('lang-change'));
			ChangeLang.value--;
		}else{
			ChangePos(false, document.getElementById('lang-change'));
			ChangeLang.value++;
		}
	}


		//*BackGround.backgroundColor = "rgba(26, 6, 43, 1)";*//


	function ChangeColor(val){
		let a = 0;
		let BackColor = ['#fffdf1','#fff9d2','#f6e9c3',
						 '#eedab5','#e5caa9','#dbbb9d',
						 '#d2ac92','#c79d87','#bd8f7e',
						 '#b18175','#a6736d','#996666',
						 '#8d595f','#7f4d58','#714151',
						 '#63364b','#552c44','#46223e',
						 '#371937','#271130','#190629'];
		if(val == true){
			let lighttodark = setInterval(function(){
				if(a != 21){
					BackGround.backgroundColor = BackColor[a];
					a++;
				}else{
					clearInterval(lighttodark);
				}
			},15);
		}else{
			let darktolight = setInterval(function(){
				if(a != 21){
					BackGround.backgroundColor = BackColor[20-a];
					a++;
				}else{
					clearInterval(darktolight);
				}
			},15);
		}
	}

	function ChangePos(pos, element){
		let position = ['start','center','end'];
		let CP=0;
		let changepostumb = setInterval(function(){
			CP++;
			if(CP<=3){
				if(pos==true){
					element.style.justifyContent = position[CP];
				}else{
					element.style.justifyContent = position[position.length-CP];
				}
			}else{
				clearInterval(changepostumb);
			}
		},10);
		
	}

	var SettingsMenu = document.getElementById('settings-menu');
	SettingsMenu.value = false;
	var SettingsButton = document.getElementById('settings');

	SettingsButton.onclick = function(){
		if(SettingsMenu == false){
			SettingsMenu = true;
			/*func loader for show menu*/
		}else{
			SettingsMenu = false;
			/*func loader hide menu*/
		}
	}

	function SettingsPos(seek){
		let ChangePos = setInterval(function(){
			if(seek == false){
				
			}else{
				
			}
		},10);
	}

}

