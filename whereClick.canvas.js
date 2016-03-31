
	var whereClick = {};

		whereClick.mouseDown = false;
		whereClick.xCoords = [];
		whereClick.yCoords = [];
		whereClick.mouseDownArray = [];
		whereClick.colourArray = [];
		whereClick.color = 'red';

		whereClick.bodyElement = document.querySelector('body');
		whereClick.newElement;

		whereClick.canvasElement = document.createElement('canvas');
			whereClick.canvasElement.style['position'] = 'absolute';
			whereClick.canvasElement.style['top'] = '0';
			whereClick.canvasElement.style['left'] = '0';
			whereClick.canvasElement.style['background-color'] = 'transparent';
			whereClick.canvasElement.height = whereClick.bodyElement.offsetHeight;
			whereClick.canvasElement.width = whereClick.bodyElement.offsetWidth;
						
			whereClick.canvasElement.style['z-index'] = '99999';
		whereClick.bodyElement.appendChild(whereClick.canvasElement);

	whereClick.canvasContext = whereClick.canvasElement.getContext('2d');

	whereClick.draw = function(){

		if(!whereClick.mouseDown){
			return false;
		}

		whereClick.canvasContext.clearRect(0, 0, whereClick.canvasContext.canvas.width, whereClick.canvasContext.canvas.height);

		whereClick.canvasContext.lineJoin = 'round';
		whereClick.canvasContext.lineWidth = 5;

		for(var i=0; i < whereClick.xCoords.length; i++) {		
		    
		    whereClick.canvasContext.beginPath();
		    
		    if(whereClick.mouseDownArray[i] && i){
		    	whereClick.canvasContext.moveTo(whereClick.xCoords[i-1], whereClick.yCoords[i-1]);
		    } else {
		       whereClick.canvasContext.moveTo(whereClick.xCoords[i]-1, whereClick.yCoords[i]);
		    }

		    whereClick.canvasContext.lineTo(whereClick.xCoords[i], whereClick.yCoords[i]);
		    whereClick.canvasContext.closePath();
		    whereClick.canvasContext.strokeStyle = whereClick.colourArray[i];
		    whereClick.canvasContext.stroke();
		    whereClick.canvasContext.closePath();
		}
	}

	whereClick.addCoords = function(x, y, mouseDown){
		whereClick.xCoords.push(event.pageX); 
    	whereClick.yCoords.push(event.pageY);
    	whereClick.mouseDownArray.push(mouseDown);
    	whereClick.colourArray.push(whereClick.color);
	}

  	whereClick.canvasElement.addEventListener('mousemove', function(event){
  		if(whereClick.mouseDown){
  			whereClick.addCoords(event.pageX, event.pageY, whereClick.mouseDown);
  			whereClick.draw();
  		}
  	}); 

  	whereClick.canvasElement.addEventListener('click', function(event){
		event.preventDefault();
	});

	whereClick.canvasElement.addEventListener('mousedown', function(event){
		whereClick.addCoords(event.pageX, event.pageY);
		whereClick.mouseDown = true;
		whereClick.draw();
	 });

	whereClick.canvasElement.addEventListener('mouseup', function(event){ 
		whereClick.mouseDown = false;
	});

	var allElements = document.querySelectorAll('*');
	
	Array.prototype.forEach.call(allElements, function(el, i){
		el.style['-webkit-touch-callout'] = 'none';
		el.style['-webkit-user-select'] = 'none';
		el.style['-khtml-user-select'] = 'none';
		el.style['-moz-user-select'] = 'none';
		el.style['-ms-user-select'] = 'none';
		el.style['user-select'] = 'none';
	});

	document.addEventListener('keyup', function(event){
		whereClick.setColour(event);
	});

	whereClick.setColour = function(event){
		
		var code = event.keyCode || event.charCode;
		var prev = whereClick.color;

		switch(code){
			case 66:
				whereClick.color = 'blue';
				break;
			case 67:
				whereClick.color = 'cyan';
				break;
			case 71:
				whereClick.color = 'green';
				break;
			case 79:
				whereClick.color = 'orange';
				break;
			case 80:
				whereClick.color = 'purple';
				break;
			case 82:
				whereClick.color = 'red';
				break;
			case 86:
				whereClick.color = 'violet';
				break;
			case 89:
				whereClick.color = 'yellow';
				break;
		}

		if(prev !== whereClick.color){
			console.log('Color:', whereClick.color);
		}
		
	};