
$(document).ready(function() {
   $('header button').click(function(){
      $('form').slideDown();
   })

   $('#botao-cancelar').click(function(){
      $('form').slideUp();
   })

   $('form').on("submit", function(e) {
      console.log("submit");
      e.preventDefault();

      const enderecoimagem = $('#endereco-imagem').val();
      const novoItem = $(' <li style="display = none"> </li>');
      $(`<img src ="${enderecoimagem}" />`).appendTo(novoItem);
      $(`<div class = "overlay-imagem">

         <a href = "${enderecoimagem}" target="_blank_ tittle="ver imagem
         em tamanho real"
         </a>
         </div>
         `).appendTo(novoItem);
         $(novoItem).appendTo('ul');
         $(novoItem).fadeIn(1000);
         $('#endereco-imagem').val(' ');

   }) 

})
   