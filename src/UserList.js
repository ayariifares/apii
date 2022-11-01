import React from 'react'
import Card from 'react-bootstrap/Card';

function UserList({el}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn0-production-images-kly.akamaized.net/7c4_niEJx-gdMJM1JCNGz3Til4I=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3119543/original/021938300_1588643151-valorant-vanguard-anti-cheat.jph_.jpg"  />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.email}
        </Card.Text>
        {el.username}
        <br/>
        {el.address.street}
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default UserList