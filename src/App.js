import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Form, Header, List } from './components/molecules';

function App() {
  const [isTambah, setIsTambah] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState('')
  const [mhss, setMhss] = useState([])

  const getData = async () => {
    const data = await axios.get('http://localhost:4000/mhs')
    console.log(data);
    setMhss(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div >
      <Header />
      <div className="main-app">
        <button className="btn-tambah" onClick={() => { setIsTambah(true) }} >tambah data</button>
        {isTambah ? <Form
          getData={getData}
          setIsTambah={setIsTambah}
          setIsUpdate={setIsUpdate}
          id={id}
          update={isUpdate}
        /> : null}
        <List
          getData={getData}
          mhss={mhss}
          setIsTambah={setIsTambah}
          setIsUpdate={setIsUpdate}
          setId={setId}
        />
      </div>
    </div>
  )
}

export default App;
