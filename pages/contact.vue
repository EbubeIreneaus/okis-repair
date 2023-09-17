<script setup>

const listenScroll = () => {
    // alert("yes")
    const win_height = window.innerHeight
    const sec_one = document.getElementById("form-sec").getBoundingClientRect()
    let sec_one_top = sec_one.top

    if (sec_one_top + 20 < win_height && sec_one.bottom > 0) {
        
        document.getElementById("form").classList.remove('d-none')
        window.removeEventListener('scroll', listenScroll)
    }
}
onMounted(() => {
    window.addEventListener('scroll', listenScroll)
})
</script>

<template>
    <div class="main">
        <div>
            <h2 class="text-center text-light">Contact Us</h2>
            <router-link to="/" class="text-danger">Home</router-link> &nbsp; <span>/</span> &nbsp;
            <router-link to="/contact">Contact</router-link> &nbsp;
        </div>
    </div>
    <div class="sec-2">
       <div class="animate__animated animate__slideInUp">
        <p class="text-center text-danger"><b>//Contact Us//</b></p>
        <h2 class="text-center text-secondary">Contact Us For Any Query</h2>
       </div>
       
       
       <div class="d-flex flex-md-row flex-column gap-3 justify-content-center align-items-center info">
            <div class="flex-item bg-light w-100 py-3">
                <h4>//BOOKINGS//</h4>
                <p>
                    <i class="fa fa-envelope text-danger"></i> booking@domain.com
                </p>
            </div>
            <div class="flex-item bg-light w-100 py-3">
                <h4>//GENERAL//</h4>
                <p>
                    <i class="fa fa-envelope text-danger"></i> info@domain.com
                </p>
            </div>
            <div class="flex-item bg-light w-100 py-3">
                <h4>//TECHNICAL//</h4>
                <p>
                    <i class="fa fa-envelope text-danger"></i> info@domain.com
                </p>
            </div>
        </div>

        <div class="d-flex flex-md-row flex-column map-form gap-3">
            <div class="sec-3-item w-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32352795.23995417!2d25.6129508!3d8.1709027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a06c0a948cf5d5%3A0x108270c99e90f0b3!2sAfrica!5e0!3m2!1sen!2sng!4v1694908764171!5m2!1sen!2sng"
                    id="map-frame" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div id="form-sec" class="sec-3-item w-100 form-sec ">
            
                <form action="" id="form" class="d-none animate__animated animate__slideInUp" >
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
                                <label for="email" class="text-dark">Country</label>
                            </div>
                        </div>

                        <!-- Message input -->
                        <div class="form-outline mb-2">
                            <textarea class="form-control" id="form4Example3" rows="4"
                                placeholder="Special request"></textarea>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn  py-3">Book Now</button>

                </form>
            </div>
        </div>
    </div>
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

.main a,
.main span {
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

.main div {
    z-index: 9;
}

.sec-2 {
    margin: 100px 10px 20px 10px;
}

.info, .map-form {
    width: 80%;
    margin: auto;
    margin-top: 40px;
}

.flex-item h4,
.flex-item i {
    margin-left: 15px;
}

.flex-item h4 {
    font-size: larger;
    font-weight: 700;
    color: rgb(17, 17, 77);
}

.map-form{
    /* min-height: 500px; */
  padding: 50px 0;
}

#map-frame {
    width: 100%;
    min-height: 300px;
    height: 100%;
}
.form-sec {
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
    background-color: rgb(185, 44, 44);
    color: white;
}
</style>
