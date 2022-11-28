// Function Lexical Scope

const name = "Human";

function grandFather() {
  //   const name = "Grand Father";
  console.log(name);

  function father() {
    // const name = "Father";
    console.log(name);

    function son() {
      //   const name = "Son";
      console.log(name);
    }
    son();
  }
  father();
}
grandFather();
