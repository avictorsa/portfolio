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
                        <li class="recent-works__card">
                            <a href="https://boligdugnaden.no" target="_blank">
                                <figure>
                                    <img src="../../assets/images/boligdugnaden.png" alt="Boligdugnaden site image" />
                                </figure>
                                <h4 class="site-name">boligdugnaden.no</h4>
                                <p class="site-description">The "Norwegian Directorate for Building Quality" has launched this website To make it easier for private individuals to rent housing</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Enonic XP</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://www.norwep.com/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/norwep.png" alt="Norwep site image" />
                                </figure>
                                <h4 class="site-name">norwep.no</h4>
                                <p class="site-description">Norwegian Energy Partners (NORWEP) is an organization that supports and assists in the internationalization of the Norwegian energy industry</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Enonic XP</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://www.rederi.no/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/rederi.png" alt="Rederi site image" />
                                </figure>
                                <h4 class="site-name">rederi.no</h4>
                                <p class="site-description">The "Norwegian Shipping Association" is the leading employer, contingency, and interest organization for Norwegian-affiliated shipping companies</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Optimizely</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://www.forskerforbundet.no/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/for.png" alt="Forskerforbundet site image" />
                                </figure>
                                <h4 class="site-name">forskerforbundet.no</h4>
                                <p class="site-description">Norway's largest trade and interest organization for employees in research, higher education, and knowledge dissemination with 25,000 members</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Enonic XP</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://ukom.no/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/ukom.png" alt="Ukom site image" />
                                </figure>
                                <h4 class="site-name">ukom.no</h4>
                                <p class="site-description">The "Norwegian Healthcare Investigation Board" is a government agency. They investigate serious adverse events and other concerns involving the Norwegian healthcare services</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Enonic XP</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://www.glava.no/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/glava.png" alt="Glava site image" />
                                </figure>
                                <h4 class="site-name">glava.no</h4>
                                <p class="site-description">Glava® is Norway's largest supplier of insulation products for heat insulation, sound insulation, and fire insulation</p>
                                <ul class="tags">
                                    <li>Front-end updates</li>
                                    <li>Enonic XP</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://kunnskapombarn.no/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/rkbu.png" alt="RKBU site image" />
                                </figure>
                                <h4 class="site-name">kunnskapombarn.no</h4>
                                <p class="site-description">Website for the four regional knowledge centers for children and young people's mental health and child protection in Norway</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Craft CMS</li>
                                </ul>
                            </a>
                        </li>
                        <li class="recent-works__card">
                            <a href="https://www.gk.no/" target="_blank">
                                <figure>
                                    <img src="../../assets/images/gk.png" alt="GK site image" />
                                </figure>
                                <h4 class="site-name">gk.no</h4>
                                <p class="site-description">GK is Scandinavia's leading technical contractor and service partner</p>
                                <ul class="tags">
                                    <li>Front-end dev.</li>
                                    <li>Enonic XP</li>
                                </ul>
                            </a>
                        </li>

                        <!-- <PortfolioCard
                            url="https://boligdugnaden.no"
                            imageSource="me.png"
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
                        /> -->
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
