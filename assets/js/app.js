console.log("Hello StJo");

const name = "Thomas";
let year = 2023;
const dob = 2003;
const isAdmin = false; //Boolean
const apprenants = ["Thomas", "Lucas", "Erwan", "Adrien", "Tom"];
const sac = {livre: 'BD Les Profs', trousse: 'stylo', skills: ["Mario Games", "Monopoly"]};

const disque = document.querySelector(".disque");
const btnPause = document.getElementById("btnPause");

btnPause.addEventListener("click", ()=> {
    disque.classList.toggle("pause");
});

console.log(apprenants[1]);
console.log(sac.skills);

apprenants.forEach(
    prenom => {
        console.log(`Bonjour ${prenom}`)
    }
)

console.log(`Bonjour ${name}`);

function calculerAge() {
  console.log(`Je connais ton age, tu as ${year - dob} ans.`);

  /*
  if(year - dob >= 18)
  {
    console.log("Tu es majeur, bienvenue!")
  }

  else
  {
    console.log("Tu sors.")
  }
  */

  year - dob >= 18 ? console.log("Tu es majeur, bienvenue!") : console.log("Tu sors.");
}
calculerAge();

/*
const calculAge2 = () => {
  console.log(`Je connais ton age, tu as ${year - dob} ans.`);
};
calculAge2();
*/

