// // // Task: *JS. Users array

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

// // * Прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача.
// //   Загальну логіку (тобто зазначений метод) винести в прототип.

User.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

// // Отримати масив користувачів, які не підписані (not subscribed)

const notSubscribed = users.filter((item) => !item.isSubscribed);
console.table(notSubscribed);

// // Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років)

const schoolAgePersons = users
  .filter((item) => !item.isMale && item.age >= 6 && item.age <= 18)
  .map((user) => user.getFullName());
console.table(schoolAgePersons);

// // Видалити з масиву користувача з email useremail5@gmail.com

const userIndex = users.findIndex(
  (item) => item.email === "useremail5@gmail.com"
);
if (userIndex !== -1) {
  users.splice(userIndex, 1);
}
console.log("userIndex :>> ", userIndex);

// // Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com

const isEmailExist = users.some(
  (item) => item.email === "useremail99@gmail.com"
);
console.log("isEmailExist :>> ", isEmailExist);

// // Перевірити, чи всі користувачі підписані (subscribed)

const isSubscribed = users.every((item) => item.isSubscribed);
console.log("isSubscribed :>> ", isSubscribed);
