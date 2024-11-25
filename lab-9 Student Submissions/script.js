const submissions = [
    { name: "Jane", score: 95, passed: true },
    { name: "Joe", score: 77, passed: true },
    { name: "Jack", score: 59, passed: false },
    { name: "Jill", score: 88, passed: true }
];

const addSubmission = (array, newName, newScore) => {
    const passed = newScore >= 60; 
    const newSubmission = { name: newName, score: newScore, passed: passed };
    array.push(newSubmission); 
}

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1); 
}
  
const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(submission => submission.name === name); // Find the index of the object
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const editSubmission = (array, index, score) => {
    if (index >= 0 && index < array.length) { 
        array[index].score = score; 
        array[index].passed = score >= 60; 
    }
}

const findSubmissionByName = (array, name) => {
    return array.find(submission => submission.name === name);
}

const findLowestScore = (array) => {
    return array.reduce((lowest, current) => current.score < lowest.score ? current : lowest, array[0]);
}

const findAverageScore = (array) => {
    let totalScore = array.reduce((sum, submission) => sum + submission.score, 0);
    return totalScore / array.length;
}

const filterPassing = (array) => {
    return array.filter(submission => submission.passed);
}

const filter90AndAbove = (array) => {
    return array.filter(submission => submission.score >= 90);
}

console.log(submissions);

addSubmission(submissions, "Jake", 85);
console.log(submissions);

deleteSubmissionByIndex(submissions, 2); 
console.log(submissions);

deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

editSubmission(submissions, 1, 95); 
console.log(submissions);

let jane = findSubmissionByName(submissions, "Jane");
console.log(jane);

let lowest = findLowestScore(submissions);
console.log(lowest);

let average = findAverageScore(submissions);
console.log(average);

let passing = filterPassing(submissions);
console.log(passing);

let highScores = filter90AndAbove(submissions);
console.log(highScores);
