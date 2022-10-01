<template>
    <div class="container-fluid mt-5 py-5 custom-width" id="about" style="overflow:hidden;">
        <div class="row text-center py-3">
            <div class="col-12 py-3">
                <h1 class="display-4 wow animate__animated animate__fadeInDown" >About GatesBay</h1>
            </div>
            <div class="col-12 mt-3 wow animate__animated animate__fadeInUp">
                <p class="lead">Online marketing is the component that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services</p>
            </div>
        </div>
    </div>
</template>

<script>
import WOW from 'wowjs'

export default {
mounted() { new WOW.WOW().init() }
}
</script>

<style scoped>
.custom-width {
    width: 75%;
}
</style>