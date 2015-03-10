var makeGraph = function(){

	var finalGraph = function(){
		var containerLeft = document.getElementById('containerLeft');
		var containerRight = document.getElementById('containerRight')
		var leftGraph = makeGraph.makeLeftMainGraph();
		var rightGraph = makeGraph.makeRightMainGraph();
		containerLeft.appendChild(leftGraph);
		containerRight.appendChild(rightGraph);
	}

	var makeRightMainGraph = function() {
		var mainGraph = document.createElement('div');
		mainGraph.setAttribute('class', 'mainGraphRight');
		mainGraph.style.width = 400 + "px";
		mainGraph.style.height = 100 + "px";
		var primaryGraph = makeGraph.makeRightPrimaryGraph(mainGraph);
		var secondaryGraph = makeGraph.makeRightSeconaryGraph(mainGraph);
		primaryGraph.appendChild(secondaryGraph);
		mainGraph.appendChild(primaryGraph);
		return mainGraph;
	};

	var makeRightPrimaryGraph = function(maingraph) {
		var percentage = (85)*(0.01);
		var width = maingraph.style.width;
		width = parseInt(width.substring(0, width.length - 2))*percentage;
		var height = maingraph.style.height;
		height = parseInt(height.substring(0, height.length - 2))*0.25;
		var primaryGraph = document.createElement('div'); 
		primaryGraph.setAttribute('class', 'primaryGraphRight');
		primaryGraph.style.width = width + "px";
		primaryGraph.style.height = (height*2) + "px";
		primaryGraph.style.top = height + "px";
		return primaryGraph;
	};

	var makeRightSeconaryGraph = function(maingraph) {
		var percentage = (80)*(0.01);
		var width = maingraph.style.width;
		width = parseInt(width.substring(0, width.length - 2))*percentage;
		var height = maingraph.style.height;
    height = parseInt(height.substring(0, height.length - 2))*0.125;
		var secondaryGraph = document.createElement('div'); 
		secondaryGraph.setAttribute('class', 'secondaryGraphRight');
		secondaryGraph.style.width = width + "px";
		secondaryGraph.style.height = (height*2) + "px";
		secondaryGraph.style.top = height + "px";
		return secondaryGraph;
	};

	var makeLeftMainGraph = function() {
		var mainGraph = document.createElement('div');
		mainGraph.setAttribute('class', 'mainGraphLeft');
		mainGraph.style.width = 400 + "px";
		mainGraph.style.height = 100 + "px";
		var primaryGraph = makeGraph.makeLeftPrimaryGraph(mainGraph);
		var secondaryGraph = makeGraph.makeLeftSeconaryGraph(mainGraph);
		primaryGraph.appendChild(secondaryGraph);
		mainGraph.appendChild(primaryGraph);
		return mainGraph;
	};

	var makeLeftPrimaryGraph = function(maingraph) {
		var percentage = (50)*(0.01);
		var width = maingraph.style.width;
		width = parseInt(width.substring(0, width.length - 2))*percentage;
		var height = maingraph.style.height;
		height = parseInt(height.substring(0, height.length - 2))*0.25;
		var primaryGraph = document.createElement('div'); 
		primaryGraph.setAttribute('class', 'primaryGraphLeft');
		primaryGraph.style.width = width + "px";
		primaryGraph.style.height = (height*2) + "px";
		primaryGraph.style.top = height + "px";
		return primaryGraph;
	};

	var makeLeftSeconaryGraph = function(maingraph) {
		var percentage = (80)*(0.01);
		var width = maingraph.style.width;
		width = parseInt(width.substring(0, width.length - 2))*percentage;
		var height = maingraph.style.height;
		height = parseInt(height.substring(0, height.length - 2))*0.125;
		var secondaryGraph = document.createElement('div'); 
		secondaryGraph.setAttribute('class', 'secondaryGraphLeft');
		secondaryGraph.style.width = width + "px";
		secondaryGraph.style.height = (height*2) + "px";
		secondaryGraph.style.top = height + "px";
		return secondaryGraph;
	};


	return {
		makeRightMainGraph: makeRightMainGraph,
		makeRightPrimaryGraph: makeRightPrimaryGraph,
		makeRightSeconaryGraph: makeRightSeconaryGraph,
		finalGraph: finalGraph,
		makeLeftMainGraph: makeLeftMainGraph,
		makeLeftPrimaryGraph: makeLeftPrimaryGraph,
		makeLeftSeconaryGraph: makeLeftSeconaryGraph,
	};

}();