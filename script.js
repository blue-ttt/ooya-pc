      fetch('https://blue-ttt.github.io/ooya-pc/header.html')
          .then(response => response.text())
          .then(data => {
               document.getElementById('header').innerHTML = data;
            });
