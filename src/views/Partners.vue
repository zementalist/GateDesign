<template>
<div class="partners-container py-5" style="overflow:hidden;">
  <div class="partners py-4" v-lazy:background-image="require('@/assets/images/partners-bg.png')">
        <div class="container-fluid custom-width">
            
            <div class="row text-center">

            <div class="col-12 mb-5 pb-5">
                <h1 class="display-4 wow animate__animated animate__lightSpeedInRight">Partners</h1>
            </div>

                
                <div class="col-sm-4 my-3 wow animate__animated animate__bounceInLeft" data-wow-duration="2s">
                    <img v-lazy="require('@/assets/images/partner1.png')" class="img-fluid partner-img">
                </div>

                <div class="col-sm-4 my-3  wow animate__animated animate__bounceInDown" data-wow-duration="2s">
                    <img v-lazy="require('@/assets/images/partner2.png')" class="img-fluid partner-img">
                </div>

                <div class="col-sm-4 my-3 wow animate__animated animate__bounceInRight" data-wow-duration="2s">
                    <img v-lazy="require('@/assets/images/partner3.png')" class="img-fluid partner-img">
                </div>

            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.partners {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.partner-img {
    max-width: 200px;
}
.custom-width {
    width: 75%;
}

h1 {
    text-shadow: -2px -2px 0px white;
}
</style>