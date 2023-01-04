// Topic: this keyword

/*
    # What is this keyword?
    - It's currently point to the object.
*/

// Syntax
const object1 = {
  name1: "Value1",
  name2: "Value2",
  name3: function () {
    console.log(this.name1);
  },
};
object1.name3();

// Example
function favoriteSubject() {
  console.log(`Favorite Subject: ${this.subject}`);
}

const student1 = {
  name: "Batman",
  rollNumber: 101,
  subject: "Math",
  favoriteSubject: favoriteSubject,
};

const student2 = {
  name: "Superman",
  rollNumber: 102,
  subject: "Science",
  favoriteSubject: favoriteSubject,
};

student1.favoriteSubject();
student2.favoriteSubject();
