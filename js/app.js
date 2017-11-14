window.addEventListener('load', function(event) {
  // Con esto nos aseguramos que el window haya cargado
  // console.log(event);
  // console.log(event.target);
  // console.log(event.currentTarget);
  var title = document.body.firstElementChild;
  title.addEventListener('mouseover', function(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    event.target.textContent = 'Gato lindo :3';
    // title.textContent = 'Hola otra vez';
  });
  title.addEventListener('mouseout', function(event) { // 'mouseleave'
    // title.removeEventListener('mouseover', function(event) {
    //   console.log(event.target);
    //   console.log(event.currentTarget);
    //   title.textContent = 'Gato lindo';
    // });
    event.target.textContent = 'Hola mundo';
  });

  var image = document.body.getElementsByTagName('img')[0];
  // console.log(image);
  image.addEventListener('mouseover', function(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    // image.src = 'assets/images/pet2.jpg';
    event.currentTarget.src = 'assets/images/pet2.jpg';
  });

  image.addEventListener('mouseout', function() {
    image.src = 'assets/images/pet1.jpg';
  });
});
