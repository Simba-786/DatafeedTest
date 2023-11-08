// Exercise 1:

// 1. Create a reference type called Person.
//    Populate the Person class with the following properties to store the following information in database:
// 		First name
// 		Last name
// 		Email address
// 		Date of birth
// 2. Add constructors that accept the following parameter lists:
// 		All four parameters
// 		First, Last, Email
// 		First, Last, Date of birth
//  3. Add read-only properties that return the following computed information:
// 		Adult - whether or not the person is over 18
// 		Birthday - whether or not today is the person's birthday
// --------------------------------------------------------------

class Person {
  firstName;
  lastName;
  emailAddress;
  dateOfBirth;

  constructor(firstName, lastName, emailAddress, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.dateOfBirth = dateOfBirth;
  }

  checkAdult() {
    const yearOfBirth = +this.dateOfBirth.slice(-4);

    const result =
      new Date().getFullYear() - yearOfBirth >= 18
        ? "Person is Adult "
        : "Person is  minor";
    return result;
  }

  checkTodayisBirthday() {
    const currentMonth = String(new Date().getMonth() + 1).padStart(0, 2);

    const currentDay = String(new Date().getDate()).padStart(2, 0);

    if (
      this.dateOfBirth.slice(3, 5) === currentMonth &&
      this.dateOfBirth.slice(0, 2) === currentDay
    )
      return "Today is his Birthday";
    else {
      return "Today is not his birthday";
    }
  }
}

const Person1 = new Person(
  "Sindbaaz",
  "Ansari",
  "sindbaazonly4u2@gmail.com",
  "18/08/1995"
);

// --------------------------------------------------------------
// ***********Calling CheckAdult Method to check whether or not the person is over 18
console.log(Person1.checkAdult());

// ***********Calling checkTodayisBirthday Method to check whether or not today is the person's birthday
console.log(Person1.checkTodayisBirthday());
