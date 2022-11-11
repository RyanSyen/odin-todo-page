import { addTask as addTaskToDom } from "../functions/addTask.js"
import remove from '../functions/removeTask.js';

let taskList = [];
const taskFactory = (title, description) => {



    // save task
    let taskObj = { title, description };
    taskList.push(taskObj);
    let taskListCopy = [...taskList];
    // const saveTask = () => {
    //     // let taskObj = { index, title, description };
    //     let taskObj = {  title, description };
    //     taskList.push(taskObj);
    //     // let taskListCopy = [...taskList];
    //     return taskList;
    // }


    // remove task after complete
    const removeTask = (index) => {
        if (taskList[index] != null) {
            taskList.splice(index, 1);
        }
        // remove in dom
        remove(index);
    }

    // add task
    const addTask = (() => {
        addTaskToDom(title, description);
    });


    return { taskListCopy, addTask, removeTask };


}

export default taskFactory;