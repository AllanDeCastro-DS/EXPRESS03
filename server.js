//criar uma querry(consulta) simples
const ex = require('express');
const mysql = require('mysqI2');

const app = ex();

app.listen(3000, ()=>{
    console.log('servidor em execução');
})                           

//criação da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_db_tasks',
    password:'QLOP4TDcQGB2R97Djet7vxyhggatTSZE4',
    database: 'nodejs_tasks',
})

//testar conexão
connection.connect(error =>{
    if(error){
        console.log('erro na conexão ao mySQL:'+error.message)
        return
    }
    console.log('conexão realizada com sucesso!!')
})