import projectItem from "../components/projectList/projectItem/projectItem";

export default function projectsDom() {
  const addProjectDom = (item) => {
    const projectContainer = document.getElementById("project-list");
    projectContainer.appendChild(projectItem(item));
  };
  return { addProjectDom };
}
