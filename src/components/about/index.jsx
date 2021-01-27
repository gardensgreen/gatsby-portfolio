import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
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
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Full Stack Developer</SubTitle>

              <span class="devicons devicons-javascript" style={{ marginLeft: "70px", fontSize: "2.5rem", color: "#ffbf00", marginRight: "10px"}}></span>
              <span class="devicons devicons-python" style={{ fontSize: "2.5rem", color: "#0040ff", marginRight: "10px"}}></span>
              <span class="devicons devicons-postgresql" style={{ fontSize: "2.5rem", color: "#bf00ff", marginRight: "10px"}}></span>
              <span class="devicons devicons-react" style={{ fontSize: "2.5rem", color: "#00bfff", marginRight: "10px"}}></span>
              <span class="devicons devicons-git" style={{ fontSize: "2.5rem", color: "#00ff80", marginRight: "10px"}}></span>
              <span class="devicons devicons-docker" style={{ fontSize: "2.5rem", color: "#ff0040", marginRight: "10px"}}></span>
            </div>
            <div>

              <Title>Hello, I’m Daniel.</Title>
              <Text> I'm a Software Engineer and my true passion stems from solving problems by leveraging logic, creativity and research.</Text>

              <Text>  I have a shown history working as a UI Developer in the communication sector, tackling complex business-driven questions. Through my experiences, I acuminated an ability to find holes and access opportunity. I strive to be an inveterate student by dedicating myself to learning new things. I love collaborating with others in an iterative manner to achieve a beautiful product.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
