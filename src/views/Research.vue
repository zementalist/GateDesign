<template>
    <div class="my-5" id="research">
        <div class="container-fluid custom-width">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Welcome to Research</h1>
                    <p class="lead">GatesBay focuses on many research fields related to artificial intelligence.
                        <br>Our main fields of research are:
                    </p>
                </div>
            </div>
            <hr class="mt-5">

            <div class="research-subject">
                 <div class="row justify-content-end">
                <div class="col-12 col-md-10 ">
                    <h4><span class="point">&#8226;</span> Research in <span class="r-field">Lorem Ipsum</span>:</h4>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-12 col-md-8">
                    <p class="-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae viverra ante, ut
                        elementum nulla. Etiam at ullamcorper sem, vitae hendrerit ex. Pellentesque lacus neque,
                        blandit id risus id, interdum commodo lectus. Etiam vitae augue quis metus consectetur
                        sagittis vitae eget nisi. Etiam ac orci vel nunc viverra posuere. Mauris scelerisque eros
                        sit amet sem ultricies consectetur. Integer consequat ut lacus sodales porttitor.
                    </p>
                </div>
            </div>
            </div>

            <div class="research-subject">
                 <div class="row justify-content-end">
                <div class="col-12 col-md-10 ">
                    <h4><span class="point">&#8226;</span> Research in <span class="r-field">Lorem Ipsum</span>:</h4>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-12 col-md-8">
                    <p class="-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae viverra ante, ut
                        elementum nulla. Etiam at ullamcorper sem, vitae hendrerit ex. Pellentesque lacus neque,
                        blandit id risus id, interdum commodo lectus. Etiam vitae augue quis metus consectetur
                        sagittis vitae eget nisi. Etiam ac orci vel nunc viverra posuere. Mauris scelerisque eros
                        sit amet sem ultricies consectetur. Integer consequat ut lacus sodales porttitor.
                    </p>
                </div>
            </div>
            </div>

            <div class="research-subject">
                 <div class="row justify-content-end">
                <div class="col-12 col-md-10 ">
                    <h4><span class="point">&#8226;</span> Research in <span class="r-field">Lorem Ipsum</span>:</h4>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-12 col-md-8">
                    <p class="-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae viverra ante, ut
                        elementum nulla. Etiam at ullamcorper sem, vitae hendrerit ex. Pellentesque lacus neque,
                        blandit id risus id, interdum commodo lectus. Etiam vitae augue quis metus consectetur
                        sagittis vitae eget nisi. Etiam ac orci vel nunc viverra posuere. Mauris scelerisque eros
                        sit amet sem ultricies consectetur. Integer consequat ut lacus sodales porttitor.
                    </p>
                </div>
            </div>
            </div>

        
        <div class="row text-center">
            <div class="col-12">
                <p class="lead">
                    To know more about our research and for contribution or dontation please contact us at lorem@gatesbay.com
                </p>
            </div>
            <div class="col-12">
                <p class="lead">
                    You don't need necessarily have to be a researcher in the mentioned fields, we are also accepting any valuable researches.
                </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.documentElement.scrollIntoView();
        }
    }
</script>

<style scoped>

    .top-bg {
        widows: 100%;
        height: 100%;
    }
    .research-subject {
        margin: 5em 0em 5em 0em;
    }

    .-sm {
        margin-left: 2em;
    }

    .r-field {
        font-weight: 700;
        text-decoration-line: underline;
    }
    
    .point {
        font-size: 24px;
    }
    .custom-width {
        width: 75%;
    }
    
@media (max-width: 992px) {
    .-sm {
        margin-left: 1em;
    }
}

@media (max-width: 768px) {
    .-sm {
        margin-left: 3em;
    }
}
</style>