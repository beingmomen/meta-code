export default function (context) {
  console.warn("context.store.getters.isAuth ::::", context.store.getters.isAuth);

  if (!context.store.getters.isAuth) {
    context.redirect("/login")
  }
}
