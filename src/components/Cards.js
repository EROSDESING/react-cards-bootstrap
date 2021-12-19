import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: 'Eros web',
    image: image1,
  },
  {
    id: 2,
    title: 'Eros web2',
    image: image2,
  },
  {
    id: 3,
    title: 'Eros web3',
    image: image3,
  },
]
const Cards = () => {
  return (
    <div className="container d-flex justify-content-center h-100  align-items-center  ">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <Card title={card.title} image={card.image}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
