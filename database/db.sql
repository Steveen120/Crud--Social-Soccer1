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
    MODIFY id_equipo INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
    
DESCRIBE equipo;
CREATE TABLE links(
    id_equipo INT(11) NOT NULL,
    nombreequipo VARCHAR(20) NOT NULL,
    equipo_id_equipo INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_equipo FOREIGN KEY (equioi_id_equipo) REFERENCES equipo(id_equipo)
);

ALTER TABLE links
ADD PRIMARY KEY (id_equipo);

ALTER TABLE links   
 MODIFY id_equipo INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;






    





