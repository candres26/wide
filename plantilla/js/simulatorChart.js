var randomScalingFactor = function(){ 
	return Math.round(Math.random()*200);
};

function updateChart(chart){
	chart.addData([randomScalingFactor()],"nuevo");
	chart.removeData();
}