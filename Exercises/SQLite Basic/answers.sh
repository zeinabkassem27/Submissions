select name from students
select * from students where Age>30
select name from students where Age=30 and Gender='F'
select Points from students where Name='Alex'
insert	into students values (null, 'Zeinab', 27, 'F', 200)
UPDATE students SET Points = 325 WHERE Name='Basma';
UPDATE studentsSET Points = 180 WHERE Name='Alex'; 
CREATE TABLE "students" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Name` TEXT NOT NULL UNIQUE, `Age` TEXT, `Gender` TEXT, `Points` INTEGER )
INSERT INTO graduates (Name, Age, Gender,Points) SELECT Name, Age, Gender, Points FROM students where Name='Layal';
UPDATE graduates SET Graduation= '2020-1-27' WHERE Name = 'Layal';
delete from students where Name='Layal'

1-CREATE TABLE "employeeTable" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Name` TEXT NOT NULL UNIQUE, `Company` TEXT,`CompanyDate` date )

2-insert into employeeTable (Name, Company, CompanyDate) select  e.Name, e.Company,c.Date from employees e,companies c where e.Company =c.Name

3-select name from employeeTable where CompanyDate<2000
(OR) SELECT E.Name FROM employees E JOIN companies C ON E.Company = C.Name and C.Date<2000;

4-select Company from employees where Role='Graphic Designer'

1-SELECT MAX (Points) AS "Max Points" FROM students;
2-SELECT AVG(Points) FROM students
3-SELECT COUNT (ID) FROM students where Points=500
4-SELECT name FROM students WHERE Name LIKE '%s%'; 
5-SELECT * FROM table_name ORDER BY column_name ASC|DESC
