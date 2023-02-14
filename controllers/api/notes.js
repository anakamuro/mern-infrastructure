const Notes = require('../../models/notes')

async function index(req, res){
    try {
     Notes.find()
     .then((notes)=> {return notes.map((note) => note)})
     .then((notes)=> res.satatus(200).json({notes:notes}))
    } catch (error) {
      res.status(400).json(error)
    }

}

async function create (req, res) {
    try {
        const note = req.body.note
        note.user = req.user._id
        await Notes.create(req.body.note)
            .then((note) => {
                res.status(200).json({note: note})
            })
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    create,
   index
}
