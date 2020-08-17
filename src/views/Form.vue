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
                                <p>{{ $t("form.enterPersonalData") }}</p>
                                <a href="/#/background">{{ $t("form.background") }}</a>
                                <br />
                                <br />
                                <a href="/#/instructions">{{ $t("form.instructions") }}</a>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Vorname"
                                            addon-left-icon="ni ni-circle-08"
                                            v-model="firstName">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Nachname"
                                            addon-left-icon="ni ni-circle-08"
                                            v-model="lastName">
                                </base-input>
                                 <base-input alternative
                                            type="phone"
                                            placeholder="Telefon"
                                            addon-left-icon="ni ni-mobile-button"
                                            v-model="phone">
                                </base-input>
                                <base-input alternative
                                            type="street"
                                            placeholder="Straße, Hausnummer"
                                            addon-left-icon="ni ni-building"
                                            v-model="street">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="success" class="my-4" v-bind:class="{ 'btn-outline-success': !isHere }" v-on:click="isHere=1">{{ $t("form.arrive") }}</base-button>
                                    <base-button type="danger" class="my-4"  v-bind:class="{ 'btn-outline-danger': isHere }" v-on:click="isHere=0">{{ $t("form.leave") }}</base-button>
                                    <!-- <p>{{ }} {{ lastName }} {{ (isHere == 1 ? 'arrived' : 'left') }} the event at {{ date }} on {{ time }}.</p> -->

                                    <p>{{ $t("form.eventPreview", { firstName, lastName, date, time, eventArrivedOrLeave }) }}</p>

                                    <base-button type="primary" class="my-12" v-on:click="sendForm()">{{ $t("form.sendEvent") }}</base-button>
                                </div>
                                <br />
                                <br />
                                <span>While using this page I agree to the 
                                    <a href="/#/privacy">privacy policy</a>.
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
import axios from 'axios';
import Axios from 'axios';

export default {
    name: 'Form',

    data: () => ({
        // user controlled
        firstName: '',
        lastName: '',
        phone: '',
        street: '',
        isHere: true,

        // auto generated
        timestamp: '',
    }),

    methods: {

        readInstructionsOnFirstVisit() {
            if(localStorage.getItem("instructionsRead") === null) {
                // this.$route.push('/instructions');
                this.$router.push('instructions');
            }
        },

        sendForm: function() {
            var errorMessage = '';
            if(this.firstName == '') errorMessage += 'Vorname ';
            if(this.lastName == '') errorMessage += 'Nachname ';
            if(this.phone == '') errorMessage += 'Telefon ';
            if(this.street == '') errorMessage += 'Straße ';

            if(errorMessage != '') {
                alert('Es wurden nicht alle Felder ausgefüllt: ' + errorMessage);
                return;
            }
            
            // save values for later use
            this.saveValuesToStorage();

            // save the event into storage
            this.addEventToStorage();

            // try to send all stored events to the server
            this.sendEventsToServer();
        },

        /**
         * load values from localStorage into the form fields
         */
        loadValuesFromStorage() {
            if (localStorage.getItem("firstName") !== null) this.firstName = localStorage.firstName;
            if (localStorage.getItem("lastName")  !== null) this.lastName = localStorage.lastName;
            if (localStorage.getItem("phone")     !== null) this.phone = localStorage.phone;
            if (localStorage.getItem("street")    !== null) this.street = localStorage.street;
        },

        /**
         * save values to localStorage, so the user doesn't need to enter them again every time
         */
        saveValuesToStorage() {
            localStorage.firstName = this.firstName;
            localStorage.lastName = this.lastName;
            localStorage.phone = this.phone;
            localStorage.street = this.street;
        },

        /**
         * all events are saved before we'll send them to the server
         * the event storage will be cleared after all events are sent to the server
         * in this way, the event(s) won't be lost if the user has no internet connection
         */
        addEventToStorage() {

            // create a json object with our event data
            const event = {
                'firstName' : this.firstName,
                'lastName': this.lastName,
                'phone': this.phone,
                'street': this.street,
                'timestamp': this.timestamp,
                'isHere': this.isHere
            }

            // load all events
            if (localStorage.getItem("events") === null) localStorage.events = JSON.stringify([]);
            var events = JSON.parse(localStorage.events);

            // add the created event to the events list
            events.push(event);

            // store them in localStorage as JSON string
            const jsonEvents = JSON.stringify(events);
            localStorage.events = jsonEvents;
        },

        /**
         * try to send all events stored in localStorage to the server
         * delete the events if they are sent successfully
         */
        sendEventsToServer() {

            // do nothing if there's no event
            if (localStorage.getItem("events") === null || JSON.parse(localStorage.getItem("events")).length < 1) return;

            /**
             * load events from localStroage
             * keep the JSON object as string
             */
            var events = localStorage.events;

            const serverURL = process.env.VUE_APP_SERVER_URL;

            const errorMsg = this.$t('form.errCouldNotBeSent');

            // send all saved events to server
            axios.post(serverURL + '/api/events', {
                events
            }, { timeout: 10000 }).then(response => {
                if(response.data.status == "success") {

                    // events are now on the server. clear saved event storage
                    localStorage.events = JSON.stringify([]);
                    alert(response.data.message);

                } else alert(errorMsg);

            }).catch(error => {
                alert(errorMsg);
            });
        }
    },

    mounted() {

        // go to instructions on first visit
        this.readInstructionsOnFirstVisit()

        // load values into form
        this.loadValuesFromStorage();

        // send saved events
        this.sendEventsToServer();

        // make it possible to add time in the default Date() function
        Date.prototype.addHours = function(h) {
            this.setTime(this.getTime() + (h*60*60*1000));
            return this;
        }

        // set the current time as formatted timestamp
        var date;
        date = new Date();

        // add two hours because we're living in germany (Date() is UTC)
        date.addHours(2);

        const timestamp = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' + 
            ('00' + date.getUTCHours()).slice(-2) + ':' + 
            ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
            ('00' + date.getUTCSeconds()).slice(-2);
        this.timestamp = timestamp;
    },

    computed: {
        date: function () {
            // split timestamp into [ Y, M, D, h, m, s ]
            var t = this.timestamp.split(/[- :]/);

            // apply each element to the Date function
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
            // split timestamp into [ Y, M, D, h, m, s ]
            var t = this.timestamp.split(/[- :]/);

            // apply each element to the Date function
            const d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

            const timestring = d.getUTCHours() + ':' + d.getUTCMinutes();
            return timestring;
        },

        /**
         * example text if the user has arrived or is leaving
         * necessary for the translation function
         */
        eventArrivedOrLeave: function() {
            return (this.isHere == 1 ? this.$t('form.arrived') : this.$t('form.left'));
        }
    }
}
</script>
<style>
</style>
