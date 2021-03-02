import * as Pages from "../pages";
 const routes = [
    {
      path: "/",
      component: Pages.Threejs,
      protectedRoute: false,
      nav: {
        show: false,
        icon: <></>,
        name: "Threejs",
      },
    },

  ];
  export default routes;