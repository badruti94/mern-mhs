import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Form = ({ update, setIsTambah, setIsUpdate, id, getData, ...rest }) => {
    const [nim, setNim] = useState('')
    const [nama, setNama] = useState('')
    const [kelas, setKelas] = useState('')
    const [motto, setMotto] = useState('')
    const [foto, setFoto] = useState('')

    const submitHandler = () => {
        const data = new FormData()
        data.append('nim', nim)
        data.append('nama', nama)
        data.append('kelas', kelas)
        data.append('motto', motto)
        data.append('foto', foto)

        if (!update) {
            axios.post(`http://localhost:4000/mhs`, data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(data => {
                    setIsTambah(false)
                    getData()
                })
                .catch(err => { console.log(err); })
        } else {
            axios.put(`http://localhost:4000/mhs/${id}`, data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(data => {
                setIsTambah(false)
                setIsUpdate(false)
                getData()
            }).catch(err => {
                console.log(err);
            })
        }



    }

    useEffect(()=>{
        if(update){
            console.log(id);
            axios.get(`http://localhost:4000/mhs/${id}`)
            .then(data => {
                const mhs = data.data
                console.log(mhs);
                setNim(mhs.nim)
                setNama(mhs.nama)
                setKelas(mhs.kelas)
                setMotto(mhs.motto)
            })
            .catch(err => {
                console.log(err);
            })
        }
    },[])

    return (
        <div>
            <p>{update ? 'update' : 'tmabah'} </p>
            <input type="text" value={nim} onChange={e => { setNim(e.target.value) }} placeholder="Masukan nim" /> <br />
            <input type="text" value={nama} onChange={e => { setNama(e.target.value) }} placeholder="Masukan nama" /> <br />
            <input type="text" value={kelas} onChange={e => { setKelas(e.target.value) }} placeholder="Masukan kelas" /> <br />
            <input type="text" value={motto} onChange={e => { setMotto(e.target.value) }} placeholder="Masukan motto" /> <br />
            <input type="file" onChange={e => { setFoto(e.target.files[0]) }} />
            <br />
            <br />
            <button onClick={submitHandler} >OK</button>

        </div>
    )
}

export default Form
