export default {
    app:{
        port:process.env.PORT || 5000
    },
    mysql:{
        user:process.env.MYSQL_USER || 'root',
        password:process.env.MYSQL_PASSWORD || 1134,
        localhost:process.env.MYSQL_LOCALHOST || 'localhost',
        database:process.env.MYSQL_DATABASE || 'biblioteca'
    }
}