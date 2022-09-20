CREATE DATABASE rol_jugador;

USE rol_jugador;

CREATE TABLE equipo(
    id_equipo INT(1078) NOT NULL,
    nombreequipo VARCHAR(20) NOT NULL,
        
);

CREATE TABLE estadisticasEquipo(
    id_estadisticaequipo INT(20) NOT NULL,
    valoracionequipo INTEGER ,
    quimicaequipo INTEGER ,
);

CREATE TABLE jugador(
    id_jugador INT(20) NOT NULL,
    nombrejugador VARCHAR(100) NOT NULL,
    apellidojugador VARCHAR(100) NOT NULL,
    alturajugador VARCHAR(100) NOT NULL, ,
    edadjugador  DECIMAL,  
);


CREATE TABLE estadisticas(
    id_estadisticas INT(11) NOT NULL,
    id_jugador INTEGER,
    ritmo_estadistica SERIAL(16) NOT NULL,
    tiro_estadistica SERIAL(100) NOT NULL, 
    pase_estadistica SERIAL(100) NOT NULL, 
    agilidad_estadistica SERIAL(100) NOT NULL, 
    defensa_estadistica SERIAL(100) NOT NULL, 
    fisico_estadistica SERIAL(100) NOT NULL,     
);  

ALTER TABLE equipo
    ADD PRIMARY KEY (id);

ALTER TABLE equipo
    MODIFY idteam INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
DESCRIBE users;









    





