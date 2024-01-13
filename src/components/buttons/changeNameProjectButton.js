import projectModal from "../../helpers/projectModal";

export default function changeNameProjectButton(project) {
  const button = document.createElement("button");
  const dialog = document.getElementById("project-dialog");
  button.textContent = "Change name";

  button.addEventListener("click", () => {
    const projectManagement = projectModal();
    dialog.showModal();
    projectManagement.projectChangeName(project);
  });

  return button;
}
