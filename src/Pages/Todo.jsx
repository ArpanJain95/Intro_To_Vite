import React from 'react'
import Navbar from '../Components/Navbar'
import MainCont from '../Components/MainCont'

const Todo = () => {
  return (
    <div style={{width: '90%', margin: 'auto', marginBlock: '30px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <Navbar/>
        <MainCont/>
    </div>
  )
}

export default Todo