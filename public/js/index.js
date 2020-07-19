window.addEventListener('scroll', function() {
  var element = document.querySelector('#about');

  if (element) {
    var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
      setTimeout(function(){
            interactions_odometer.innerHTML = 30000;
        }, 500);

        setTimeout(function(){
            users_odometer.innerHTML = 2000;
        }, 500);
        setTimeout(function(){
            partners_odometer.innerHTML = 75;
        }, 500);
  	}
  }
});
