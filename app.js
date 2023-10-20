function showTab(tabId) {
  // Hide all tab content elements
  const tabPanes = document.querySelectorAll(".tab-pane");
  tabPanes.forEach(tabPane => tabPane.classList.remove("selected"));

  // Remove 'active' class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(tabButton => tabButton.classList.remove("selected"));

  // Show the selected tab content
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("selected");

  // Add 'active-button' class to the clicked tab button
  const clickedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
  clickedButton.classList.add("selected");
}

// Tab to show on load
window.onload = () => showTab("tab1");
