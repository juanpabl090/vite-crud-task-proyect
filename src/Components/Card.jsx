/* eslint-disable react/prop-types */
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { useTasks } from '../context/TasksProvider';

export default function CardComponent({ title, text, id }) {
  const { deleteTask } = useTasks();

  return (
    <Card
      border="primary"
      style={{
        width: '20rem',
        margin: "0.5rem",
      }}
    >
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <ButtonGroup>
          <Button variant="success">Done</Button>
          <Button variant="warning">Edit</Button>
          <Button variant="danger" onClick={() => deleteTask(id)}>Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}
