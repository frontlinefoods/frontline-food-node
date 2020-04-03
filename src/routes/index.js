var router = require('express').Router()

router.get('/', (req, res) => res.send('Yup. This is the server!').status(200))
router.post('/sms', (req, res) => {
    console.log(req.body)
})

module.exports = router