	
	var whereClick = {};

		whereClick.mouseDown = false;
		whereClick.xCords = 0;
		whereClick.yCords = 0;
		whereClick.color = "red";

	whereClick.startDrawing = function(){
		if(whereClick.mouseDown){
			window.requestAnimationFrame(whereClick.startDrawing);
				$('body').append('<div class="shanes-thing" style="display:block; height: 10px; width: 10px; background: ' + whereClick.color + '; position: absolute; left: ' + whereClick.xCords + 'px; top: ' + whereClick.yCords + 'px; border-radius: 50%"></div>');
		}
	}

  	$(document).mousemove(function(e){
    	whereClick.xCords = e.pageX 
    	whereClick.yCords = e.pageY;
  	}); 

  	$(document).on('click', function(event){
		event.preventDefault();
	});

	$(document).on('mousedown', function(event){
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

	$(document).on('mouseup', function(event){ 
		whereClick.mouseDown = false;
	});

	$('*').css({
		'-webkit-touch-callout': 'none',
	    '-webkit-user-select': 'none',
	    '-khtml-user-select': 'none',
	    '-moz-user-select': 'none',
	    '-ms-user-select': 'none',
	    'user-select': 'none'
	});