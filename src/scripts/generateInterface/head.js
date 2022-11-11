import logo from '../../images/logo.png';

const insertHeadAttributes = () => {
    // const head = document.getElementsByTagName('head');
    // insert favicon
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('href', logo);
    favicon.setAttribute('type', 'shortcutimage/x-icon');
    // add ion-icons script
    const script1 = document.createElement('script');
    script1.setAttribute('type', 'module');
    script1.setAttribute('src', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js');
    const script2 = document.createElement('script');
    script2.setAttribute('nomodule', '');
    script2.setAttribute('src', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js');
    // + append favicon, script1 and script2 to head
    document.head.append(favicon, script1, script2);
}

export default insertHeadAttributes;