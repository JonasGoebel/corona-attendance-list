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
                                <h1 class="display-3  text-white">Weiersbach Corona-App</h1>
                                <h2 class="text-white">Anleitung</h2>
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

                                    <h6 class="text-primary text-uppercase">Daten eingeben</h6>
                                    <p class="description mt-3">
                                        Gib deine persönlichen Daten ein. Es werden die gleichen Daten wie auf "dem Zettel" benötigt.
                                    </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <h6 style="font-size: 25px;">2</h6>
                                    
                                    <h6 class="text-warning text-uppercase">Zeiten eintragen</h6>
                                    <p class="description mt-3">
                                        Wenn du zur Weiersbach kommst oder gehst, öffnest du kurz die App, drückst auf <span style="color: #27ae60">"KOMMEN"</span> oder <span style="color: #e74c3c">"GEHEN"</span> und danach <span style="color: #2980b9">"SENDEN"</span>.
                                    </p>
                                    <p class="description mt-3">
                                        Es wird automatisch die aktuelle Uhrzeit als Zeit gesendet.
                                    </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <h6 style="font-size: 25px;">3</h6>
                                    
                                    <h6 class="text-success text-uppercase">Wiederholen</h6>
                                    <p class="description mt-3">
                                        
                                    </p>
                                    <p class="description mt-3">
                                        Die App speichert deine eingetragenen Daten, du musst ab jetzt nur noch <span style="color: #27ae60">"KOMMEN"</span> oder <span style="color: #e74c3c">"GEHEN"</span> und danach <span style="color: #2980b9">"SENDEN"</span> drücken.
                                    </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-send" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Internetprobleme?</h6>
                                        <p class="description mt-3">
                                            Falls du nur schlechtes / kein Internet haben solltest, kannst du die App trotzdem nutzen.
                                        </p>
                                        <p class="description mt-3">
                                            Eingaben werden gespeichert und beim App-Start automatisch gesendet. Du kannst also z.B. die Daten am Weihersbach-Gelände eintragen und Zuhause senden, indem du dort die App öffnest.
                                        </p>
                                        <p class="description mt-3">
                                            <strong>Hinweis:</strong> Du bekommst eine Nachricht, sobald die Einträge versendet wurden.
                                        </p>
                                </card>
                            </div>

                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Los gehts!</h6>
                                    <p class="description mt-3">
                                        Klicke hier, um mit der App loszulegen:
                                    </p>
                                    <base-button tag="a" href="/" type="success" class="mt-4">
                                        Los gehts
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
                        <h2 class="display-3 text-white">Noch Fragen?</h2>
                        <p class="lead text-white">Ist noch etwas unklar? Frag mich einfach!</p>
                        <br><br>
                        <p class="lead text-white">~ Jonas</p>
                    </div>
                </div>

                <br>
                <hr>
                <br>

                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Administration</h5>
                        <p class="text-white mt-3">Weiersbach-Administrations-Login: <a href="https://weiersbachapi.goebel.app">https://weiersbachapi.goebel.app</a></p>
                    </div>

                    <div class="col-lg-4">
                        <icon name="ni ni-email-83" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Mail</h5>
                        <p class="text-white mt-3">
                            <a href="mailto://weiersbach@jonasgoebel.net">weiersbach@jonasgoebel.net</a>
                            </p>
                    </div>

                    <div class="col-lg-4">
                        <icon name="ni ni-planet" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Website</h5>
                        <p class="text-white mt-3">
                            Meine perönliche Website ist hier: <a href="https://jonasgoebel.net">https://jonasgoebel.net</a></p>
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
  mounted()  {
      localStorage.instructionsRead = true;
  }
};
</script>
