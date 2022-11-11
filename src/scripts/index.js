import _ from 'lodash';
import style from '../style.css';
import home from '../scripts/generateInterface/home.js';
import head from '../scripts/generateInterface/head.js';
import { generateAddTaskPanel } from '../scripts/functions/addTask.js';
import cancelAddTask from '../scripts/functions/cancelAddTask.js';
import taskFactory from '../scripts/functions/taskFactory.js';
head();
home();

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

    const toggleMenuListner = (() => {
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



    const addTaskListner = (() => {
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

            addTaskBtn.addEventListener('click', (e) => {
                if (textfield_title.value && textarea_description.value) {
                    // addTask(textfield_title.value, textarea_description.value);

                    // factory funcion
                    var task = taskFactory(textfield_title.value, textarea_description.value);

                    // add task
                    task.addTask();

                    // reset input field values
                    textfield_title.value = '';
                    textarea_description.value = '';

                    completeTaskListener(task);
                } else {
                    cancelAddTask();
                }
            })
        });
    })();



    // completeTaskListener();
    // window.addEventListener('click', (e) => {
    //     console.log(e.target.id)
    // })
})();

