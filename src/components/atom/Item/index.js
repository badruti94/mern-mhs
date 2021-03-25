import React from 'react'
import pp from './menhera.jpg'
import './item.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';

const Item = ({setIsTambah, setIsUpdate, getData, setId, ...mhs }) => {
    const hapusHandler = () => {
        confirmAlert({
            title: 'Hapus Data ',
            message: 'Apa anda yakin ingin menghapus data ini?',
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => {
                        axios.delete(`https://mern-mhs-api-badruti94.vercel.app/mhs/${mhs._id}`)
                        .then(data=>{
                            getData()
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                },
                {
                    label: 'Tidak',
                    onClick: () => {}
                }
            ]
        });
    }
    const ubahHandler = () => {
        setId(mhs._id)
        setIsTambah(true)
        setIsUpdate(true)
    }

    return (
        <div className="item-wrapper" >
            <div className="img-wrapper" >
                <img className="img" src={`https://mern-mhs-api-badruti94.vercel.app/public/assets/images/${mhs.foto}`} alt="pp" />
            </div>
            <div className="info-wrapper" >
                <div>
                    {`${mhs.nim} ${mhs.nama} ${mhs.kelas}`}
                </div>
                <div>
                    {mhs.motto}
                </div>
            </div>
            <div className="button-wrapper" >
                <button className="btn-ubah" onClick={ubahHandler}  >ubah</button>
                <button className="btn-hapus" onClick={hapusHandler} >hapus</button>
            </div>
        </div>
    )
}

export default Item