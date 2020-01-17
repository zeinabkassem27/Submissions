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