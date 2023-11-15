document.addEventListener('DOMContentLoaded', function () {
  // Assuming you have a function to fetch dynamic data from a server
  fetchResultsData()
      .then((resultData) => {
          displayResult(resultData);
      })
      .catch((error) => {
          console.error('Error fetching results data:', error);
      });

  // Fetch and display dynamic data for Knights Radiant Orders
  fetchKnightsData()
      .then((knightsData) => {
          displayKnightsData(knightsData);
      })
      .catch((error) => {
          console.error('Error fetching Knights data:', error);
      });
});

function fetchResultsData() {
  // Replace this with actual API endpoint to fetch results data
  return new Promise((resolve) => {
      // Simulating fetching data
      setTimeout(() => {
          const resultData = {
              order: 'Willshaper',
              description: 'I will seek freedom',
              details: 'The Willshapers believe strongly that all people should be free to make their own choices...',
          };
          resolve(resultData);
      }, 1000);
  });
}

function displayResult(resultData) {
  const resultCard = document.getElementById('resultCard');
  resultCard.innerHTML = `
      <h2 class="card-title">${resultData.order}</h2>
      <h3 class="card-subtitle mb-2 text-muted">${resultData.description}</h3>
      <p class="card-text">${resultData.details}</p>
  `;
}

function fetchKnightsData() {
  // Replace this with actual API endpoint to fetch Knights data
  return new Promise((resolve) => {
      // Simulating fetching data
      setTimeout(() => {
          const knightsData = {
              windrunner: 'Kaladin',
              edgedancer: 'Lift',
              bondsmith: 'Dalinar',
              lightweaver: 'Shallan',
              willshaper: 'You!',
          };
          resolve(knightsData);
      }, 1000);
  });
}

function displayKnightsData(knightsData) {
  const windrunnerCell = document.getElementById('windrunner');
  const edgedancerCell = document.getElementById('edgedancer');
  const bondsmithCell = document.getElementById('bondsmith');
  const lightweaverCell = document.getElementById('lightweaver');
  const willshaperCell = document.getElementById('willshaper');

  windrunnerCell.textContent = knightsData.windrunner;
  edgedancerCell.textContent = knightsData.edgedancer;
  bondsmithCell.textContent = knightsData.bondsmith;
  lightweaverCell.textContent = knightsData.lightweaver;
  willshaperCell.textContent = knightsData.willshaper;
}

