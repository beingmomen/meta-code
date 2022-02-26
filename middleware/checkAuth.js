export default function (context) {
  console.warn("check auth");
  context.store.dispatch("initAuth", context.req)

}
