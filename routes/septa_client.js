var express = require('express');
var router = express.Router();
var requestify = require('requestify');

router.get('/:route', function(req, res, next) {

  var routeId = req.params["route"]
  requestify.get(`http://www3.septa.org/beta/TransitView/${routeId}`).then(function(response) {
    let septaResponse = response.getBody();
    res.json(septaResponse["bus"]);
  });

});

module.exports = router;