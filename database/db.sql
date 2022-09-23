CREATE DATABASE rol_jugador;

USE rol_jugador;

CREATE TABLE equipo(    
    nombreequipo VARCHAR(20) NOT NULL,
    nombredueño VARCHAR(20) NOT NULL,
    nombreentrenador VARCHAR(20) NOT NULL,        
);

CREATE TABLE estadisticasEquipo(    
    valoracionequipo VARCHAR(100) NOT NULL,
    quimicaequipo INT(100) NOT NULL,
    triunfosequipo INT(100) NOT NULL,
);

CREATE TABLE jugador(
    posicionjugador VARCHAR(4) NOT NULL,
    nombrejugador VARCHAR(100) NOT NULL,
    apellidojugador VARCHAR(100) NOT NULL,
    alturajugador INT(100) NOT NULL, 
    edadjugador  INT(100) NOT NULL,  
);


CREATE TABLE estadisticas(
    id_jugador VARCHAR (100) NOT NULL,
    id_estadisticas VARCHAR(50) NOT NULL,
    ritmo_estadistica INT(16) NOT NULL,
    tiro_estadistica INT(100) NOT NULL, 
    pase_estadistica INT(100) NOT NULL, 
    agilidad_estadistica INT(100) NOT NULL, 
    defensa_estadistica INT(100) NOT NULL, 
    fisico_estadistica INT(100) NOT NULL,     
);  

ALTER TABLE equipo
    ADD PRIMARY KEY (id);


    

CREATE TABLE links(
    id_equipo INT(11) NOT NULL,
    nombreequipo VARCHAR(20) NOT NULL,
    equipo_id_equipo INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_equipo FOREIGN KEY (equioi_id_equipo) REFERENCES equipo(id_equipo)
);

ALTER TABLE links
ADD PRIMARY KEY (id_equipo);








    





