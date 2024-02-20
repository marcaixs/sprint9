import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import web1 from "../assets/img/web1.png";
import web2 from "../assets/img/web2.png";
import web3 from "../assets/img/web3.jpg";
import design1 from '../assets/img/design1.png'
import design2 from '../assets/img/design2.png'
import design3 from '../assets/img/design3.png'
import art1 from '../assets/img/art1.jpg'
import art2 from '../assets/img/art2.jpg'
import art3 from '../assets/img/art3.jpg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from './ProjectCard'


export const Projects = () => {
    const webProjects = [
        {
            title: "Digital Onboarding",
            description: "Clean and smooth design",
            imgUrl: web1,
        },
        {
            title: "Star Wars",
            description: "Using the official API",
            imgUrl: web2,
        },
        {
            title: "Budget Calculator",
            description: "",
            imgUrl: web3,
        },
    ]
    const designProjects = [
        {
            title: "Packaging design mockup",
            description: "Design and rebrand",
            imgUrl: design1,
        },
        {
            title: "Noir beer mockup",
            description: "Branding, illustration and design",
            imgUrl: design2,
        },
        {
            title: "Jazz Land Magazine",
            description: "Layout and cover art",
            imgUrl: design3,
        },
    ]
    const artProjects = [
        {
            title: "Animation",
            description: "Concept art for animation and children's illustration",
            imgUrl: art1,
        },
        {
            title: "Landscape",
            description: "Concept art and landscape for videogame and animation",
            imgUrl: art3,
        },
        {
            title: "Character creation",
            description: "Concept art and characters for videogame and animation",
            imgUrl: art2,
        },
    ]
    return(
        <section className="project" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Projects</h2>
                        <p>Here's a sample of my finished projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Illustration</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            webProjects.map((project, index) => {
                                               return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                />                
                                               )                
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <Row>
                                        {
                                            designProjects.map((project, index) => {
                                               return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                />                
                                               )                
                                            })
                                        }
                                    </Row> </Tab.Pane>
                                <Tab.Pane eventKey='third'> 
                                <Row>
                                        {
                                            artProjects.map((project, index) => {
                                               return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                />                
                                               )                
                                            })
                                        }
                                    </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>

                </div>

            </div>
            <img src={colorSharp2} alt="background" className="background-image-right"></img>                                
        </section>
    )
}