import React, { Fragment, useEffect, useState } from "react";
import ProjectUpload from "../../components/admin/projects/uploadProject";
import ProjectDetailsUpload from "../../components/admin/projectDetails/uploadProjectDetails";
import bcrypt from "bcryptjs";
import { adminLink } from "../../common/routes";
import { useNavigate } from "react-router-dom";
import { getProjectToEdit } from "../../services/admin";

function AdminProjectsPage() {
  const navigate = useNavigate();
  const originalPassword = "pR0mO+e_@Dm!9";
  const salt = "$2a$09$qa7FJIyK31D8nJjQD4EHpO";
  const projectID = window.location.pathname.split("/")[3];
  const [projectData, setProjectData] = useState();
  const [projectDetailsData, setProjectDetailsData] = useState();

  useEffect(() => {
    const savedPassword = localStorage.getItem("promot");
    let originalHashedPassword = bcrypt.hashSync(originalPassword, salt);
    if (savedPassword !== originalHashedPassword) navigate(adminLink);
    else if (projectID) getProjectData();
  }, []);

  return (
    <Fragment>
      <ProjectUpload editableData={projectData} />
      <ProjectDetailsUpload editableData={projectDetailsData} />
    </Fragment>
  );

  async function getProjectData() {
    await getProjectToEdit(projectID)
      .then((responses) => {
        // console.log(responses);
        if (responses) {
          setProjectData(responses[0].data.data);
          setProjectDetailsData(responses[1].data.data);
        }
      })
      .catch((error) => console.log(error));
  }
}

export default AdminProjectsPage;
