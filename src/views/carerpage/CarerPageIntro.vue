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
   </div>
</template>
<script>
export default {
  name: 'CarerPageIntro',
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
</style>
