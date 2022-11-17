
-- -----------------------------------------------------
-- Base de datos empleos
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS empleos ;
USE empleos ;

CREATE TABLE empleo(
   Id INT NOT NULL AUTO_INCREMENT,
   empresa VARCHAR(50) NOT NULL,
   categoria VARCHAR(50) NULL,
   tipoEmpleo VARCHAR(100) NOT NULL,
   fecha DATE NOT NULL,
   salario INT(10) NULL,
   lugar VARCHAR(100) NULL,
   telefono CHAR(10) NOT NULL,
   numPuesto INT(2) NOT NULL,
   PRIMARY KEY (Id));

desc empleo;
INSERT INTO empleo (empresa,categoria,tipoEmpleo,fecha,salario,lugar,telefono,numPuesto)VALUES ('Bimbo','contabilidad','contador publico','2022-05-22',12000,'Tuxtla Gutierrez','9625456688',2);



SELECT* FROM empleo