var express = require('express');
var router = express.Router();
var requestify = require('requestify');

router.get('/:route', function(req, res, next) {

  var routeId = req.params["route"]
  requestify.get(`http://www3.septa.org/beta/TransitView/${routeId}`)
    .then(function(response) {
      let septaResponse = response.getBody();
      res.json(septaResponse["bus"]);
    })
    .fail(function(response){
      let errorCode = response.getCode();
      res.status(errorCode).send();
    });

});

module.exports = router;