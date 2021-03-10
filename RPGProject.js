var readlineSync = require("readline-sync");
var playerName = readlineSync.question("Welcome to the world of FINAL NEXUS!! What is your name Warrior?");
readlineSync.question(`In the year 40XX, a long time ago, an unknown techno-organic parasite ravaged 90% of human kind. The survivors then created project FINAL NEXUS!. \nFrom that project, mechanized beings known as the XFinities were created to combat the threat. \nMany years of peace followed but humanities greed caused the project to become corrupted and split into two cores, HOPE and DESPAIR. \nThe XFinities became corrupt and started an invasion in all of the heavens known as VAULTS.  \nThe remaining survivors, outmatched, converted the HOPE core into a motorcycle-like machine known as a HYPERDRIVE! \nIt's time to rev it up! ${playerName}, your mission is to get the Positive Core to the Negative Core and end the threat of the XFinities!! \n ${playerName} has blasted out of HQ!! \nYou ride towards the center of the VAULTS! Press enter to begin!`);

//Main attributes in the game.
var enemy = ["Parasitic Roach", "Human Centepide", "XFinitie of Despair", "Cyber-Eye", "XFinitie Blaze"];
var items = ["Pulse", "Speed Boost", "Force Barrier", "Chocolate"];
var reward = [];
var life =  70;
var options = ["Ride!", "Exit", "Equipment"];
var itemPickUp = items[Math.floor(Math.random() * items.length)];

//Main function of the game.
function game(){
    var attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    var enemies = enemy[Math.floor(Math.random() * enemy.length)];
    var enemyLife = 60;
    var enemyPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);
    var toDestination = Math.random();

    var index = readlineSync.keyInSelect(options, "As You ride HYPERDRIVE through the abandon VAULTS, you have time to make a decision, What will you do next?");
    
    //Command options: "Exit", "Print"(Equipment), "Walk"(Ride!).
      if (options[index] == "Exit") {
          console.log(`${playerName} has given up! the VAULTS will be doomed for Infinity!`);
        return life = 0 
   } else if (options[index] == "Equipment"){
        console.log(playerName + ': \n' + 'HP: ' + life + '\nitems: ' + itemPickUp);
    }else if (options[index] === "Ride!"){
        var key = Math.random();
     if (key <= .3){
          console.log("You keep on riding through the VAULT!! Destruction as far as the eyes can see, watch your back!....");
    }else if (key >= .3){
         console.log("You have encountered the " + enemies + " and it chases you with incredible speed!");
         if (toDestination >= .9){
         console.log(`..Before you engage in battle, with no time to waste, ${playerName} gets to the center of the VAULTS!. HYPERDRIVE has fused with the NEGATIVE CORE. \nA flash of light surrounds the VAULTS. The threat of the XFinities and the mutants is no more! Mission complete! Both Humans and Animals emerge from the depths. \nA new future begins!.... `);
         return life = 0;
         }
        
         while(enemyLife > 0 && life > 0){

        var user = readlineSync.question("What`s your next move? enter 'r' to ride away or 'b' to blast the enemy!:");
        
        switch (user){
            case 'r': //ride away.
            var rideAway = Math.random();
            if(rideAway < .5){
                console.log("You try to ride away but the " + enemies + ' chases you!');
            }else {
                console.log('You rode away!! You got lucky this time..');
                return enemyLife <= 0;
                
            };
            //Battle against enemy:
            case 'b': 
            enemyLife -= attackPower;
            console.log(`${playerName} attacked the ${enemies} with HOPE BLAST of: ${attackPower}`);
             life -= enemyPower;
            console.log(`${enemies} attacked you with DESPAIR POWER of: ${enemyPower}`);
            console.log(`You took damage, you now have HP: ${life} \nEnemy took damage, it now has HP: ${enemyLife}`);
               
            //player defeated enemy:
            if (enemyLife <= 0){
                console.log(playerName + "defeated the " + enemies + '\n' + enemies + " droped: " + itemPickUp);
                console.log(`HP: ${life}, EnemyHP: ${enemyLife}`);
                //If Player and Enemy take each other out.
                if (life <= 0 && enemyLife <= 0){
                    console.log("Both Player and enemy have taken each other out, GAME OVER!");
                }
                //player loot
                var loot = Math.random();
                if(loot <= .3){
                 return reward.push(itemPickUp);
                }  
                //Player gets defeated:
                }else if(life <= 0){
                 console.log(enemies + ` has defeated you!, ${playerName} has been consumed by DESPAIR! Game Over!`);
              
               }
           }    
         } 
       } 
    }        

} 
    while(life > 0){
        userRestore =  function(){
            userActive = true;
            life = 75;
        };
//Calling the main game Function:
       userRestore();
       game();
    }

