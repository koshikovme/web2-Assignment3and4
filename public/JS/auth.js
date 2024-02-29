// Function to check login status and update navigation
function updateNavigation() {
  const token = localStorage.getItem("token");
  if (token) {
    // User is logged in
    document.getElementById("profileNavItem").style.display = "block";
    document.getElementById("logoutNavItem").style.display = "block";
    document.getElementById("signUpNavItem").style.display = "none";
    document.getElementById("signInNavItem").style.display = "none";
  } else {
    // User is not logged in
    document.getElementById("profileNavItem").style.display = "none";
    document.getElementById("logoutNavItem").style.display = "none";
    document.getElementById("signUpNavItem").style.display = "block";
    document.getElementById("signInNavItem").style.display = "block";
  }
}

// Function to handle logout
function logout() {
  localStorage.removeItem("token");
  updateNavigation();
}

// Call updateNavigation when the page loads
updateNavigation();
