// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Jack"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jack@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Karan",
            lastname: "Patil"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);



const user = [
    {
        id: 1,
        email: "jack@gmail.com"
    },
    {
        id: 1,
        email: "jack@gmail.com"
    },
    {
        id: 1,
        email: "jack@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('name'));


const course = {
    coursename: "Trading from basics",
    price: "5000",
    courseInstructor: "Jack"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// constnavbar = ({company}) => {

// }         used in ReactJS

// navbar(company = "Karan")

// {
//     "name": "Karan",
//     "coursename": "Trading",
//     "price": "free"
// }

[
    {},
    {},
    {},
]