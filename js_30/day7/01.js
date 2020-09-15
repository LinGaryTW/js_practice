const people = [
  {name: 'Wes',year: 1988},
  {name: 'Kait',year: 1986},
  {name: 'Irv',year: 1970},
  {name: 'Lux',year: 2015}
]

const comment = [
  { text: 'Love this', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice nice nice', id: 542328 },
]

// find is there any one greater than 19 years old
const isAdult = people.some(function (person) {
  const yearNow = (new Date()).getFullYear();
  if(yearNow - person.year >= 19){
    return true
  }
});

console.log(isAdult);

// check if everyone is greater than 19 years old.
const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19);

console.log(allAdult);

// find comment with specific id
const findComment = comment.find(detail => detail.id === 823423)

console.log(findComment);

// find comment index by id and then delete it from array
const index = comment.findIndex(detail => detail.id === 823423)

console.log(index);

comment.splice(index, 1);

console.log(comment);