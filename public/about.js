// randomQuote.js

function displayRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const quoteContainer = document.getElementById('quote');

      const quoteParagraph = document.createElement('p');
      quoteParagraph.classList.add('quote');
      quoteParagraph.textContent = `"${data.content}" - ${data.author}`;

      quoteContainer.innerHTML = ''; // Clear existing content
      quoteContainer.appendChild(quoteParagraph);
    })
    .catch((error) => {
      console.error('Error fetching random quote:', error);
    });
}

// Call the function to display a random quote
displayRandomQuote();
