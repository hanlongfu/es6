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




//  a promise is an object that keeps track about whether a certain event has happened; determines what happens after that event; implements the concept of a future value that we're expecting


const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500)
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = {
        title: 'Fresh tomato pasta',
        publisher: 'Jonas'
      };
      resolve(`${ID} : ${recipe.title}`);

    }, 1500, recID);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: 'Italian Pizza',
        publisher: 'Jonas'
      };
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher);
  });
};

// getIDs
//   .then(IDs => {
//     console.log(IDs);
//     return getRecipe(ID[2]);
//   })
//   .then(recipe => {
//     console.log(recipe);
//     return getRelated('recipe.publisher');
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(error => {
//     console.log("error!");
//   });

async function getRecipesAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRelated(IDs[2]);
  console.log(recipe);
  const related = await getRelated('Jonas');
  console.log(related);
}
getRecipesAW();

fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log)
*/

async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));

  console.log('users', array[0]);
  console.log('posts', array[1]);
  console.log('albums', array[2]);
};