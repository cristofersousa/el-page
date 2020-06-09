<template>
  <div>
  <div class="bg-hall container"></div>
    <section class="vacancy-open container">
      <h1 class="vacancy-title">Vagas em aberto</h1>
      <h2 class="vacancy-subtitle">Desenvolvimento</h2>

        <div v-if="loading">
        <Loader />
        </div>
      <table v-if="!errorMsg">
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
      <span class="error-msg" v-if="errorMsg">
          <p>Ops, infelizmente ocorreu um erro ao carregar as vagas.</p>
        </span>
    </section>
  </div>
</template>
<script>
import getVacancies from '../../services/vacanciesService';

export default {
  name: 'CarerPageVacancies',
  data() {
    return {
      vacancies: [],
      errorMsg: false,
      loading: true,
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
      getVacancies()
        .then((vacancies) => {
          setTimeout(() => {
            this.vacancies = vacancies;
            this.loading = false;
          }, 1500);
        }).catch(() => {
          this.errorMsg = true;
        });
    },
  },
};
</script>
<style>
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

  .error-msg {
    display: block;
    border: 2px dotted #c0392b;
    padding: 5px;
    text-align: center;;
  }

  .error-msg p {
   color: #e74c3c;
   font-size: .8em;
   font-style: italic;
  }
</style>
