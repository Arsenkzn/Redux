import { Formik } from "formik";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { memo } from "react";
import { FilterFormProps } from "src/types/common";

export const FilterForm = memo<FilterFormProps>(
  ({ onSubmit, initialValues = {}, groupContactsList }) => {
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleSubmit}>
            <Row xxl={4} className="g-4">
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    id={"name"}
                    name={"name"}
                    onChange={handleChange}
                    placeholder="name"
                    aria-label="name"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Select
                  id={"groupId"}
                  name={"groupId"}
                  aria-label="Поиск по группе"
                  onChange={handleChange}
                >
                  <option>Все группы</option>
                  {groupContactsList.map((group) => (
                    <option value={group.id} key={group.id}>
                      {group.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Button variant={"primary"} type={"submit"}>
                  Применить
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
);
