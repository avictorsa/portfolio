<script setup>
    import PortfolioCard from '../recent-works/PortfolioCard.vue'
</script>

<template>
    <section class="recent-works section" id="recentWork">
        <div class="container">
            <div class="row">
                <div class="col-lg-11 offset-lg-1">
                    <h2 class="section-title">Recent works</h2>

                    <ul class="recent-works__list">
                        <PortfolioCard
                            imageSource="../../src/assets/images/me.png"
                            siteName="Site name"
                            siteDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            :tags="['Forntend dev.', 'Maintance']"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
