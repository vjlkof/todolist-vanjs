export function getData() {
  try {
    const projects = JSON.parse(localStorage.getItem("Projects"));
    return projects;
  } catch (error) {
    return undefined;
  }
}

export function saveData(projectList) {
  localStorage.setItem("Projects", JSON.stringify(projectList));
}
