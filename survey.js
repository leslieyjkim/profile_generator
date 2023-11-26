const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = {};

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// Ask the first question
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  user.name = answer;

  // Ask the second question
  rl.question("What's an activity you like doing? ", (answer) => {
    user.activity = answer;

    // Ask the third question
    rl.question("What do you listen to while doing that? ", (answer) => {
      user.music = answer;

      // Ask the fourth question
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
        (answer) => {
          user.favoriteMealTime = answer;

          // Ask the fifth question
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              user.favoriteMeal = answer;

              // Ask the sixth question
              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  user.favoriteSport = answer;

                  // Ask the seventh question
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      user.superpower = answer;

                      // Generate the profile paragraph
                      const profileParagraph = `Meet ${user.name}! They love ${user.activity} and enjoy listening to ${user.music} while doing it. Their favorite meal is ${user.favoriteMeal} which they like to have during ${user.favoriteMealTime}. When it comes to sports, ${user.name} is a big fan of ${user.favoriteSport}. But what sets them apart is their superpower: ${user.superpower}.`;

                      // Output the profile
                      console.log(profileParagraph);

                      // Close the readline interface
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
