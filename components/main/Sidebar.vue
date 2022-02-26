<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion menu-shadow expanded"
    data-scroll-to-active="true"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <nuxt-link to="/" class="navbar-brand">
            <span class="brand-logo">
              <img src="/images/nuxt.svg" alt="logo" />
            </span>
            <h2 class="brand-text">الباشا خان</h2>
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
        <li
          class="nav-item"
          :class="$route.path == '/dashboard' ? 'active' : ''"
        >
          <nuxt-link to="/dashboard" class="d-flex align-items-center">
            <airplay-icon size="1.5x" class="custom-class"></airplay-icon>
            <span class="menu-title text-truncate" data-i18n="Dashboards"
              >لوحة التحكم</span
            >
          </nuxt-link>
        </li>

        <li class="navigation-header">
          <span data-i18n="Apps &amp; Pages">الصفحات</span
          ><i data-feather="more-horizontal"></i>
        </li>
        <li class="nav-item" :class="$route.path == '/admins' ? 'active' : ''">
          <nuxt-link to="/admins" class="d-flex align-items-center">
            <user-check-icon size="1.5x" class="custom-class"></user-check-icon>
            <span class="menu-title text-truncate" data-i18n="Dashboards"
              >المسئوليين</span
            >
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { AirplayIcon, UserIcon, UserCheckIcon } from "vue-feather-icons";

export default {
  components: {
    AirplayIcon,
    UserIcon,
    UserCheckIcon,
  },
};
</script>

<style lang="scss" scoped></style>
