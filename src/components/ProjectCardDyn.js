import { Col, Row } from "react-bootstrap";

export const ProjectCardDyn = ({ projects }) => {
  return (
    <Row>
      {projects.slice(0, 6).map((project, index) => (
        <Col key={index} size={12} sm={6} md={4}>
          <div className="proj-imgbx">
            <img src={project.imgUrl} alt={project.title} />
            <div className="proj-txtx">
              <h4>{project.title}</h4>
              <span>{project.description}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
