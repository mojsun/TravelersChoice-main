// Create new post
const createReviewHandler = async (event) => {
  event.preventDefault();

  const country_id = document.querySelector('#input-country').value;
  const rating = document.querySelector('#input-rating').value;
  const content = document.querySelector('#input-review').value.trim();

  if (country_id && rating && content) {
    const response = await fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({ country_id, rating, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard'); // When successful, load the dashboard page
    } else {
      alert('Failed to create a new post.'); // When unsuccessful, show alert
    }
  }
};

// Event listeners
document
  .querySelector('.create-form')
  .addEventListener('submit', createReviewHandler);