const cancelAddTask = () => {
    // remove add task container
    const addTaskContainerPanel = document.getElementById('addTaskContainerPanel');
    addTaskContainerPanel.style.display = 'none';
    // restore add task btns
    const addTaskBtnDiv = document.getElementById('addTask');
    addTaskBtnDiv.style.display = 'flex ';
}

export default cancelAddTask;