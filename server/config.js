//connecting to the database which is created in phpmyadmin, opens when xampp is ran
const config = {
    db: {
        host: 'localhost',
        user: 'phpmyadmin',
        password: 'root',
        database: 'weather'
    }
}



module.exports = config;