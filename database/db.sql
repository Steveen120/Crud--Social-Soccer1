CREATE DATABASE rol_jugador;

USE rol_jugador;

CREATE TABLE equipo(    
    id INT(11) NOT NULL,
    equipo VARCHAR(20) NOT NULL,
    dueño VARCHAR(20) NOT NULL,
    entrenador VARCHAR(20) NOT NULL        
);

ALTER TABLE equipo
    ADD PRIMARY KEY (id);


CREATE TABLE estadisticasEquipo(  
    id INT(11) NOT NULL,  
    valoracionequipo VARCHAR(100) NOT NULL,
    quimicaequipo INT(100) NOT NULL,
    triunfosequipo INT(100) NOT NULL
);

ALTER TABLE estadisticasEquipo
    ADD PRIMARY KEY (id);

CREATE TABLE jugador(
    id INT(11) NOT NULL,
    posicionjugador VARCHAR(4) NOT NULL,
    nombrejugador VARCHAR(100) NOT NULL,
    apellidojugador VARCHAR(100) NOT NULL,
    alturajugador INT(100) NOT NULL, 
    edadjugador  INT(100) NOT NULL 
);

ALTER TABLE jugador
    ADD PRIMARY KEY (id);

CREATE TABLE estadisticas(
    id INT(11) NOT NULL,
    id_jugador VARCHAR (100) NOT NULL,
    id_estadisticas VARCHAR(50) NOT NULL,
    ritmo INT(16) NOT NULL,
    tiro INT(100) NOT NULL, 
    pase INT(100) NOT NULL, 
    agilidad INT(100) NOT NULL, 
    defensa INT(100) NOT NULL, 
    fisico INT(100) NOT NULL     
);  

ALTER TABLE estadisticas
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








    





