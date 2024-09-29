import React from 'react'
import Add from '../Components/Add'
import Books from '../Components/Books'
import Header from '../Components/Header'
function Home() {
  return (
    <>
      <Header />
      <div className='container-fluid p-2 text-center' >
        <Add />
        <div className=' d-flex flex-wrap gap-2 border-primary border border-2 border-light  p-md-5 p-5 border shadow'>
          <Books />
        </div>
      </div>
    </>
  )
}

export default Home