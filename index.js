const Schema = require("./employees_pb");

const haddas = new Schema.Employee();
haddas.setId(1001);
haddas.setName("Haddas");
haddas.setSalary(10000);


const Inbal = new Schema.Employee();
Inbal.setId(1002);
Inbal.setName("Inbal");
Inbal.setSalary(20000);

const emps = new Schema.Employees();
emps.addEmployees(haddas);
emps.addEmployees(Inbal);

const bytes = emps.serializeBinary();
console.log("Binary: "+ bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());
