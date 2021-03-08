var readlineSync = require("readline-sync");
var playerName = readlineSync.question("What is your name Warrior?");
readlineSync.question("In the year 40XX, a long time ago, an unknown techno-organic parasite ravaged 90% of human kind. The survivors then created project Final Nexus. \nFrom that project, mechanized beings know as the XFinities were created to combat the treat. \nMany years of peace followed but humanities greed caused the project to become corrupt and split into two cores, HOPE and DESPAIR. \nThe XFinities became corrupt and started an invasion on all of the heavens known as VAULTS.  \nThe remaining survivors, outmatched, converted the HOPE core into a motorcycle like machine known as a HYPERDRIVE! \nIt's time to rev it up! " + playerName + ", Your mission is to get the Positive Core to the Negative Core and end the treat of the XFinities!! \n You blast your way out of HQ!! \nYou ride towards the center of the VAULTS! Press enter to begin!");

var enemy = ["Parasitic Roach", "Human Centepide", "XFinitie of Despair", "Cyber-Eye", "XFinitie Blaze"];
var items = ["Pulse", "Speed Boost", " Force Barrier", "Chocolate"];
var reward = [];
var life =  75;
var options = ["Ride!", "Exit", "Equipment"];
var itemPickUp = items[Math.floor(Math.random() * items.length)];

//Main function of the game.
function game(){
    var attackPower = Math.floor(Math.random() * (5 - 5 + 3) + 5);
    var enemies = enemy[Math.floor(Math.random() * enemy.length)];
    var enemyLife = 70;
    var enemyPower = Math.floor(Math.random() * (5 - 1 + 2) + 5);
    
    var index = readlineSync.keyInSelect(options, "As You ride HYPERDRIVE, You have time to make a decision, What will you do next? Hurry!");

      if (options[index] == "Exit") {
        return life = `${playerName}, the VAULT will be doomed for Infinity...`
    }else if (options[index] == "Equipment"){
        console.log(playerName + ': \n' + 'HP: '+ life + '\nitems: ' + itemPickUp);
    }else if (options[index] === "Ride!"){
        var key = Math.random();
        if  (key <= .3){
            console.log("You keep on riding through the VAULT!! Watch your back!....");
     }else if (key >= .3){
         console.log("You have encountered the " + enemies);

    while(enemyLife > 0 && life > 0){

        var user = readlineSync.question("What will you do? enter 'r' to ride away or 'b' to blast the enemy!:");
        
        switch (user){
            case 'r': //ride away.
            var rideAway = Math.random();
            if(rideAway < .5){
                console.log("You try to ride away but " + enemies + ' attacks you with: ' + enemyPower);
            }else {
                console.log('You rode away!!');
                return enemyLife <= 0;
            }

            case 'b': //Battle with Monster.
            enemyLife -= attackPower;
            console.log('You attacked ' + enemies + ' with HOPE BLAST of: ' + attackPower);
             life -= enemyPower;
            console.log('Enemy attacked you with DESPAIR POWER of: ' + enemyPower);
            console.log(`HP:${life} ,  EnemyHP: ${enemyLife}`);

            if (enemyLife <= 0){ //if Monster is defeated.
                console.log('You have defeated the ' + enemies + '\n' + enemies + ' droped: ' + itemPickUp);
                console.log(`HP:${life}, EnemyHP:${enemyLife}`);
                var loot = Math.random();
                if(loot <= .3){
                    reward.push(itemPickUp);
                }
            }else if(life <= 0){
                     //Player gets defeated.
                console.log(enemies + ` has defeated you!, ${playerName} you have been consumed by DESPAIR!`)
                return enemyLife;
                
            }

            }
                
            }
             }
            }
    
            }


        
    
   { }
     
    {
    while(life > 0){
        userRestore =  function(){
            userActive = true;
            life = 75;
        };
        userRestore();
        game();
    }}
    console.log(game());
