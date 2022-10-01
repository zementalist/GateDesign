<template>
    <div id="courses">
        <div class="bg-container">
            <img v-lazy="require('@/assets/images/bg-98.jpg')" class="">
            <div class="body-container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="course-title">Courses</h1>
                    </div>
                </div>
            </div>

        </div>

        <div class="my-5">
            <div class="container-fluid">

                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
                        <Course
                        image='bg4.jpg'
                        programDetails='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        sponsore='Expelliarmus'
                        category='School of Data Science'
                        title='Data Scientist'
                        overview='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        level='Intermediate'
                        duration='5 Months'
                        skills='Data Modeling, Data Pipelines, Data leaks, Spark, Airflow'
                        pre="Intermediate Python & SQL"
                        ></Course>
                        
                        <Course
                        image='bg4.jpg'
                        programDetails='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        sponsore='Alohomora'
                        category='School of Data Science'
                        title='Data Engineer'
                        overview='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        level='Intermediate'
                        duration='5 Months'
                        skills='Data Modeling, Data Pipelines, Data leaks, Spark, Airflow'
                        pre="Intermediate Python & SQL"
                        ></Course>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Course from '../components/Course.vue';

    export default {
        components: {
            Course,
        },
        mounted() {
            document.documentElement.scrollIntoView();
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
        
    }

    .bg-container {
        position: relative;
        
    }

    .body-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .course-title {
        color: white;
        font-size: 7vw;
        font-family: Roboto;
        text-shadow: -2px 0px 5px #444;
    }
</style>