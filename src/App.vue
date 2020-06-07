<template>
  <div id="app">
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

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

.center-image {
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.separate {
  content: '';
  display: block;
  width: 300px;
  height: 3px;
  background: #999;
  margin: 20px auto
}
</style>
