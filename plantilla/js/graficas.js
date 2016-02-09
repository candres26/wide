var myLine2 = null;
var testgrafica = null;
var myBarChart = null;


window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	var ctx2 = document.getElementById("mycanvas").getContext("2d");
	var ctx3 = document.getElementById("mycanvas2").getContext("2d");
	var ctx7 = document.getElementById("canvasprueba").getContext("2d");
	var legend = document.getElementById("canvasLegend");
	var legendChartOne = document.getElementById("canvasLegendChart");
	
	var labels = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"];
	var datos1 = [25,60,5,10,280,75,2];
	var datos2 = [40,30,15,20,180,175,62];
	var datos = [datos1,datos2];
	
	var b1 = new builder();
	b1.add(20,"enero");
	b1.add(50,"Android");
	b1.add(30,"WinPhone");
	b1.add(70,"Chrome");
	b1.add(80,"Firefox");
	
	var b2 = new builder();
	b2.add(50,"Serie 1","Enero");
	b2.add(60,"Serie 1","Febrero");
	b2.add(70,"Serie 1","Marzo");
	b2.add(80,"Serie 2","Enero");
	b2.add(70,"Serie 2","Febrero");
	b2.add(60,"Serie 2","Marzo");

	//var b3 = new builder();
	//b3.add("Bar",datos2,"",labels);
	var data = b1.parsePie();
	var myLine = new Chart(ctx).Pie(b2.parsePie(), {
		responsive: true,
		animationEasing: "easeInOutCubic",
		//String - A legend template
    	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"	
	});

	legendChartOne.innerHTML = myLine.generateLegend();

	testgrafica = new Chart(ctx7).Doughnut(b1.parseDoughnut(),{
		//String - A legend template
    	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"	
	});
	
	legend.innerHTML = testgrafica.generateLegend();
	
	myLine2 = new Chart(ctx2).Line(b1.parseLine(), {
		animationEasing: "easeOutSine",
		responsive: true,
	});

	myBarChart = new Chart(ctx3).Bar(b2.parseBar(),{
		responsive: true,
		//String - A legend template
    	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
	});

	setInterval(function(){updateChart(myLine2)},2000);
}