
const addProject = (name, color, index) => {
    const projects = document.getElementById('projects');
    const projectTab = document.createElement('div');
    projectTab.setAttribute('class', 'sidebar-flex-component');
    projectTab.setAttribute('data-projectIndex', index);
    projectTab.setAttribute('id', 'projectTab');
    const dotSpan = document.createElement('span');
    dotSpan.setAttribute('id', 'dot');
    dotSpan.style.backgroundColor = color;
    const projectNameSpan = document.createElement('span');
    projectNameSpan.innerText = name;
    // + append dotSpan and projectNameSpan to projectTab
    projectTab.append(dotSpan, projectNameSpan);
    // + append projectTab to projects
    projects.appendChild(projectTab);
}

export { addProject };