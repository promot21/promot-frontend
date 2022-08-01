import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/promotPage/homepage";
import Promot from "./pages/promotPage/promot";
import About from "./components/about/about";
import {
  aboutLink,
  adminBlogLink,
  adminLink,
  adminProjectLink,
  blogIdLink,
  blogLink,
  contactLink,
  dashboardLink,
  portfolioIdLink,
  portfolioLink,
  serviceLink,
  teamLink,
} from "./common/routes";
import NotFound from "./components/notFound/notFound";
import Team from "./components/team/team";
import Services from "./components/services/services";
import AdminPage from "./pages/admin/admin";
import Contact from "./components/contact/contact";
import AllBlogs from "./components/blogs/all/blogs";
import IndividualBlog from "./components/blogs/individual/blog";
import AllProjects from "./components/portfolios/all/projects";
import ProjectsDetails from "./components/portfolios/individuals/projectsDetails";
import AdminProjectsPage from "./pages/admin/projects";
import AdminBlogPage from "./pages/admin/blogs";
import AdminDashboardPage from "./pages/admin/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Promot />}>
          <Route index element={<Homepage />} />
          <Route path={aboutLink} element={<About />} />
          <Route path={blogLink} element={<AllBlogs />} />
          <Route
            path={`${blogLink}/${blogIdLink}`}
            element={<IndividualBlog />}
          />
          <Route path={portfolioLink} element={<AllProjects />} />
          <Route
            path={`${portfolioLink}/${portfolioIdLink}`}
            element={<ProjectsDetails />}
          />
          <Route path={teamLink} element={<Team />} />
          <Route path={serviceLink} element={<Services />} />
          <Route path={contactLink} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path={adminLink}>
          <Route index element={<AdminPage />} />
          <Route path={dashboardLink} element={<AdminDashboardPage />} />
          <Route path={adminProjectLink} element={<AdminProjectsPage />} />
          <Route
            path={`${adminProjectLink}/${portfolioIdLink}`}
            element={<AdminProjectsPage />}
          />
          <Route path={adminBlogLink} element={<AdminBlogPage />} />
          <Route
            path={`${adminBlogLink}/${blogIdLink}`}
            element={<AdminBlogPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
