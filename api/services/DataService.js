var express = require('express');

module.exports = {

getBestPerformingStocks: getBestPerformingStocks,
getStocksBySymbol: getStocksBySymbol,
getSymbols: getSymbols,
  
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

