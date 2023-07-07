<script setup>
    import { ref } from "vue";

    let isOpen = ref(false);

    const openMenu = () => {
        document.querySelector('.main-header__offcanvas').classList.add('show')
        document.querySelector('.main-header__offcanvas-backdrop').classList.add('show')
        document.querySelector('body').style.overflow = 'hidden'
    };

    const closeMenu = () => {
        document.querySelector('.main-header__offcanvas').classList.remove('show')
        document.querySelector('.main-header__offcanvas-backdrop').classList.remove('show')
        document.querySelector('body').style.overflow = ''
    };
</script>

<template>
    <header class="main-header">
        <div class="container">
            <div class="row">
                <div class="col-6 main-header__logo">
                    <a href="#">a<span>.</span>victor</a>
                </div>
                <ul class="col-6 main-header__links">
                    <li><a href="#aboutMe">About me</a></li>
                    <li><a href="#skillSet">Skill-set</a></li>
                    <li><a href="#recentWork">Recent works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="col-6 main-header__menu-btn">
                    <button type="button" aria-label="Menu" @click="openMenu">
                        <i class="bi bi-list"></i>
                    </button>
                </div>
                <div class="main-header__offcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                    <div class="offcanvas-header">
                        <button @click="closeMenu" type="button" class="close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="main-header__links">
                            <li><a @click="closeMenu" href="#aboutMe" type="button">About me</a></li>
                            <li><a @click="closeMenu" href="#skillSet" type="button">Skill-set</a></li>
                            <li><a @click="closeMenu" href="#recentWork" type="button">Recent works</a></li>
                            <li><a @click="closeMenu" href="#contact" type="button">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div @click="closeMenu" class="main-header__offcanvas-backdrop"></div>
    </header>
</template>