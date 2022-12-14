//connecting to the database which is created in phpmyadmin, opens when xampp is ran
const config = {
    db: {
        host: 'localhost:3306',
        user: 'phpmyadmin',
        password: 'root',
        database: 'phpmyadmin'
    }
}



module.exports = config;