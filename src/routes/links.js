const express = require("express");
const router = express.Router();

const pool = require("../database");

//jugador//
router.get("/jugador", (req, res) => {
  res.render("links/jugador");
});

router.post("/jugador", async (req, res) => {
  const {
    Posiciónjugador,
    nombrejugador,
    apellidojugador,
    alturajugador,
    edadjugador,
  } = req.body;
  const newLink = {
    Posiciónjugador,
    nombrejugador,
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
  await pool.query(" INSERT INTO link set ?", [newLink]);
  res.send("received");
});

//estadisticas//
router.get("/estadisticas", (req, res) => {
  res.render("links/estadisticas");
});

router.post("/estadisticas", async (req, res) => {
  const {
    Nombrejugador,
    Estadísticas,
    Ritmo,
    Tiro,
    Pase,
    Agilidad,
    Defensa,
    Físico,
  } = req.body;
  const newLink = {
    Nombrejugador,
    Estadísticas,
    Ritmo,
    Tiro,
    Pase,
    Agilidad,
    Defensa,
    Físico,
  };
  await pool.query(" INSERT INTO link set ?", [newLink]);
  res.send("received");
});

//estadisticasequipo//
router.get("/estadisticasequipo", (req, res) => {
  res.render("links/estadisticasequipo");
});

router.post("/estadisticasequipo", async (req, res) => {
  const { valoracion, quimica, triunfo } = req.body;
  const newLink = {
    valoracion,
    quimica,
    triunfo,
  };
  await pool.query(" INSERT INTO link set ?", [newLink]);
  res.send("received");
});
module.exports = router;
