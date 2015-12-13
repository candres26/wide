function dropdown(element){
	var ele = element.querySelector('.collapse');
	if(ele.classList.contains('in')){
		ele.classList.remove('in');
	}else{
		ele.classList.add('in');
	}
}

function dropdownMenu(element){
	var opt = document.querySelectorAll('.options .list-collapsed');
	var i;
	var ele = element.querySelector('.list-collapsed');
	for(i = 0; i < opt.length; i++){
		if(opt[i].classList.contains('collapse')){
			if(ele == opt[i]){
				if(ele.classList.contains('collapse')){
					ele.classList.remove('collapse');
				}else{
					ele.classList.add('collapse');
				}
			}
		}else{
			opt[i].classList.add('collapse');
		}
	}
}

function acordeon(element){
	var ele = element.querySelector('.section-content');
	if(ele.classList.contains('open')){
		ele.classList.remove('open');
	}else{
		ele.classList.add('open');
	}
}

function valInput(element){
	var ele = element;
	document.getElementById("text_input").innerHTML = ele;
}