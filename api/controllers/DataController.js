/**
 * DataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


 module.exports = {


  getBestPerformingStocks: function(req, res) {
   
    DataService.getBestPerformingStocks(req.allParams(), function(err, result) {
      if(err) { return res.serverError(err); }
      return res.ok(result);
    });
  },

  getStocksBySymbol: function(req, res) {
   
    DataService.getStocksBySymbol(req.allParams(), function(err, result) {
      if(err) { return res.serverError(err); }
      return res.ok(result);
    });
  },

  getSymbols: function(req, res) {
    
    DataService.getSymbols(req.allParams(), function(err, result) {
      if(err) { return res.serverError(err); }
      return res.ok(result);
    });
  },

  createStream: function(req, res) {
    
    DataService.createStream(req.allParams(), function(err, result) {
      if(err) { return res.serverError(err); }
      return res.ok(result);
    });
  },

  fetchStreams: function(req, res) {
    
    DataService.fetchStreams(req.allParams(), function(err, result) {
      if(err) { return res.serverError(err); }
      return res.ok(result);
    });
  },

  fetchStreamById: function(req, res) {
    
    DataService.fetchStreamById(req.allParams(), function(err, result) {
      if(err) { return res.serverError(err); }
      return res.ok(result);
    });
  },

};

