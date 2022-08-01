// var baseurl = "http://localhost:3050/api";
var baseurl = "https://backend-promot.herokuapp.com/api";

// image upload
export const imageUploadRoute = `${baseurl}/storage/upload-image`;

// projects
export const getAllProjectsRoute = `${baseurl}/projects/get-all`;
export const saveNewProjectRoute = `${baseurl}/projects/save`;
export const getProjectByIdRoute = `${baseurl}/projects/get-by-id`;

// project details
export const getProjectDetailsRoute = `${baseurl}/project-details/get`;
export const saveProjectDetailsRoute = `${baseurl}/project-details/save`;

// contact
export const saveQueryRoute = `${baseurl}/queries/save`;

// blogs
export const getAllBlogsRoute = `${baseurl}/blogs/get-all`;
export const saveNewBlogRoute = `${baseurl}/blogs/save`;
export const getBlogByIdRoute = `${baseurl}/blogs/get-by-id`;

// blog details
export const getBlogDetailsRoute = `${baseurl}/blog-details/get`;
export const saveBlogDetailsRoute = `${baseurl}/blog-details/save`;
