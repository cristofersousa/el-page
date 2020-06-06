<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,300;1,400&display=swap');

body,h1, h2, p, ul, li, a {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: #222;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

* {
  box-sizing: border-box;
}

p {
   color: #999;
    font-size: 1em;
    line-height: 1.4;
}

a {
    color: #369C9C;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1em;
    display: block;
}
</style>
