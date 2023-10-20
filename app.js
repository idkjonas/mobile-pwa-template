function showTab(element, tabId) {
  // Hide all tab content elements
  Array.from(document.getElementsByClassName("tab-pane"))
    .forEach(tabPane => tabPane.classList.remove("selected"));

  // Remove 'active' class from all tab buttons
  Array.from(document.getElementsByClassName("tab-button"))
    .forEach(tabButton => tabButton.classList.remove("selected"));

  // Show the selected tab content
  document.getElementById(tabId).classList.add("selected");

  // Add 'active-button' class to the clicked tab button
  element.classList.add("selected");
}

// Tab to show on load
window.onload = () => showTab(document.getElementsByClassName("tab-button")[0], "tab1"); // this should use the first element with the class tab-button present in dom
