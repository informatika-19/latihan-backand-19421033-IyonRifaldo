const router = require('express').Router()
const kegiatancontroller = require ('../controller/kegiatan')
const { route } = require('./user')

router.post('/insert', (req, res) =>{
    kegiatancontroller.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) =>{
    kegiatancontroller.showAllData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) =>{
    kegiatancontroller.showDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) =>{
    kegiatancontroller.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) =>{
    kegiatancontroller.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


module.exports = router