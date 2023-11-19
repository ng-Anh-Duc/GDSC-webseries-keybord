async function getRandomParagraph() {
    try {
      const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
      const data = await response.json();
  
      if (Array.isArray(data) && data.length > 0) {
        const randomParagraph = data[0];
  
        document.getElementById("random-text").textContent = randomParagraph;
      } else {
        console.error('Invalid response from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', getRandomParagraph);
  
  