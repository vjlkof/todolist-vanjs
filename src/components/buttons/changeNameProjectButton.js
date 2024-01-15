import projectModal from "../../domManagement/projectModal";

export default function changeNameProjectButton(project, projectList) {
  const button = document.createElement("button");
  const dialog = document.getElementById("project-dialog");
  button.textContent = "Change name";

  button.addEventListener("click", () => {
    const projectManagement = projectModal();
    dialog.showModal();
    projectManagement.projectChangeName(project, projectList);
  });

  return button;
}
