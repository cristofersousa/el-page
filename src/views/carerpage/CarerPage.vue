<template>
  <div>
    <section class="bg-hero">
      <h1>Trabalhe no Elo7</h1>
    </section>
    <section class="bg-intro container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius
        consequuntur quam mollitia labore cum totam libero aperiam, ratione incidunt
        accusantium minima sit alias odit, voluptate doloribus odio veniam magni.
      </p>
      <span class="separate"></span>
      <a href="#">vagas em aberto </a>
    </section>
    <section class="bg-ceo">
      <div class="ceo-video">
        <img
          src="../../assets/placeholder-video.png"
          alt="Carlos Curioni Video"
          title="Carlos Curioni">
      </div>
      <div class="ceo-content">
        <h1>Palavra do ceo</h1>
        <h3>Carlos Curioni</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nam mollitia quam natus ipsam aliquid eum at quo pariatur
          laudantium blanditiis. Porro molestiae dolore nobis, quos
          totam iusto repudiandae voluptates rerum!
        </p>
      </div>

    </section>

      <h1 class="team">Conheça nosso time <br>
          fora de série
      </h1>

    <section class="bg-team">
      <div class="card-people">
        <img src="../../assets/camila.png" class="center-image" alt="camila">
      </div>
      <div class="card-people">
        <img src="../../assets/guto.png" class="center-image" alt="guto">
      </div>
      <div class="card-people">
        <img src="../../assets/david.png" class="center-image" alt="david">
      </div>
      <div class="card-people">
        <img src="../../assets/beatriz.png" class="center-image" alt="beatriz">
      </div>
    </section>

    <section class="bg-plus">
      <div class="card-plus">
        <div class="card-image">
          <img src="../../assets/qualidade.png" alt="" class="center-image">
        </div>
        <h1>Qualidade de vida</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          consequatur tempora corrupti accusamus provident, itaque, eveniet
          quibusdam cum, deleniti
        </p>
      </div>
      <div class="card-plus">
        <div class="card-image">
          <img src="../../assets/descontracao.png" alt="" class="center-image">
        </div>
        <h1>Ambiente descontraído</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur
          tempora corrupti accusamus provident, itaque, eveniet quibusdam cum, deleniti
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cum eveniet veniam, e
          arum a aspernatur, fugiat neque ipsam corrupti quia sequi quae? Totam libero, pariatur
          modi repudiandae doloremque dolore facilis.
        </p>
      </div>
      <div class="card-plus">
        <div class="card-image">
          <img src="../../assets/atividades.png" alt="" class="center-image">
        </div>
        <h1>Atividades extras</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur
          tempora corrupti accusamus provident, itaque, eveniet quibusdam cum, deleniti
        </p>
      </div>
      <span class="separate"></span>
      <a href="#">Saiba mais</a>
    </section>

    <div class="bg-hall container"></div>
     <section class="vacancy-open container">
       <h1 class="vacancy-title">Vagas em aberto</h1>
       <h2 class="vacancy-subtitle">Desenvolvimento</h2>

       <table>
         <tr v-for="vacancy in activeVacancies" :key="vacancy.id">
           <td><a :href="vacancy.link" target="_blank">{{vacancy.cargo}}</a></td>
           <td class="text-right" v-if="vacancy.localizacao">
             {{vacancy.localizacao.bairro}},
             {{vacancy.localizacao.cidade}} - {{vacancy.localizacao.pais}}
           </td>
           <td class="text-right" v-else>
             Remoto
           </td>
         </tr>
       </table>
     </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CarerPage',
  data() {
    return {
      vacancies: [],
    };
  },
  created() {
    this.loadVacancies();
  },
  computed: {
    activeVacancies() {
      return this.vacancies.filter((vagas) => vagas.ativa);
    },
  },
  methods: {
    loadVacancies() {
      const url = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';
      axios.get(url)
        .then((response) => {
          if (response?.data?.vagas) {
            this.vacancies = response.data.vagas;
          }
        });
    },
  },
};
</script>
<style>
  .bg-hero {
    width: 100vw;
    height: 70vh;
    background-image: url("../../assets/foto-header.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .bg-hero h1 {
    color: #fff;
    text-shadow: 2px 2px #060303;
    font-size: 3.25em;
    font-weight: bold;
    padding-bottom: 100px;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .bg-intro {
     height: 20vh;
     display: flex;
    flex-direction: column;
     align-items: center;
     justify-content: center;
  }

  .bg-intro p {
    background: #fff;
    text-align: center;
  }

  .separate {
    content: '';
    display: block;
    width: 300px;
    height: 3px;
    background: #999;
    margin: 20px auto
  }

  .bg-ceo {
    padding: 60px calc((100% - 960px) /2);
    display: flex;
    flex-wrap: wrap;
    background: #F8F8F8;
  }

  .ceo-video {
    flex: 1 1 160px;
    margin: 0 10px;
  }

  .ceo-content {
    flex: 2 1 100px;
    margin: 0 10px;
  }

  .ceo-content h1 {
    color: #999;
    text-transform: uppercase;
  }

  .ceo-content h3 {
    color: #F9B741;
    font-style: italic;
  }

  .ceo-content p {
    text-align: justify;
    width: 500px;
  }

  .bg-team {
    padding: 40px calc((100% - 960px) /2);
    display: flex;
    flex-wrap: wrap;
    background: #F8F8F8;
  }

  .team {
    font-size: 1.5em;
    text-transform: uppercase;
    color: #999;
    background: #F8F8F8;
    text-align: center;
    line-height: 1.2;
    margin: 0 auto;
  }
  .card-people {
    flex: 2 1 200px;
  }

  .center-image {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .bg-plus {
    padding: 40px calc((100% - 960px) /2);
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }

  .card-plus {
    flex: 1 1 300px;
    margin: 20px 10px;
  }

  .card-plus h1 {
    color: #999;
    text-align: center;
    padding: 20px 0;
    font-size: 1.3em;
  }

  .card-plus p {
    text-align: center;
    line-height: 2;
    font-size: .9em;
    color: #ccc;
  }

  .bg-hall {
    width: 100vw;
    height: 50vh;
    background-image: url('../../assets/foto-bottom.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .vacancy-title {
    text-transform: uppercase;
    text-align: center;
    padding: 20px 0;
    font-size: 1.3em;
    color: #7D7873;
  }

  .vacancy-subtitle {
    text-transform: uppercase;
    font-size: 1.3em;
    color: #7D7873;
    padding: 20px 0;
  }

  .vacancy-open {
    padding: 40px;
  }

  .vacancy-open table {
    width: 900px;
  }

  .vacancy-open table td {
    padding: 5px 0;
    color: #7D7873;
  }

  tr:nth-child(even):hover {
    background:  #fafafa;
  }

  .text-right {
    text-align: right;
    padding-right: 10px;
  }
</style>
