<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Hintergrund</h1>
                                <p class="lead text-white">Durch COVID-19 ist das Jahr 2020 zu einem besonderen Jahr geworden. Deshalb können wir auch unsere geliebte Weiersbach nur unter angepassten Bedingungen, wie unter anderem einem Hygienekonzept stattfinden lassen.</p>
                                <p class="lead text-white">Hierzu zählt auch das Mitschreiben, wer zu welcher Zeit das Weiersbach-Gelände betreten oder verlassen hat.</p>
                                <p class="lead text-white">Um dies einfacher zu gestalten, kann man sich neben dem Anmeldezettel auch über die App als "anwesend" und "nicht mehr anwesend" eintragen.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="/"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 >
                                        zurück
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Datenschutz</h6>
                                    <p class="description mt-3">Die Datenschutzbestimmungen können <a href="/#/datenschutz">hier</a> eingelesen werden.</p>
                                    <base-button tag="a" href="/#/datenschutz" type="primary" class="mt-4">
                                        Datenschutzbestimmungen
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
