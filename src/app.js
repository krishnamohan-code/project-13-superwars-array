const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    var detailedPlayers;

    // Instead of forloop use Map method

    detailedPlayers =players.map((player,i)=>{
             return {
                name:player,
                image:"images/super-"+(i+1)+".png",
                strength:getRandomStrength(),
                type: i%2 ==0 ? "hero":"villain"
              };
    });
    // Code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    
   return players.filter(player => {return player.type==type})
   .map(player =>`<div class="player">
   <img src="${player.image}" alt="">
   <div class="name">${player.name} </div>
   <div class="strength">${player.strength}</div>
</div>`)
// .join();
    // Instead of using for loop
    
    // Use chaining of Array methods - filter, map and join
    // Type your code here

}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}