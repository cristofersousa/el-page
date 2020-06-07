<template>
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
    </section>
</template>
<script>
export default {
  name: 'CarerPageBenefits',
};
</script>
<style>
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
</style>
