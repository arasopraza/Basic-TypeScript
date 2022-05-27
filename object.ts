const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: 'Aras',
  age: 21,
  hobbies: ['Sport', 'Reading'],
  role: [2, 'Admin']
};

let favoriteActivities: string[];
favoriteActivities = ['Reading'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}