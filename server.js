/**
     * Created : VSC
     * @author Valentine Abako. 
     * Date    06-03-2018.
     */
var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});