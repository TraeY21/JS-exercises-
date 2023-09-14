const statment = "create table author (id number, name string, age number, city string, state string, country string)"
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statment.match(regexp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns = columns.split(", ")
console.log(tableName);
console.log(columns);