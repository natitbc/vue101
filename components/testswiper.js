
let SwiperComponent = Vue.createApp({
  template: ` 
  <swiper-container class='bg-dark text-center' navigation="true" pagination="true">
    <swiper-slide v-for="slide in slideObject">
      <img :src="slide.img" width="500">
      <h2 class="text-white">{{slide.title}}</h2>
    </swiper-slide>
  </swiper-container>
  `,
  data() {
    return {
      slideObject: [
        {
          id: 1,
          title: "Slide 1",
          desc:"lorem ipsum",
          img: "https://img.freepik.com/free-photo/person-enjoying-warm-nostalgic-sunset_52683-100695.jpg?w=1800&t=st=1690113768~exp=1690114368~hmac=6498094b8fa191113dfd6abc6c1734d66ce1cc2bf0b2fb876a65c1fbbf612341",
        },
        {
          id: 2,
          title: "Slide 2",
          desc:"lorem ipsum",
          img: "https://picsum.photos/id/2/500/300",
        },
        {
          id: 3,
          title: "Slide 3",
          desc:"lorem ipsum",
          img: "https://picsum.photos/id/3/500/300",
        },
      ]};
    }
})

SwiperComponent.mount("#testSwiper");

export default SwiperComponent;
