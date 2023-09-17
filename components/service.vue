<script setup>
const service = ref('dt')
</script>

<template>
    <main>
        <p class="text-center text-danger"><strong>//OUR SERVICE//</strong></p>
        <h2 class="text-center">Explore Our Services</h2>

        <div class="main-content shadow p-2">
            <div class="mt-5">
                <div class=" flex1 d-flex flex-column gap-4">
                    <button :class="{ 'bg-danger': service == 'dt' }" @click="service = 'dt'">
                        <i class="fa fa-car text-danger"></i> Diagnonistic Test</button>

                    <button :class="{ 'bg-danger': service == 'es' }" @click="service = 'es'"><i
                            class="fa fa-car text-danger"></i> Engine Servicing</button>

                    <button :class="{ 'bg-danger': service == 'tr' }" @click="service = 'tr'"><i
                            class="	fas fa-truck-monster text-danger"></i> Tire Replacement</button>

                    <button :class="{ 'bg-danger': service == 'oc' }" @click="service = 'oc'"><i
                            class="fas fa-oil-can text-danger"></i> Oil Changing</button>
                </div>

                <div class="flex2">
                    <Transition name="service">
                        <div class="flex2-1 border" v-if="service == 'dt'">

                            <img src="~/assets/img/service-1.jpg" alt="">

                            <div class=" flex2-1-1 px-3">
                                <h3 class="text-primary mb-3">
                                    15 Years Of Experience In Auto Servicing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est,
                                    dolor facere harum maiores voluptatibus explicabo culpa officiis atque!
                                    Voluptatibus.
                                </p>
                                <ul>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Quality Servicing</li>
                                    <li><i class="fas fa-check-square"></i> Expert Workers</li>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Modern Equipment</li>
                                </ul>
                                <button-lg class="" :background-color="'red'">Learn More
                                    <i class="fas fa-arrow-right text-light" style="font-size:1em"></i></button-lg>
                            </div>
                        </div>
                    </Transition>
                    <Transition name="service">
                        <div class="flex2-1 border" v-if="service == 'es'">

                            <img src="~/assets/img/service-2.jpg" alt="">

                            <div class=" flex2-1-1 px-3">
                                <h3 class="text-primary mb-3">
                                    15 Years Of Experience In Auto Servicing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est,
                                    dolor facere harum maiores voluptatibus explicabo culpa officiis atque!
                                    Voluptatibus.
                                </p>
                                <ul>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Quality Servicing</li>
                                    <li><i class="fas fa-check-square"></i> Expert Workers</li>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Modern Equipment</li>
                                </ul>
                                <button-lg class="" :background-color="'red'">Learn More
                                    <i class="fas fa-arrow-right text-light" style="font-size:1em"></i></button-lg>
                            </div>
                        </div>
                    </Transition>
                    <Transition name="service">
                        <div class="flex2-1 border" v-if="service == 'tr'">

                            <img src="~/assets/img/service-3.jpg" alt="">

                            <div class=" flex2-1-1 px-3">
                                <h3 class="text-primary mb-3">
                                    15 Years Of Experience In Auto Servicing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est,
                                    dolor facere harum maiores voluptatibus explicabo culpa officiis atque!
                                    Voluptatibus.
                                </p>
                                <ul>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Quality Servicing</li>
                                    <li><i class="fas fa-check-square"></i> Expert Workers</li>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Modern Equipment</li>
                                </ul>
                                <button-lg class="" :background-color="'red'">Learn More
                                    <i class="fas fa-arrow-right text-light" style="font-size:1em"></i></button-lg>
                            </div>
                        </div>
                    </Transition>
                    <Transition name="service">
                        <div class="flex2-1 border" v-if="service == 'oc'">

                            <img src="~/assets/img/service-4.jpg" alt="">

                            <div class=" flex2-1-1 px-3">
                                <h3 class="text-primary mb-3">
                                    15 Years Of Experience In Auto Servicing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est,
                                    dolor facere harum maiores voluptatibus explicabo culpa officiis atque!
                                    Voluptatibus.
                                </p>
                                <ul>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Quality Servicing</li>
                                    <li><i class="fas fa-check-square"></i> Expert Workers</li>
                                    <li class="my-2"><i class="fas fa-check-square"></i> Modern Equipment</li>
                                </ul>
                                <button-lg class="" :background-color="'red'">Learn More
                                    <i class="fas fa-arrow-right text-light" style="font-size:1em"></i></button-lg>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>

        <div class="content2 w-100">
            <img src="~/assets/img/carousel-bg-2.jpg" alt="">
            <div class="content2-content">
                <div class="">
                    <h1>Certified and Award Winning Car Repair Service Provider</h1>
                    <p>
                        Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum.
                        Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt
                        voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt
                        lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                        sed.
                    </p>
                </div>
                <div class="form-sec">
                    <h2 class="text-center mt-2">Book For A Service</h2>
                    <form class="mt-4">
                        <!-- Name input -->
                        <div class="row mb-3">
                            <div class="form-floating col-lg-6 col-12 mb-3">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" name="email">
                                <label for="name" class="text-dark">Your Name</label>
                            </div>

                            <!-- Email input -->
                            <div class="form-floating col-lg-6 col-12 ">
                                <input type="text" class="form-control" id="email" placeholder="Your Email" name="email">
                                <label for="email" class="text-dark">Your Email</label>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="form-floating col-lg-6 col-12 mb-3">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" name="email">
                                <label for="name" class="text-dark">Service</label>
                            </div>

                            <!-- Email input -->
                            <div class="form-floating col-lg-6 col-12">
                                <input type="text" class="form-control" id="email" placeholder="Your Email" name="email">
                                <label for="email" class="text-dark">Email</label>
                            </div>
                        </div>

                        <!-- Message input -->
                        <div class="form-outline mb-2">
                            <textarea class="form-control" id="form4Example3" rows="2"
                                placeholder="Special request"></textarea>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn  py-3">Book Now</button>
                    </form>
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

li {
    list-style-type: none;
}

main {
    margin: 100px 0px;
}

.main-content {
    width: 85%;
    margin: auto;
}

.main-content div:first-child {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 10px;
    overflow: hidden;
}

.flex1 button {
    width: 100%;
    height: 90px;
    border: none;
    padding: 5px 20px;
    font-weight: 700;
    font-size: 1.5em;
    text-align: left;
    color: rgb(8, 8, 70);
}

.flex1 button:hover {
    background-color: rgb(204, 39, 39);
}

.flex2-1 {
    display: grid;
    grid-template-columns: repeat(2, 50%) !important;
    column-gap: 10px;
}

.flex2-1-1 ul {
    margin: 20px 0;
    padding: 0%;
}

.flex2-1-1 ul li i {
    color: green;
}

.service-enter-from,
.service-leave-to {
    opacity: 0;
}

.service-leave-from,
.service-enter-to {
    opacity: 1;
}

.service-leave-active {
    transition: all .3s ease;
}

.service-enter-active {
    transition: all .6s ease;
}

.content2 {
    height: 450px;
    position: relative;
    margin: 100px 0;
    display: flex;
    justify-content: center;
}

.content2::before {
    content: 'fffffffff';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, .7);
}

.content2-content {
    position: absolute;
    height: 100%;
    width: 80%;
    z-index: 222;
    top: 0;
    color: white;
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: center;
    gap: 10px;

}

.form-sec {
    background-color: red;
    height: 100%;
    width: 100%;
    padding: 30px;
}

.form-sec input {
    border-radius: 0%;
    outline: none !important;
}

.form-sec button {
    width: 100%;
    background-color: rgb(4, 4, 66);
    color: white;
}

/* @media screen and (max-width:992px) {
    .client-work {
    height: fit-content !important;
  
}

    .client-work-content {

        grid-template-columns: 50% 50%;
        width: 80%;
    }
} */
@media screen and (max-width:768px) {
    .main-content {
        width: 100%;

    }

    .main-content div:first-child {
        display: grid;
        grid-template-columns: 100%;
        gap: 10px;
    }

    .flex2-1 {
        display: grid;
        grid-template-columns: 50% 50%!important;
        column-gap: 10px;
    }
    .content2 {
    height: 1000px;
       
    }
    .content2-content {
        width: 100%;
        grid-template-columns: 100%;
        padding: 10px 30px;
    }

}
@media screen and (max-width:465px) {

    .flex2-1 {
        grid-template-columns: 100% !important;
    }
   
}

</style>
