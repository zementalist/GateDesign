<template>
    <div id="slides" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner" id="home">
            <!-- <span class="float-right align-self-middle" style="z-index:9999;"><i class=" fas fa-arrow-circle-right"></i></span> -->
            <div class="carousel-item active">
                <img v-lazy="require('@/assets/images/bg4.jpg')">
                <div class="carousel-caption">
                    <h1 class="display-2">GatesBay</h1>
                    <h3>AI Technologies</h3>
                    <br>
                    <button class="btn btn-lg btn-light mr-2">Career</button>
                    <button class="btn btn-primary btn-lg btn-carousel ml-2">Internships</button>
                </div>
            </div>

            <div class="carousel-item">
                <img v-lazy="require('@/assets/images/bg1.jpg')" class="img-fluid">
                <div class="carousel-caption">
                    <h1 class="display-2">GatesBay</h1>
                    <h3>AI Technologies</h3>
                    </div>
            </div>

            <div class="carousel-item">
                <img v-lazy="require('@/assets/images/bg3.jpg')" class="img-fluid">
                <div class="carousel-caption">
                    <h1 class="display-2">GatesBay</h1>
                    <h3>AI Technologies</h3>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import {jQuery as $} from 'jquery';
    export default {
        mounted() {
            $('.carousel').carousel({
                interval: 3000
            })
        }
    }
</script>

<style scoped>

.carousel-inner img {
    width:100%;
    height: 100%;
}

.carousel-control-next, .carousel-control-prev {
    background-color: rgba(0,0,0,0.2);
    width:5%;
    cursor: pointer;
}

hr {
    width:75%;
    background-color: #b4b4b4;
}

.welcome {
    width:75%;
    margin: 0 auto;
}
.carousel-caption {
    transform: translateY(-50%);
    bottom: 0;
    top: 55%;
}


.btn-carousel {
    background-color: #2481be;
    border: #044b6c; 
}

.btn-carousel:hover {
    background-color: #6497b1;
}

.btn-carousel:focus, .btn-carousel.focus {
    box-shadow:0 0 0 0.2rem #2481be;
}
.carousel-caption h1, .carousel-caption h3 {
    text-shadow: 5px 2px 7px #222;
}
</style>