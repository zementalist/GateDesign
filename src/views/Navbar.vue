<template>
    <nav :class="'navbar navbar-expand-md custom-navbar p-1 ' + currentNavbarBgColor + (['home', 'courses', 'internships'].includes(currentRoute) ? ' fixed-top' : ' sticky-top')">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img v-lazy="require('@/assets/images/logo-white.png')" :class="'logo-img' + (setNavbarBgColor ? ' inverted-img' : '')" :height="setNavbarBgColor ? '60' : '80'"
                alt="Logo">
            </router-link>
            <button class="navbar-toggler" @click="setNavBgColorOnDropdown()" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="myNavbar">
                <ul class="navbar-nav ml-auto" @click="updateActiveNav">
                    <li class="nav-item active">
                        <a v-if='currentRoute == "home" ' href="#home" class="nav-link">Home</a>
                        <router-link v-else to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a v-if='currentRoute == "home" ' href="#about" class="nav-link">About us</a>
                        <router-link v-else to="/#about" class="nav-link">About us</router-link>
                    </li>
                    <li class="nav-item">
                        <a v-if='currentRoute == "home" ' href="#services" class="nav-link">Services</a>
                        <router-link v-else to="/#services" class="nav-link">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/research" class="nav-link">Research</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#team" class="nav-link">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/internships" class="nav-link">Internships</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/courses" class="nav-link">Courses</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <a :href="'#'+currentRoute" @click="updateActiveNav" v-if="showArrowUp"><i class="fas fa-arrow-circle-up arrow-up"></i></a>

    </nav>

</template>

<script>
    export default {
        data() {
            return {
                halfPageHeightScrolled: false,
                scrolled50Px: false // when scroll: set navbar background color
            }
        },
        methods:{
            setNavBgColorOnDropdown() {
                this.setNavbarBgColor = this.scrolledLittle ? true : ! this.setNavbarBgColor;
            },
            updateActiveNav(event) {
                document.getElementsByClassName('nav-item active')[0].classList.remove('active');
                event.target.parentElement.classList.add('active');
                if(window.innerWidth < 768)
                    document.getElementsByClassName('navbar-toggler')[0].click();
            }
        },
        computed: {
            currentNavbarBgColor() {
                return this.setNavbarBgColor ? 'bg-light navbar-light' : 'bg-transparent navbar-dark';
            },
            showArrowUp() {
                return this.halfPageHeightScrolled;
            },
            scrolledLittle: {
                set(value) {
                    this.scrolled50Px = value;
                },
                get() {
                    return this.scrolled50Px;
                }
            },
            setNavbarBgColor: {
                set(value) {
                    this.scrolledLittle = value;
                },
                get() {
                    return ['home', 'courses', 'internships'].includes(this.currentRoute) ? this.scrolledLittle : true;
                }
            },
            reachedHalfPage: {
                set(value) {
                    this.halfPageHeightScrolled = value;
                },
                get() {
                    return this.halfPageHeightScrolled;
                }
            },
            currentRoute() {
                return this.$route.name;
            }
        },

  mounted() {
    // 1- Display arrow Icon if reached to 1/2 or 1/3 of page height
    window.onscroll = () => {
        let scrollPosition = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
        let pageHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
        let halfPageHeight = pageHeight / 3;
        if (scrollPosition > halfPageHeight)
        this.halfPageHeightScrolled = true;
        else
        this.halfPageHeightScrolled = false;
        // 2- Set navbar background color if scrolled more than 50px
        let scrollHeight = window.scrollY;
        if (scrollHeight > 50) {
        this.scrolled50Px = true;
        }
        else {
        this.scrolled50Px = false;
        }
    }
  }
        
    }
</script>

<style scoped>

.navbar-light {
    box-shadow: 0px 1px 10px #999;
}

.navbar-light .navbar-nav .nav-link {
    color:#1597bb;
    position: sticky;
}

.navbar-dark .navbar-nav .nav-link {
    color:#9affd2;
    position: sticky;
}

.navbar-light .navbar-nav .nav-link:hover {
    color:#2688ff;
  }

.navbar-dark .navbar-nav .nav-link:hover {
    color: #9affd2;
}
  
  .navbar-light .navbar-nav .active>.nav-link {
    color: #2688ff;
    font-style: italic;
  }

  .navbar-dark .navbar-nav .active>.nav-link {
      color: #ffffff;
      font-style: italic;
  }



.navbar .navbar-nav .nav-link::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: transparent;
    width: 0%;
    content: '.';
    height: 3px;
    border-radius: 5px;
}

.navbar-light .navbar-nav .nav-link::after {
    background-color: #2688ff;
}

.navbar-dark .navbar-nav .nav-link::after {
    background-color:#caf7e3;
}

.navbar .navbar-nav .nav-link:hover::after {
    width: 100%;
    transition: 0.5s;
}

.bg-transparent, .bg-light {
    /* position: sticky; */
    width: 100%;
    transition: 0.5s;
}

.custom-navbar {
    /* box-shadow: 0px 5px 10px #717171; */
    margin-right: 10px;
    font-weight: 600;
}

.inverted-img {
    filter: invert(1);
}

.arrow-up {
  color: #2688ff;
  position: fixed;
  font-size: 30px;
  top: 90%;
  right: 3%;
}
</style>