const kegiatanmodel = require('../model/kegiatan')
const obejectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    // kegiatanmdel.creat fungsi meyimpan kegiatan
    kegiatanmodel.create(data)
    .then (() => resolve({
        status: true,
        pesan: 'berhasil input kegiatan'
    })).catch(() => reject ({
        status: false,
        pesan: 'gagal input kegiatan'
    }))
})

exports.showAllData = () =>
 new Promise(( resolve, reject) => {
     kegiatanmodel.find()
     .then(result => {
         resolve({
             status: true,
             pesan: 'Berhasil Menampilkan Data',
             data: result
         })
     }).catch((err) => {
         console.log(err)
         reject ({
            status: false,
            pesan: 'Gagal Menampilkan Data',
            data: []
        })
     })
 })
exports.showDataById = (Id) =>
new Promise((resolve, reject) => {
    kegiatanmodel.findOne({
        _id : obejectId(Id)
    }).then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            data: result
        })
    }).catch (() => reject ({
        status: false,
        pesan: 'Gagal Menampilkan Data',
        data: null
    }))
})


exports.update = (Id,data) =>
new Promise (( resolve, reject) => {
    console.log(Id)
    try {
        kegiatanmodel.updateOne({
            _id : obejectId(Id)
        }, data).then(() =>{
            resolve({
                status: true,   
                pesan: 'Berhasil Mengubah Data'
            })
        }).catch((err) => {
            console.log(err)
            reject({
                status: false,
                pesan: 'gagal mengubah Data'
            })
        })
    } catch (error) {
        console.log(error)
    }
})


exports.delete = (Id) =>
new Promise((resolve, reject) => {
    kegiatanmodel.deleteOne({
        _id : obejectId(Id)
    }).then(() => resolve ({
        status: true,
        pesan: 'Berhasil menghapus Data'
    })).catch(() => ({
        status: false,
        pesan: 'gagal menghapus data'
    }))
})