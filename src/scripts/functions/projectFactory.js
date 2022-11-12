import { addProject as addProjectTaskToDOM } from '../functions/addProject.js';
import { getCategories, getCategoryColor } from '../functions/addTask.js';

let projectList = [];
const projectFactory = (name, color) => {

    const modalBG = document.getElementById('modalBG');
    const modal = document.getElementById('modal');

    let categories = ['inbox'];

    // save task 
    let projectObj = { name, color };
    projectList.push(projectObj);
    let projectListCopy = [...projectList];

    // update length of project for data-projectIndex
    let projectListLength = projectListCopy.length;

    // create project
    const createProject = () => {
        modalBG.classList.add('openModalBackground');
        modal.classList.add('openModal');
    }

    // add project
    const addProject = () => {
        addProjectTaskToDOM(name, color, projectListLength);
        // update list of categories
        categories.push(name);
        getCategories(categories);
        getCategoryColor(color);
    };

    // close modal
    const removeProject = () => {
        modalBG.classList.remove('openModalBackground');
        modal.classList.remove('openModal');
    }

    return { projectListLength, addProject, createProject, removeProject, categories }
}

export default projectFactory;