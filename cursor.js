document.addEventListener('DOMContentLoaded', () => {
  var cursor = document.querySelector('.cursor');
  var cursorinner = document.querySelector('.cursor-two');
  var a = document.querySelectorAll('a');

  document.addEventListener('mousemove', function(e) {
    var x = e.clientX; // Horizontal
    var y = e.clientY; // Vertical
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`

    //The translate3d() CSS function repositions an element in 3D space. Its result is a <transform-function> data type.
    //Atualiza a posição do cursor com base nas coordenadas do mouse.
    //Usa a propriedade transform do CSS para aplicar uma transformação 3D ao cursor.
    //O translate3d move o cursor no espaço 3D.
    //Os valores calc(${e.clientX}px - 50%) e calc(${e.clientY}px - 50%) ajustam a
    //posição do cursor para que o ponto central do cursor esteja alinhado com as coordenadas do mouse.

    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mousedown', function() {
      cursor.classList.add('click');
      cursorinner.classList.add('cursorinnerhover')
  });

  document.addEventListener('mouseup', function() {
      cursor.classList.remove('click')
      cursorinner.classList.remove('cursorinnerhover')
  });

  a.forEach(item => {
      item.addEventListener('mouseover', () => {
          cursor.classList.add('hover');
          cursorinner.classList.add('cursorinnerhover');
      });

      item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
          cursorinner.classList.remove('cursorinnerhover');
      });
  })

// //a.forEach(item => { ... });: Itera sobre cada elemento <a> na NodeList a (que foi obtida usando document.querySelectorAll('a')).

// item.addEventListener('mouseover', () => { ... });: Adiciona um ouvinte de evento mouseover a cada elemento <a>. Quando o mouse passa sobre um elemento <a>, a função de retorno de chamada é acionada.

// cursor.classList.add('hover');: Adiciona a classe CSS 'hover' ao elemento referenciado por cursor. Isso pode ser usado para aplicar estilos específicos quando o cursor está sobre um link.

// cursorinner.classList.add('cursorinnerhover');: Adiciona a classe CSS 'cursorinnerhover' ao elemento referenciado por cursorinner. Isso pode ser usado para aplicar estilos específicos ao elemento interno do cursor quando o cursor está sobre um link.

// item.addEventListener('mouseleave', () => { ... });: Adiciona um ouvinte de evento mouseleave a cada elemento <a>. Quando o mouse deixa um elemento <a>, a função de retorno de chamada é acionada.

// cursor.classList.remove('hover');: Remove a classe CSS 'hover' do elemento referenciado por cursor. Isso pode ser usado para reverter os estilos aplicados quando o mouse deixa um link.

// cursorinner.classList.remove('cursorinnerhover');: Remove a classe CSS 'cursorinnerhover' do elemento referenciado por cursorinner. Isso pode ser usado para reverter os estilos aplicados ao elemento interno do cursor quando o mouse deixa um link.
})