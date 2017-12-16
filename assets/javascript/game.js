// Do an on click function for each picture (give a class)
// give it an attribute so you can figure out what you're clicking on..
// make classes for each card...ex: hipster and make sure that it shows up in on click function in the place of card. Obv. do 4 time.s

var playerSelected = false;
var enemySelected = false;
var enemiesAlive = 3;
var attackCounter = 1;
var game over = false;


// var player = {
// health: 100,
// attackPower: 6,
// addedAttackPower: 6,
// };

var character = {

'hipster': {
  name:'hipster',
  health: 100,
  counterAttackPower: 0,
  baseAttackPower,
  atk: 80,
},

'goth': {
  name:'goth',
  health: 100,
  counterAttackPower: 0,
  baseAttackPower,
  atk: 80,
},

'yuppie': {
  name:'yuppie',
  health: 100,
  counterAttackPower:0,
  baseAttackPower,
  atk: 80,
},

'hippy': {
  name:'hippy',
  health: 100,
  counterAttackPower: 0,
  baseAttackPower,
  atk: 80,
  };

};

function settingUpCharacter(chosenCharacter){
	character.name = chosenCharacter.name;
	character.health = chosenCharacter.health;
	character.baseAttackPower= chosenCharacter.baseAttackPower;
	character.atk= chosenCharacter.atk;
	character.counterAttack= chosenCharacter.counterAttack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  enemy.name = chosenEnemy.name;
  enemy.health = chosenEnemy.health;
  enemy.baseAttack = chosenEnemy.baseAttack;
  enemy.attack = chosenEnemy.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-characters").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#hippy").children(".health").html(hippy.health);
  $("#goth").children(".health").html(goth.health);
  $("#hipster").children(".health").html(hipster.health);
  $("#yuppie").children(".health").html(yuppie.health);

// make sure you have chosen-character enemy-character defender-character buckets in your html!
  $(".card-img-top").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

//
// movingEnemiesToTheirContainer()
// } else if (playerSelected === true && enemySelected === false){
// if($('#williamfisk').hasClass('enemy-characters')){
//
//   settingUpDefenders(WilliamFisk);
//   defenderSelected= true;
//
//   $('williamfisk').removeClass('enemy-characters').addClass('defender-character');
//   $('#defender-container').append(this);
// }
// }
// });
//
// $('#attack-buttom').on('click', function(){
// console.log('You selected the attack button.');
//
// if(playerSelected === true && defenderSelected === true){
// $()
// }
//
//
//
//
// //Skip for now...Only refer to this step after you set up health and attack this puts the health in the right section
$(‘#goth-health’).html(character.gothEnemy.health)
$(‘#yuppie-health’).html(character.yuppieEnemy.health)
$(‘#hippy-health’).html(character.hippyEnemy.health)
$(‘#hipster-health’).html(character.hipsterEnemy.health)



$(".character").on("click", function(event) {
  // click events here
if ($("#mycharacter").length===0);
{
  $(this).appendTo($('#mycharacter'));
}

});


$(".attack").on("click", function (e) {
 if (playerSelected && enemeySelected) {

    //attack enemy for the attack attack Powert
    enemySelected.health-=player.attackPower;
    attackCounter++;

    //remove healh from enemy
//increment attack power when we attack
  player.attackPower+=(player.addedAttackPower*attackCounter);


  if(enemySelected.health<=0)
    {
      enemySelected = false;
      enemiesAlive--;
      if(enemiesAlive==0)
      {
        alert("you win!")
      }
    }
    else
    {
    //if enemy health >0
    playerHealth.health -= enemySelected.counterAttackPower;
    //counter attack the use
    //enemy is dead
    }

    if(playerHealth.heath<=0){
      alert("you dead")
    }
 }
});


















// Now we're going to move to adding health deduction population to the dom...scroll up under var character establishment






// Sarah Notes

//taking entire character list and listing object variables as already done.
//Once we render each characters...we want to locate their class....
//We need a click event for one that has ".character" soo....do a .character class....
//once a character is cliked on...I want to grab the value in the data name field....ex. I clicked hipster, now I want to grab my oponent and his data.
//take the attacker, and then you want to
//use varRenderCharacter to take in the character..the render bucket : is this the attacker bucket, or the player bucket? Ect...
//We create a name, a class character name the source...all the object data...
//We use append to use Character div....so apend $(renderarea) append to character
//ON attack button set if else function...that the attack only works of two opponents are selected.
//THen we move on to the logic
  //.while loops check out Tutorials point. com
    // var num =10;
    // while (defender.health>0){
    //   enemySelected.attack(personSelected--?);
    // }
    // This is like a for loop that checks statements and runs a loop until statement is false
    //
//After each round, you want to check whether or not someone is dead...(if health isnt at 0)
//If someone is dead, found out who lost ...sort characters to buckets...
//Do if else statements to determine when you start the game over....
// Additional notes: attacker power multuplier needs to
