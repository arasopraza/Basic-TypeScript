// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'Aras',
//   age: 21,
//   hobbies: ['Sport', 'Reading'],
//   role: [2, 'Admin']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'Aras',
  age: 21,
  hobbies: ['Sport', 'Reading'],
  role: Role.AUTHOR
}

let favoriteActivities: string[];
favoriteActivities = ['Reading'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.AUTHOR) {
  console.log('is author');
}