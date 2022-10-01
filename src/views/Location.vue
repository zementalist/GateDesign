<template>
    <div class="container-fluid custom-width" style="overflow:hidden;">
        <div class="row py-2">
            <div class="col-12 text-center py-4">
                <h1 class="display-4 wow animate__animated animate__lightSpeedInRight">Our Location</h1>
            </div>
            <div class="col-lg-6 mt-2 my-auto">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae viverra ante, ut elementum nulla. Etiam at ullamcorper sem, vitae hendrerit ex. Pellentesque lacus neque, blandit id risus id, interdum commodo lectus. Etiam vitae augue quis metus consectetur sagittis vitae eget nisi. Etiam ac orci vel nunc viverra posuere. Mauris scelerisque eros sit amet sem ultricies consectetur. Integer consequat ut lacus sodales porttitor.
                </p>
            </div>

            <div class="col-lg-6 mt-2 my-5">
                <GmapMap :center="markers[0].position" :zoom="10" map-type-id="terrain"
                    style="height:300px">
                    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                        @click="center=m.position" />
                </GmapMap>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                markers: [{
                    position: {
                        lat: 39.8871069,
                        lng: -74.9245154
                    }
                }]
            }
        }
    }
</script>

<style scoped>
p {
    font-size: 18px;
}

.custom-width {
    width: 75%;
}
</style>