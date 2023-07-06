<script setup>

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
                    <li><a href="#">Recent works</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div class="col-6 main-header__menu-btn">
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                        <i class="bi bi-list"></i>
                    </button>
                </div>
                <div class="main-header__offcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasMenuLabel">Offcanvas</h5>
                        <button type="button" class="close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="main-header__links">
                            <li><a href="#aboutMe">About me</a></li>
                            <li><a href="#skillSet">Skill-set</a></li>
                            <li><a href="#">Recent works</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
