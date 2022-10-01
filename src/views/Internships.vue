<template>
    <div id="courses">
        <div class="bg-container d-flex justify-content-center flex-row">
            <img src="https://mitterrutzner-partner.eu/wp-content/uploads/2018/12/ueber-uns-1.jpg" class="">
                <div class="row custom-bg-title w-100 d-flex text-center">
                    <div class="col-12">
                        <h1 class="course-title">Internships</h1>
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
                        sponsore='Avada Kedavra'
                        category='School of AI'
                        title='AI Internship'
                        overview='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        level='Intermediate'
                        duration='6 Months'
                        skills='Data Modeling, Data leaks, Classification, Regression'
                        pre="Intermediate Python & SQL"
                        ></Course>

                        <Course
                        image='bg4.jpg'
                        programDetails='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        sponsore='Expecto patronum'
                        category='School of Web Development'
                        title='Web Internship'
                        overview='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        level='Intermediate'
                        duration='3 Months'
                        skills='Data Modeling, Data leaks, Classification, Regression'
                        pre="Intermediate Python & SQL"
                        ></Course>

                        <Course
                        image='bg4.jpg'
                        programDetails='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        sponsore='Accio'
                        category='Artificial Intelligence Department'
                        title='AI Mentorship'
                        overview='Data Engineering is the foundation for the new world of Big Data. Enroll now to build production-ready data infrastructure, an essential skill for advancing your data.'
                        level='Intermediate'
                        duration='-'
                        skills='Data Modeling, Data leaks, Classification, Regression'
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
        height: 50vh;
        
    }

    .bg-container {
        position: relative;
        
    }

    .custom-bg-title {
        position: absolute;
        top: 50%;
    }

    .course-title {
        color: white;
        font-size: 12vh;
        font-family: Roboto;
        text-shadow: -2px 0px 5px #444;
    }

    @media (max-width: 468px) {
    .course-title {
        font-size: 9vh;
    }

}
</style>