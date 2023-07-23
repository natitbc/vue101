import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import SwiperComponent from "./components/testswiper.js";

let app = Vue.createApp({
  // template: `{{Header}}{{app}}`,
  data() {
    return {
      message: "Hello Vue!",
      name: "Nati",
      lastName: "Nine",
      age: 30,
      email: "",
      isShowData: false,
      salary: 15_000,
      adresss: `<strong>Bangkok</strong>`,
      picture: `https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061993.jpg?w=1800&t=st=1690022844~exp=1690023444~hmac=26b7c002fb274457ce7ece4c4b9c778b811e7196ccff243474a1b783ece840a3`,
      hobby: ["play game", "read book", "watch movie"],
    };
  },

  methods: {
    showData() {
      alert(`Hello Vue, I'm ${this.name} ${this.lastName}`);
    },
    increaseAge() {
      return this.age++;
    },
    decreaseAge() {
      return this.age--;
    },
    increaseSalary(value) {
      return (this.salary += value);
    },
    submitForm() {
      alert(`We got your message : ${this.email}`);
    },
    toggleIsShowData() {
      this.isShowData = !this.isShowData;
    },
  },

  computed: {
    getFullname() {
      return `${this.name} ${this.lastName}`;
    },
    getJobLevel() {
      return this.salary > 30000 ? "Senior" : "Junior";
    }
  },
  watch: {
    salary(value) {
      if (value > 50000) {
        alert("You can't get salary more than 50000");
        this.salary = 50000;
        this.$refs.salaryBtn.disabled = true;
      }
    }
  },
  
})

app.component("Header", Header);
app.component("Footer", Footer);
app.component("SwiperComponent", SwiperComponent);

app.mount("#app");

