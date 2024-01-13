import projectModal from "../helpers/projectModal";

export default function deleteProjectButton(project, projectList) {
  const button = document.createElement("button");
  button.textContent = "Delete project";
  button.addEventListener("click", () => {
    const projectManagement = projectModal();
    projectManagement.deleteProject(project, projectList);
  });

  return button;
}
