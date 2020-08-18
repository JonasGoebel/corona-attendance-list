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
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">{{ appName }}</h1>
                                <h2 class="text-white">{{ $t("instructions.instructions") }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="section section-lg pt-lg-0" style="padding-top: 20px !important;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <h6 style="font-size: 25px;">1</h6>

                                    <h6 class="text-primary text-uppercase">{{ $t("instructions.enterData") }}</h6>
                                    <p class="description mt-3">
                                        {{ $t("instructions.enterDataDesc") }}
                                    </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <h6 style="font-size: 25px;">2</h6>
                                    
                                    <h6 class="text-warning text-uppercase">{{ $t("instructions.enterTime") }}</h6>
                                    <p class="description mt-3" v-html="createEnterTimeDesc"></p>
                                    <p class="description mt-3">
                                        {{ $t("instructions.enterTimeDescAdd") }}
                                    </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <h6 style="font-size: 25px;">3</h6>
                                    
                                    <h6 class="text-success text-uppercase">{{ $t("instructions.repeat") }}</h6>
                                    <p class="description mt-3">
                                        
                                    </p>
                                    <p class="description mt-3" v-html="createRepeatDesc"></p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-send" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">{{ $t("instructions.connectionProblems") }}</h6>
                                        <p class="description mt-3">
                                            {{ $t("instructions.connectionProblemsDesc") }}
                                        </p>
                                        <p class="description mt-3">
                                            {{ $t("instructions.connectionProblemsDescB") }}
                                        </p>
                                        <p class="description mt-3">
                                            <strong>{{ $t("instructions.hint") }}:</strong> {{ $t("instructions.connectionProblemsDescHint") }}
                                        </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">{{ $t("instructions.go") }}</h6>
                                    <p class="description mt-3">
                                        {{ $t("instructions.goDesc") }}
                                    </p>
                                    <base-button tag="a" href="/" type="success" class="mt-4">
                                        {{ $t("instructions.go") }}
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">{{ $t("instructions.questions") }}</h2>
                        <p class="lead text-white">{{ $t("instructions.questionsDesc") }}</p>
                        <br><br>
                        <p class="lead text-white">{{ contact }}</p>
                    </div>
                </div>

                <br>
                <hr>
                <br>

                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">{{ $t("instructions.administration") }}</h5>
                        <p class="text-white mt-3">{{ $t("instructions.administrationDesc") }} <a :href="serverURL">{{ serverURL }}</a></p>
                    </div>

                    <div class="col-lg-4">
                        <icon name="ni ni-planet" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">{{ $t("instructions.personalSite") }}</h5>
                        <p class="text-white mt-3">
                            {{ $t("instructions.personalSiteDesc") }} <a href="https://jonasgoebel.net">https://jonasgoebel.net</a></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {},
    data: () => ({
        appName: process.env.VUE_APP_NAME,
        contact: process.env.VUE_APP_HELP_CONTACT,
        serverURL: process.env.VUE_APP_SERVER_URL
    }),

    mounted()  {
        localStorage.instructionsRead = true;
    },

    computed: {
        /**
         * color the buttons in the description with the right translation
         */
        createEnterTimeDesc: function() {
            return this.$t("instructions.enterTimeDesc", {
                arrive: '<span style="color: #27ae60">' + this.$t('form.arrive') + '</span>',
                leave: '<span style="color: #e74c3c">' + this.$t('form.leave') + '</span>',
                sendEvent: '<span style="color: #2980b9">' + this.$t('form.sendEvent') + '</span>',
            })
        },

        createRepeatDesc: function() {
            return this.$t("instructions.repeatDesc", {
                arrive: '<span style="color: #27ae60">' + this.$t('form.arrive') + '</span>',
                leave: '<span style="color: #e74c3c">' + this.$t('form.leave') + '</span>',
                sendEvent: '<span style="color: #2980b9">' + this.$t('form.sendEvent') + '</span>',
            })
        }
    }
};
</script>
