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



//workout logs of user 1
logWorkout(userId1, {
    type: 'running',
    duration: 30,
    caloriesBurned: 300,
    date: '2025-03-10'
});

logWorkout(userId1, {
    type: 'yoga',
    duration: 60,
    caloriesBurned: 200,
    date: '2025-03-11'
});

logWorkout(userId1, {
    type: 'yoga',
    duration: 90,
    caloriesBurned: 375,
    date: '2025-03-12'
});

logWorkout(userId1, {
    type: 'cycling',
    duration: 120,
    caloriesBurned: 450,
    date: '2025-02-21'
});




//workout logs of user 2
logWorkout(userId2, {
    type: 'dancing',
    duration: 20,
    caloriesBurned: 550,
    date: '2025-02-09'
});

logWorkout(userId2, {
    type: 'yoga',
    duration: 35,
    caloriesBurned: 250,
    date: '2025-03-10'
});

logWorkout(userId2, {
    type: 'zumba',
    duration: 40,
    caloriesBurned: 300,
    date: '2025-03-30'
});



//workout logs of user 3
logWorkout(userId3, {
    type: 'swimming',
    duration: 30,
    caloriesBurned: 350,
    date: '2025-03-10'
});

logWorkout(userId3, {
    type: 'zumba',
    duration: 60,
    caloriesBurned: 150,
    date: '2025-02-28'
});

logWorkout(userId3, {
    type: 'cardio',
    duration: 60,
    caloriesBurned: 400,
    date: '2025-04-20'
});

console.log("\nAll workouts of Vishnu:");
console.log(getAllWorkoutsOf(userId1));




//userID4 is not defined which throws "User not found!" error
try {
    console.log("\nYoga workouts of Vishnu:");
    console.log(getAllWorkoutsByType("userId4", 'ga')); 
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}



//now, proper userID is defined, that is userID1
try {
    console.log("\nYoga workouts of Vishnu:");
    console.log(getAllWorkoutsByType(userId1, "yoga")); 
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Unknown error:", error);
    }
}





//before partially updating user details of user 3
console.log("\nOriginal details of Takur:");
console.log(getUser(userId3));

updateUser(userId3, {
    weight: 74,
    height: 176
});


//after partially updating user details of user 3
console.log("\nUpdated details of Takur:");
console.log(getUser(userId3));