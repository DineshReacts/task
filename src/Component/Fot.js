import React from 'react'

const Fot = () => {
    const year=new Date();
  return (
<footer>
    CopyRight &copy; {year.getFullYear()}
</footer>
  )
}

export default Fot