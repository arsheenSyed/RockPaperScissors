const rps = ["rock", "paper", "scissors"];

let randNum = Math.trunc(Math.random() * rps.length);

let computer = rps[randNum];

let yourScore = 0;

let compScore = 0;

/*

paper covers rock

rock crushes scissors

scissors cut paper

*/

function play(player, computer) {
  console.log(`🎲you: ${player} and 🎲Computer: ${computer}`);

  while (player.toLowerCase() === computer.toLowerCase()) {
    console.log("There's a Tie 🤞");
    player = prompt("There's a tie, Choose any from Rock, Paper, Scissors");
  }

  // Computer Won
  if (
    (player.toLowerCase() === rps[0] && computer.toLowerCase() === rps[1]) ||
    (player.toLowerCase() === rps[1] && computer.toLowerCase() === rps[2]) ||
    (player.toLowerCase() === rps[2] && computer.toLowerCase() === rps[0])
  ) {
    // console.log(`paper covers rock`);
    console.log(`🤖 Computer Won the Game!`);
    compScore++;
    console.log(`🤖Computer Score: ${compScore}`);
  } else if (
    //You won
    (player.toLowerCase() === rps[0] && computer.toLowerCase() === rps[2]) ||
    (player.toLowerCase() === rps[1] && computer.toLowerCase() === rps[0]) ||
    (player.toLowerCase() === rps[2] && computer.toLowerCase() === rps[1])
  ) {
    // console.log(`rock crushes scissors`);
    console.log(`👧 You won the Game!`);
    yourScore++;
    console.log(`👧 Your Score: ${yourScore}`);
  }
  //   else if (
  //     //You won
  //     player.toLowerCase() === rps[1] &&
  //     computer.toLowerCase() === rps[0]
  //   ) {
  //     console.log(`paper covers rock`);
  //     console.log(`👧 You won the Game!`);
  //     yourScore++;
  //     console.log(`👧 Your Score: ${yourScore}`);
  //   }
  //   else if (
  //     //Computer won
  //     player.toLowerCase() === rps[1] &&
  //     computer.toLowerCase() === rps[2]
  //   ) {
  //     console.log(`scissors cut Paper`);
  //     console.log(`🤖 Computer Won the Game!`);
  //     compScore++;
  //     console.log(`🤖Computer Score: ${compScore}`);
  //   }
  //   else if (
  //     //Computer won
  //     player.toLowerCase() === rps[2] &&
  //     computer.toLowerCase() === rps[0]
  //   ) {
  //     console.log(`rock crushes scissors`);
  //     console.log(`🤖 Computer Won the Game!`);
  //     compScore++;
  //     console.log(`🤖Computer Score: ${compScore}`);
  //   }
  //   else if (
  //     //You won
  //     player.toLowerCase() === rps[2] &&
  //     computer.toLowerCase() === rps[1]
  //   ) {
  //     console.log(`scissors cut Paper`);
  //     console.log(`👧 You won the Game!`);
  //     yourScore++;
  //     console.log(`👧 Your Score: ${yourScore}`);
  //   }
}

// play(player, computer);

function game() {
  for (let i = 0; i < 5; i++) {
    randNum = Math.trunc(Math.random() * rps.length);

    player = prompt("Choose any from Rock, Paper, Scissors");

    computer = rps[randNum];

    play(player, computer);
  }

  if (yourScore > compScore) {
    console.log(`You won with Score: ${yourScore}`);
  } else {
    console.log(`Computer won with Score: ${compScore}`);
  }
}

game();
