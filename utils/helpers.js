module.exports = {
  format_date: (date) => { // Format date information to MM/DD/YYYY
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  rating_stars: (rating) => { // Convert rating (number) into starts ★
    stars ="";
    for (i = 0; i <= rating - 1 ; i++) {
      stars += "★";
    }
    for (j = rating; j < 5 ; j++) {
      stars += "☆";
    }
    return stars
  },
};
