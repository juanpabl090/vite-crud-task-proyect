import { Container, Row } from "react-bootstrap";

import CardComponent from '../Components/Card'

export default function TasksPage() {
  return (
    <Container>
      <Row>
        <CardComponent title="ejemplo" text='ejemplo'/>
      </Row>
    </Container>
  )
}
