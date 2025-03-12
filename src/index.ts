import { addUser, logWorkout, getAllWorkoutsOf, getAllWorkoutsByType, getUsers, getUser, updateUser } from './fitness';


//adding new users
const userId1 = addUser({
    name: 'Vishnu',
    age: 24,
    weight: 75,
    height: 175
});

const userId2 = addUser({
    name: 'Sagar',
    age: 28,
    weight: 65,
    height: 179
});

const userId3 = addUser({
    name: 'Takur',
    age: 25,
    weight: 85,
    height: 186
});

console.log('\nAll users: \n');
console.log(getUsers());


