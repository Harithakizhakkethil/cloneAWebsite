import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
 
  return (
   <div>
      <div className='home border-white'>
        <div className='below_nav d-flex align-items-center pt-2 ' >
          <h6><i style={{ paddingRight: '5px', paddingLeft: '10px', fontSize: '20px' }} class="fa-solid fa-bars"></i>All </h6>
  
          
          <h6> Today's Deals</h6>
          <h6>Customer Services</h6>
          <h6>Registry</h6>
          <h6>Gift Cards</h6>
          <h6>Sell</h6>
  
        </div>
  
  
        <Carousel className='carousal'>
          <Carousel.Item>
            <img className='home_image' src="https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg" alt="" />
            <Carousel.Caption style={{ marginBottom: '120px' }}>
              <p style={{ backgroundColor: 'white', color: 'black',padding:'10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
            </Carousel.Caption>
          </Carousel.Item>
  
  
          <Carousel.Item>
            <img className='home_image' src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
            <Carousel.Caption style={{marginBottom: '120px' }}>
              <p style={{ backgroundColor: 'white', color: 'black' ,padding:'10px'}}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
            <img className='home_image' src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" />
            <Carousel.Caption style={{ marginBottom: '120px' }}>
              <p style={{ backgroundColor: 'white', color: 'black',padding:'10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
            <img className='home_image' src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
            <Carousel.Caption style={{ marginBottom: '120px'  }}>
              <p style={{ backgroundColor: 'white', color: 'black',padding:'10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
            <img className='home_image' src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
            <Carousel.Caption style={{marginBottom: '120px' }}>
              <p style={{ backgroundColor: 'white', color: 'black',padding:'10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
            <img className='home_image' src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
            <Carousel.Caption style={{ marginBottom: '120px'  }}>
              <p style={{ backgroundColor: 'white', color: 'black',padding:'10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
            </Carousel.Caption>
          </Carousel.Item>
  
  
  
        </Carousel>
  
  
  
  
      </div>
   </div>
  )
}

export default Home