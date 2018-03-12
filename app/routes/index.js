module.exports = function(app, db) {
  app.get('/events/', (req, res) => {
    let value = db.collection('events').find( {} ).toArray(function (err, data) {
      if (err) {
        res.send(new Error('Error on request'));
      } else {
        res.json(data);
      } 
    });
  });
};