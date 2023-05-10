import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardComponent from '../Components/Card'
import { useTasks } from '../context/TasksProvider';

export default function TasksPage() {
  const { tasks, loadTask } = useTasks()

  useEffect(() => {
    loadTask();
  }, [loadTask]);

  function renderMain() {
    if (tasks.length === 0) return <h1 className='text-center'>No tasks yet</h1>
    return tasks.map(tasks => (<CardComponent key={tasks.id} id={tasks.id} title={tasks.title} text={tasks.contentText} />))
  }

  return (
    <Container fluid>
      <Row>
        {renderMain()}
      </Row>
    </Container>
  )
}