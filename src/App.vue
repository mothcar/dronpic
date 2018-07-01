<template>
    <v-app>



        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <!-- Large **********************************************************-->



        <v-toolbar app class="hidden-sm-and-down" fixed>
            <router-link to="/">
                <v-flex xs4 sm2 md1>
                    <v-avatar
                    slot="activator"
                    size="36px"
                    >
                    <img
                    src="./assets/logo.png"
                    alt=""
                    >
                </v-avatar> </v-flex>
            </router-link>
            <v-toolbar-title>
                <router-link class="nav-item" to="/">{{ $lang.menu.title }}</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>


            <v-toolbar-items>


                <!-- <div class="text-xs-center"> -->
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/introduce">{{ $lang.menu.introduce }}</router-link>
                </v-btn>
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/greeting">{{ $lang.menu.greeting }}</router-link>
                </v-btn>
                <v-menu offset-y open-on-hover>
                    <v-btn slot="activator" flat="flat">{{ $lang.menu.games }}</v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in games" :key="index" @click="" :to="item.route">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <!-- </div> -->


                <v-btn flat="flat">
                    <router-link class="nav-item" to="/rules">{{ $lang.menu.rule }}</router-link>
                </v-btn>
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/stadium">{{ $lang.menu.stadium }}</router-link>
                </v-btn>
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/facility">{{ $lang.menu.facilities }}</router-link>
                </v-btn>
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/opening">{{ $lang.menu.opening }}</router-link>
                </v-btn>
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/closing">{{ $lang.menu.closing }}</router-link>
                </v-btn>
                <v-btn flat="flat">
                    <router-link class="nav-item" to="/award">{{ $lang.menu.award }}</router-link>
                </v-btn>
                <v-menu offset-y open-on-hover>
                    <v-btn slot="activator" flat="flat">{{ $lang.menu.operating }}</v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in commitee" :key="index" @click="" :to="item.route">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>

            <div class="select-style">
                <select v-on:change="changeLang" v-model="currentLocale">
                    <option value="kr">Korean</option>
                    <option value="en">English</option> </select>
                </div>



            </v-toolbar>
            <!-- Large **********************************************************-->
            <!-- Mobile *********************************************************-->
            <div app class="hidden-md-and-up">
                <v-toolbar fixed>
                    <router-link to="/">
                        <v-flex xs1 sm2 md1>
                            <v-avatar
                            slot="activator"
                            size="36px"
                            >
                            <img
                            src="./assets/logo.png"
                            alt=""
                            >
                        </v-avatar>
                    </v-flex>
                </router-link>
                <v-toolbar-title>
                    <router-link class="nav-item" to="/">{{ $lang.menu.title }}</router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                    <v-icon>menu</v-icon>
                </v-btn>

                <div class="select-style">
                    <select v-on:change="changeLang" v-model="currentLocale">
                        <option value="kr">Korean</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </v-toolbar>

        </div>
        <!-- Mobile *********************************************************-->

        <!-- Navigation *********************************************************-->
        <!-- Navigation Drawer **************************************************-->
        <v-navigation-drawer
        temporary
        :right="right"
        v-model="rightDrawer"
        fixed
        app >
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        {{$lang.menu.menu}}
                    </v-list-tile-title>
                    <v-icon @click.stop="rightDrawer = !rightDrawer">close</v-icon>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-1">

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer">{{ $lang.menu.home }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>


            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/introduce">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer">{{ $lang.menu.introduce }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/greeting">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer" >{{ $lang.menu.greeting }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/opening">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer">{{ $lang.menu.opening }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/closing">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer" >{{ $lang.menu.closing }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/award">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer" >{{ $lang.menu.award }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-menu offset-y>
                    <v-list-tile-title slot="activator" flat="flat">{{ $lang.menu.games }}</v-list-tile-title>
                    <v-list-tile-content>
                        <v-list>
                            <v-list-tile v-for="(item, index) in games" :key="index" @click="" :to="item.route">
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-list-tile-content>
                </v-menu>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/rules">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer" >{{ $lang.menu.rule }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/stadium">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer" >{{ $lang.menu.stadium }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-list-tile-content>
                    <router-link class="nav-item" to="/facility">
                        <v-list-tile-title @click.stop="rightDrawer = !rightDrawer" >{{ $lang.menu.facilities }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                <v-menu offset-y>
                    <v-list-tile-title slot="activator" flat="flat">{{ $lang.menu.operating }}</v-list-tile-title>
                    <v-list-tile-content>
                        <v-list>
                            <v-list-tile v-for="(item, index) in commitee" :key="index" @click="" :to="item.route">
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-list-tile-content>
                </v-menu>
            </v-list-tile>
        </v-list> </v-navigation-drawer>
        <!-- Navigation Drawer **************************************************-->

        <!-- Content ************************************************************-->

            <v-content >

                <!-- fill-height -->
                <!-- <v-layout flex align-center justify-center> -->
                <router-view/>
                <!-- </v-layout> -->
            </v-content>

        <!-- Content ************************************************************-->



        <!-- Footer *************************************************************-->
        <v-footer height="auto">
            <v-card
            flat
            tile
            class="indigo lighten-1 white--text text-xs-center" >
            <v-card-text>
                <!-- <v-btn
                v-for="icon in icons"
                :key="icon"
                icon
                class="mx-3 white"
                >
                <v-icon size="24px">{{ icon }}</v-icon> </v-btn> -->
            </v-card-text>
            <v-card-text class="white--text pt-0">
                {{ $lang.footer.description}}
            </v-card-text>
            <v-card-text class="white--text">
                Copyright &copy;2018 DRONPIC. All rights reserved
            </v-card-text> </v-card>

        </v-footer>
        <!-- Footer *************************************************************-->

    </v-app>

</template>

<style>
.v-list__tile__title{
    color: #1976D2;
}

.nav-item {
    color: #1976D2;
}

.v-btn__content {
    color: #1976D2;
}

.select-style {
    border: 1px solid #ccc;
    width: auto;
    border-radius: 3px;
    overflow: hidden;
    /* background: #fafafa  no-repeat 90% 50%; */
}

.select-style select {
    padding: 5px 8px;
    width: 130%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
}

.select-style select:focus {
    outline: none;
}

a {
    text-decoration: none;
}

.btn__content {
    color: #1976d2;
}

.list__tile__title {
    color: #1976d2;;
}

button {
    color:inherit;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

<script>

import Vue from 'vue'
import Lang from 'vue-lang'

var locales = {
    "kr": require("./lang/kr.json"),
    "en": require("./lang/en.json")
}

Vue.use(Lang, {lang: 'kr', locales: locales})

export default {

    data: () => ({
        // current_locale: 'kr',
        currentLocale:'kr',
        clipped: true,
        drawer: false,
        fixed: true,
        items: [{
            icon: 'bubble_chart',
            title: 'Inspire'
        }],
        country: [
            { text: 'KOREAN' },
            { text: 'ENGLISH' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        games: [
            { title: '1', route:'/team'},
            { title: '2', route:'/private' },
            { title: '3', route:'/accurate' },
            { title: '4', route:'/free' },
            { title: '5', route:'/feagure' },
            { title: '6', route:'/gravity' },
            { title: '7', route:'/balloon' },
            { title: '8', route:'/junior' }
        ],
        commitee: [
            { title: '1', route:'/outline' },
            { title: '2', route: '/org' }
        ]
    }),

    // 드론레이싱 단체전
    // 드론레이싱 개인전
    // 정밀비행
    // 프리스타일 FPV
    // 드론피겨플라잉 자유형
    // 드론피겨플라잉 그래비티 게이트
    // 벌룬슈팅(드론 클래이 슈팅)
    // 학생부 토이드론 대회


    methods: {
        changeLang: function() {
            var current = this.currentLocale
            if(current == "kr"){
                this.$setLang("kr")
                console.log(this.currentLocale)

            } else {
                this.$setLang("en")
                console.log("en" + JSON.stringify(current))

            }
            this.games[0].title = this.$lang.games.Team
            this.games[1].title = this.$lang.games.Private
            this.games[2].title = this.$lang.games.Accurate
            this.games[3].title = this.$lang.games.Fpv
            this.games[4].title = this.$lang.games.Feagure
            this.games[5].title = this.$lang.games.Gravity
            this.games[6].title = this.$lang.games.Balloon
            this.games[7].title = this.$lang.games.Junior

            this.commitee[0].title = this.$lang.commitee.outline
            this.commitee[1].title = this.$lang.commitee.organization


        } // changeLang

    }, // methods

    created: function () {
        this.games[0].title = this.$lang.games.Team
        this.games[1].title = this.$lang.games.Private
        this.games[2].title = this.$lang.games.Accurate
        this.games[3].title = this.$lang.games.Fpv
        this.games[4].title = this.$lang.games.Feagure
        this.games[5].title = this.$lang.games.Gravity
        this.games[6].title = this.$lang.games.Balloon
        this.games[7].title = this.$lang.games.Junior

        this.commitee[0].title = this.$lang.commitee.outline
        this.commitee[1].title = this.$lang.commitee.organization

        console.log('create method ... done')
    }

} // export

</script>
