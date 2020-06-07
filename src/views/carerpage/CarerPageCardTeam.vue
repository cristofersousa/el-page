<template>
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
</template>
<script>
export default {
  name: 'CarerPageCardTeam',
};
</script>
<style>
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
</style>
