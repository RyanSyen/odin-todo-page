const generateProjectModal = () => {
    // - modal background
    const modalBg = document.createElement('div');
    modalBg.setAttribute('class', 'modal-background');
    modalBg.setAttribute('id', 'modalBG');
    // - modal
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'modal');
    // -- modal > header
    const modalHeader = document.createElement('div');
    modalHeader.setAttribute('id', 'modalHeader');
    // --- modal > header > h3
    const modalHeader_h3 = document.createElement('h3');
    modalHeader_h3.innerText = 'Add Project';
    // + append h3 to modal header
    modalHeader.appendChild(modalHeader_h3);
    // -- modal > content
    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modalContent');
    // --- modal > content > projectNameContainer
    const projectNameContainer = document.createElement('div');
    projectNameContainer.setAttribute('id', 'projectNameContainer');
    // ---- modal > content > projectNameContainer > label
    const projectNameLabel = document.createElement('label');
    projectNameLabel.setAttribute('for', 'name');
    projectNameLabel.innerText = 'Name';
    // ---- modal > content > projectNameContainer > input
    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('name', 'projectName');
    projectNameInput.setAttribute('id', 'projectName');
    // + append projectNameLabel and projectNameInput to projectNameContainer
    projectNameContainer.append(projectNameLabel, projectNameInput);
    // --- modal > content > projectColorContainer
    const projectColorContainer = document.createElement('div');
    projectColorContainer.setAttribute('id', 'projectColorContainer');
    // ---- modal > content > projectColorContainer > label
    const projectColorContainerLabel = document.createElement('label');
    projectColorContainerLabel.setAttribute('for', 'color');
    projectColorContainerLabel.innerText = 'Color';
    // ---- modal > content > projectColorContainer > colorPickContainer
    const colorPickContainer = document.createElement('div');
    colorPickContainer.setAttribute('id', 'colorPickContainer');
    // ----- modal > content > projectColorContainer > colorPickContainer > colorPick
    const colorPick = document.createElement('div');
    colorPick.setAttribute('id', 'colorPick');
    // ------ modal > content > projectColorContainer > colorPickContainer > colorPick > input
    const projectColor = document.createElement('input');
    projectColor.setAttribute('type', 'color');
    projectColor.setAttribute('name', 'color');
    projectColor.setAttribute('value', '#1a4eff');
    projectColor.setAttribute('id', 'projectColor');
    // + append projectColor to colorPick
    colorPick.appendChild(projectColor);
    // + append colorPick to colorPickContainer
    colorPickContainer.appendChild(colorPick);
    // + append color and colorPickContainer to projectColorContainer
    projectColorContainer.append(projectColorContainerLabel, colorPickContainer);
    // --- modal > content > btnContainer
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('id', 'btnContainer');
    // ---- modal > content > btnContainer > cancelBtn
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'buttons');
    cancelBtn.setAttribute('id', 'cancelProjectBtn');
    cancelBtn.innerText = 'Cancel';
    // ---- modal > content > btnContainer > addBtn
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'buttons');
    addBtn.setAttribute('id', 'addProjectBtn');
    addBtn.innerText = 'Add';
    // + append cancel and add button to btnContainer
    btnContainer.append(cancelBtn, addBtn);
    // + append projectNameContainer, projectColorContainer, btnContainer to modalContent
    modalContent.append(projectNameContainer, projectColorContainer, btnContainer);
    // + append modalHeader and modalContent to modal
    modal.append(modalHeader, modalContent);
    // + append modalBg and modal to body
    document.body.append(modalBg, modal);
}

export default generateProjectModal;