

var playerSelected = false;
var enemySelected = false;

var enemiesDead = 0;
var gameOver = false;

var character={};
var enemies={};



var Characters = {

hipster: {
  name:'hipster',
  health: 100,
  baseAttackPower: 90,
  atk: 15,
},

goth: {
  name:'goth',
  health: 120,
  baseAttackPower: 125,
  atk: 6,
},

yuppie: {
  name:'yuppie',
  health: 80,
  baseAttackPower: 150,
  atk: 18,
},

hippy: {
  name:'hippy',
  health: 90,
  baseAttackPower:140,
  atk: 20,
  }

};


// this makes the character equal chose character
function settingUpCharacter(chosenCharacter){
	character.name = chosenCharacter.name;
	character.health = chosenCharacter.health;
	character.baseAttackPower = chosenCharacter.baseAttackPower;
	character.atk = chosenCharacter.atk;
	character.counterAttack = chosenCharacter.counterAttack;
}


// This function will initialize the enemy's value from the global object variables defined above
function initializeEnemy(chosenEnemy) {
  enemies.name = chosenEnemy.name;
  enemies.health = chosenEnemy.health;
  enemies.baseAttackPower = chosenEnemy.baseAttackPower;
  enemies.atk = chosenEnemy.atk;
  enemies.chosen = chosenEnemy.chosen;
}



// This function will move the remaining characters to the enemies section
function movingEnemiesToContainer(){
$('.available-character').removeClass('available-character').addClass("enemy-characters");
$('#enemies-available').append($(".enemy-characters"));
// $('.enemy-characters').css("background-color", 'red');

}
// dom..
$(document).ready(function() {


	$('#hippy').on('click', function(){
		// console.log("hippy has been selected");

// this shows how the player can actually be selected (when the funciton is carried out)
    if(playerSelected === false){

			settingUpCharacter(Characters.hippy);
			playerSelected = true;


      //display selected player putting in chosen character bucket
      $("#hippy").removeClass("available-character").addClass("chosen-characters-container");
      $("#chosen-characters-container").append(this);

// if a player has been selected, but not the enememy yet, we're gonna do enemy to container function
      movingEnemiesToContainer()
    } else if(playerSelected === true && enemySelected === false){
      if($("#hippy").hasClass("enemy-characters")){

        initializeEnemy(Characters.hippy);
        enemySelected = true;

// may possibly be redundant..look at the remove class and add class of enemy character
        $("#hippy").removeClass("enemy-characters").addClass("enemy-character");
        $("#enemy-container").append(this);
        }
       }
      });



// now we do some thing for goth
      $("#goth").on('click', function(){
      // console.log("goth has been selected");


// how to select a player
      if(playerSelected === false){
      settingUpCharacter(Characters.goth);
      playerSelected = true;

  //display selected character
      $('#goth').removeClass('available-character').addClass('chosen-characters-container');
      $('#chosen-characters-container').append(this);

//display enemy
      movingEnemiesToContainer()
    } else if(playerSelected === true && enemySelected === false){
      if($('#goth').hasClass('enemy-characters')){

        initializeEnemy(Characters.goth);
        enemySelected = true;

        $('#goth').removeClass('enemy-characters').addClass('enemy-character');
        $('#enemy-container').append(this);
        }
       }
      });

// And another character
      $('#yuppie').on('click', function(){
      // console.log("yuppie has been selected");

      if(playerSelected === false){

//how to select your player
      settingUpCharacter(Characters.yuppie);
      playerSelected= true;


//putting him into you selected character container
      $('#yuppie').removeClass('.available-character').addClass('chosen-characters-container');
      $('#chosen-characters-container').append(this);


// enemies to container
      movingEnemiesToContainer()
    }else if(playerSelected === true && enemySelected === false){
      if($('#yuppie').hasClass('enemy-characters')){

        initializeEnemy(Characters.yuppie);
        enemySelected = true;

        $('#yuppie').removeClass('enemy-characters').addClass('enemy-character');
        $('#enemy-container').append(this);
        }
       }
      });


//and another character
      $("#hipster").on('click', function(){
      // console.log("a hippy has been selected");

// once again, that if you havent did the player seleected function hasnt happened you can select a char. and it will be a true statement.
      if(playerSelected === false){
      settingUpCharacter(Characters.hipster)
      playerSelected= true;

      $('#hipster').removeClass('available-character').addClass('chosen-characters-container');
      $('#chosen-characters-container').append(this);

      movingEnemiesToContainer()
      }
      else if (playerSelected === true && enemySelected === false){
      if($('#hipster').hasClass('enemy-characters')){

        initializeEnemy(Characters.hipster);
        enemySelected= true;

        $('hipster').removeClass('enemy-characters').addClass('enemy-character');
        $('#enemy-container').append(this);
        }
       }
      });


      $("#attack-button").on("click", function() {
      console.log("Attack selected");


      if (playerSelected && enemySelected && gameOver === false){

      // if defender are being attacked by character chosen

      enemies.health = enemies.health - character.atk;
// get clairification on below. have someone break this down
      $($(`#${enemies.name} p.health`)[0]).html(enemies.health);


      console.log(enemies.health);
      console.log(playerSelected);

// sets up dom for different messages to be displayed below based on your fight
      character.atk = character.atk + character.baseAttackPower;
      $('#message-container').html('You have attacked ' + Characters.name + ' with ' + Characters.atk + ' points.');
      console.log(character.health);

      character.health = character.health - enemy.atk;
      $($(`#${character.name} p.health`)[0]).html(character.health);
      // $("#" + enemies.name + " p.health")[0].html()
      // console.log()


        if(character.health <= 0){
        $('#message-container').html('You have died!');
      } else if (enemy.health <= 0){
        enemiesDead ++;
        enemySelected = false;

        $('#enemy-container').empty();

      //  		$('#enemies-container').removeClass('enemy-characters');
      // $('#defender-container').append(this);

        if(enemiesDead === 3){
          gameOver= true;
          $('#message-container').html('You have won!');
          return;
        }

      }

      }


      });






      //these are for the beginning
      });






























// // This function will reset the state of the game
// function resetGame() {
//   // Reset all the health values to the original
//   $("#hippy").children(".health").html(hippy.health);
//   $("#goth").children(".health").html(goth.health);
//   $("#hipster").children(".health").html(hipster.health);
//   $("#yuppie").children(".health").html(yuppie.health);
//
// // make sure you have chosen-character enemy-character defender-character buckets in your html!
//   $(".card-img-top").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
//   var available = $(".available-character").show();
//   $("#characters-available").html(available);
//
//   $("#game-message").empty();
//   $("#restart").hide();
//
// //
// // movingEnemiesToTheirContainer()
// // } else if (playerSelected === true && enemySelected === false){
// // if($('#williamfisk').hasClass('enemy-characters')){
// //
// //   settingUpDefenders(WilliamFisk);
// //   defenderSelected= true;
// //
// //   $('williamfisk').removeClass('enemy-characters').addClass('defender-character');
// //   $('#defender-container').append(this);
// // }
// // }
// // });
// //
// // $('#attack-buttom').on('click', function(){
// // console.log('You selected the attack button.');
// //
// // if(playerSelected === true && defenderSelected === true){
// // $()
// // }
// //
// //
// //
// //
// // //Skip for now...Only refer to this step after you set up health and attack this puts the health in the right section
// $(‘#goth-health’).html(character.gothEnemy.health)
// $(‘#yuppie-health’).html(character.yuppieEnemy.health)
// $(‘#hippy-health’).html(character.hippyEnemy.health)
// $(‘#hipster-health’).html(character.hipsterEnemy.health)
//
//
//
// $(".character").on("click", function(event) {
//   // click events here
// if ($("#mycharacter").length===0);
// {
//   $(this).appendTo($('#mycharacter'));
// }
//
// });
//
//
// $(".attack").on("click", function (e) {
//  if (playerSelected && enemeySelected) {
//
//     //attack enemy for the attack attack Powert
//     enemySelected.health-=player.attackPower;
//     attackCounter++;
//
//     //remove healh from enemy
// //increment attack power when we attack
//   player.attackPower+=(player.addedAttackPower*attackCounter);
//
//
//   if(enemySelected.health<=0)
//     {
//       enemySelected = false;
//       enemiesAlive--;
//       if(enemiesAlive==0)
//       {
//         alert("you win!")
//       }
//     }
//     else
//     {
//     //if enemy health >0
//     playerHealth.health -= enemySelected.counterAttackPower;
//     //counter attack the use
//     //enemy is dead
//     }
//
//     if(playerHealth.heath<=0){
//       alert("you dead")
//     }
//  }
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // Now we're going to move to adding health deduction population to the dom...scroll up under var character establishment
//
//
//
//
//
//
// // Sarah Notes
//
// //taking entire character list and listing object variables as already done.
// //Once we render each characters...we want to locate their class....
// //We need a click event for one that has ".character" soo....do a .character class....
// //once a character is cliked on...I want to grab the value in the data name field....ex. I clicked hipster, now I want to grab my oponent and his data.
// //take the attacker, and then you want to
// //use varRenderCharacter to take in the character..the render bucket : is this the attacker bucket, or the player bucket? Ect...
// //We create a name, a class character name the source...all the object data...
// //We use append to use Character div....so apend $(renderarea) append to character
// //ON attack button set if else function...that the attack only works of two opponents are selected.
// //THen we move on to the logic
//   //.while loops check out Tutorials point. com
//     // var num =10;
//     // while (defender.health>0){
//     //   enemySelected.attack(personSelected--?);
//     // }
//     // This is like a for loop that checks statements and runs a loop until statement is false
//     //
// //After each round, you want to check whether or not someone is dead...(if health isnt at 0)
// //If someone is dead, found out who lost ...sort characters to buckets...
// //Do if else statements to determine when you start the game over....
// // Additional notes: attacker power multuplier needs to
