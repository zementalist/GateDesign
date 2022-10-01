<template>
  <div>
    <!-- Carousel -->
    <Carousel></Carousel>
    <!-- Aboutus -->
    <Aboutus></Aboutus>
    <hr class="mt-5 mb-5">

    <!-- Services -->
    <Services></Services>
    <hr class="mt-5 mb-5">

    <!-- Partners -->
    <Partners></Partners>
    <hr class="mt-5 mb-5">

    <!-- Meet our Team -->
    <Team></Team>
    <hr class="mt-5 mb-5">

    <!-- Location -->
    <Location></Location>
    <hr class="mt-5 mb-5">

    <!-- Contactus -->
    <Contactus></Contactus>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
import Aboutus from './Aboutus.vue';
import Services from './Services.vue';
import Partners from './Partners.vue';
import Team from './Team.vue';
import Location from './Location.vue';
import Contactus from './Contactus.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Aboutus,
    Services,
    Partners,
    Team,
    Location,
    Contactus,
  },
  computed: {
      currentRoute() {
          return this.$route.name;
      }
  },
  mounted() {
      let hashtag = this.$route.hash;
      if(hashtag && hashtag.length > 0){
        const el = document.querySelector(hashtag);
        el.scrollIntoView(true);
      }
  }
}
</script>

<style>

hr.mt-5 {
  width:75%;
  background-color: #b4b4b4;
}

@media (max-width: 768px) {
    p {
        margin-top: 0.5rem;
    }
    .card {
        margin-top: 15px;
    }
    .carousel-caption {
        top: 45%;
    }
    .carousel-caption h1 {
        font-size: 350%;
    }
    .carousel-caption h3 {
        font-size: 140%;
        font-weight: 400;
        padding-bottom: 0.2rem;
    }
    .carousel-caption .btn {
        font-size: 95%;

    }
}

@media (max-width: 576px) {
    #services .card {
        width: 70%;
        margin: 0 auto;
    }
    .card {
        margin-top: 20px;
    }
    .card-body {
        text-align: center;
    }
    .display-4 h1 {
        font-size:85%;
    }
    .carousel-caption {
        top: 40%;
        margin-top: -30px;
    }
    .carousel-caption h1 {
        font-size: 250%;
    }
    .carousel-caption h3 {
        font-size: 110%;
        font-weight: 400;
    }
    .carousel-caption .btn {
        font-size: 90%;
        padding: 4px 8px;
    }
}

@media (max-width: 428px) {
    .card {
        width:85%;
        margin: 0 auto;
        margin-top: 15px;
    }
    .display-4 {
        font-size:250%;
    }
    .carousel-caption {
        top: 40%;
        margin-top: -20px;
    }
    .carousel-caption h1 {
        font-size: 220%;
    }
    .carousel-caption h3 {
        font-size: 100%;
        font-weight: 400;
    }
    .carousel-caption .btn {
        font-size: 55%;
        padding: 4px 7px;
        margin-top: -60px;
    }
}
</style>