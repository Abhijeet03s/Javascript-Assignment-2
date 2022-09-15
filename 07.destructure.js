// 1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e);
// console.log(pi);
// console.log(gravity);
// console.log(humanBodyTemp);
// console.log(waterBoilingTemp);

// Output:
// 2.72
// 3.14
// 9.81
// 37
// 100

// 2.Destructure and assign the elements of countries array to fin, est, sw, den, nor.

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countries;
// console.log(fin);
// console.log(est);
// console.log(sw);
// console.log(den);
// console.log(nor);

// Output:
// Finland
// Estonia
// Sweden
// Denmark
// Norway

// 3.Destructure the rectangle object by its properties or keys.

const rectangle = {
   width: 20,
   height: 10,
   area: 200,
   perimeter: 60
}
const { width, height, area, perimeter } = rectangle;
// console.log(width);
// console.log(height);
// console.log(area);
// console.log(perimeter);

// Output:
// 20
// 10
// 200
// 60

// 4.Iterate through the users array and get all the keys of the object using destructuring.

const users = [
   {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
   },
   {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
   },
   {
      name: 'David',
      scores: 75,
      skills: ['HTM', 'CSS'],
      age: 22
   },
   {
      name: 'John',
      scores: 85,
      skills: ['HTML'],
      age: 25
   },
   {
      name: 'Sara',
      scores: 95,
      skills: ['HTM', 'CSS', 'JS'],
      age: 26
   },
   {
      name: 'Martha',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
   },
   {
      name: 'Thomas',
      scores: 90,
      skills: ['HTM', 'CSS', 'JS'],
      age: 20
   }
]
// const { name, scores, skills, age } = users[0]
// console.log(name);
// console.log(scores);
// console.log(skills);
// console.log(age);

// Output:
// Brook
// 75
// [ 'HTM', 'CSS', 'JS' ]
// 16

// 5.Find the persons who have less than two skills.

