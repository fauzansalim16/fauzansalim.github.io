//memindahkan ke halaman baru dari card
function showNewPage() {
  window.location.href = 'investment.html';
}

//submit form
function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var url = 'submitted_message.html' + '?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message);

  window.location.href = url;
}
function resetForm() {
  document.getElementById('myForm').reset();
}
