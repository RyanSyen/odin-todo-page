import _ from 'lodash';
import style from '../style.css';
import home from '../scripts/generateInterface/home.js';
import head from '../scripts/generateInterface/head.js';
import { generateAddTaskPanel } from '../scripts/functions/addTask.js';
import cancelAddTask from '../scripts/functions/cancelAddTask.js';
import taskFactory from '../scripts/functions/taskFactory.js';
import generateProjectModal from '../scripts/generateInterface/projectModal.js'
import projectFactory from '../scripts/functions/projectFactory.js';

head();
home();
generateProjectModal();

const completeTaskListener = (task) => {
    // listen for complete btn
    const radioBtn = document.querySelectorAll('input[type="radio"]');
    console.log(radioBtn);
    Object.values(radioBtn).forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let index = e.target.parentElement.parentElement.parentElement.getAttribute('data-index');
            // console.log(index + 1)
            task.removeTask(index);
        })
    })
};

const listeners = (() => {
    const toggleMenuBtn = document.getElementById('toggleMenu');
    const sideMenu = document.getElementById('sidebar');
    const main = document.getElementsByTagName('main');
    const addTaskBtn = document.getElementById('addTask');

    const toggleMenuListener = (() => {
        toggleMenuBtn.addEventListener('click', (e) => {
            let sidebarStatus = e.target.getAttribute('data-toggleStatus');
            if (sidebarStatus === 'show') {
                // move side bar
                sideMenu.style.transform = "translateX(-300px)";
                // move main
                main[0].style.marginLeft = '0';
                e.target.setAttribute('data-toggleStatus', 'hide');
            } else {
                // move side bar
                sideMenu.style.transform = "translateX(0px)";
                // move main
                main[0].style.marginLeft = '300px';
                e.target.setAttribute('data-toggleStatus', 'show');
            }
        })
    })();

    const addTaskListener = (() => {
        addTaskBtn.addEventListener('click', () => {
            // console.log('clicked add task btn')
            let generated = false;
            const addTaskContainerPanel = document.getElementById('addTaskContainerPanel');
            if (addTaskContainerPanel != null) {
                // console.log('add task is created')
                generated = true;
            } else {
                // console.log('add task is not created')
                generated = false;
            }
            generateAddTaskPanel(generated);

            // when user clicks the cancel btn
            const cancelBtn = document.getElementById('cancelAddTaskBtn');
            cancelBtn.addEventListener('click', cancelAddTask, true);

            // when user clicks the add task btn
            const addTaskBtn = document.getElementById('addFormBtns_addBtn');
            const textfield_title = document.getElementById('textField');
            const textarea_description = document.getElementById('textarea_description');
            const categorySelection = document.getElementById('categorySelection');
            const category = document.getElementById('category');

            addTaskBtn.addEventListener('click', (e) => {
                if (textfield_title.value && textarea_description.value) {
                    // addTask(textfield_title.value, textarea_description.value);

                    // factory funcion
                    var task = taskFactory(textfield_title.value, textarea_description.value, categorySelection.value);

                    // add task
                    task.addTask();

                    // reset input field values
                    textfield_title.value = '';
                    textarea_description.value = '';
                    categorySelection.value = 'inbox';
                    category.style.color = '#000';
                    completeTaskListener(task);
                } else {
                    cancelAddTask();
                }
            })
        });
    });
    addTaskListener();



    const addProject = document.getElementById('addProject');

    const addProjectListener = (() => {
        const project = projectFactory();
        addProject.addEventListener('click', () => {
            project.createProject();

        });

        const colorPickContainer = document.getElementById('colorPickContainer');
        const projectColor = document.getElementById('projectColor');
        colorPickContainer.addEventListener('click', () => {
            projectColor.click();
        })

        const addProjectBtn = document.getElementById('addProjectBtn');
        addProjectBtn.addEventListener('click', () => {
            const projectName = document.getElementById('projectName');
            const projectColor = document.getElementById('projectColor');
            console.log(projectName.value + projectColor.value);
            let project = projectFactory(projectName.value, projectColor.value);
            project.addProject();
            // reset input field values
            projectName.value = '';
            projectColor.value = '#1a4eff';
            // close modal
            project.removeProject();
            addTaskListener();
        })

        // const cancelProjectListener = (() => {
        const cancelProject = document.getElementById('cancelProjectBtn');
        cancelProject.addEventListener('click', () => {
            project.removeProject();
        })
        // })();
    })();



})();

