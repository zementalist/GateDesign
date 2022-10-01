<template>
      <div class="container-fluid" id="contact" v-lazy:background-image="require('@/assets/images/contact_bg.jpg')" style="overflow:hidden;">
        
        <div class="row py-3 text-center custom-width">
            <div class="col-12">
                <h1 class="display-4 wow animate__animated animate__lightSpeedInLeft">Get in Touch</h1>
                <br>
            </div>
            <div class="col-12 mt-4">
                <span class="wow animate__animated animate__bounceInLeft" data-wow-duration="2s">
                    <a href="#"><i class="fab fa-linkedin  icon icon-contact"></i></a>
                </span>
                <span class="wow animate__animated animate__fadeInBottomLeft" data-wow-duration="2s">
                    <a href="#"><i class="fab fa-twitter icon icon-contact"></i></a>
                </span>
                <span  class="wow animate__animated animate__fadeInBottomRight" data-wow-duration="2s">
                    <a href="#"><i class="fab fa-github icon icon-contact"></i></a>
                </span>
                <span  class="wow animate__animated animate__bounceInRight" data-wow-duration="2s">
                    <a href="#"><i class="fas fa-envelope icon icon-contact"></i></a>
                </span>
            </div>
            <div class="col-md-4 wow animate__animated animate__fadeInLeft" data-wow-duration="2s">
                    <hr class="light">
                    <h5 class='contact-title'>Contact Details</h5>
                    <hr class="light">
                    <p>333-222-444</p>
                    <p>example@company.com</p>
                    <p>321 Street Name</p>
                    <p>City, State 12345</p>
                </div>

                <div class="col-md-4 wow animate__animated animate__fadeInUp" data-wow-duration="2s">
                    <hr class="light">
                    <h5 class='contact-title'>Working Hours</h5>
                    <hr class="light">
                    <p>Saturday - Wednesday: 9am - 5pm</p>
                    <p>Thursday: 10am-3pm</p>
                </div>
    
                <div class="col-md-4 wow animate__animated animate__fadeInRight" data-wow-duration="2s">
                    <hr class="light">
                    <h5 class='contact-title'>Service Area</h5>
                    <hr class="light">
                    <p>City, State 12345</p>
                </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 
#contact {
    background-image: url('../assets/images/contact_bg.jpg');
} */

.wow {
    display: inline-block;
}

.custom-width {
    padding-left: 12.5%;
    padding-right: 12.5%;
}

.icon {
    font-size: 3em;
    margin-bottom: 0.25em;
}
.icon-contact {
    margin: 0em 0.5em 0.5em 0.25em;
}
.fa-facebook {
    color:rgb(58, 85, 159);
}
.fa-linkedin {
    color: #0e76a8;
}
.fa-twitter {
    color:rgb(80, 171, 241);
}
.fa-github {
    color: #211F1F;
}

.fa-envelope {
    color:#ca011f;
}

.light {
    background-color: #222;
    box-shadow: -2px 2px 5px #444;
    width: 75%;
}

.contact-title {
    font-weight: bolder;
}

p {
    font-weight: bold;
}


</style>