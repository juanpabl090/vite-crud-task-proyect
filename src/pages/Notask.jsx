import { Container, Image } from 'react-bootstrap';

export default function Notask() {
  return (
    <Container className='text-center'>
      <h1>No Task Yet</h1>
      <Image src='../../public/Add-task.svg' />
    </Container>
  )
}
