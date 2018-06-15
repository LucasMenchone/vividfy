/**
 * DOM Ready.
 */
document.addEventListener('DOMContentLoaded', () => {
    addListeners('protanopia', 'deuteranopia', 'tritanopia', 'normal');
});

/**
 * @function toDichromatic
 * 
 * A function to trigger the selecte tab.
 * 
 * @param {string[]} elems The tabs to be activated.
 */
const toDichromatic = (...elems) => {
    return () => {
        elems.forEach(elem => {
            chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
                const activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { 'message': elem });
            });
        });
    }
}

/**
 * @function addListener
 * 
 * A function to dynamically add click listeners.
 * 
 * @param {string[]} ids The button id's to be catched.
 */
const addListeners = (...ids) => {
    ids.forEach(id => {
        document.getElementById(id).addEventListener('click', toDichromatic(id));
    });
}