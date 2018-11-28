const framework = {
  icon: "/img/ionic.svg",
  title: "Ionic",
  steps: [
    {
      introduction:
        "First step is to install the Core AeroGear module, the module manages and binds all services together on the client side.",
      commands: [
        "Open a terminal and navigate to your appplication project root folder.",
        ["Install AeroGear Core package", "```npm install @aerogear/app```"],
        [
          'In your application, import and call the "init" method:',
          `
        import { init } from "@aerogear/app";

        const aerogearConfig = {
            // Replace with your own configuration
        };
        
        init(aerogearConfig);`
        ]
      ]
    }
  ],
  services: {
    keycloak: {
      serviceLogoUrl:
        "https://pbs.twimg.com/profile_images/702119821979344897/oAC05cEB_400x400.png",
      serviceName: "Identity Management",
      serviceDescription:
        "Identity Management - Identity and Access Management",
      setupText: "Identity Management SDK setup",
      docsLink:
        "https://docs.aerogear.org/aerogear/latest/identity-management.html#setup",
      steps: [
        {
          introduction:
            "Execute following commands in your project directory to install all necessary NPM packages needed for the Identity Management service:",
          commands: [
            [
              "Install the AeroGear Auth package from NPM",
              "```npm install @aerogear/auth```"
            ]
          ]
        }
      ]
    },
    push: {
      serviceLogoUrl:
        "https://avatars1.githubusercontent.com/u/3380462?s=200&v=4",
      serviceName: "Push Notifications",
      serviceDescription:
        "Installs a metrics service based on Prometheus and Grafana",
      setupText: "Push SDK setup",
      docsLink:
        "https://docs.aerogear.org/aerogear/latest/push-notifications.html#setup",
      steps: [
        {
          introduction:
            "Execute following commands in your project directory to install all necessary NPM packages needed for the Push Notifications service:",
          "commands:": [
            [
              "Install Cordova plugin `cordova-plugin-aerogear-push` for push",
              "```cordova plugin add @aerogear/cordova-plugin-aerogear-push```"
            ],
            [
              "Install Unified Push Server package needed for Device registration",
              "```npm install --save @aerogear/push```"
            ]
          ]
        }
      ]
    },
    metrics: {
      serviceLogoUrl:
        "https://avatars1.githubusercontent.com/u/3380462?s=200&v=4",
      serviceName: "Mobile Metrics",
      serviceDescription:
        "Installs a metrics service based on Prometheus and Grafana",
      setupText: "Mobile Metrics SDK setup",
      docsLink:
        "https://docs.aerogear.org/aerogear/latest/mobile-metrics.html#setup",
      steps: [
        {
          introduction:
            "Metrics is included in all SDK modules, if you already use a component from the AeroGear SDK in your app. You'll need only to install this NPM package to enable it:",
          commands: [
            [
              "Install `cordova-plugin-aerogear-metrics` Cordova plugin",
              "```cordova plugin add @aerogear/cordova-plugin-aerogear-metrics```"
            ]
          ]
        }
      ]
    },
    sync: {
      serviceLogoUrl:
        "https://avatars1.githubusercontent.com/u/3380462?s=200&v=4",
      serviceName: "Sync",
      serviceDescription: "Sync service blabla",
      setupText: "Sync SDK setup",
      docsLink:
        "https://docs.aerogear.org/aerogear/latest/mobile-metrics.html#setup",
      introduction:
        "Execute following commands in your project directory to install all necessary NPM packages needed for the Sync service:",
      steps: [{ introduction: "Some intro for sync" }]
    }
  }
};
export default framework;
