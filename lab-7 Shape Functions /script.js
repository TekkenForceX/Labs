function getAreaOfCircle(radius) {
    return Math.PI * radius ** 2;
}

function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function getAreaOfSquare(side) {
    return side * side;
}

function getAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}

let area = getAreaOfCircle(5);
console.log(area)

let circumference = getCircumferenceOfCircle(5);
console.log(circumference)

let areaS = getAreaOfSquare(5);
console.log(areaS)

let areaT = getAreaOfTriangle(5, 10);
console.log(areaT)