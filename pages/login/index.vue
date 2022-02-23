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
                  <img src="/at.svg" alt="logo" />
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
                      <a href="page-auth-forgot-password-v1.html">
                        <small>Forgot Password?</small>
                      </a>
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
                        <span class="input-group-text cursor-pointer"
                          ><i data-feather="eye"></i
                        ></span>
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

                <p class="text-center mt-2">
                  <span>New on our platform?</span>
                  <a href="page-auth-register-v1.html">
                    <span>Create an account</span>
                  </a>
                </p>

                <div class="divider my-2">
                  <div class="divider-text">or</div>
                </div>

                <div class="auth-footer-btn d-flex justify-content-center">
                  <a href="javascript:void(0)" class="btn btn-facebook">
                    <i data-feather="facebook"></i>
                  </a>
                  <a href="javascript:void(0)" class="btn btn-twitter white">
                    <i data-feather="twitter"></i>
                  </a>
                  <a href="javascript:void(0)" class="btn btn-google">
                    <i data-feather="mail"></i>
                  </a>
                  <a href="javascript:void(0)" class="btn btn-github">
                    <i data-feather="github"></i>
                  </a>
                </div>
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
export default {
  name: "login",
  layout: "auth",
};
</script>

<style lang="scss" scoped>
</style>
