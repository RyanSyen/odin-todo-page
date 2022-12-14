import projectFactory from '../functions/projectFactory.js';

const project = projectFactory();
const projectCategories = project.categories;

let categoriesArr = ['inbox'];
const getCategories = (arr) => {
    categoriesArr = arr;
}

let categoryColor = '';
const getCategoryColor = (color) => {
    categoryColor = color;
}

const generateAddTaskPanel = (generated) => {
    // hide inbox content placeholder first
    const contentPlaceholderImg = document.getElementById('inbox-content-placeholder-img');
    const contentPlaceholderText = document.getElementById('inbox-content-placeholder-text');
    contentPlaceholderImg.style.display = 'none';
    contentPlaceholderText.style.display = 'none';
    // hide add task btn
    const addTaskBtnDiv = document.getElementById('addTask');
    addTaskBtnDiv.style.display = 'none';
    if (generated) {
        const addTaskContainerPanel = document.getElementById('addTaskContainerPanel');
        addTaskContainerPanel.style.display = 'block';
    } else {
        // create add task panel
        const addTaskContainerPanel = document.createElement('div');
        addTaskContainerPanel.setAttribute('id', 'addTaskContainerPanel');
        // add task field
        const addTaskField = document.createElement('div');
        addTaskField.setAttribute('id', 'addTaskField');
        // add textfield in task field
        const textfield_div = document.createElement('div');
        textfield_div.setAttribute('class', 'textfield_div');
        textfield_div.setAttribute('id', 'textfield_title');
        // add input textfield
        const textField = document.createElement('input');
        textField.setAttribute('id', 'textField');
        textField.setAttribute('autocomplete', 'off');
        textField.setAttribute('type', 'textfield');
        textField.setAttribute('placeholder', 'Title: e.g. Renew gym every Apr 1st');
        // append input text field into textfield_div
        textfield_div.appendChild(textField);
        // add textfield in task field
        const textarea_div = document.createElement('div');
        textarea_div.setAttribute('class', 'textfield_div');
        textarea_div.setAttribute('id', 'textarea_desc');
        // add input textarea
        const textarea = document.createElement('input');
        textarea.setAttribute('autocomplete', 'off');
        textarea.setAttribute('name', 'description');
        textarea.setAttribute('id', 'textarea_description');
        textarea.setAttribute('placeholder', 'Description');
        // append input text area into textarea_div
        textarea_div.appendChild(textarea);
        // add category selection
        const category_div = document.createElement('div');
        category_div.setAttribute('class', 'textfield_div');
        category_div.setAttribute('id', 'category');
        // add selection
        const selection = document.createElement('select');
        selection.setAttribute('name', 'categories');
        selection.setAttribute('id', 'categorySelection');
        // add options
        categoriesArr.forEach(element => {
            console.log(element)
            const option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            // append options to selection
            selection.appendChild(option);
        });

        // append selection to category_div
        category_div.appendChild(selection);
        // append both textfield_div, textarea_div and category_div into addtaskfield
        addTaskField.append(textfield_div, textarea_div, category_div);
        // add btn div
        const addFormBtns = document.createElement('div');
        addFormBtns.setAttribute('class', 'addFormBtns');
        // add cancel btn
        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'buttons');
        cancelBtn.setAttribute('id', 'cancelAddTaskBtn');
        cancelBtn.innerText = 'Cancel';
        // add add task btn
        const addtaskBtn = document.createElement('button');
        addtaskBtn.setAttribute('class', 'buttons');
        addtaskBtn.setAttribute('type', 'submit');
        addtaskBtn.setAttribute('id', 'addFormBtns_addBtn');
        addtaskBtn.innerText = 'Add Task';
        // append two buttons to addbtnsdiv
        addFormBtns.append(cancelBtn, addtaskBtn);
        // finally append add task field div and add forms btn div to add task container div
        addTaskContainerPanel.append(addTaskField, addFormBtns);
        // then append add task container to addTaskBtnDiv
        const inboxHeader = document.getElementById('inbox-header');
        inboxHeader.appendChild(addTaskContainerPanel);
    }
}

let taskSize = 0;
const addTask = (title, description, category) => {
    // hide add task container
    const addTaskContainerPanel = document.getElementById('addTaskContainerPanel');
    addTaskContainerPanel.style.display = 'none';
    // restore add task btn
    const addTaskBtnDiv = document.getElementById('addTask');
    addTaskBtnDiv.style.display = 'flex';
    // get tasklist
    const taskList = document.getElementById('taskList');
    // - taskContainer
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'taskContainer');
    taskContainer.setAttribute('id', 'taskContainer');
    taskContainer.setAttribute('data-index', taskSize++);
    // -- taskContainer > task
    const task = document.createElement('div');
    task.setAttribute('class', 'task');
    // --- taskContainer > task > radio button container
    const taskRadBtnContainer = document.createElement('div');
    taskRadBtnContainer.setAttribute('class', 'radioBtnContainer');
    // ---- taskContainer > task > radio button container > radio btn
    const taskRadBtn = document.createElement('input');
    taskRadBtn.setAttribute('class', 'radioBtn');
    taskRadBtn.setAttribute('id', 'radioBtn');
    taskRadBtn.setAttribute('type', 'radio');
    // + append radio btn to radio btn container
    taskRadBtnContainer.appendChild(taskRadBtn);
    // --- taskContainer > task > task content
    const taskContent = document.createElement('div');
    taskContent.setAttribute('class', 'taskContent');
    // ---- taskContainer > task > task content > h4
    const taskContent_H4 = document.createElement('h4');
    taskContent_H4.setAttribute('class', 'taskTitle');
    taskContent_H4.innerText = title;
    // ---- taskContainer > task > task content > p
    const taskContent_p = document.createElement('p');
    taskContent_p.setAttribute('class', 'taskDescription');
    taskContent_p.innerText = description;
    // ---- taskContainer > task > task content > category
    const taskContent_category = document.createElement('p');
    taskContent_category.setAttribute('class', 'taskDescription');
    taskContent_category.setAttribute('id', 'category');
    taskContent_category.innerText = category;
    if (category === 'inbox') {
        taskContent_category.style.color = '#000';
    } else {
        taskContent_category.style.color = categoryColor;
    }

    // + append h4, p and category to task content
    taskContent.append(taskContent_H4, taskContent_p, taskContent_category);
    // + append radio btn container and task content to task
    task.append(taskRadBtnContainer, taskContent);
    // --- taskContainer > task > edit task
    const editTask = document.createElement('div');
    editTask.setAttribute('class', 'editTask');
    // ---- taskContainer > task > edit task > ionicons
    const editTaskBtn = document.createElement('ion-icon');
    editTaskBtn.setAttribute('name', 'create-outline');
    // + append editTaskBtn to edit task
    editTask.appendChild(editTaskBtn);
    // + append task and edit task to task container
    taskContainer.append(task, editTask);
    // + append taskContainer to taskList
    taskList.appendChild(taskContainer);
    //     // + append tasklist to inbox
    // const addTaskElement = document.getElementById('addTask');
    // let parentNode = addTask.parentNode;
    // parentNode.insertBefore(taskList, addTaskElement);
}



const setTaskSize = (size) => {
    taskSize = size;
}

export { generateAddTaskPanel, addTask, taskSize, setTaskSize, getCategories, getCategoryColor };