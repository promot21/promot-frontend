import React, { useEffect, useState } from "react";
import AboutSection from "../../components/homepage/aboutSection/about";
import Projects from "../../components/homepage/projectSection/projects";
import { InnerWrapper, OuterWrapper } from "../../components/wrapper/wrapper";
import { getProjects } from "../../services/apiFunctions/projects";

function Homepage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects(0);
  }, []);

  async function getAllProjects(skip) {
    const limit = 0;
    await getProjects(limit, skip)
      .then((response) => {
        if (response.status === 200)
          setProjects([...projects, ...response.data.data]);
      })
      .catch((error) => console.log(error));
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Projects projects={projects} getAllProjects={getAllProjects} />
        <AboutSection />
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default Homepage;
