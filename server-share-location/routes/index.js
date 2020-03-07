var express = require('express');
var router = express.Router();
var fs = require('fs')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.set("Content-Type", "application/json");
  console.log('req', req)
  fs.readFile('locations.json', 'utf8', function(err, data) {
    res.send(`getting locations ${data}`)
  });
});

router.put('/:id', (req,res) => {
  const { id } = req.params;
  console.log('updating locations', id, req.body)
  res.send('ok')
})

router.delete('/:id', (req,res) => {
  console.log('deleting location id', id)
  res.send('too bad')
})


module.exports = router;
