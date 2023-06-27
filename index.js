const express = require('express')
const rq = require('./request/request')
const firstday = require('./Firstday/firstdayofweek')
const app = express()
const port = 3000

//Get all lines
app.get('/plano', async (req, res) => {
    let plano = await rq.selectEncomendas();   
    res.send(plano);
})

//Get by id
app.get('/plano/id=:id', async (req, res) => {
  let id = req.params.id
  let plano = await rq.selectEncomendasById(id);   
  res.send(plano);
})

//Get controled lines
app.get('/plano/controlados', async (req, res) => {
  let plano = await rq.selectEncomendascontroled();   
  res.send(plano);
})

//Get not controled lines
app.get('/plano/ncontrolado', async (req, res) => {

  let plano = await rq.selectEncomendasnotcontroled(firstday.formatedDate());   
  res.send(plano);
}) 

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
