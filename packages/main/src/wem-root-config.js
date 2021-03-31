import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@wem/react",
  app: () => System.import("@wem/react"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@wem/vue",
  app: () => System.import("@wem/vue"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@wem/angular",
  app: () => System.import("@wem/angular"),
  activeWhen: ["/angular"],
});

start();
