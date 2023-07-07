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
                            url="https://boligdugnaden.no"
                            imageSource="/images/boligdugnaden.png"
                            siteName="boligdugnaden.no"
                            siteDescription='The "Norwegian Directorate for Building Quality" has launched this website To make it easier for private individuals to rent housing'
                            :tags="['Front-end dev.', 'Enonic XP']"
                        />
                        <PortfolioCard
                            url="https://www.forskerforbundet.no/"
                            imageSource="/images/for.png"
                            siteName="forskerforbundet.no"
                            siteDescription="Norway's largest trade and interest organization for employees in research, higher education and knowledge dissemination with 25.000 members"
                            :tags="['Front-end dev.', 'Enonic XP']"
                        />
                        <PortfolioCard
                            url="https://www.rederi.no/"
                            imageSource="/images/rederi.png"
                            siteName="rederi.no"
                            siteDescription='The "Norwegian Shipping Association" is the leading employer, contingency and interest organization for Norwegian-affiliated shipping companies'
                            :tags="['Front-end dev.', 'Optimizely']"
                        />
                        <PortfolioCard
                            url="https://ukom.no/"
                            imageSource="/images/ukom.png"
                            siteName="ukom.no"
                            siteDescription='The "Norwegian Healthcare Investigation Board" is a government agency. They investigate serious adverse events and other concerns involving the Norwegian healthcare services'
                            :tags="['Front-end dev.', 'Enonic XP']"
                        />
                        <PortfolioCard
                            url="https://www.glava.no/"
                            imageSource="/images/glava.png"
                            siteName="glava.no"
                            siteDescription="Glava® is Norway's largest supplier of insulation products for heat insulation, sound insulation and fire insulation"
                            :tags="['Front-end updates', 'Enonic XP']"
                        />
                        <PortfolioCard
                            url="https://kunnskapombarn.no/"
                            imageSource="/images/rkbu.png"
                            siteName="kunnskapombarn.no"
                            siteDescription="Website for the four regional knowledge centers for children and young people's mental health and child protection in Norway"
                            :tags="['Front-end dev.', 'Craft CMS']"
                        />
                        <PortfolioCard
                            url="https://www.norwep.com/"
                            imageSource="/images/norwep.png"
                            siteName="norwep.no"
                            siteDescription="Norwegian Energy Partners (NORWEP) is an organisation that supports and assist in the internationalisation of the Norwegian energy industry"
                            :tags="['Front-end dev.', 'Enonic XP']"
                        />
                        <PortfolioCard
                            url="https://www.gk.no/"
                            imageSource="/images/gk.png"
                            siteName="gk.no"
                            siteDescription="GK is Scandinavia's leading technical contractor and service partner"
                            :tags="['Front-end dev.', 'Enonic XP']"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
