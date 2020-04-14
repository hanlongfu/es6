// callback hell
/*
function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 883, 432, 974];
    console.log(recipeID);

    setTimeout(
      (id) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Jonas",
        };
        console.log(`${id}: ${recipe.title}`);

        setTimeout(
          (publisher) => {
            const recipe = {
              title: "Italian Pizza",
              publisher: "Jonas"
            };
            console.log(recipe);
          },
          1500,
          recipe.publisher
        );
      },
      1500,
      recipeID[2]
    );
  }, 1500);
}
getRecipe();
*/


/*
 a promise is an object that keeps track about whether a certain event
 has happened;

 determines what happens after that event;

 implements the concept of a future value that we're expecting

*/


const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500)
});

getIDs.then(IDs => {
  console.log(IDs);
});