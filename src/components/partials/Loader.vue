<script>


</script>

<template>

    <div class="loader"></div>

</template>

<style lang="scss" scoped>

    /* HTML: <div class="loader"></div> */
    .loader {
    width: calc(80px / cos(45deg));
    height: 14px;
    background: repeating-linear-gradient(-45deg,hsla(160, 100%, 37%, 1) 0 15px,#0000 0 20px) left/200% 100%;
    animation: l3 2s infinite linear;
    }
    @keyframes l3 {
        100% {background-position:right}
    }

</style>