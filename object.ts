const person = {
  name: 'Aras',
  age: 21,
  hobbies: ['Sport', 'Reading']
};

let favoriteActivities: string[];
favoriteActivities = ['Reading'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}