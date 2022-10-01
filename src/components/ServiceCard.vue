<template>
    <div class="card align-items-center my-2 text-dark p-3" :style=" 'border-top-color:' + themeColor + ';' ">
        <i :class="'icon icon-service ' + icon" :style="'color:'+ themeColor +';'"></i>
        <div class="card-body">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text pt-1">{{body}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'body', 'icon', 'themeColor']
    }
</script>

<style scoped>
    .card {
        border: 1px solid #ccc;
        transition-duration: 500ms;
        box-shadow: 0px 1px 3px #999;
        border-radius: 5px;
        border-top-width: 3px;
    }

    .card:hover {
        box-shadow: 4px 4px 5px #555;
        transform: scale(1.1);
        transition-duration: 500ms;
    }

    .card-title {
        font-size: 18px;
        font-weight: 900 !important;
    }

    .card-text {
        font-size: 16px;
    }

    .icon {
        font-size: 3em;
    }

    .icon-service {
        margin-top: 10px;
    }

    /* @media (max-width: 1100px) {
        .card-title {
            font-size: 16px;
        }
        .card-text {
            font-size: 14px;;
        }
    } */

</style>