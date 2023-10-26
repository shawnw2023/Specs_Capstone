const team = require('../models/team')
const chars = require('../models/characters')

module.exports = {
createTeam: async (req, res) => {
    try {
        await team.create(req.body)
        res.status(200).send('success')
    } catch (error) {
        console.error(error)
    }
},

getTeams: async (req, res) => {
    try {
        let teams = await team.findAll({where:{userId: req.params.userId}, include: chars})
        res.status(200).send(teams)
    } catch (error) {
        console.error(error);
    }
},

addCharacter: async (req, res) => {
    try {
        await chars.create(req.body)
        res.status(200).send("success")
    } catch (error) {
        console.error();
    }
}

}