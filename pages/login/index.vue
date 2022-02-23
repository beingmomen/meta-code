<template>
  <div class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row"></div>
      <div class="content-body">
        <div class="auth-wrapper auth-v1 px-2">
          <div class="auth-inner py-2">
            <!-- Login v1 -->
            <div class="card mb-0">
              <div class="card-body">
                <nuxt-link to="" class="brand-logo">
                  <!-- <img src="/at.svg" alt="logo" /> -->
                  <img src="/images/code.svg" alt="logo" />
                  <h2 class="brand-text text-primary ml-1">META CODE</h2>
                </nuxt-link>

                <h4 class="card-title mb-1">Welcome to Meta Code! 👋</h4>
                <p class="card-text mb-2">
                  Please sign-in to your account and start the adventure
                </p>

                <form class="auth-login-form mt-2">
                  <div class="form-group">
                    <label for="login-email" class="form-label">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="login-email"
                      name="login-email"
                      placeholder="john@example.com"
                      aria-describedby="login-email"
                      tabindex="1"
                      autofocus
                    />
                  </div>

                  <div class="form-group">
                    <div class="d-flex justify-content-between">
                      <label for="login-password">Password</label>
                      <nuxt-link to="">
                        <small>Forgot Password?</small>
                      </nuxt-link>
                    </div>
                    <div
                      class="input-group input-group-merge form-password-toggle"
                    >
                      <input
                        type="password"
                        class="form-control form-control-merge"
                        id="login-password"
                        name="login-password"
                        tabindex="2"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="login-password"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text cursor-pointer">
                          <eye-icon size="1.5x" class="custom-class"></eye-icon>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="remember-me"
                        tabindex="3"
                      />
                      <label class="custom-control-label" for="remember-me">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-block" tabindex="4">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <!-- /Login v1 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EyeIcon } from "vue-feather-icons";

export default {
  name: "login",
  layout: "auth",
  components: {
    EyeIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>
