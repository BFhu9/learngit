function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// const port = normalizePort(process.env.PORT || '3000');

const port = normalizePort(process.env.PORT || '80');

const dz = '47.88.171.215';
module.exports = {
  port,
  dz
};
