const express = require("express");
const ViteExpress = require("vite-express");
const db = require('./util/database')
const app = express();
const User = require('./models/user')
const Characters = require('./models/characters')
const Team = require('./models/team')
const { register, login } = require('./controllers/authCtrl')
const { createTeam, getTeams, addCharacter } = require('./controllers/teamCtrl')

app.use(express.json());

User.hasMany(Team)

Team.belongsTo(User)
Team.hasMany(Characters)

Characters.belongsTo(Team)

app.post('/api/register', register)
app.post('/api/login', login)
app.post('/api/teams', createTeam)
app.get('/api/teams/:userId', getTeams )
app.post('/api/addCharacter', addCharacter)

db.sync()
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
