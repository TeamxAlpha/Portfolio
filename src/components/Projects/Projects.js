import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Train&Gain"
              description="AI-powered fitness mobile application built with React Native, incorporating TensorFlow.js and MediaPipe for real-time human pose detection during workouts. The app provides users with personalized exercise plans, posture correction feedback, and progress tracking to enhance accuracy, safety, and overall training effectiveness."
              ghLink="https://github.com/TeamxAlpha/TrainnGain--AI-based-Fitness-Mobile-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie Recommender System"
              description="A movie recommendation system that provides personalized movie suggestions based on user preferences and viewing history. The system utilizes collaborative filtering and content-based filtering techniques to analyze user behavior and movie attributes, delivering accurate and relevant recommendations to enhance the user experience."
              ghLink="https://github.com/TeamxAlpha/Movie-Recommended-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Budget Tracker App"
              description=" A budget tracker app built using React.js for the frontend and MongoDB for the backend. The app allows users to track their income and expenses, categorize transactions, and visualize their financial data through charts and graphs. It provides a user-friendly interface for managing personal finances effectively."
              ghLink="https://github.com/TeamxAlpha/budgettracker-Reactjs-Mongodb"
              demoLink="https://budgettracker-inky.vercel.app/"
            /> 
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Booking System"
              description="A web-based booking system designed to streamline reservations and scheduling for various services. Built with React.js and Node.js, it allows users to view available slots, make bookings, and receive confirmation notifications. Administrators can manage bookings, update availability, and monitor user activity through an intuitive dashboard."
              ghLink="https://github.com/TeamxAlpha/bookingsystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Skin Detection and Product Recommendation"
              description="A web application that analyzes user-uploaded skin images to detect skin types and conditions using deep learning models. Based on the analysis, it recommends personalized skincare products tailored to the user's unique skin profile. Built with React.js for the frontend and a Python-based backend for image processing and recommendation logic."
              ghLink="https://github.com/TeamxAlpha/Aesthetic-Skin-backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
