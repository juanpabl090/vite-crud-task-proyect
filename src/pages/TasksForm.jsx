import { Form, Formik } from "formik"
import { Container, Row, Badge, Form as FormBoostrap, Button } from "react-bootstrap";
import { useTasks } from '../context/TasksProvider';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/toggleSwitches.css';

export default function TasksForm() {

  const { createTask, getTask, updateTask } = useTasks();

  const [task, setTask] = useState({
    id: "",
    title: "",
    contentText: "",
    done: "",
  })

  const params = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const newstr = params.id.slice(1);
        const newsParams = parseInt(newstr);
        const task = await getTask(newsParams);
        setTask({
          id: task.id,
          title: task.title,
          contentText: task.contentText,
          done: task.done,
        })
      }
    };
    loadTask();
  }, [getTask, params.id]);

  const handleCheckboxChange = () => {
    const myCheckbox = document.getElementById('done')
    myCheckbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        params.done = true;
      } else {
        params.done = false;
      }
    })
  }

  return (
    <div>
      <h1 className="text-center">{params.id ? 'Edit Task' : 'Create Task'}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            updateTask(values)
          } else {
            createTask(values);
          }
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
              {
                params.id ? <Row>
                  <h4><Badge>Done</Badge></h4>
                </Row> : ''
              }
              {
                params.id ? <label className="switch">
                  <input type="checkbox" id="done" onClick={handleCheckboxChange} />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label> : ''
              }
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
    </div>
  )
}