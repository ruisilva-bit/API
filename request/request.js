const db = require('../database/connection')

//Select All
async function selectEncomendas(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM plano;');
    return rows;
}

//Select by ID
async function selectEncomendasById(id){
    const conn = await db.connect();
    const [rows] = await conn.query(`SELECT * FROM plano WHERE id = ${id};`);
    return rows;
}

//Select where controled
async function selectEncomendascontroled(){
    const conn = await db.connect();
    const [rows] = await conn.query(`SELECT * FROM plano WHERE controlado = 1;`);
    return rows;
}

//Select where not controled
async function selectEncomendasnotcontroled(day){
    const conn = await db.connect();
    const [rows] = await conn.query(`SELECT * FROM plano WHERE data_saida < date_add('${day}', interval 1 week) AND qnt_control BETWEEN 0 AND qnt AND controlado = 0 order by data_saida asc;`);
    return rows;
}

module.exports = {selectEncomendas, selectEncomendasById, selectEncomendascontroled, selectEncomendasnotcontroled};