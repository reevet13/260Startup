function login() {
  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const credentials = {
    email: emailEl.value,
    password: passwordEl.value,
  };

  authenticateUser(credentials)
    .then((user) => {
      console.log('User authenticated:', user);
      // Store user information in local storage or update UI as needed
      localStorage.setItem("userToken", user.token);

      // Check if user is authenticated and then redirect to quiz.html
      if (user.authenticated) {
        window.location.href = "quiz.html";
      } else {
        console.error('Authentication failed');
        // Handle authentication failure (e.g., show error message to user)
      }
    })
    .catch((error) => {
      console.error('Authentication failed:', error);
      // Handle authentication failure (e.g., show error message to user)
    });
}
