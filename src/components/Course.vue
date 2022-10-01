<template>
    <div>
        <div class="row mx-auto py-3 course-card">
            <div :class=" xs_col + ' col-sm-5 col-md-4 custom-border custom-left-border text-center pt-4 d-flex flex-column justify-content-start'">
                <img v-lazy="require(`@/assets/images/${image}`)" class="d-block mx-auto course-img card-img-top" height="170">
                <div class="dropdown">
                    <a :href="`#collapse${title.replace(/\s/g, '')}`" class="btn btn-outline-primary custom-button mt-3" data-toggle="collapse" :data-target="`#collapse${title.replace(/\s/g, '')}`">
                        Program Details
                    </a>

                </div>
                <div class="mt-auto">
                    <hr class="mt-5">
                    <p class="small-text">Taught by:</p>
                    <p class="lead">{{sponsore}}</p>
                </div>
            </div>
            <div :class="xs_col + ' col-sm-7 col-md-8 custom-border custom-right-border pt-4'">
                <div class="bg-bar d-flex"></div>
                <div class="row d-flex flex-row h-100">
                    <div class="col-12 d-flex flex-column justify-content-start">
                        <h5 class="font-light">{{category}}</h5>
                        <h3 class="course-title">{{title}}</h3>
                        <p class="course-text mt-4">
                            {{overview}}
                        </p>
                    </div>
                    <div class="col-12 justify-content-around align-items-center d-flex details-bar text-center">
                        <p class="bar-title">{{level}}</p>
                        <p class="bar-title">{{duration}}</p>
                    </div>
                        <div class="col-12 mt-2 d-flex flex-column align-self-end">
                            <div class="course-footer ml-3">
                                <h6 class="custom-title">
                                    Skills Covered
                                </h6>
                                <p class="course-text">{{skills}}</p>
                                <h6 class="custom-title">
                                    Prerequisites
                                </h6>
                                <p class="course-text">{{pre}}</p>
                            </div>
                        </div>
                        <div class="collapse" :id="`collapse${title.replace(/\s/g, '')}`">
                        <div class="col-12 d-flex flex-column align-self-end" >
                            <div class="course-footer ml-3">
                                <h6 class="custom-title">
                                    Program Details
                                </h6>
                                <div class="course-text">
                                    <p>
                                        This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
                                    </p>
                                    <p>
                                        This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
                                    </p>
                                    <p>
                                        We cover a wide variety of topics, including:
                                    </p>
                                    <ul><li><p>Command Line Basics</p></li><li><p>Installing Python</p></li><li><p>Running Python Code</p></li><li><p>Strings</p></li><li><p>Lists&nbsp;</p></li><li><p>Dictionaries</p></li><li><p>Tuples</p></li><li><p>Sets</p></li><li><p>Number Data Types</p></li><li><p>Print Formatting</p></li><li><p>Functions</p></li><li><p>Scope</p></li><li><p>args/kwargs</p></li><li><p>Built-in Functions</p></li><li><p>Debugging and Error Handling</p></li><li><p>Modules</p></li><li><p>External Modules</p></li><li><p>Object Oriented Programming</p></li><li><p>Inheritance</p></li><li><p>Polymorphism</p></li><li><p>File I/O</p></li><li><p>Advanced Methods</p></li><li><p>Unit Tests</p></li><li><p>and much more!</p></li></ul>
                                </div>
                            </div>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['category', 'title', 'image', 'programDetails', 'overview', 'level', 'duration', 'skills', 'pre', 'sponsore'],
        data() {
            return {
                xs_col: window.innerWidth < 444 ? 'col-12' : 'col-6',
            }
        }
    }
</script>

<style>
@font-face {
  font-family: "Playfair Display";
  src: local("Playfair Diaplay"),
   url('../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf') format("truetype");
}
    .collapsing {
        transition: height 1s ease;
    }
    .course-card {
        margin: 2em auto 2em auto;
        /* background: #ffffff;
        background: -webkit-linear-gradient(to top, #f1f1f1, #ffffff);
        background: linear-gradient(to top, #f1f1f1, #ffffff) */
    }

    .py-custom {
        padding-top: 2.5em;
        padding-bottom: 2.5em;
    }


    .custom-button {
        margin: 1em auto 0em auto;
        display: block !important;
        width: 75%;
        font-size: 0.85em !important;
        
    }

    .dropdown-menu {
        width: 200% !important;
    }
    .dropdown-custom {
        margin-bottom: 0px;
        font-size: 15px;
        color: rgb(71, 71, 71, 0.7);
        font-weight: bold;
        font-family: fangsong;
        padding: 0.5em;
    }
    
    .course-img {
        border-radius: 15px;
        object-fit: cover;
    }

    .custom-title {
        color: #5495e4;
        text-transform: uppercase;
        font-weight: bolder;
        
    }

    .details-bar {
        border-top: 0.5px solid;
        border-bottom: 0.5px solid;
        border-color: #5B86E5;
    }

    .font-light {
        color: rgb(228 228 228);
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        font-family: "Playfair Display";
        letter-spacing: 1.5px;
    }

    .custom-border {
        border: 1px solid #ccc;
    }

    .custom-left-border {
        border-radius: 10px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .custom-right-border {
        border-radius: 10px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    .course-text {
        font-size: 15px;
        color: rgb(71, 71, 71, 0.7);
        font-weight: bold;
        font-family: fangsong;
    }

    .course-title {
        font-weight: bolder;
        font-size: 24px;
        color: white;
        
    }

    .btn-primary {
        background-color: #0559b3 !important;
    }
    .btn-outline-primary {
        /* color: #007bff; */
        /* border-color: #007bff; */
        color: #fff;
        background-color: #5495e4;
        border-color: #007bff;
    }

    .btn-outline-primary:hover {
        color: #5495e4;
        background-color: white;
        border-color: #5495e4;
    }

    .btn-outline-primary:not(:disabled):not(.disabled):active, .show>.btn-outline-primary.dropdown-toggle {
        color: #fff;
        background-color: #5495e4;
        border-color: #007bff;
    }

    .bar-title {
        color: #5495e4;
        font-size: 16px;
        margin: 0.5em;
        font-family: fangsong;
    }

    .small-text {
        font-size: 14px;
    }


@media (max-width: 443px) {
    .dropdown-menu {
        width: 100% !important;
    }

}

.bg-bar {
    border: 0.5px solid darkcyan;
    height: 6em;
    width: 100.25% !important;
    margin-left: -16px;
    border-bottom-right-radius: 50px;
    /* background-color: red; */
    margin-top: -25px;
    /* transform: inherit; */
    position: absolute;
    background: #36D1DC;
    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
    background: linear-gradient(to right, #5B86E5, #36D1DC);
}

</style>