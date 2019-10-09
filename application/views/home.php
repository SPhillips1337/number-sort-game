<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
	<div id="overlay">
		<form id="playerDetails">
			<label>Name: </label>
			<input type="text" id="playerName" name="name" value="" /><br/>
			<label>Email: </label>
			<input type="text" id="playerEmail" name="email" value="" /><br/>
			
			<input type="submit" name="submit" value="Go" />
		</form>
		<div id="playerResults">
			<div id="score"></div>
			<input type="button" id="retryButton" name="retry" value="Retry" />
		</div>
	</div>

    <div class="grid">
        <?php 
        
        $numbers = range(1, 25);
        shuffle($numbers);
        
        foreach($numbers as $number)
        {
        ?>
        <div class="item<?php echo $number; ?> brick small"><h1><?php echo $number; ?></h1></div>
        <?php 
        }
        ?>
    </div>
  