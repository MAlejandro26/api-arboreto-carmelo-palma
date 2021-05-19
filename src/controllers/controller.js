const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString =  'postgres://cjknzyrddmmgsh:91bcddad3a3d589d89b68fc8f5efb8156df8e9ff3b3781b38f5a8e4febcadd47@ec2-54-166-167-192.compute-1.amazonaws.com:5432/deb5osfv9eu6ll';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido'
    })
}

const getArbol = async (req, res) => {
    const response = await pool.query('Select * from ARBOL;');
    res.status(200).json(response.rows);
};

const getServicio = async (req, res) => {
    const response = await pool.query('SELECT * FROM SERVICIO;');
    res.status(200).json(response.rows);
}

const getProducto = async (req, res) => {
    const response = await pool.query('SELECT * FROM PRODUCTO;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome,
    getArbol,
    getServicio,
    getProducto
};