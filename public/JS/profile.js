document.addEventListener("DOMContentLoaded", async function () {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      // Handle the case where the token is missing
    }
    // Fetch user profile data from the server
    const response = await fetch("/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }
    const profileData = await response.json();

    // Update the HTML with the user profile information
    const profileInfoContainer = document.getElementById("profile-info");
    profileInfoContainer.innerHTML = `
        <p><strong>Username:</strong> ${profileData.user.name}</p>
        <p><strong>Age:</strong> ${profileData.user.age}</p>
        <!-- Add more profile information as needed -->
      `;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    // Handle error display or redirection as needed
  }
});
