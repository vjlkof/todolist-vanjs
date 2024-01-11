import projectModal from "../helpers/projectModal";

export default function addProjectButton(projects) {
  const button = document.createElement("button");
  const dialog = document.getElementById("project-dialog");
  button.textContent = "Add Project";
  button.addEventListener("click", () => {
    dialog.showModal();
    projectModal(projects);
  });

  return button;
}
