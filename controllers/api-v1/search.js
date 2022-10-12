

const router = require('express').Router()
const db = require('../../models')

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
// GET /posts - test endpoint
router.get('/:username', async (req, res) => {
    const regex = new RegExp(escapeRegex(req.params.username), 'gi');
    const users = await db.User.find({username: regex})
    res.json(users)
})

module.exports = router