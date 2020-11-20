$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(data => {
    $('.member-name').text(data.email);
  });

  // TODO: get the bookings for a student (using current logged in userId. Have to work out how to get this)
  $.get(`/api/studentbookings/${userId}`).then(data => {
    // TODO: fill the page/calendar with the booking data
  });

  // TODO: get the bookings for a tutor (using current logged in userId. Have to work out how to get this)
  $.get(`/api/tutorbookings/${userId}`).then(data => {
    // TODO: fill the page/calendar with the booking data
  });
});
