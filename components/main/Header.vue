<template>
  <!-- BEGIN: Header-->
  <nav
    class="
      header-navbar
      navbar navbar-expand-lg
      align-items-center
      floating-nav
      navbar-light navbar-shadow
    "
  >
    <div class="navbar-container d-flex content">
      <div class="bookmark-wrapper d-flex align-items-center">
        <ul class="nav navbar-nav d-xl-none">
          <li class="nav-item">
            <nuxt-link to="javascript:void(0);" class="nav-link menu-toggle">
              <menu-icon size="1.5x" class="custom-class"></menu-icon>
            </nuxt-link>
          </li>
        </ul>
        <ul class="nav navbar-nav bookmark-icons">
          <li class="nav-item d-none d-lg-block">
            <nuxt-link
              class="nav-link"
              to=""
              data-toggle="tooltip"
              data-placement="top"
              title="Email"
            >
              <mail-icon size="4x" class="custom-class"></mail-icon>
            </nuxt-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <nuxt-link
              class="nav-link"
              to=""
              data-toggle="tooltip"
              data-placement="top"
              title="Chat"
            >
              <message-square-icon
                size="4x"
                class="custom-class"
              ></message-square-icon>
            </nuxt-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <nuxt-link
              class="nav-link"
              to=""
              data-toggle="tooltip"
              data-placement="top"
              title="Calendar"
            >
              <calendar-icon size="4x" class="custom-class"></calendar-icon>
            </nuxt-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <nuxt-link
              class="nav-link"
              to=""
              data-toggle="tooltip"
              data-placement="top"
              title="Todo"
            >
              <check-square-icon
                size="4x"
                class="custom-class"
              ></check-square-icon>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <ul class="nav navbar-nav align-items-center ml-auto">
        <li class="nav-item dropdown dropdown-language">
          <nuxt-link
            class="nav-link dropdown-toggle"
            id="dropdown-flag"
            to=""
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i class="flag-icon flag-icon-us"></i
            ><span class="selected-language">English</span></nuxt-link
          >
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdown-flag"
          >
            <nuxt-link class="dropdown-item" to data-language="en"
              ><i class="flag-icon flag-icon-us"></i> English</nuxt-link
            ><nuxt-link class="dropdown-item" to data-language="fr"
              ><i class="flag-icon flag-icon-fr"></i> French</nuxt-link
            >
          </div>
        </li>
        <!-- v-if="isDark" -->
        <li @click="ToggleSiteMode" class="nav-item d-none d-lg-block">
          <nuxt-link to="" class="nav-link nav-link-style">
            <moon-icon size="4x" class="custom-class"></moon-icon>
          </nuxt-link>
        </li>
        <li class="nav-item d-none d-lg-block">
          <nuxt-link to="" class="nav-link nav-link-style">
            <sun-icon size="4x" class="custom-class"></sun-icon>
          </nuxt-link>
        </li>
        <li class="nav-item dropdown dropdown-cart mr-25">
          <nuxt-link class="nav-link" to="" data-toggle="dropdown">
            <shopping-cart-icon
              size="4x"
              class="custom-class"
            ></shopping-cart-icon>
            <span
              class="badge badge-pill badge-primary badge-up cart-item-count"
              >6</span
            ></nuxt-link
          >
          <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
            <li class="dropdown-menu-header">
              <div class="dropdown-header d-flex">
                <h4 class="notification-title mb-0 mr-auto">My Cart</h4>
                <div class="badge badge-pill badge-light-primary">4 Items</div>
              </div>
            </li>
            <li class="scrollable-container media-list">
              <div class="media align-items-center">
                <img
                  class="d-block rounded mr-1"
                  src="~/assets/app-assets/images/pages/eCommerce/1.png"
                  alt="donuts"
                  width="62"
                />
                <div class="media-body">
                  <x-icon size="1.5x" class="custom-class"></x-icon>
                  <div class="media-heading">
                    <h6 class="cart-item-title">
                      <nuxt-link class="text-body" to="">
                        Apple watch 5</nuxt-link
                      >
                    </h6>
                    <small class="cart-item-by">By Apple</small>
                  </div>
                  <div class="cart-item-qty">
                    <div class="input-group">
                      <input class="touchspin-cart" type="number" value="1" />
                    </div>
                  </div>
                  <h5 class="cart-item-price">$374.90</h5>
                </div>
              </div>
            </li>
            <li class="dropdown-menu-footer">
              <div class="d-flex justify-content-between mb-1">
                <h6 class="font-weight-bolder mb-0">Total:</h6>
                <h6 class="text-primary font-weight-bolder mb-0">$10,999.00</h6>
              </div>
              <nuxt-link class="btn btn-primary btn-block" to=""
                >Checkout</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown dropdown-notification mr-25">
          <nuxt-link class="nav-link" to="" data-toggle="dropdown">
            <bell-icon size="4x" class="custom-class"></bell-icon>
            <span class="badge badge-pill badge-danger badge-up"
              >5</span
            ></nuxt-link
          >
          <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
            <li class="dropdown-menu-header">
              <div class="dropdown-header d-flex">
                <h4 class="notification-title mb-0 mr-auto">Notifications</h4>
                <div class="badge badge-pill badge-light-primary">6 New</div>
              </div>
            </li>
            <li class="scrollable-container media-list">
              <nuxt-link class="d-flex" to="">
                <div class="media d-flex align-items-start">
                  <div class="media-left">
                    <div class="avatar">
                      <img
                        src="~/assets/app-assets/images/portrait/small/avatar-s-15.jpg"
                        alt="avatar"
                        width="32"
                        height="32"
                      />
                    </div>
                  </div>
                  <div class="media-body">
                    <p class="media-heading">
                      <span class="font-weight-bolder"
                        >Congratulation Sam 🎉</span
                      >winner!
                    </p>
                    <small class="notification-text">
                      Won the monthly best seller badge.</small
                    >
                  </div>
                </div>
              </nuxt-link>
            </li>
            <li class="dropdown-menu-footer">
              <a class="btn btn-primary btn-block" href="javascript:void(0)"
                >Read all notifications</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown dropdown-user">
          <a
            class="nav-link dropdown-toggle dropdown-user-link"
            id="dropdown-user"
            href="javascript:void(0);"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="user-nav d-sm-flex d-none">
              <span class="user-name font-weight-bolder">John Doe</span
              ><span class="user-status">Admin</span>
            </div>
            <span class="avatar"
              ><img
                class="round"
                src="~/assets/app-assets/images/portrait/small/avatar-s-11.jpg"
                alt="avatar"
                height="40"
                width="40" /><span class="avatar-status-online"></span
            ></span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdown-user"
          >
            <a class="dropdown-item" href="page-profile.html"
              ><i class="mr-50" data-feather="user"></i> Profile</a
            ><a class="dropdown-item" href="app-email.html"
              ><i class="mr-50" data-feather="mail"></i> Inbox</a
            ><a class="dropdown-item" href="app-todo.html"
              ><i class="mr-50" data-feather="check-square"></i> Task</a
            ><a class="dropdown-item" href="app-chat.html"
              ><i class="mr-50" data-feather="message-square"></i> Chats</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="page-account-settings.html"
              ><i class="mr-50" data-feather="settings"></i> Settings</a
            ><a class="dropdown-item" href="page-pricing.html"
              ><i class="mr-50" data-feather="credit-card"></i> Pricing</a
            ><a class="dropdown-item" href="page-faq.html"
              ><i class="mr-50" data-feather="help-circle"></i> FAQ</a
            ><a class="dropdown-item" href="page-auth-login-v2.html"
              ><i class="mr-50" data-feather="power"></i> Logout</a
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {
  MenuIcon,
  MailIcon,
  MessageSquareIcon,
  CalendarIcon,
  CheckSquareIcon,
  MoonIcon,
  SunIcon,
  ShoppingCartIcon,
  XIcon,
  BellIcon,
} from "vue-feather-icons";

export default {
  data() {
    return {
      // isDark: localStorage.getItem("isDark"),
    };
  },
  methods: {
    ToggleSiteMode() {
      if (this.isDark) {
        localStorage.setItem("isDark", false);
      } else {
        localStorage.setItem("isDark", true);
      }
    },
  },
  components: {
    MenuIcon,
    MailIcon,
    MessageSquareIcon,
    CalendarIcon,
    CheckSquareIcon,
    MoonIcon,
    SunIcon,
    ShoppingCartIcon,
    XIcon,
    BellIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>
