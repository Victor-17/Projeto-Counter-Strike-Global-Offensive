//Criando elementos estáticos
const view_rodape =   `<footer>
<div class="rodapé">
  <ul>
    <li id="icon"><a href="https://www.facebook.com/CounterStrike/"><i class="fab fa-facebook-square"></i></a></li>
    <li id="icon"><a href="https://www.instagram.com/csgobestbr_oficial/?hl=pt-br"><i class="fab fa-instagram"></i></a></li>
    <li id="icon"><a href="https://twitter.com/CSGO"><i class="fab fa-twitter"></i></a></li>
  </ul>
</div>

<p>&copy;Counter-Strike:Global Offensive</p>
<p class="ultimo">Desenvolvido por Victor Eduardo e Lucas Henrique</p>                                    
<footer>`


const rodape = document.querySelector('.formulário')
rodape.insertAdjacentHTML('beforeend', view_rodape)


