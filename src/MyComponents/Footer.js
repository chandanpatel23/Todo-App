import React from 'react'

const Footer = () => {
  
  return (
    <footer className='bg-dark text-light my-2 py-2 text-center' >
      <p>Copyright &copy; MyTodosList.com
      All rights reserved
      Last updated: {new Date().toLocaleDateString()}</p>
      
    </footer>
  )
}

export default Footer
