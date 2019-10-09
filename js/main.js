var firstDiv = '';
var activeDiv = 0;
var moves = 0;

$(function() {

	$( "#playerResults" ).hide();	
	
	function endGame(){
		var playerName = $( "#playerName" ).val();
		var playerEmail =$( "#overlay" ).val();
		var playerScore = 100 - moves;
			
		$( "#overlay" ).show();
		$( "#playerResults #score" ).html(playerName+' has finished with a score of '+playerScore);
		$( "#playerResults" ).show();		
	}
	
	function checkClick(elem) {

		if(activeDiv==1){		

			tdiv1 = $(firstDiv).clone();
			tdiv2 = $(elem).clone();

			$(firstDiv).replaceWith(tdiv2);
			$(elem).replaceWith(tdiv1);
			
			$(tdiv1).click(function() {
				checkClick(this);
			});

			$(tdiv2).click(function() {
				checkClick(this);
			});		
			moves++;
			if(checkOrder())
				endGame();
			activeDiv=2;
		}
		
		if(activeDiv==0){			
			firstDiv = $(elem);
			activeDiv = 1;
		}
		if(activeDiv==2){
			activeDiv = 0;
		}	
	}
	
	function checkOrder(){
		var classList = [];
		$('.grid div').each(function () {		
			
		    if (this.className != "" && classList.indexOf(this.className) == -1) 
		    	if(this.className)
		        classList.push(this.className);    
		});	

		var i = 1;
		var result = 1;
		
		$.each( classList, function( index, className ) {
			if(className=='item'+i+' brick small'){
				i++;
			}
			else{
				result = 0;
				return false;
			}
		});
		
		if(result)
			return true;
		else
			return false;
	}

	$( "#playerDetails" ).submit(function( event ) {
			$( "#overlay" ).hide();
			$( "#playerDetails" ).hide();
			
		  event.preventDefault();
	});	
	
	$( "div.brick" ).click(function() {
		checkClick(this);
	});
	
	
	$( "#retryButton" ).click(function() {
		location.reload();
	});	
});