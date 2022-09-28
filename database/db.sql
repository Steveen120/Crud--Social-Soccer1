CREATE DATABASE rol_jugador;

USE rol_jugador;

CREATE TABLE squad(    
    id SERIAL NOT NULL,
    squad VARCHAR(20) NOT NULL,
    boss VARCHAR(20) NOT NULL,
    coach VARCHAR(20) NOT NULL,
    foundation DATE       
);

ALTER TABLE squad
    ADD PRIMARY KEY (id);


CREATE TABLE teamstats(  
    id SERIAL NOT NULL,  
    teamvaluation VARCHAR(100) NOT NULL,
    teamchemistry INT(100) NOT NULL,
    teamwins INT(100) NOT NULL
);

ALTER TABLE teamstats
    ADD PRIMARY KEY (id);

CREATE TABLE player(
    id SERIAL  NOT NULL,
    playerposition VARCHAR(4) NOT NULL,
    playername VARCHAR(100) NOT NULL,
    surnameplayer VARCHAR(100) NOT NULL,
    playerheight INT(100) NOT NULL, 
    playerage  INT(100) NOT NULL 
);

ALTER TABLE player
    ADD PRIMARY KEY (id);

CREATE TABLE statistic(
    id SERIAL NOT NULL,
    id_player INT (100) NOT NULL,
    id_statistic INT (50) NOT NULL,
    swing INT(100) NOT NULL,
    threw INT(100) NOT NULL, 
    happens INT(100) NOT NULL, 
    agility INT(100) NOT NULL, 
    defending INT(100) NOT NULL, 
    physical INT(100) NOT NULL     
);  

ALTER TABLE statistic
    ADD PRIMARY KEY (id);
    

CREATE TABLE links(
    id_team INT(11) NOT NULL,
    teamname VARCHAR(20) NOT NULL,
    team_id_team INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_team FOREIGN KEY (team_id_team) REFERENCES team(id_team)
);

ALTER TABLE links
ADD PRIMARY KEY (id_team);








    





