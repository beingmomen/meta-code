<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
    data-scroll-to-active="true"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <nuxt-link to="/" class="navbar-brand">
            <span class="brand-logo">
              <img src="/images/code.svg" alt="logo" />
            </span>
            <h2 class="brand-text">Meta Code</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
      <ul
        class="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li class="nav-item">
          <nuxt-link to="/dashboard" class="d-flex align-items-center">
            <airplay-icon size="1.5x" class="custom-class"></airplay-icon>
            <span class="menu-title text-truncate" data-i18n="Dashboards"
              >Dashboards</span
            >
          </nuxt-link>
        </li>

        <li class="navigation-header">
          <span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span
          ><i data-feather="more-horizontal"></i>
        </li>
        <li class="nav-item">
          <nuxt-link to="/admins" class="d-flex align-items-center">
            <user-icon size="1.5x" class="custom-class"></user-icon>
            <span class="menu-title text-truncate" data-i18n="Dashboards"
              >Admins</span
            >
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { AirplayIcon, UserIcon } from "vue-feather-icons";

export default {
  components: {
    AirplayIcon,
    UserIcon,
  },
};
</script>

<style lang="scss" scoped></style>
