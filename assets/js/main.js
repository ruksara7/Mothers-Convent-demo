function loadPartials() {

  const basePath = window.location.pathname.includes('Mothers-Convent-demo')
    ? '/Mothers-Convent-demo/'
    : '/';

  fetch(basePath + 'partial/header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) {
        header.innerHTML = data;
        setupMenu();
      }
    })
    .catch(err => console.error('Header load error:', err));

  fetch(basePath + 'partial/footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Footer load error:', err));
}
