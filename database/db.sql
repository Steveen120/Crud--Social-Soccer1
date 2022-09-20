CREATE DATABASE rol_jugador;

USE rol_jugador;

CREATE TABLE team(
    idteam INT(11) NOT NULL,
    ligabarial VARCHAR(16) NOT NULL,
    nombreequipo VARCHAR(100) NOT NULL, 
    
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;




CREATE TABLE estadisticas(
    idestadisticas INT(11) NOT NULL,
    ritmo_estadistica VARCHAR(16) NOT NULL,
    tiro_estadistica VARCHAR(100) NOT NULL, 
    pase_estadistica VARCHAR(100) NOT NULL, 
    agilidad_estadistica VARCHAR(100) NOT NULL, 
    defensa_estadistica VARCHAR(100) NOT NULL, 
    fisico_estadistica VARCHAR(100) NOT NULL,     
);

CREATE TABLE team(
    idteam INT(11) NOT NULL,
    ligabarial VARCHAR(16) NOT NULL,
    nombreequipo VARCHAR(100) NOT NULL, 
    
);


    





