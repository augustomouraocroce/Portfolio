// document.addEventListener('DOMContentLoaded', () => {
// function atualizarHorario() {
//     var data = new Date();
//     var hora = data.getHours();
//     var minutos = data.getMinutes();
//     var segundos = data.getSeconds();

//     document.getElementById('horario').innerHTML = hora + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
// }

// setInterval(atualizarHorario, 1000); // atualiza a cada segundo
// atualizarHorario(); // atualiza imediatamente
// });

// // document.addEventListener('DOMContentLoaded', () => {
// //     function atualizarHorario() {
// //         var data = new Date();
// //         var hora = data.getHours();
// //         var minutos = data.getMinutes();
// //         var segundos = data.getSeconds();
    
// //         document.getElementById('horario').innerHTML = hora + ':' + minutos + ':' + segundos;
// //     }
    
// //     setInterval(atualizarHorario, 1000); // atualiza a cada segundo
// //     atualizarHorario(); // atualiza imediatamente
// //     });


// //document.getElementById('horario'): Usa a função getElementById para obter uma referência ao elemento HTML que possui o ID 'horario'. Isso pressupõe que existe um elemento com esse ID na sua página.

// //.innerHTML: Permite acessar e modificar o conteúdo HTML interno desse elemento.

// //hora + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos: Constrói uma string no formato HH:MM:SS para representar o horário atual.

// //hora: Representa as horas obtidas da data atual.

// //':': Adiciona dois pontos como separadores entre horas, minutos e segundos.

// //(minutos < 10 ? '0' : '') + minutos: Adiciona os minutos. Se os minutos forem menores que 10, é adicionado um '0' à frente (isso é feito usando o operador condicional ternário).
// // ------Esta expressão verifica se minutos é menor que 10. Se for verdadeiro, adiciona '0' à string; caso contrário, adiciona uma string vazia (''). Essa construção é utilizada para garantir que os minutos sempre tenham dois dígitos na representação final.

// //(segundos < 10 ? '0' : '') + segundos: Adiciona os segundos da mesma maneira, garantindo que sejam exibidos dois dígitos.

// //Então, toda a expressão concatena esses valores em uma única string e a atribui como o conteúdo interno do elemento com o ID 'horario'. Isso resulta na exibição do horário formatado no HTML. Por exemplo, se for 3 horas, 5 minutos e 7 segundos, a string atribuída será "03:05:07".