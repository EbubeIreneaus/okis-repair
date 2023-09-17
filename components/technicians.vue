<script setup>
let display = ref(false) // not to display section by default
const listenScroll = () => {
    // alert("yes")
    const win_height = window.innerHeight
    const sec_one = document.getElementById("techSec").getBoundingClientRect()
    let sec_one_top = sec_one.top

    if (sec_one_top + 100 < win_height && sec_one.bottom > 0) {
        
       if(display.value = true){
        const tech = document.getElementsByClassName('tech')
        for (let index = 0; index < tech.length; index++) {
           tech[index].style.display='block'
            
        }
        window.removeEventListener('scroll', listenScroll)
       }
        
    }
}
onMounted(() => {
    window.addEventListener('scroll', listenScroll)
})

</script>

<template>
    <div id="techSec">
       
        <div class="animate__animated animate__slideInRight">
            <p class="text-center text-danger"><b>//OUR TECHNICIANS//</b></p>
            <div class="content">
                <div class="tech bg-light tech-1 ">
                    <div class="tech-cont-img position-relative">
                        <img src="~/assets/img/team-1.jpg" alt="" class="img-thumbnail">
                        <div class="social-icon p-2 d-flex justify-content-center align-items-center border">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <!-- <i class="fab fa-facebook-f"></i> -->
                        </div>
                    </div>
                    <div class="details p-2">
                        <h5 class="text-center">Full Name</h5>
                        <p>Positiion</p>
                    </div>
                </div>
                <div class="tech bg-light tech-2">
                    <div class="tech-cont-img position-relative">
                        <img src="~/assets/img/team-2.jpg" alt="" class="img-thumbnail">
                        <div class="social-icon p-2 d-flex justify-content-center align-items-center border">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <!-- <i class="fab fa-facebook-f"></i> -->
                        </div>
                    </div>
                    <div class="details p-2">
                        <h5 class="text-center">Full Name</h5>
                        <p>Positiion</p>
                    </div>
                </div>
                <div class="tech bg-light tech-3">
                    <div class="tech-cont-img position-relative">
                        <img src="~/assets/img/team-3.jpg" alt="" class="img-thumbnail">
                        <div class="social-icon p-2 d-flex justify-content-center align-items-center border">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <!-- <i class="fab fa-facebook-f"></i> -->
                        </div>
                    </div>
                    <div class="details p-2">
                        <h5 class="text-center">Full Name</h5>
                        <p>Positiion</p>
                    </div>
                </div>
                <div class="tech bg-light tech-4">
                    <div class="tech-cont-img position-relative">
                        <img src="~/assets/img/team-4.jpg" alt="" class="img-thumbnail">
                        <div class="social-icon p-2 d-flex justify-content-center align-items-center border">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <!-- <i class="fab fa-facebook-f"></i> -->
                        </div>
                    </div>
                    <div class="details p-2">
                        <h5 class="text-center">Full Name</h5>
                        <p>Positiion</p>
                    </div>
                </div>
            </div>
        </div>
   
    </div>
</template>

<style scoped>
img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;

}

.content {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    padding: 30px 100px;
    gap: 10px;
}

.tech {
    display: none;
  animation: slideInUp;
    height: 400px;
}

.tech-cont-img {
    height: 60%;
}

.details {
    display: grid;
    place-items: center;
}

.social-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgb(190, 26, 26);
    scale: 0;
    transition: scale .5s ease;
}

.social-icon i {
    padding: 15px;
    margin: 7px;
    background-color: white;
    color: rgb(190, 26, 26);
}

.social-icon i:hover {
    background-color: rgb(3, 3, 51);
    ;
}

.tech:hover .social-icon {
    scale: 1;
}

.tech-1 {
    animation-duration: .5s;
}

.tech-2 {
    animation-duration: .7s;
}

.tech-3 {
    animation-duration: .9s;

}

.tech-4 {
    animation-duration: 1.2s;


}
@media screen and (max-width:768px) {
    .content {
    grid-template-columns: 50% 50%;
    padding: 30px 100px;

}

}
@media screen and (max-width:465px) {
    .content {

    grid-template-columns:100%;
    padding: 30px 10px;

}

}
</style>
