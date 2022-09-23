const express = require("express");
const router = express.Router();

const pool = require("../database");

//jugador//
router.get("/jugador", (req, res) => {
  res.render("links/jugador");
});

router.post("/jugador", async (req, res) => {
  const {
    posicionjugador,
    id_jugador,
    apellidojugador,
    alturajugador,
    edadjugador,
  } = req.body;
  const newLink = {
    posicionjugador,
    id_jugador,
    apellidojugador,
    alturajugador,
    edadjugador,
  };
  await pool.query(" INSERT INTO jugador set ?", [newLink]);
  res.send("received");
});

//equipo//
router.get("/equipo", (req, res) => {
  res.render("links/equipo");
});

router.post("/equipo", async (req, res) => {
  const { equipo, dueño, entrenador, fecha } = req.body;
  const newLink = {
    equipo,
    dueño,
    entrenador,
    fecha,
  };
  await pool.query(" INSERT INTO equipo set ?", [newLink]);
  res.send("received");
});

//estadisticas//
router.get("/estadisticas", (req, res) => {
  res.render("links/estadisticas");
});

router.post("/estadisticas", async (req, res) => {
  const {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico,
  } = req.body;
  const newLink = {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico,
  };
  await pool.query(" INSERT INTO estadisticas set ?", [newLink]);
  res.send("received");
});

//estadisticasequipo//
router.get("/estadisticasequipo", (req, res) => {
  res.render("links/estadisticasequipo");
});

router.post("/estadisticasequipo", async (req, res) => {
  const { valoracionequipo, quimicaequipo, triunfosequipo } = req.body;
  const newLink = {
    valoracionequipo,
    quimicaequipo,
    triunfosequipo,
  };
  await pool.query(" INSERT INTO estadisticasequipo set ?", [newLink]);
  res.send("received");
});
module.exports = router;
