// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



// Define an interface for IT courses
interface ITCourse {
    courseName: string;
    location: string;
    onSiteStudents: number;
}

// Create an object containing information about an IT course
let itCourse: ITCourse = {
    courseName: "TypeScript and JavaScript",
    location: "Governor House Sindh",
    onSiteStudents: 50000
};

// Print information about the IT course
console.log("Information about IT Course:");
console.log("Course Name:", itCourse.courseName);
console.log("Location:", itCourse.location);
console.log("Number of On-site Students:", itCourse.onSiteStudents);
