function builder(){
	this.obj = [];
	this.indice = 0;
	this.colors = ["#D98400","#3678B2","#2BA66C","#81C850","#E04443","#67B5B6","#955A98","#83ABC9","#556876","#AC4D44","#B91D43","#87A138","#CC8741"];
	this.colorsHover = ["#DD9D3A","#ABCEEC","#71B293","#A0E471","#DB7D7C","#9CC9CA","#A876AB","#A5DBFF","#9FACB6","#CC7B74","#ED6B8A","#A6C155","#ECB781"];
}

builder.prototype.add = function(data,label,categoria){
	if(typeof categoria == 'undefined')
		categoria = label;

	var uni = {
		value: data,
		label: label,
		categoria: categoria
	};
	this.obj.push(uni);
}

builder.prototype.setBull = function(){
	var categorias = [];
	for(i=0;i<this.obj.length;i++)
	{
		if(categorias.indexOf(this.obj[i].categoria)<0)
			categorias.push(this.obj[i].categoria);
	}

	var datas = [];
	for(i=0;i<categorias.length;i++){
		datas.push([]);
	}

	for(i=0;i<this.obj.length;i++)
	{
		var indice = categorias.indexOf(this.obj[i].categoria);
		datas[indice].push(this.obj[i].label + ' : ' + this.obj[i].value);
	}
	var max = 0;
	for(i=0;i<datas.length;i++)
	{
		if(datas[i].length > max)
			max = datas[i].length;
	}
	var bull = [];
	for(i=0;i<max;i++)
	{
		bull.push([]);
	}

	for(i=0;i<bull.length;i++)
	{
		bull[i].push(datas[0][i].split(' : ')[0]);
		for(j=0;j<datas.length;j++)
		{
			if(typeof datas[j][i] != 'undefined'){
				bull[i].push(datas[j][i].split(' : ')[1]);
			}else{
				bull[i].push(null);
			}
		}
	}
	return [categorias,bull];
}

builder.prototype.parseBar = function(){
	var bull = this.setBull();
	var categorias = bull[0];
	bull = bull[1];

	var res = {
		labels : categorias,
		datasets : []
	}

	for(i=0;i<bull.length;i++){
		var tmp = {
			label: bull[i][0],
			fillColor : this.colors[i],
			strokeColor : this.colors[i],
			highlightFill: this.colorsHover[i],
			highlightStroke: this.colorsHover[i],
			data : bull[i].slice(1)
		}
		res.datasets.push(tmp);
	}
	return res;
}

builder.prototype.parseLine = function(){
	var bull = this.setBull();
	var categorias = bull[0];
	bull = bull[1];

	var res = {
		labels : categorias,
		datasets : []
	}

	for(i=0;i<bull.length;i++){
		var tmp = {
			label: bull[i][0],
			fillColor : "rgba(0,0,0,0)",
			strokeColor : this.colors[i],
			pointColor : this.colors[i],
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : this.colorsHover[i],
			data : bull[i].slice(1)
		}
		res.datasets.push(tmp);
	}
	return res;
}

builder.prototype.parsePie = function(){
	var res = [];
	for(i=0;i<this.obj.length;i++)
	{
		var estructuraPie = {
			value: this.obj[i].value,
			color: this.colors[i],
			highlight: this.colorsHover[i],
			label: this.obj[i].label
		}
		res.push(estructuraPie);
	}
	return res;
}

builder.prototype.parseDoughnut = builder.prototype.parsePie;