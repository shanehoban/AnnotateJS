	
	var whereClick = {};

		whereClick.mouseDown = false;
		whereClick.xCords = 0;
		whereClick.yCords = 0;
		whereClick.color = "red";

		whereClick.bodyElement = document.querySelector('body');
		whereClick.newElement;
	
	whereClick.startDrawing = function(){
		if(whereClick.mouseDown){
			window.requestAnimationFrame(whereClick.startDrawing);

				whereClick.newElement = document.createElement('div');
					whereClick.newElement.style['display'] = 'block';
					whereClick.newElement.style['height'] = '10px';
					whereClick.newElement.style['width'] = '10px';
					whereClick.newElement.style['background'] = whereClick.color;
					whereClick.newElement.style['position'] = 'absolute';
					whereClick.newElement.style['left'] = whereClick.xCords + 'px';
					whereClick.newElement.style['top'] = whereClick.yCords + 'px';
					whereClick.newElement.style['border-radius'] = '50%';

				whereClick.bodyElement.appendChild(whereClick.newElement);
		}
	}

  	document.addEventListener('mousemove', function(event){
    	whereClick.xCords = event.pageX 
    	whereClick.yCords = event.pageY;
  	}); 

  	document.addEventListener('click', function(event){
		event.preventDefault();
	});

	document.addEventListener('mousedown', function(event){
		if(event.ctrlKey){
			whereClick.color = "blue";
		} else if(event.shiftKey){
			whereClick.color = "green";
		} else {
			whereClick.color = "red";
		}
		whereClick.mouseDown = true;
		whereClick.startDrawing();
	});

	document.addEventListener('mouseup', function(event){ 
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