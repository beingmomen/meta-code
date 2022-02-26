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
        <ul class="nav navbar-nav">
          <li @click="sidebarToggle" class="nav-item">
            <nuxt-link to="" class="nav-link">
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
              title="البريد الإلكتروني"
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
              title="الدردشة"
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
              title="التقويم"
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
              title="المهام"
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
            ><i class="flag-icon flag-icon-eg"></i
            ><span class="selected-language">العربية</span></nuxt-link
          >
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdown-flag"
          >
            <nuxt-link class="dropdown-item" to data-language="en"
              ><i class="flag-icon flag-icon-us"></i> الإنجليزية</nuxt-link
            ><nuxt-link class="dropdown-item" to data-language="fr"
              ><i class="flag-icon flag-icon-eg"></i> العربية</nuxt-link
            >
          </div>
        </li>
        <!-- v-if="isDark" -->
        <li class="nav-item d-none d-lg-block">
          <nuxt-link to="" class="nav-link nav-link-style">
            <moon-icon size="4x" class="custom-class"></moon-icon>
          </nuxt-link>
        </li>
        <!-- <li class="nav-item d-none d-lg-block">
          <nuxt-link to="" class="nav-link nav-link-style">
            <sun-icon size="4x" class="custom-class"></sun-icon>
          </nuxt-link>
        </li> -->
        <li class="nav-item dropdown dropdown-cart mr-25">
          <nuxt-link class="nav-link" to="" data-toggle="dropdown">
            <shopping-cart-icon
              size="4x"
              class="custom-class"
            ></shopping-cart-icon>
            <span
              class="badge badge-pill badge-primary badge-up cart-item-count"
              >1</span
            ></nuxt-link
          >
          <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
            <li class="dropdown-menu-header">
              <div class="dropdown-header d-flex">
                <h4 class="notification-title mb-0 mr-auto">قائمة المشتريات</h4>
                <div class="badge badge-pill badge-light-primary">1 العدد</div>
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
                <h6 class="font-weight-bolder mb-0">المجموع:</h6>
                <h6 class="text-primary font-weight-bolder mb-0">$10,999.00</h6>
              </div>
              <nuxt-link class="btn btn-primary btn-block" to=""
                >قم بالمراجعة</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown dropdown-notification mr-25">
          <nuxt-link class="nav-link" to="" data-toggle="dropdown">
            <bell-icon size="4x" class="custom-class"></bell-icon>
            <span class="badge badge-pill badge-danger badge-up"
              >1</span
            ></nuxt-link
          >
          <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
            <li class="dropdown-menu-header">
              <div class="dropdown-header d-flex">
                <h4 class="notification-title mb-0 mr-auto">الإشعارات</h4>
                <div class="badge badge-pill badge-light-primary">1 جديد</div>
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
                >قم بقراءة جميع الإشعارات</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown dropdown-user">
          <nuxt-link
            to=""
            class="nav-link dropdown-toggle dropdown-user-link"
            id="dropdown-user"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="user-nav d-sm-flex d-none">
              <span class="user-name font-weight-bolder">الباشا خان</span
              ><span class="user-status">مسئول</span>
            </div>
            <span class="avatar"
              ><img
                class="round"
                src="~/assets/app-assets/images/portrait/small/avatar-s-11.jpg"
                alt="avatar"
                height="40"
                width="40" /><span class="avatar-status-online"></span
            ></span>
          </nuxt-link>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdown-user"
          >
            <nuxt-link class="dropdown-item" to="">
              <user-icon size="1.5x" class="custom-class"></user-icon>
              Profile</nuxt-link
            >
            <nuxt-link class="dropdown-item" to="">
              <mail-icon size="1.5x" class="custom-class"></mail-icon>
              Inbox
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="">
              <check-square-icon
                size="1.5x"
                class="custom-class"
              ></check-square-icon>
              Task
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="">
              <message-square-icon
                size="1.5x"
                class="custom-class"
              ></message-square-icon>
              Chats
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link class="dropdown-item" to="">
              <settings-icon size="1.5x" class="custom-class"></settings-icon>
              Settings
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="">
              <credit-card-icon
                size="1.5x"
                class="custom-class"
              ></credit-card-icon>
              Pricing
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="">
              <help-circle-icon
                size="1.5x"
                class="custom-class"
              ></help-circle-icon>
              FAQ
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="">
              <power-icon size="1.5x" class="custom-class"></power-icon>
              Logout
            </nuxt-link>
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
  UserIcon,
  SettingsIcon,
  CreditCardIcon,
  HelpCircleIcon,
  PowerIcon,
} from "vue-feather-icons";

export default {
  props: ["mode"],
  data() {
    return {
      darkMode: "",
      menuCollapsed: "menu-collapsed",
      menuExpanded: "menu-expanded",
    };
  },
  methods: {
    sidebarToggle() {
      document.body.classList.toggle("menu-collapsed");
      document.querySelector(".main-menu").classList.toggle("expanded");
    },
    toggleMode() {
      console.warn("toggleMode");
    },
  },
  components: {
    UserIcon,
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
    SettingsIcon,
    CreditCardIcon,
    HelpCircleIcon,
    PowerIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>
