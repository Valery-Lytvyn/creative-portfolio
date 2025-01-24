import { t } from "i18next";

export const projects = [
  {
    id: 1,
    project: {
      title: "Kolyska shop",
      url: "https://valery-lytvyn.github.io/kolyska_shop",
      repository: "https://github.com/Valery-Lytvyn/kolyska_shop",
      images: [
        "kolyska_shop_1",
        "kolyska_shop_2",
        "kolyska_shop_3",
        "kolyska_shop_4",
        "kolyska_shop_5",
        "kolyska_shop_6",
      ],
      getDescription: () => t("projects.kolyskaShop.description"),
      features: [
        {
          getTitle: () =>
            t("projects.kolyskaShop.features.routingCapabilities.title"),
          getDetails: () =>
            t("projects.kolyskaShop.features.routingCapabilities.details"),
        },
        {
          getTitle: () =>
            t("projects.kolyskaShop.features.interactiveAnimations.title"),
          getDetails: () =>
            t("projects.kolyskaShop.features.interactiveAnimations.details"),
        },
        {
          getTitle: () =>
            t("projects.kolyskaShop.features.userEngagement.title"),
          getDetails: () =>
            t("projects.kolyskaShop.features.userEngagement.details"),
        },
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      getConclusion: () => t("projects.kolyskaShop.conclusion"),
    },
  },
  {
    id: 2,
    project: {
      title: "Garage",
      url: "https://valery-lytvyn.github.io/garage",
      repository: "https://github.com/Valery-Lytvyn/garage",
      images: ["garage", "garage_1", "garage_2", "garage_3"],
      getDescription: () => t("projects.garage.description"),
      features: [
        {
          getTitle: () => t("projects.garage.features.dynamicContent.title"),
          getDetails: () =>
            t("projects.garage.features.dynamicContent.details"),
        },
        {
          getTitle: () => t("projects.garage.features.responsiveDesign.title"),
          getDetails: () =>
            t("projects.garage.features.responsiveDesign.details"),
        },
        {
          getTitle: () =>
            t("projects.garage.features.interactiveAnimations.title"),
          getDetails: () =>
            t("projects.garage.features.interactiveAnimations.details"),
        },
        {
          getTitle: () =>
            t("projects.garage.features.routingCapabilities.title"),
          getDetails: () =>
            t("projects.garage.features.routingCapabilities.details"),
        },
      ],
      technologies: ["React", "React Icons", "Motion", "Tailwind CSS", "Vite"],
      getConclusion: () => t("projects.garage.conclusion"),
    },
  },
  {
    id: 3,
    project: {
      title: "Estate Agency",
      url: "https://estate-agency-app.vercel.app",
      repository: "https://github.com/Valery-Lytvyn/estate-agency-app",
      images: [
        "estate_agency",
        "estate_agency_1",
        "estate_agency_2",
        "estate_agency_3",
        "estate_agency_4",
      ],
      getDescription: () => t("projects.estateAgency.description"),
      features: [
        {
          getTitle: () =>
            t("projects.estateAgency.features.responsiveDesign.title"),
          getDetails: () =>
            t("projects.estateAgency.features.responsiveDesign.details"),
        },
        {
          getTitle: () =>
            t("projects.estateAgency.features.interactiveAnimations.title"),
          getDetails: () =>
            t("projects.estateAgency.features.interactiveAnimations.details"),
        },
        {
          getTitle: () =>
            t("projects.estateAgency.features.carouselFunctionality.title"),
          getDetails: () =>
            t("projects.estateAgency.features.carouselFunctionality.details"),
        },
        {
          getTitle: () =>
            t("projects.estateAgency.features.modernFramework.title"),
          getDetails: () =>
            t("projects.estateAgency.features.modernFramework.details"),
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "Framer Motion",
        "React Icons",
        "React Spinners",
        "Swiper.js",
        "Tailwind CSS",
        "TypeScript",
      ],
      getConclusion: () => t("projects.estateAgency.conclusion"),
    },
  },
  {
    id: 4,
    project: {
      title: "Restaurant LGRAN",
      url: "https://valery-lytvyn.github.io/restaurant-landing-page",
      repository: "https://github.com/Valery-Lytvyn/restaurant-landing-page",
      images: [
        "restaurant_landing_page",
        "restaurant_landing_page_1",
        "restaurant_landing_page_2",
        "restaurant_landing_page_3",
        "restaurant_landing_page_4",
      ],
      getDescription: () => t("projects.restaurantLGRAN.description"),
      features: [
        {
          getTitle: () =>
            t("projects.restaurantLGRAN.features.modernDesign.title"),
          getDetails: () =>
            t("projects.restaurantLGRAN.features.modernDesign.details"),
        },
        {
          getTitle: () =>
            t("projects.restaurantLGRAN.features.responsiveLayout.title"),
          getDetails: () =>
            t("projects.restaurantLGRAN.features.responsiveLayout.details"),
        },
        {
          getTitle: () =>
            t("projects.restaurantLGRAN.features.smoothAnimations.title"),
          getDetails: () =>
            t("projects.restaurantLGRAN.features.smoothAnimations.details"),
        },
        {
          getTitle: () =>
            t("projects.restaurantLGRAN.features.lazyLoading.title"),
          getDetails: () =>
            t("projects.restaurantLGRAN.features.lazyLoading.details"),
        },
      ],
      technologies: [
        "React",
        "Framer Motion",
        "React Icons",
        "Tailwind CSS",
        "TypeScript",
        "Vite",
      ],
      getConclusion: () => t("projects.restaurantLGRAN.conclusion"),
    },
  },
  {
    id: 5,
    project: {
      title: "E-commerce",
      url: "https://valery-lytvyn.github.io/shop_app",
      repository: "https://github.com/Valery-Lytvyn/shop_app",
      images: ["shop_app", "shop_app_1", "shop_app_2"],
      getDescription: () => t("projects.eCommerce.description"),
      features: [
        {
          getTitle: () =>
            t(
              "projects.eCommerce.features.comprehensiveEcommerceFeatures.title",
            ),
          getDetails: () =>
            t(
              "projects.eCommerce.features.comprehensiveEcommerceFeatures.details",
            ),
        },
        {
          getTitle: () =>
            t(
              "projects.eCommerce.features.stateManagementWithReduxToolkit.title",
            ),
          getDetails: () =>
            t(
              "projects.eCommerce.features.stateManagementWithReduxToolkit.details",
            ),
        },
        {
          getTitle: () =>
            t("projects.eCommerce.features.userAuthentication.title"),
          getDetails: () =>
            t("projects.eCommerce.features.userAuthentication.details"),
        },
        {
          getTitle: () =>
            t("projects.eCommerce.features.toastNotifications.title"),
          getDetails: () =>
            t("projects.eCommerce.features.toastNotifications.details"),
        },
      ],
      technologies: [
        "React",
        "Redux Toolkit",
        "Firebase",
        "Bootstrap",
        "Sass",
        "React Toastify",
        "Axios",
        "React Router DOM",
        "Redux Persist",
      ],
      getConclusion: () => t("projects.eCommerce.conclusion"),
    },
  },
  {
    id: 6,
    project: {
      title: "Gym Club",
      url: "https://valery-lytvyn.github.io/gym-club",
      repository: "https://github.com/Valery-Lytvyn/gym-club",
      images: [
        "gym_club",
        "gym_club_1",
        "gym_club_2",
        "gym_club_3",
        "gym_club_4",
      ],
      getDescription: () => t("projects.gymClub.description"),
      features: [
        {
          getTitle: () =>
            t("projects.gymClub.features.modernLandingPage.title"),
          getDetails: () =>
            t("projects.gymClub.features.modernLandingPage.details"),
        },
        {
          getTitle: () => t("projects.gymClub.features.responsiveDesign.title"),
          getDetails: () =>
            t("projects.gymClub.features.responsiveDesign.details"),
        },
        {
          getTitle: () => t("projects.gymClub.features.iconIntegration.title"),
          getDetails: () =>
            t("projects.gymClub.features.iconIntegration.details"),
        },
        {
          getTitle: () => t("projects.gymClub.features.optimizedStyling.title"),
          getDetails: () =>
            t("projects.gymClub.features.optimizedStyling.details"),
        },
      ],
      technologies: ["React", "Bootstrap", "Sass", "React Icons"],
      getConclusion: () => t("projects.gymClub.conclusion"),
    },
  },
  {
    id: 7,
    project: {
      title: "Travel Agency",
      url: "https://valery-lytvyn.github.io/travel_agency",
      repository: "https://github.com/Valery-Lytvyn/travel_agency",
      images: [
        "travel_agency",
        "travel_agency_1",
        "travel_agency_2",
        "travel_agency_3",
        "travel_agency_4",
      ],
      getDescription: () => t("projects.travelAgency.description"),
      features: [
        {
          getTitle: () =>
            t("projects.travelAgency.features.interactiveUserExperience.title"),
          getDetails: () =>
            t(
              "projects.travelAgency.features.interactiveUserExperience.details",
            ),
        },
        {
          getTitle: () =>
            t("projects.travelAgency.features.videoIntegration.title"),
          getDetails: () =>
            t("projects.travelAgency.features.videoIntegration.details"),
        },
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "React"],
      getConclusion: () => t("projects.travelAgency.conclusion"),
    },
  },
  {
    id: 8,
    project: {
      title: "Arithmetic",
      url: "https://valery-lytvyn.github.io/arithmetic",
      repository: "https://github.com/Valery-Lytvyn/arithmetic",
      images: [
        "arithmetic",
        "arithmetic_1",
        "arithmetic_2",
        "arithmetic_3",
        "arithmetic_4",
        "arithmetic_5",
      ],
      getDescription: () => t("projects.arithmetic.description"),
      features: [
        {
          getTitle: () =>
            t("projects.arithmetic.features.engagingGameplay.title"),
          getDetails: () =>
            t("projects.arithmetic.features.engagingGameplay.details"),
        },
        {
          getTitle: () =>
            t("projects.arithmetic.features.celebratoryAnimations.title"),
          getDetails: () =>
            t("projects.arithmetic.features.celebratoryAnimations.details"),
        },
        {
          getTitle: () =>
            t("projects.arithmetic.features.statePersistence.title"),
          getDetails: () =>
            t("projects.arithmetic.features.statePersistence.details"),
        },
        {
          getTitle: () =>
            t("projects.arithmetic.features.childFriendlyDesign.title"),
          getDetails: () =>
            t("projects.arithmetic.features.childFriendlyDesign.details"),
        },
        {
          getTitle: () =>
            t("projects.arithmetic.features.navigationSystem.title"),
          getDetails: () =>
            t("projects.arithmetic.features.navigationSystem.details"),
        },
      ],
      technologies: [
        "React",
        "Redux Toolkit",
        "Redux Persist",
        "Bootstrap",
        "Sass",
        "React Router DOM",
        "TypeScript",
      ],
      getConclusion: () => t("projects.arithmetic.conclusion"),
    },
  },
  {
    id: 9,
    project: {
      title: "Weather app",
      url: "https://valery-lytvyn.github.io/weather_app",
      repository: "https://github.com/Valery-Lytvyn/weather_app",
      images: ["weather_app", "weather_app_1"],
      getDescription: () => t("projects.weatherApp.description"),
      features: [
        {
          getTitle: () =>
            t("projects.weatherApp.features.realTimeWeatherData.title"),
          getDetails: () =>
            t("projects.weatherApp.features.realTimeWeatherData.details"),
        },
        {
          getTitle: () =>
            t("projects.weatherApp.features.responsiveLayout.title"),
          getDetails: () =>
            t("projects.weatherApp.features.responsiveLayout.details"),
        },
        {
          getTitle: () =>
            t("projects.weatherApp.features.loadingIndicators.title"),
          getDetails: () =>
            t("projects.weatherApp.features.loadingIndicators.details"),
        },
        {
          getTitle: () =>
            t("projects.weatherApp.features.navigationSystem.title"),
          getDetails: () =>
            t("projects.weatherApp.features.navigationSystem.details"),
        },
      ],
      technologies: [
        "React",
        "React Router DOM",
        "Tailwind CSS",
        "TypeScript",
        "Vite",
      ],
      getConclusion: () => t("projects.weatherApp.conclusion"),
    },
  },
];
