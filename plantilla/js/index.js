function dropdown(element){
	var ele = document.querySelector('.collapse');
	if(ele.classList.contains('in')){
		ele.classList.remove('in');
	}else{
		ele.classList.add('in');
	}
}