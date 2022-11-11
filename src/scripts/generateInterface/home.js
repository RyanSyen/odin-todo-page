import relaxImg from '../../images/relax.svg';

const home = () => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    // - side bar 
    const sideBarSection = document.createElement('section');
    sideBarSection.setAttribute('id', 'sidebar');
    // -- side bar > toggle show/hide side bar
    const sideBarSection_header = document.createElement('div');
    sideBarSection_header.setAttribute('class', 'sidebar-btn', 'flexCenter');
    sideBarSection_header.setAttribute('id', 'sidebar-header');
    // --- side bar > toggle show/hide side bar > h2
    const sideBarSection_header_h2 = document.createElement('h2');
    sideBarSection_header_h2.innerText = 'TODO LIST';
    // + append h2 to toggle show/hide side bar
    sideBarSection_header.appendChild(sideBarSection_header_h2);
    // -- side bar > inbox
    const sideBarSection_inbox = document.createElement('div');
    sideBarSection_inbox.setAttribute('class', 'sidebar-flex-component active');
    sideBarSection_inbox.setAttribute('id', 'inbox-tab');
    // --- side bar > inbox > ion-icons
    const sideBarSection_inbox_ionicons = document.createElement('ion-icon');
    sideBarSection_inbox_ionicons.setAttribute('name', 'albums-outline');
    // --- side bar > inbox > span (inbox)
    const sideBarSection_inbox_span = document.createElement('span');
    sideBarSection_inbox_span.innerText = 'Inbox';
    // + append ionicons and span to inbox div
    sideBarSection_inbox.append(sideBarSection_inbox_ionicons, sideBarSection_inbox_span);
    // -- side bar > today
    const sideBarSection_today = document.createElement('div');
    sideBarSection_today.setAttribute('class', 'sidebar-flex-component');
    sideBarSection_today.setAttribute('id', 'today-tab');
    // --- side bar > today > ion-icons
    const sideBarSection_today_ionicons = document.createElement('ion-icon');
    sideBarSection_today_ionicons.setAttribute('name', 'calendar-number-outline');
    // --- side bar > inbox > span (today)
    const sideBarSection_today_span = document.createElement('span');
    sideBarSection_today_span.innerText = 'Today';
    // + append ionicons and span to today div
    sideBarSection_today.append(sideBarSection_today_ionicons, sideBarSection_today_span);
    // -- side bar > upcoming
    const sideBarSection_upcoming = document.createElement('div');
    sideBarSection_upcoming.setAttribute('class', 'sidebar-flex-component');
    sideBarSection_upcoming.setAttribute('id', 'upcoming-tab');
    // --- side bar > upcoming > ion-icons
    const sideBarSection_upcoming_ionicons = document.createElement('ion-icon');
    sideBarSection_upcoming_ionicons.setAttribute('name', 'calendar-outline');
    // --- side bar > upcoming > span (upcoming)
    const sideBarSection_upcoming_span = document.createElement('span');
    sideBarSection_upcoming_span.innerText = 'Upcoming';
    // + append ionicons and span to upcoming div
    sideBarSection_upcoming.append(sideBarSection_upcoming_ionicons, sideBarSection_upcoming_span);
    // -- side bar > project
    const sideBarSection_project = document.createElement('div');
    // --- side bar > project > project-header
    const sideBarSection_project_header = document.createElement('div');
    sideBarSection_project_header.setAttribute('id', 'project-header');
    // ---- side bar > project > project-header > h2
    const sideBarSection_project_header_h2 = document.createElement('h2');
    sideBarSection_project_header_h2.innerText = 'Projects';
    // ---- side bar > project > project-header > ion-icons
    const sideBarSection__project_header_ionicons = document.createElement('ion-icon');
    sideBarSection__project_header_ionicons.setAttribute('name', 'add-outline');
    sideBarSection__project_header_ionicons.setAttribute('id', 'addProject');
    // + append h2 and ion-icons to project-header
    sideBarSection_project_header.append(sideBarSection_project_header_h2, sideBarSection__project_header_ionicons);
    // --- side bar > project > project-list
    const sideBarSection_project_projectList = document.createElement('div');
    sideBarSection_project_projectList.setAttribute('id', 'projects');
    // + append project header and project list to project
    sideBarSection_project.append(sideBarSection_project_header, sideBarSection_project_projectList);
    // + append toogle side bar btn, inbox, today, upcoming, project to sidebar
    sideBarSection.append(sideBarSection_header, sideBarSection_inbox, sideBarSection_today, sideBarSection_upcoming, sideBarSection_project);
    // - main 
    const main = document.createElement('main');
    // -- main > inbox
    const main_inbox = document.createElement('div');
    main_inbox.setAttribute('id', 'inbox');
    // --- main > inbox > inbox-header
    const main_inbox_header = document.createElement('div');
    main_inbox_header.setAttribute('id', 'inbox-header');
    // ---- main > inbox > inbox-header > ion-icon
    const main_inbox_header_ionicons = document.createElement('ion-icon');
    main_inbox_header_ionicons.setAttribute('class', 'specialBtn');
    main_inbox_header_ionicons.setAttribute('data-toggleStatus', 'show');
    main_inbox_header_ionicons.setAttribute('id', 'toggleMenu');
    main_inbox_header_ionicons.setAttribute('name', 'menu-outline');
    // ---- main > inbox > inbox-header > h3
    const main_inbox_header_h3 = document.createElement('h3');
    main_inbox_header_h3.innerText = 'Inbox';
    // ---- main > inbox > inbox-header > tasklist
    const main_inbox_header_taskList = document.createElement('div');
    main_inbox_header_taskList.setAttribute('id', 'taskList');
    // ---- main > inbox > inbox-header > add-task
    const main_inbox_header_addTask = document.createElement('div');
    main_inbox_header_addTask.setAttribute('id', 'addTask');
    // ----- main > inbox > inbox-header > add-task > container
    const main_inbox_header_addTask_container = document.createElement('div');
    main_inbox_header_addTask_container.setAttribute('id', 'addTaskContainer');
    // ------ main > inbox > inbox-header > add-task > container > ion-icon
    const main_inbox_header_addTask_container_ionicons = document.createElement('ion-icon');
    main_inbox_header_addTask_container_ionicons.setAttribute('name', 'add-outline');
    // ------ main > inbox > inbox-header > add-task > container > span
    const main_inbox_header_addTask_container_span = document.createElement('span');
    main_inbox_header_addTask_container_span.innerText = 'Add Task';
    // + append ionicons and span to add-task-container
    main_inbox_header_addTask_container.append(main_inbox_header_addTask_container_ionicons, main_inbox_header_addTask_container_span);
    // + append add-task-container to add-task
    main_inbox_header_addTask.appendChild(main_inbox_header_addTask_container);
    // + append ionicons, h3, tasklist, add-task to inbox-header
    main_inbox_header.append(main_inbox_header_ionicons, main_inbox_header_h3, main_inbox_header_taskList, main_inbox_header_addTask);
    // --- main > inbox > inbox-content
    const main_inbox_content = document.createElement('div');
    main_inbox_content.setAttribute('id', 'inbox-content');
    // ---- main > inbox > inbox-content > placeholderImg
    const main_inbox_content_placeholderImg = document.createElement('div');
    main_inbox_content_placeholderImg.setAttribute('id', 'inbox-content-placeholder-img');
    // ----- main > inbox > inbox-content > placeholderImg > img
    const main_inbox_content_placeholderImg_img = document.createElement('img');
    main_inbox_content_placeholderImg_img.setAttribute('src', relaxImg);
    main_inbox_content_placeholderImg_img.setAttribute('alt', 'relax');
    // + append img to placeholder
    main_inbox_content_placeholderImg.appendChild(main_inbox_content_placeholderImg_img);
    // ---- main > inbox > inbox-content > placeholderText
    const main_inbox_content_placeholderText = document.createElement('div');
    main_inbox_content_placeholderText.setAttribute('id', 'inbox-content-placeholder-text');
    // ----- main > inbox > inbox-content > placeholderText > p1
    const main_inbox_content_placeholderText_p1 = document.createElement('p');
    main_inbox_content_placeholderText_p1.innerText = 'All clear';
    // ----- main > inbox > inbox-content > placeholderText > p2
    const main_inbox_content_placeholderText_p2 = document.createElement('p');
    main_inbox_content_placeholderText_p2.innerText = 'Looks like everything is organized in the right place!';
    // + append p1 and p2 to placeholderText
    main_inbox_content_placeholderText.append(main_inbox_content_placeholderText_p1, main_inbox_content_placeholderText_p2);
    // + append placeholder img and placeholder text to inbox-content
    main_inbox_content.append(main_inbox_content_placeholderImg, main_inbox_content_placeholderText);
    // + append inbox-header and inbox-content to inbox
    main_inbox.append(main_inbox_header, main_inbox_content);
    // + append inbox to main
    main.appendChild(main_inbox);
    // + append sidebar and main to content
    content.append(sideBarSection, main);
    // + append content to document body
    document.body.appendChild(content);
}

export default home;