import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
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
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Full Stack Developer</SubTitle>
              <div style={{textAlign: "center"}}>
                <span class="devicons devicons-javascript" style={{ fontSize: "2.5rem", color: "#ffbf00", marginRight: "10px"}}></span>
                <span class="devicons devicons-python" style={{ fontSize: "2.5rem", color: "#0040ff", marginRight: "10px"}}></span>
                <span class="devicons devicons-postgresql" style={{ fontSize: "2.5rem", color: "#bf00ff", marginRight: "10px"}}></span>
                <span class="devicons devicons-react" style={{ fontSize: "2.5rem", color: "#00bfff", marginRight: "10px"}}></span>
                <span class="devicons devicons-git" style={{ fontSize: "2.5rem", color: "#00ff80", marginRight: "10px"}}></span>
                <span class="devicons devicons-docker" style={{ fontSize: "2.5rem", color: "#ff0040", marginRight: "10px"}}></span>
              </div>
            </div>
            <div>

              <Title>Hello, I’m Daniel.</Title>
              <Text> I'm a Software Developer with an aptitude for problem solving and learning. Throughout my unique experiences in Software Development I have acquired a knack for UI/UX, fullstack development, and cloud infrastructure. My mission is to use all the tools I have at my disposal, my experiences and my multicultural background to have a global impact on productivity and efficiency. I am looking for a role in a growing company working towards creating ground breaking products that can impact the world in a positive way.</Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
