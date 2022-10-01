<template>
    <!-- <div class="card mt-3" id="to-hover">
        <img v-lazy="require(`@/assets/images/${img}`)" class="card-img-top align-self-center mt-2">
        <div class="card-body  d-flex flex-column">
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">{{title}}</p>
            <ul class="social-icons my-auto" type="none" id="to-show">
                <li class="team-social-icon icon" v-if='facebook_url'>
                    <a :href='facebook_url'> <i class="fab fa-facebook"></i> </a>
                </li>
                <li class="team-social-icon icon" v-if='twitter_url'>
                    <a :href='facebook_url'> <i class="fab fa-twitter"></i> </a>
                </li>
                <li class="team-social-icon icon" v-if='linkedin_url'>
                    <a :href='linkedin_url'> <i class="fab fa-linkedin"></i> </a>
                </li>
                <li class="team-social-icon icon" v-if="github_url">
                    <a :href='github_url'> <i class="fab fa-github"></i> </a>
                </li>
            </ul>

        </div>
    </div> -->


    <div class="image-flip" id="to-hover">
        <div class="mainflip">
            <div class="frontside">
                <div class="card">
                    <div class="card-body text-center d-flex flex-column justify-content-between">
                        <p><img class=" img-fluid" v-lazy="require(`@/assets/images/${img}`)" :alt="name"></p>
                        <h4 class="card-title">{{name}}</h4>
                        <p class="card-text">{{title}}</p>
                        <ul class="social-icons my-auto" type="none" id="to-show">
                            <li class="team-social-icon icon" v-if='facebook_url'>
                                <a :href='facebook_url'> <i class="fab fa-facebook"></i> </a>
                            </li>
                            <li class="team-social-icon icon" v-if='twitter_url'>
                                <a :href='twitter_url'> <i class="fab fa-twitter"></i> </a>
                            </li>
                            <li class="team-social-icon icon" v-if='linkedin_url'>
                                <a :href='linkedin_url'> <i class="fab fa-linkedin"></i> </a>
                            </li>
                            <li class="team-social-icon icon" v-if="github_url">
                                <a :href='github_url'> <i class="fab fa-github"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ProfileCard',
        props: ['name', 'title', 'img', 'facebook_url', 'twitter_url', 'linkedin_url', 'github_url'],
    }
</script>

<style scoped>
    img {
        height: 200px;
        object-fit: cover;
    }

    .social-icons {
        padding: 0;
        display: flex;
        justify-content: center;
        margin-bottom: 0;

    }

    .social-icons li {
        display: inline;
    }

    .icon {
        margin: 0em 3% -0em 3%;
        font-size: 1.5em;
    }

    .fa-facebook {
        color: rgb(58, 85, 159);
    }

    .fa-github {
        color: #211F1F;
    }

    .fa-linkedin {
        color: #0e76a8;
    }

    .fa-twitter {
        color: rgb(80, 171, 241);
    }


    #to-show li:nth-child(1) {
        transition-delay: 0.2s;
    }

    #to-show li:nth-child(2) {
        transition-delay: 0.4s;
    }

    #to-show li:nth-child(3) {
        transition-delay: 0.6s;
    }

    #to-show li {
        transition: 1s;
        opacity: 0;
    }

    #to-hover:hover #to-show li {
        display: inline;
        opacity: 1;
        transition: 1s;
    }

    /* .card:hover img {
    margin-top: 4m !important;
} */

    .btn-primary:hover,
    .btn-primary:focus {
        background-color: #035b96;
        border-color: #035b96;
        box-shadow: none;
        outline: none;
    }

    .btn-primary {
        color: #fff;
        background-color: #035b96;
        border-color: #035b96;
    }

    section {
        padding: 60px 0;
    }

    section .section-title {
        text-align: center;
        color: #035b96;
        margin-bottom: 50px;
        text-transform: uppercase;
    }

    #team .card {
        border: none;
        background: #ffffff;
        -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
        -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
        box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    }





    .mainflip {
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -ms-transition: 1s;
        -moz-transition: 1s;
        -moz-transform: perspective(1000px);
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transition: 1s;
        transform-style: preserve-3d;
        position: relative;
    }

    .frontside {
        position: relative;
        -webkit-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        z-index: 2;
        /* margin-bottom: 30px; */
        -webkit-box-shadow: -4px -3px 9px -4px rgb(158 158 158);
        -moz-box-shadow: -4px -3px 9px -4px rgb(158 158 158);
        box-shadow: -4px -3px 9px -4px rgb(158 158 158);
    }



    .frontside
    {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -moz-transition: 1s;
        -moz-transform-style: preserve-3d;
        -o-transition: 1s;
        -o-transform-style: preserve-3d;
        -ms-transition: 1s;
        -ms-transform-style: preserve-3d;
        transition: 1s;
        transform-style: preserve-3d;
    }

    .frontside .card{
        min-height: 312px;
    }



    .frontside .card .card-title{
        color: #035b96 !important;
    }

    .frontside .card .card-body img {
        width: 120px;
        height: 120px;
        border-radius: 25px;
    }
</style>