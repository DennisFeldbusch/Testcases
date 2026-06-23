// Different sources flowing to fetch

// Source 1: window.location.search
function example1() {
  const query = window.location.search;
  fetch("/api" + query);
}

// Source 2: request.params
function example2(req) {
  const userId = req.params.id;
  fetch(`/users/${userId}`);
}

// Source 3: localStorage
function example3() {
  const token = localStorage.getItem('token');
  fetch('/api/data', { headers: { 'Authorization': token }});
}

// Source 4: DOM input value
function example4() {
  const searchInput = document.getElementById('search').value;
  fetch(`/search?q=${searchInput}`);
}

// Source 5: request.body
function example5(req) {
  const data = req.body.username;
  fetch('/api/user/' + data);
}

// Source 6: document.location.hash
function example6() {
  const hash = document.location.hash;
  fetch('/api/navigate' + hash);
}

// Source 7: sessionStorage
function example7() {
  const preference = sessionStorage.getItem('pref');
  fetch(`/api/settings?pref=${preference}`);
}

// Source 8: event.target.value
function example8(event) {
  const value = event.target.value;
  fetch('/api/update', { body: JSON.stringify({ data: value }) });
}

// Source 9: request.query
function example9(req) {
  const filter = req.query.filter;
  fetch('/api/items?filter=' + filter);
}

// Source 10: prompt
function example10() {
  const userInput = prompt('Enter URL:');
  fetch(userInput);
}

// Multiple sources in one function
function example11(req) {
  const param = req.params.type;
  const query = req.query.search;
  const combined = `/api/${param}?q=${query}`;
  fetch(combined);
}
