<template>
    <div class="services-container pb-5" style="overflow:hidden;">
        <div class="container-fluid py-3" id="services" v-lazy:background-image="require('@/assets/images/bg8.jpg')">
            <div class="row text-center custom-width justify-content-center">

                <div class="col-12 py-5">
                    <h1 class="display-4 wow animate__animated animate__fadeInDown">Services</h1>
                    <p class="lead mt-4 wow animate__animated animate__fadeInUp">As an AI-based software solution
                        company, we provide lots of services related to AI and how to use it in your business.</p>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 wow animate__animated animate__fadeInDown" data-wow-duration="2s">
                    <ServiceCard
                    title="Learn on your schedule"
                    body="Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week"
                    icon="fas fa-briefcase"
                    themeColor="#00B0FD"
                    ></ServiceCard>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 wow animate__animated animate__fadeInUp" data-wow-duration="2s">
                    <ServiceCard
                    title="Learn on your schedule"
                    body="Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week"
                    icon="far fa-lightbulb"
                    themeColor="#FD9E00"
                    ></ServiceCard>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 wow animate__animated animate__fadeInDown" data-wow-duration="2s">
                    <ServiceCard
                    title="Learn on your schedule"
                    body="Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week"
                    icon="far fa-clock"
                    themeColor="#51d26e"
                    ></ServiceCard>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 wow animate__animated animate__fadeInUp" data-wow-duration="2s">
                    <ServiceCard
                    title="Learn on your schedule"
                    body="Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week"
                    icon="far fa-comments"
                    themeColor="#5651D2"
                    ></ServiceCard>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import ServiceCard from '../components/ServiceCard.vue';

export default {
    components: {
        ServiceCard
    }
}
</script>

<style scoped>
.custom-width {
    padding-left: 12.5%;
    padding-right: 12.5%;
}

</style>