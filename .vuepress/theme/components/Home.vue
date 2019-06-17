<template>
  <div class="home-wrap">
    <main class="home" aria-labelledby="main-title">
      <header class="hero">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
          >

          <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

          <p class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>

          <p
            class="action"
            v-if="data.actionText && data.actionLink"
            >
            <NavLink
              class="action-button"
              :item="actionLink"
              />
          </p>
      </header>

      <div class="features">
        <div class="feature"
             :key="index"
             v-for="(feature, index) in data.features"
             v-if="data.features && data.features.length"
        >
          <div class="con-text-feature">
            <h2>
              <i v-if="feature.awesome" :class="feature.awesome" style="padding-right: 0.3rem; color: #5b3cc4; font-size:2rem;">
              </i>
        {{ feature.title }}
            </h2>
            <p>{{ feature.details }}</p>
          </div>
          <div class="con-img-feature">
            <lottie class="login-lottie" :options="lottieOptions[index]" :animCreated="handleAnimation"/>
          </div>
        </div>
      </div>
      <Content class="custom"/>
    </main>
    <footer
      class="footer"
      v-if="data.footer"
      >
      <div class="con-copy">
        {{ data.footer }}
      </div>
      <div class="con-copy">
        <a href="https://github.com/hs-yonekura/tcsympo2019" target="_blank" rel="noopener noreferrer" class="github"><i class="footer-awesome fab fa-github"></i></a>
        <a href="https://join.slack.com/t/jamstackhq/shared_invite/enQtNjU0ODk3MDIwOTE4LWE3ZTgzYjRlNzk4YjAyYzJhM2IzZjk5YjIxZDRmMTQ1YWFiYjRlOTgyMGE0OTk3YWVlODMxNDk5Njc3N2YwZmE" target="_blank" rel="noopener noreferrer" class="slack"><i class="footer-awesome fab fa-slack"></i></a>
        <a href="https://twitter.com/yuukikun31" target="_blank" rel="noopener noreferrer" class="twitter"><i class="footer-awesome fab fa-twitter"></i></a>
        <a href="http://line.naver.jp/ti/p/pWQDiJosnD" target="_blank" rel="noopener noreferrer" class="line"><i class="footer-awesome fab fa-line"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Lottie from '@theme/components/Lottie.vue'
import * as speed from '@theme/assets/speed.json'
import * as money from '@theme/assets/money.json'
import * as simple from '@theme/assets/simple.json'

export default {
  components: { NavLink, Lottie },
  data() {
    return {
      lottieOptions: [
        { animationData: speed },
        { animationData: money },
        { animationData: simple }
      ]
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    handleAnimation ( anim ) {
      this.anim = anim
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    margin 6rem 0
  .feature
    flex-grow 1
    flex-basis 100%
    display flex
    max-width 100%
    padding 1.2rem!important
    box-align center
    align-items center
    flex-align center
    -webkit-box-pack center
    justify-content center
	.con-text-feature
    max-width 50rem!important
    padding 30px!important
	.feature:nth-child(odd) 
    .con-text-feature
      order 3
	.con-img-feature
    width 100%
    max-width 600px
    
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
      text-align center
    p
      color lighten($textColor, 25%)
.footer
  position relative
  width 100%
  height auto
  background-color #fff
  z-index 1
  margin-top 100px
  display: flex;
  justify-content: space-between;
  box-sizing border-box
  box-shadow: 0 0 10px 0 rgba(0,0,0,.1)

.con-copy
  left 50px
  bottom 15px
  color #613ace
  z-index 500
  font-size .85rem
  margin: 0;
  padding: .7rem 1.5rem;

.footer-awesome
  color #b7b7b7
  font-size 1.3rem
  transition all .3s ease-out
  padding-right .75rem

.svg-piso
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	top: 0;
	display: block;
	left: -6%;
	position: absolute;
	width: 112%;
	z-index: 10;

.inner a:hover
  background-color #5b3cc41a
  border 1px solid #5b3cc44d
  color #5b3cc4

.inner a
  transition all .5s ease
  border 1px solid rgba(0,0,0,.1)
  border-radius 15px
  font-size .85rem
  padding 4px 10px
  background-color #fff
  color #00000099

.home-wrap
  overflow hidden

i.footer-awesome.fab.fa-github:hover
  color #000

i.footer-awesome.fab.fa-slack:hover
  color #4A154B

i.footer-awesome.fab.fa-twitter:hover
  color #1DA1F2

i.footer-awesome.fab.fa-line:hover
  color #00c300

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0
      margin-bottom 2.5rem
      display block
    .con-img-feature
      padding 0
  .footer
      width 100%!important
  .footer-awesome
    font-size 1rem
    padding-right .3rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
      max-width 100%
      padding 0
      margin-bottom 2.5rem
      display block
  .footer
      width 100%!important
  .footer-awesome
    font-size 1rem
    padding-right .3rem
</style>
