<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
        </div>
        
        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" id="login"  class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-beginning is-hidden-mobile is-clipped">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
  import VmMenu from '../menu/Menu';
  import VmSearch from '../search/Search';

  export default {
    name: 'VmHeader',

    data () {
      return {
        linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram',
        isCheckoutActive: false,
        isMenuOpen: false
      }
    },

    components: {
      VmSearch,
      VmMenu
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .title {

    background-position: 50% 50%;
    background-size: 165px;
    width: 175px;
    height: 35px;
  }
  .shopping-cart {
    cursor: pointer;
  }
  a {
    color: grey;
  }
  .navbar {
    background-image: linear-gradient(to right, #23114d , #5b2c74,#70347c, #a5548c);
  }


</style>
