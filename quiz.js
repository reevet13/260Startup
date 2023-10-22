document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('#loginForm');

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Validate the login form (add more validation if needed)
      const nameInput = document.getElementById('name');
      const userName = nameInput.value.trim();

      if (userName) {
          // Authenticate the user (you can replace this with actual authentication logic)
          localStorage.setItem('userName', userName);

          // Redirect to the main page (e.g., quiz.html)
          window.location.href = 'quiz.html';
      } else {
          alert('Please enter a valid name.');
      }
  });
  const userId = localStorage.getItem('userName');
    fetchUserData(userId)
        .then((userData) => {
            console.log('User Data:', userData);
            // Handle the retrieved user data (e.g., display user's quiz history)
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
        const socket = new WebSocket('ws://localhost:3000');

        socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened');
            // Send any initialization message if needed
        });
    
        socket.addEventListener('message', (event) => {
            // Handle incoming messages (e.g., quiz results)
            const quizResults = JSON.parse(event.data);
            // Update the UI with the received data
            console.log('Received Quiz Results:', quizResults);
        });
    
        socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed');
        });
    
        // Example: Send quiz results to the server
        function sendQuizResults(results) {
            socket.send(JSON.stringify(results));
        }
        
        const quizButtons = document.querySelectorAll('.btn.question');
        quizButtons.forEach(function (button, index) {
            button.addEventListener('click', function () {
                // Remember the quiz button pressed
                localStorage.setItem('lastQuizButton', index);
    
                // Redirect to the potential following quiz page
                const nextQuizPage = `quiz${index + 2}.html`;
                window.location.href = nextQuizPage;
            });
        });
});

// Function to simulate fetching user data from a server
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
      // Replace this with actual API endpoint
      setTimeout(() => {
          const userData = {
              userId: userId,
              quizHistory: [
                  { quizId: 1, score: 80 },
                  { quizId: 2, score: 95 },
                  // Add more quiz history as needed
              ],
          };
          resolve(userData);
      }, 1000); // Simulate a delay for API request
  });
}
