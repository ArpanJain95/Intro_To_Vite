import React from 'react'

const Navbar = () => {
  return (
    <>
        <div style={{display: 'flex', backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '10px', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'space-between'}}>
            <h2>ToDo List</h2>
            {/* <form style={{width: '50%'}}>
                <input type="text" placeholder='Search your tasks' style={{width: '70%', height: '30px', boxSizing: 'border-box', borderColor: '#ffffff', paddingInline: '10px', borderRadius: '10px 0px 0px 10px'}}/>
                <button type='submit' style={{width: '28%', height: '35px', boxSizing: 'border-box', border: 'none', borderRadius: '0px 10px 10px 0px'}}>Search</button>
            </form> */}
        </div>
    </>
  )
}

export default Navbar