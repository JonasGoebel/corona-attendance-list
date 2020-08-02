<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <p>Bitte geben Sie Ihre perönlichen Daten an:</p>
                                <a href="/#/background">Hintergrund</a>
                                <br />
                                <br />
                                <a href="/#/instructions">Anleitung</a>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Vorname"
                                            addon-left-icon="ni ni-hat-3"
                                            v-model="firstName">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Nachname"
                                            addon-left-icon="ni ni-hat-3"
                                            v-model="lastName">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
                                </base-input>
                                 <base-input alternative
                                            type="phone"
                                            placeholder="Telefon"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="phone">
                                </base-input>
                                <base-input alternative
                                            type="street"
                                            placeholder="Straße"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="street">
                                </base-input>
                                <base-input alternative
                                            type="homeNr"
                                            placeholder="Hausnummer"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="homeNr">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="success" class="my-4" v-bind:class="{ 'btn-outline-success': !isHere }" v-on:click="isHere=1">Kommen</base-button>
                                    <base-button type="danger" class="my-4"  v-bind:class="{ 'btn-outline-danger': isHere }" v-on:click="isHere=0">Gehen</base-button>
                                    <p>{{ firstName }} {{ lastName }} ist am {{ date }} um {{ time }} {{ (isHere == 1 ? 'an der Weiersbach eingetroffen' : 'von der Weiersach gegangen') }}.</p>
                                    <base-button type="primary" class="my-12" v-on:click="sendForm()">Senden</base-button>
                                </div>
                                <br />
                                <br />
                                <span>Durch Benutzung der Seite stimme ich der 
                                    <a href="/#/datenschutz">Datenschutzerklärung</a>
                                    zu.
                                </span>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        // user controlled
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        street: '',
        homeNr: '',
        isHere: true,

        // auto generated
        timestamp: '',
    }),

    methods: {
        sendForm: function() {
            var errorMessage = '';
            if(this.firstName == '') errorMessage += 'Vorname ';
            if(this.lastName == '') errorMessage += 'Nachname ';
            if(this.email == '') errorMessage += 'Email ';
            if(this.phone == '') errorMessage += 'Telefon ';
            if(this.street == '') errorMessage += 'Straße ';
            if(this.homeNr == '') errorMessage += 'Hausnummer';

            console.log(errorMessage);

            if(errorMessage != '') {
                alert('Es wurden nicht alle Felder ausgefüllt: ' + errorMessage);
                // return;
            }
            
            // save values for later use
            this.saveValuesToStorage();
            

            /**
             * make http request
             */
        },

        /**
         * load values from localStorage into the form fields
         */
        loadValuesFromStorage() {
            if (localStorage.getItem("firstName") !== null) this.firstName = localStorage.firstName;
            if (localStorage.getItem("lastName")  !== null) this.lastName = localStorage.lastName;
            if (localStorage.getItem("email")     !== null) this.email = localStorage.email;
            if (localStorage.getItem("phone")     !== null) this.phone = localStorage.phone;
            if (localStorage.getItem("street")    !== null) this.street = localStorage.street;
            if (localStorage.getItem("homeNr")    !== null) this.homeNr = localStorage.homeNr;
        },

        /**
         * save values to localStorage, so the user doesn't need to enter them again every time
         */
        saveValuesToStorage() {
            localStorage.firstName = this.firstName;
            localStorage.lastName = this.lastName;
            localStorage.email = this.email;
            localStorage.phone = this.phone;
            localStorage.street = this.street;
            localStorage.homeNr = this.homeNr;
        }
    },

    mounted() {

        this.loadValuesFromStorage();

        // set the current time as formatted timestamp
        var date;
        date = new Date();

        // add two hours because we're living in germany (Date() is UTC)
        const hours = date.getUTCHours() + 2;
        const timestamp = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' + 
            ('00' + hours).slice(-2) + ':' + 
            ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
            ('00' + date.getUTCSeconds()).slice(-2);
        this.timestamp = timestamp;
    },

    computed: {
        date: function () {
            // Split timestamp into [ Y, M, D, h, m, s ]
            var t = this.timestamp.split(/[- :]/);

            // Apply each element to the Date function
            const d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
            const months = [
                'Janurar',
                'Februar',
                'März',
                'April',
                'Mai',
                'Juni',
                'Juli',
                'August',
                'September',
                'Oktober',
                'November',
                'Dezember'
            ];

            const timestring = d.getUTCDate() + '. ' + months[d.getUTCMonth()];
            return timestring;
        },

        time: function () {
            // Split timestamp into [ Y, M, D, h, m, s ]
            var t = this.timestamp.split(/[- :]/);

            // Apply each element to the Date function
            const d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

            const timestring = d.getUTCHours() + ':' + d.getUTCMinutes();
            return timestring;
        }
    }
}
</script>
<style>
</style>
