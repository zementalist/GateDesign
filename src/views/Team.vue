<template>
<div id="team" style="overflow:hidden;">

      <!--- Meet the team -->
    <div class="container-fluid py-5">
        <div class="row mt-4 justify-content-center custom-row-padding text-center">
            <div class="col-12 text-center">
                <h1 class="display-4 wow animate__animated animate__lightSpeedInLeft">Meet the Team</h1>
            </div>
            <div class="col-12 mt-3 wow animate__animated animate__fadeInUp">
                <p class="lead">Online marketing is the component that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services</p>
            </div>
        </div>
    </div>

    <!--- Cards -->
    <div class="container-fluid teams">
        <div class="row text-center justify-content-center custom-row-padding">

            <div :class="customColumn + ' col-sm-6 col-md-3 wow animate__animated animate__fadeInUp'" data-wow-duration="1.5s">
                <ProfileCard 
                name="Jordan Doe" 
                img="r.png" 
                title="Graphic Designer" 
                facebook_url="#"
                linkedin_url="#"
                github_url="#"
                ></ProfileCard>
            </div>

            <div :class="customColumn + ' col-sm-6 col-md-3 wow animate__animated animate__fadeInUp'" data-wow-duration="1.5s" data-wow-delay="0.5s">
                <ProfileCard 
                name="John Doe" 
                img="CTO.jpg" 
                title="CTO"
                twitter_url="#"
                linkedin_url="#"
                github_url="#"
                ></ProfileCard>
            </div>

            <div :class="customColumn + ' col-sm-6 col-md-3 wow animate__animated animate__fadeInUp'" data-wow-duration="1.5s" data-wow-delay="1s">
                <ProfileCard 
                name="Jane Doe" 
                img="ms.jpeg" 
                title="CEO"
                facebook_url="#"
                linkedin_url="#"
                github_url="#"
                ></ProfileCard>
            </div>

            <div :class=" customColumn + ' col-sm-6 col-md-3 wow animate__animated animate__fadeInUp'" data-wow-duration="2s" data-wow-delay="1s">
                <ProfileCard 
                name="Jack Doe" 
                img="x.jpg" 
                title="Creative Designer"
                facebook_url="#"
                linkedin_url="#"
                github_url="#"
                ></ProfileCard>
            </div>
        </div>
    </div>
    <br>
</div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue';

export default {
    data() {
        return {
            width: window.innerWidth
        }
    },
    components: {
        ProfileCard,
    },
    mounted() {
        window.onresize = () => {
            this.width = window.innerWidth;
            console.log(window.innerWidth);
        }
    },
    computed: {
        customColumn() {
            return this.width < 429 ? '' : 'col-8';
        }
    }
}
</script>

<style scoped>
#team {
    margin-bottom: 100px;
}
.custom-row-padding {
    padding-left: 10%;
    padding-right: 10%;
}
/* .custom-width {
    width: 75%;
} */

@media (max-width: 952px) {
    .custom-row-padding {
        padding-left: 5%;
        padding-right: 5%;
    }
}

@media (max-width: 768px) {
    .custom-row-padding {
        padding-left: 10%;
        padding-right: 10%;
    }

}
/*

@media (max-width: 575px) {
    .custom-width{
        width: 70%;
    }
}

@media (max-width: 428px) {
    .custom-width{
        width: 100%;
    }
} */
</style>