// Author: Ricardo Aviles
// Term: 1301
// SDI Project 3 Assignment
// January 24, 2013

// Global Variables

var characterName = "Rick";
var weaponChoice = ["Magic Sword", "Swords", "Axes", "Daggers"];
var power = 100,
	hits = 45;
var potions = ["Health Potion", "Magic Potion"];

// Object with Properties

var monsterArmy = {
	monsters: [
			{
			size: "general", // String Property
			amount: 10, // Number Property
			fast: false // Boolean Property
			},
			{
			size: "captain", // String Property
			amount: 20, // Number Property
			fast: false // Boolean Property
			},
			{
			size: "privates", // String Property
			amount: 25, // Number Property
			fast: true // Boolean Property
			} // Object Property	
		], // Array Property
		flee: function (){
			console.log ("The attack was massive. We have received a lot of damage and need to recover. We need to leave to regain strength, but the privates are following us.")
		} // Procedure Method 
	};

// Object with Methods

var monsterBattles = {
	// Function Method
	battle1: function () {
				console.log ("We came to close to an army of monters, so one of them started attacking us. We were able to kill him quickly, but there are still more in the area.");
			for (var z = 0; z < monsterArmy.monsters.length; z++) {
				var monster = monsterArmy.monsters [z];
			if (monster.fast === true) {
				while (monster.amount >= 0) {
					console.log ("One monster down " + monster.amount + " to go!");
					monster.amount -- ;
			};
		return monster.amount, monster;
			} else {
			
			}
		}
}, // Function Method
	battle2: function () {
				console.log ("There are monsters everywhere. We have killed all in the area, but now something is starting to come from underground. Another army of monsters have risen.");
			for (var z = 0; z < monsterArmy.monsters.length; z++) {
				var monster = monsterArmy.monsters [z];
			if (monster.size === "medium") {
				while (monster.amount >= 0) {
					console.log ("We need to get rid of these monsters. There are only " + monster.amount + " left to kill!");
					monster.amount -- ;
			};
		return monster.amount, monster;
			} else {
			
			}
		}	
}, // Function Method
	battle3: function () {
				console.log ("The leader of these monters has appeared with some other monsters of his army. His strength is more than what we expected, but we can defeat him.");
			for (var z = 0; z < monsterArmy.monsters.length; z++) {
				var monster = monsterArmy.monsters [z];
			if (monster.amount < 15) {
				while (monster.amount >= 0) {
					console.log ("We have killed many monsters. Now we only have " + monster.amount + " to finish!");
					monster.amount -- ;
			};
		return monster.amount, monster;
			} else {
			
			}
		}
	}

}, // Function Method
	battleDone = function () {
		var monster = monsterArmy.monsters
		monster.amount = 0
		console.log ("We have " + monster.amount + " monsters attacking us.");	
		return monsterArmy.monster, monster.amount, monster;
	} // Mutator Method
	warStatus = function () {
		var monster = monsterArmy.monsters
		console.log ("We have to check to see how many monsters are still around the area. As of right now we have " + monster.amount + " monsters close by.")
	}; // Accessor Method

// Functions

var potionSearch = function (cave, randomMonsters, potion) {
	console.log (characterName + " passed " + randomMonsters + " monsters to enter " + cave + " to find some health and/or magic potions.");
	if (potion > 0){
		console.log (characterName + " you found 5 health potions and 5 magic potions.")
	} else {
		console.log (characterName + " did not find anything.")
		};
	console.log (characterName + " gets out of " + cave + " evading monsters on his way out.");
}; // Procedure

var monsterLegion = function (powerHits, monsterNum) {
	if (powerHits >= monsterNum) {
		console.log (characterName + " you are capable of defeating these " + monsterNum + " monsters on your own.")
	} else {
		concole.log (characterName + " you need help to defeat " + monsterNum + " monsters. You can not do this battle alone.");
	};
	return powerHits, monsterNum;
}; // Boolean

var monsterInterference =  function (monsterNum) {
	while ( monsterNum && hits >= 0) {
		console.log (monsterNum + " monsters left and " + hits + " power left! ");
		monsterNum -= 10;
		hits -= 3;
	};
	return monsterNum;
}; // Number

var otherSurvivors = function (survivor1, survivor2) {
	console.log ("There are 2 warriors coming towards " + characterName + ". He doesn't know if they are here to help or to kill him. He is ready with his " + weaponChoice[0] + " just in case things get rough.");
	console.log (survivor1 + " and " + survivor2 + " reach " + characterName + ". They explained that monsters attacked their village and they were the only survivors.");
	console.log (characterName + " asked them if they wanted to join his army and they did agree.");
	return survivor1, survivor2;
}; // String

var pickUp = function () {
	var health = potions [0],
	    magic = potions [1];
	console.log ("Finding " + health);
	for (var health = 10, magic = 30; health && magic >= 0; health --, magic -= 3) {
		console.log ("I have " + health + " left to recover and " + magic + " left to pump up my powers!");
	};
	return health, magic;
};// Array

var handleData = function (json) {
	for (var i = 0; i < json.characters.length; i++){
		var characters = json.characters[i];
		console.log("The following is the information for the characters that returned safely to Archosaur. Character information: " + "Type: " + characters.type + ", Gender: " + characters.gender + ", Name: " + characters.name + ", level: " + characters.level +
			    ", Weapon of choice: " + characters.weapon + ", Contribution: " + characters.functionPart);
	};
}; // JSON



// Story

console.log (characterName + " is one of the most respected warrior in Archosaur city.");

potionSearch ("Cave of dreams ", 10, 1); // Procedure Function
console.log ("While searching for survivors on the outskirts of Archosaur, " + characterName + " find an army of monsters taking over a village.");

monsterLegion (55, 25); // Boolean Function
console.log("Monsters are in the way to the cave of potions." + characterName + " needs to open way to get in the cave.");

monsterInterference (60); // Number Function
console.log ("After the brutal battle " + characterName + " saw 2 people coming towards them.");

otherSurvivors ("Sarah", "John"); // String Function
console.log ("As the group moves through the outskirts of the city, an elder appears before them.");

pickUp (); // Array Function
console.log ("The elder teleported the group back to Archosaur city where the group would be safe.");

handleData(json); // JSON Function
console.log ("These great warriors are the only salvation for our world.");

monsterArmy.flee (); // Procedure Method
console.log ("The warriors health and magic are stating to go low thanks to the many attacks.");

monsterBattles.battle1(); // Function Method
monsterBattles.battle2(); // Function Method
monsterBattles.battle3(); // Function Method
monsterBattles.battleDone; // Mutator Method
console.log ("The fighting is over for now but here is still much to be done. Be aware of your surroundings.");

monsterBattles.warStatus; // Accessor Method
console.log ("After all the great battles fought, our great warriors are getting ready to head out for another great adventure and continue fighting the monsters that threatened our Earth.");
