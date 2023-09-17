<script setup>
const primary_color = usePrimaryColor()
const nav_expand = () => {
    document.getElementById('nav-mobile').classList.toggle('nav-mobile-expand')
}
</script>

<template>
    <main>
        <header>
            <div class="head-sec d-flex justify-content-between align-items-center py-2 px-5 bg-light d-md-flex d-none">
                <div class="d-flex gap-3">
                    <small><i class="fa fa-map-marker text-danger"></i> Kubwa FCT Abuja, Nigeria</small>
                    <small><i class="fa fa-clock text-danger"></i> Mon-Fri: 09:00Am - 09:00Pm</small>
                </div>

                <div class="d-flex align-items-center gap-3">
                    <small><i class="fa fa-phone text-danger"></i>+234 806 198 2520</small>
                    <div class="d-flex social-icons">
                        <i class="fab fa-facebook-f border btn"></i>
                        <i class="fab fa-instagram border btn"></i>
                        <i class="fab fa-twitter border btn"></i>
                        <i class="fab fa-tiktok border btn"></i>
                    </div>
                </div>
            </div>
        </header>
        
                    <nav>
        
                        <div class=" d-flex justify-content-between align-items-center px-1 shadow nav">
                            <div class="logo ms-lg-5 ms-3 d-flex align-items-center">
                                <i class="fa fa-car ms-1" style="font-size: x-large;"> </i> &nbsp;<b
                                    class="text-danger h2 d-lg-block d-none">OkisRepair</b>
                            </div>
            
                            <div class="d-flex align-items-center  nav-link position-relative p-2  me-lg-5">
            
                                <button class="btn border  border-dark d-lg-none px-4 py-2" @click="nav_expand"> <i
                                        class="fa fa-bars"></i></button>
            
                                <div class="d-lg-flex d-none gap-3 me-5">
                                    <nuxt-link to="/">Home</nuxt-link>
                                    <nuxt-link to="/about">About</nuxt-link>
                                    <nuxt-link to="/services">Service</nuxt-link>
                                    <nuxt-link to="/page">Pages</nuxt-link>
                                    <nuxt-link to="/contact">Contact</nuxt-link>
            
                                </div>
            
                            </div>
                        </div>
                        <div id="nav-mobile" class="d-flex flex-column d-lg-none gap-3 nav-link-mobile nav-link">
                            <nuxt-link to="/">Home</nuxt-link>
                            <nuxt-link to="/about">About</nuxt-link>
                            <nuxt-link to="/services">Service</nuxt-link>
                            <nuxt-link to="/page">Pages</nuxt-link>
                            <nuxt-link to="/contact">Contact</nuxt-link>
                        </div>
                    </nav>
        <slot></slot>

        <footer class="border">
            <div class="footer-content">
                <div>
                    <h3>Adresss</h3>
                    <p><i class="fa fa-map-marker"></i> Kubwa FCT Abuja, Nigeria</p>
                    <p><i class="fa fa-phone "></i> +234 806 198 2520</p>
                    <p><i class="fa fa-message"></i> info@okiscar.org</p>
                    <div class="d-flex social-icons">
                        <i class="fab fa-facebook-f border btn"></i>
                        <i class="fab fa-instagram border btn"></i>
                        <i class="fab fa-twitter border btn"></i>
                        <i class="fab fa-tiktok border btn"></i>
                    </div>
                </div>

                <div>
                    <h3>Opening Hours</h3>
                    <p class="mb-4">Monday-Friday:<br> 09:00Am - 09:00Pm</p>
                    <p>Saturday-Sunday:<br> 09:00Am - 05:00Pm</p>

                </div>
                <div>
                    <h2>Service</h2>
                    <ul>
                        <li>&gt; &nbsp; Diagnostic Test</li>
                        <li>&gt; &nbsp; Engine Servicing</li>
                        <li>&gt; &nbsp; Tires Replacement</li>
                        <li>&gt; &nbsp; Oil Changing</li>
                        <li>&gt; &nbsp; Vaccum Cleaning</li>
                    </ul>
                </div>
                <div>
                    <h2>Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" name="formId1" id="formId1" placeholder="">
                        <label for="formId1" class="text-dark">Email</label>
                    </div>
                </div>

            </div>
        </footer>
    </main>
</template>

<style scoped>
main {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

a {
    text-decoration: none;
}
nav{
    position: sticky !important;
    display: block;
    top: 0%;
    z-index: 999;
    background-color: white;
}

.nav-link a {
    padding: 10px 20px;
    font-size: larger;
    color: black;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.nav-link-mobile a {
    padding: 0px;
}

.nav-link a:hover {
    color: v-bind(primary_color);
}

.nav-link .router-link-active {
    color: v-bind(primary_color);
}

header i, nav i {
    color: v-bind(primary_color);
    background-color: white;
}

#nav-mobile {
    height: 0px;
    overflow: hidden;
    padding: 5px 15px;
    transition: all .5s ease;
}

.nav-mobile-expand {
    height: 250px !important;
}


footer {
    background-image: url('~/assets/img/carousel-bg-1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    padding: 100px 70px !important;
    position: relative;

}

footer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(19, 17, 17, 0.8);
    /* Adjust the opacity by changing the last value (0.5 in this example) */
}

.footer-content {
    position: relative;
    color: white;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, 25%);
}

.footer-content .social-icons i{
margin: 2px;
padding: 10px 12px;
border-radius: 50%;
background-color: transparent;
color: white;
}

.footer-content ul {
    padding: 0%;
}

.footer-content li {
    list-style: none;
    padding-bottom: 5px;
    cursor: pointer;
    transition: all .5s ease;
}
.footer-content li:hover {
    transform: scaleX(1.1);
}

@media screen and (max-width:768px) {
    footer{
        padding:70px 20px !important;
    }
    .footer-content {
        display: grid;
    grid-template-columns: 50% 50% !important;
        row-gap: 30px;
}

}@media screen and (max-width:640px) {
    footer{
        padding:70px 20px !important;
    }
    .footer-content {
        display: grid;
    grid-template-columns: 100% !important;
        row-gap: 30px;
}
}
</style>
