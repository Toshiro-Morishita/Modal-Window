(function() {
  'use strict';

  let open = document.getElementById('open');
  let close = document.getElementById('close');
  let modal = document.getElementById('modal');
  let mask = document.getElementById('mask');

  open.addEventListener('click', function() {
    modal.className = '';
    mask.className = '';
  });

  close.addEventListener('click', function() {
    modal.className = 'hidden';
    mask.className = 'hidden';
  });

  mask.addEventListener('click', function() {
    // modal.className = 'hidden';
    // mask.className = 'hidden';
    close.click();
  });
})();
