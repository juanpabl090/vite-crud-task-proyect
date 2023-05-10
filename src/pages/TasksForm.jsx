import { Form, Formik } from "formik"
import { Container, Row, Badge, Form as FormBoostrap, Button } from "react-bootstrap";
import { useTasks } from '../context/TasksProvider';
export default function TasksForm() {

  const { createTask } = useTasks()

  return (
    <Formik
      initialValues={{
        title: "",
        contentText: "",
      }}
      onSubmit={async (values, actions) => {
        createTask(values)
        actions.resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Container className="text-center">
          <Form onSubmit={handleSubmit}>
            <Row>
              <h1><Badge>Title</Badge></h1>
            </Row>
            <Row>
              <FormBoostrap.Control
                type="text" name="title" placeholder="Write a title" onChange={handleChange}
                value={values.title}
              />
            </Row>
            <Row>
              <h4><Badge>Description</Badge></h4>
            </Row>
            <Row>
              <textarea
                name="contentText"
                rows='3'
                placeholder="Write a description"
                onChange={handleChange}
                value={values.contentText}>
              </textarea>
            </Row>
            <Row>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  )
}