<script  setup>
const primary_color = usePrimaryColor()
const h_section_one = ref(true) // hide section one by default
const counter = ref(1)
const listenScroll = () => {
   
    const win_height = window.innerHeight
    const sec_one = document.getElementById("sec-one").getBoundingClientRect()
    const sec_two = document.getElementById("sec-two").getBoundingClientRect()
    let sec_one_top = sec_one.top
    let sec_two_top = sec_two.top
    let sec_one_bottom = sec_one.bottom
    let sec_two_bottom = sec_two.bottom

    if (sec_two_top + 100 < win_height && sec_two_bottom > 0) {
        let interval = setInterval(()=>{
            if(counter.value < 1234){
                counter.value +=2
            }else{
                clearInterval(interval)
            }
        }, 5)
        window.removeEventListener('scroll', listenScroll)
    }

    if (sec_one_top + 100 < win_height && sec_one_bottom > 0) {
        const container = document.getElementsByClassName('first-content')
        for (let i = 0; i < container.length; i++) {
            container[i].style.display = 'flex'
        }
        // window.removeEventListener('scroll', listenScroll)
    }
}
onMounted(() => {
    window.addEventListener('scroll', listenScroll)
})
</script>

<template>
    <main>
        <section id="sec-one" class="one">
            <div class="d-flex flex-lg-row flex-column gap-2 main-first-sec ">
                <div class="col-lg-4 col-12 first-content animate__animated animate__slideInUp ">
                    <i class="fa fa-certificate"></i>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore?
                        </p>
                        <nuxt-link to="#">Read more</nuxt-link>
                    </div>
                </div>

                <div class="col-lg-4 col-12 bg-light first-content shadow animate__animated animate__slideInUp">
                    <i class="fa fa-gears"></i>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore?
                        </p>
                        <nuxt-link to="#">Read more</nuxt-link>
                    </div>
                </div>

                <div class="col-lg-4 col-12 first-content animate__animated animate__slideInUp">
                    <i class="fa fa-tools"></i>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore?
                        </p>
                        <nuxt-link to="#">Read more</nuxt-link>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-lg-row flex-column main-sec-cont gap-2">
                <div class="col-lg-6 col-12 position-relative">
                    <img src="~/assets/img/about.jpg" alt="">
                </div>
                <div class="col-lg-6 col-12">
                    <b>// About Us //</b>
                    <h1><span class="text-danger">OkisRepair</span> Is The Best Place For Your Auto Care</h1>
                    <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                        sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div class="d-flex flex-list">
                        <span>1</span>
                        <p>
                            <b>
                                Professional & Expert
                            </b><br>
                            <span>
                                Diam dolor diam ipsum sit amet diam et eos
                            </span>
                        </p>
                    </div>
                    <div class="d-flex flex-list">
                        <span>2</span>
                        <p>
                            <b>
                                Quality Servicing Center
                            </b><br>
                            <span>
                                Diam dolor diam ipsum sit amet diam et eos
                            </span>
                        </p>
                    </div>
                    <div class="d-flex flex-list">
                        <span>3</span>
                        <p>
                            <b>
                                Awards Winning Workers
                            </b><br>
                            <span>
                                Diam dolor diam ipsum sit amet diam et eos
                            </span>
                        </p>
                    </div>

                    <button-lg :color="'white'" class="" :background-color="primary_color">Learn More
                        <i class="fas fa-arrow-right text-light" style="font-size:1em"></i></button-lg>
                </div>
            </div>
        </section>

        <section id="sec-two" class="two border">
            <div class="client-work">
                <img src="~assets/img/carousel-bg-1.jpg" alt="">
                <div class="client-work-content">
                    <div class="client-work-text">
                        <p><i class="fa fa-check"></i></p>
                        <h2 class="yoe">{{ counter }}</h2>
                        <p>years of experience</p>
                    </div>
                    <div class="client-work-text">
                        <p><i class="fa fa-check"></i></p>
                        <h2 class="yoe">{{counter}}</h2>
                        <p>Expert Technicians</p>
                    </div>
                    <div class="client-work-text">
                        <p><i class="fa fa-users"></i></p>
                        <h2 class="yoe">{{ counter }}</h2>
                        <p>Satisfied Client</p>
                    </div>
                    <div class="client-work-text">
                        <p><i class="fa fa-car"></i></p>
                        <h2 class="yoe">{{ counter }}</h2>
                        <p>Completed Project</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

section[class ^="one"] {
    width: 80%;
    margin: auto;

}

.first-content {
    display: none;
}

.main-first-sec {
    overflow: hidden;
    margin: 50px 0;
}

section[class ^="one"] .first-content {
    margin: 40px 0;
    padding: 60px 25px;
    /* animation: sec_1_slide 1s ease ; */
}

section[class ^="one"] .first-content i {
    padding: 5px 10px;
    font-size: 2.5em;
    color: v-bind(primary_color);
}

.main-sec-cont {
    margin: 55px 0px;
}

.main-sec-cont .col-12 b:first-child {
    color: v-bind(primary_color);
}

.main-sec-cont .col-12:last-child {
    padding: 10px !important;
}

.main-sec-cont img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
}

.flex-list {
    margin: 20px 5px;
    color: black;
}

.flex-list span:first-child {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    background-color: whitesmoke;
    margin: 10px;
}

.client-work {
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.client-work img {
    height: 100% !important;
    object-fit: cover;
    object-position: center;
}

.client-work:before {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.client-work-content {
    position: absolute;
    top: 0;
    z-index: 99;
    width: 75%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 20px;
    color: white;
    place-items: center;
}

.client-work-text {
    text-align: center;
}

.client-work-text i {
    font-size: xx-large;
}

@media screen and (max-width:992px) {
    .client-work {
    height: fit-content !important;
  
}

    .client-work-content {

        grid-template-columns: 50% 50%;
        width: 80%;
    }
}
@media screen and (max-width:465px) {
    .client-work {
    height: 700px !important;
  
}

    .client-work-content {

        grid-template-columns: 100%;
        width: 80%;
    }
}
</style>
