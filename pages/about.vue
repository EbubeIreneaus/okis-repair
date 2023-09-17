<script setup>

</script>

<template>
    <main>
        <div class="main">
            <div>
                <h2 class="text-center text-light">About Us</h2>
               <router-link to="/" class="text-danger">Home</router-link> &nbsp; <span>/</span> &nbsp;
               <router-link to="/about">About</router-link> &nbsp;
            </div>
        </div>
        <about />
        <technicians />
    </main>
</template>

<style  scoped>
.main {
    position: relative;
    height: 200px;
    background-image: url('~/assets/img/carousel-bg-1.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main a, .main span{
    font-size: 1.2em;
    color: white;
    text-decoration: none;
}
.main::before {
    content: '';
    position: absolute;
    top: o;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .7;
}
.main div{
z-index: 9;
}

</style>
