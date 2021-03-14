import React from 'react'
import { Item } from '../../atom'

const List = ({getData, mhss, setIsTambah, setIsUpdate, setId, ...rest}) => {

    return (
        <div>
            {
                mhss && mhss.map(mhs => {
                    return (
                        <Item setIsTambah={setIsTambah} setIsUpdate={setIsUpdate} getData={getData} key={mhs._id} setId={setId} {...mhs} />
                    )
                })
            }
            
        </div>
    )
}

export default List
