/* eslint-disable react/prop-types */
import { Card, Button, ButtonGroup } from 'react-bootstrap';

export default function CardComponent({ title, text }) {
  return (
    <Card
      border="primary"
      style={{
        width: '20rem',
        margin: "0.5rem",
      }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <ButtonGroup>
          <Button variant="success">Delete</Button>
          <Button variant="warning">Delete</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}
