import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "code.gif" }) {
        childImageSharp {
          fluid(maxWidth: 550, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>



              <Avatar src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif" alt="user photo" />

              <div style={{textAlign: "center"}}>
                <SubTitle>Full Stack Developer</SubTitle>
                <span className="devicons devicons-javascript" style={{ fontSize: "2.5rem", color: "#ffbf00", marginRight: "10px"}}></span>
                <span className="devicons devicons-python" style={{ fontSize: "2.5rem", color: "#0040ff", marginRight: "10px"}}></span>
                <span className="devicons devicons-postgresql" style={{ fontSize: "2.5rem", color: "#bf00ff", marginRight: "10px"}}></span>
                <span className="devicons devicons-react" style={{ fontSize: "2.5rem", color: "#00bfff", marginRight: "10px"}}></span>
                <span className="devicons devicons-git" style={{ fontSize: "2.5rem", color: "#00ff80", marginRight: "10px"}}></span>
                <span className="devicons devicons-docker" style={{ fontSize: "2.5rem", color: "#ff0040", marginRight: "10px"}}></span>
              </div>
            </div>
            <div>

              <Title>Hello, I’m Daniel.</Title>
              <Text> I'm a Software Developer with an aptitude for problem solving and learning. I've taken advantage of opportunities in my professional experience to deepen my knowledge and understanding of full stack development, UI/UX, and cloud infrastructure. I derive a sense of fulfillment from leveraging my experience, resourcefulness, and multicultural upbringing to drive impact. My aim is to actively contribute unique perspectives within a growing team that is united in working towards driving positive change through creativity.</Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
