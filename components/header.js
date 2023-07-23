
const Header = Vue.createApp({
  template: ` 
  <header> 
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Tel</a></li>
      </ul>
    </nav>
  </header>
  `,
}).mount("#header");

export default Header;


