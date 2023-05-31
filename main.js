const tabItems = document.querySelectorAll('.tab-item');
// The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
// basically this'll make a nodeList similar s arrays
const tabContent = document.querySelectorAll('.tab-content-item');
function selectItem(e) {
    removeborder();
    removeshow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // isme isne this.id lagaya hai kyoki this.id maane tab-1 tab-2 tab-3 sand apan ko DOM se uska content uthakar add karna hai in the list
    tabContentItem.classList.add('show');
}
function removeborder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeshow() {
    tabContent.forEach(item => item.classList.remove('show'));
}

// for each item in the tabItems add the eventListener for each of them
tabItems.forEach(item => item.addEventListener('click', selectItem));