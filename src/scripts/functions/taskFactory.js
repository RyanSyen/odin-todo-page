let taskList = [];
const taskFactory = (index, title, description) => {

    // determine if task is due today

    // mark task as complete

    // save task
    let taskObj = { index, title, description };
    taskList.push(taskObj);
    console.log(taskList)
    return taskList;
}

export default taskFactory;