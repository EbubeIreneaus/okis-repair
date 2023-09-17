<script  setup>
const primary_color = usePrimaryColor()
</script>

<template>
    <main>
        <div class="carousel slide" id="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="carousel-content">
                        <img src="~/assets/img/carousel-bg-1.jpg" alt="">
                        <div class="carouse-text">
                            <div class="row w-100 align-items-center">
                                <div class="col-lg-6 col-12 c-text">
                                    <p>// CAR SERVICING //</p>
                                    <h1 class="animate__animated animate__slideInDown">Qualified Car Repair Service Center</h1>
                                    <button-lg class="animate__animated animate__slideInLeft" :color="'white'" :background-color="primary_color">Learn More</button-lg>
                                </div>
                                <div class="col-lg-6 col-1 ">
                                    <img src="~/assets/img/carousel-1.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item ">
                    <div class="carousel-content">
                        <img src="~/assets/img/carousel-bg-2.jpg" alt="">
                        <div class="carouse-text">
                            <div class="row w-100 align-items-center">
                                <div class="col-lg-6 col-12 c-text">
                                    <p>// CAR SERVICING //</p>
                                    <h1 class="text-bold w-74 animate__animated animate__slideInDown">Qualified Car Repair Service Center</h1>
                                    <button-lg :color="'white'" class=" animate__animated animate__slideInLeft" :background-color="primary_color">Learn More</button-lg>
                                </div>
                                <div class="col-lg-6 col-1 ">
                                    <img src="~/assets/img/carousel-2.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev c-btn" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button> 
               <button class="carousel-control-next c-btn" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>

        <about />

        <service />

        <technicians />
    </main>
</template>

<style  scoped>
.carousel-content {
    height: 100vh;
    position: relative;
}

.carousel-content::before {
    height: 100%;
    position: absolute;
    width: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
}

.carousel-content img {
    height: 100%;
    width: 100%;
    object-fit: cover;

}

.carouse-text {
    width: 90vw;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0%;
    left:5vw;
    color: white;
    z-index: 9;
    scale: .9;
}

.carouse-text img {
    scale: 0.7;

}
.c-text p, .c-text h1 {
    font-weight: bold;

}

.c-text h1 {
    font-size: 3em;
    margin-bottom: 20px;

}
.c-btn{
    position: absolute;
    z-index:99 ;
}

@media screen and (max-width:768px) {
    .c-text{
        text-align: center;
    }
    .c-text h1{
        font-size: 2em;
    }
}
</style>
