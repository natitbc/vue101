import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const Footer = Vue.createApp({
  template: ` 
  <footer class="text-center">
    <p>© 2021 - All Rights Reserved</p>
  </footer>
  `,
}).mount("#footer");

export default Footer;


