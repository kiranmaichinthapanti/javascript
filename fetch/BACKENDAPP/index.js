const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Bind router db to auth
server.db = router.db;

// Override JWT expiry (default is 1h)
auth.config = {
  secret: "my-super-secret-key",
  expiresIn: "24h"
};

// Mount auth router
server.use(auth);
server.use(router);

// Custom root route
server.get("/", (req, res) => {
  res.json({ message: "Dummy Backend API with Auth running 🚀" });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth running at http://localhost:${PORT}`);
});