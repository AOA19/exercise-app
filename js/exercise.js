import exerciseApiKey from "./apiKey.js";

const apiKey = exerciseApiKey.API_KEY;

const muscleGroup = document.querySelector("#muscleGroup");
const muscleBtn = document
  .querySelector("#exerciseBtn")
  .addEventListener("click", getExercise);

function getExercise() {
  const muscleValue = muscleGroup.value;
  const exerciseSection = document.querySelector("#exerciseContainer");

  const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscleValue}`;

  fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const limitedData = data.slice(0, 5); // limit the data to the first 5 items
      // console.log(limitedData);

      limitedData.forEach((item) => {
        // Create h2 element for the exercise name
        const exName = document.createElement("h2");
        exName.innerText = item.name;

        //Create p element for exercise diffculty
        const exDifficulty = document.createElement("p");
        exDifficulty.innerText = `Difficulty: ${item.difficulty}`;

        //Create p element for exercise type
        const exType = document.createElement("p");
        exType.innerText = `Type: ${item.type}`;

        //Create p element for exercise equipment
        const exEquipment = document.createElement("p");
        exEquipment.innerText = `Equipment Needed: ${item.equipment}`;

        //Create p element for exercise instructions
        const exInstructions = document.createElement("p");
        exInstructions.innerText = `Instructions: ${item.instructions}`;

        // Append created elements to exercise container
        exerciseSection.append(
          exName,
          exDifficulty,
          exType,
          exEquipment,
          exInstructions
        );
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
