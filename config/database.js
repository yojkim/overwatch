var mysql = require('mysql');
var connection = mysql.createConnection({
	host	: 'overwatch.c57b1kph8gqz.ap-northeast-2.rds.amazonaws.com',
	user 	:  process.env.MYSQL_ID,
	password:  process.env.MYSQL_PASSWORD,
	database: 'overwatch'
});

connection.connect(function(err){
	if(err) {
		console.log("MYSQL Connecting Error" + err.stack);	
		return;
	}
});

module.exports = connection;
