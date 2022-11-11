import { taskSize, setTaskSize } from '../functions/addTask.js'

const remove = (index) => {
    // remove dom
    const task = document.querySelector('[data-index="' + index + '"]');
    if (task) {
        task.remove();
    }
}

export default remove;