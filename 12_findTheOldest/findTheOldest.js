const findTheOldest = function (people) {
  return people.reduce((previous, current) => {
    if (!previous.age) {
      previous.age = calculateAge(previous.yearOfBirth, previous.yearOfDeath);
    }
    current.age = calculateAge(current.yearOfBirth, current.yearOfDeath);
    return previous.age > current.age ? previous : current;
  });
};

let calculateAge = (birthYear, deathYear = new Date().getFullYear()) => {
  console.log(deathYear);
  return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
