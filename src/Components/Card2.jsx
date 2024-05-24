import React, { useContext } from 'react'

const Card2 = () => {


    const cardstyle ={
        backgroundColor: 'white',
        color: 'rgb(253,128,49)',
        borderRadius: '15px',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        height: '280px',
        width: '430px',
        overflow: 'hidden',
        marginTop:'20px'
    }


  return (
    <div style={cardstyle}>
<div>
    <h2>About Me</h2>
    
           <p style={{color:'grey',fontSize:'20px',paddingLeft:'15px',paddingRight:'15px'}}>
           Welcome to my portfolio, a gateway to a world where technology and creativity converge to form seamless digital experiences. I'm Arshad, a passionate and dedicated full-stack developer, and I'm thrilled to present a showcase of my skills and expertise.
          </p>

</div>
    </div>
  )
}

export default Card2