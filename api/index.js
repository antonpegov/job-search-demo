const jsonServer = require('json-server');
const jobs = require('./jobs.json');
const categories = require('./categories.json');
const server = jsonServer.create();
const router = jsonServer.router({jobs, categories});
const middlewares = jsonServer.defaults();
const port = 3000;
const delay = 1000; // responce delay in ms

server.use((req, res, next) => setTimeout(next, delay));
server.use((req, res, next) => {
  next();
});
server.use(middlewares);
server.use(router);
// Filter some route's responces
router.render = function (req, res) {
  if (req.path === '/jobs') {
    let data = res.locals.data;
    if (req.query.state) {
      data = Object.assign(
        {},
        data,
        { body: data.body.filter(item => item.state === req.query.state) }
      );
    }
    res.jsonp(data);
  } else {
    res.jsonp(res.locals.data);
  }
}
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}...`)
});

