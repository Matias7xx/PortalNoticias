const mysql = require('mysql')

const connMySQL = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}

module.exports = () => {
    return connMySQL; //Evita que a função de conexão seja executada sempre que o consign executar o autoload
}