var express = require('express');

module.exports = {
  getBestPerformingStocks: getBestPerformingStocks,
  getStocksBySymbol: getStocksBySymbol,
  getSymbols: getSymbols,
  createStream: createStream,
  fetchStreams: fetchStreams,
  fetchStreamById: fetchStreamById, 
};

function getBestPerformingStocks(options, callback) {
	var limit =  options.limit || 10;
	var query = `SELECT * from data order by volume desc limit $1`;
	//var query = `select * from data where date > $1 limit 100`;
	RawPsqlService.queryOnM1(query , [limit] , function(err, results){
   callback(err, results);
 });
}

function getStocksBySymbol(options, callback) {

	var limit =  options.limit || 10;
	var query = `SELECT * from data where symbol= $1  limit $2`;
	RawPsqlService.queryOnM1(query , [options.symbol,limit] , function(err, results){
   callback(err, results);
 });
}

function getSymbols(options, callback) {
	var query = `SELECT distinct(symbol) from data `;
	RawPsqlService.queryOnM1(query , [] , function(err, results){
   callback(err, results);
 });
}

function createStream(options, callback) {
  console.log(options)
  var title = options.title;
  var userId = options.userId;
  var description = options.description;
  if(options.id){
    var query = `UPDATE  stream set title = $1, description = $2 ,"updatedAt"=now() WHERE id=${options.id}`
    RawPsqlService.queryOnM1(query , [title, description,] , function(err, results){
      callback(err, {status: "success"});
    });
  }
  else{
    var query = `INSERT INTO stream("title", "description","userId", "createdAt", "updatedAt") VALUES($1, $2, $3, now(), now())`;
    RawPsqlService.queryOnM1(query , [title, description, userId] , function(err, results){
      callback(err, {status: "success"});
    });
  }
  

}

function fetchStreams(options, callback) {
  var query = `SELECT * from stream`;
  RawPsqlService.queryOnM1(query , [] , function(err, results){
    callback(err, results);
  });
}

function fetchStreamById(options, callback) {
  var query = `SELECT * FROM stream WHERE id=$1`;
  RawPsqlService.queryOnM1(query , [options.id] , function(err, results){
    callback(err, results);
  });
}
