window.onload = function() {
    const slider = document.querySelector('.slider');
    
    function moveSlider() {
      slider.style.transition = 'transform 1s ease-in-out'; // Aplica la transición al slider
      
      // Desliza el slider hacia la izquierda
      slider.style.transform = 'translateX(-100%)';
      
      // Espera a que se complete la transición y luego cambia la imagen
      setTimeout(() => {
        const firstSlide = slider.children[0];
        slider.appendChild(firstSlide);
        slider.style.transition = 'none'; // Elimina la transición para el cambio instantáneo de la imagen
        slider.style.transform = 'translateX(0)';
      }, 1000); // Espera 1 segundo, que es la duración de la transición
    }
  
    setInterval(moveSlider, 3000);
  };
  