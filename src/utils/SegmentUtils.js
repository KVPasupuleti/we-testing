// declare global {
//   interface Window {
//     analytics: any;
//   }
// }

// declare global { }

const Config = {}
const envVariables = process.env


Object.keys(envVariables).forEach(variable => {
  if (variable.includes('REACT_APP')) {
    const envKey = variable.replace('REACT_APP_', '')
    Config[envKey] = envVariables[variable]
  }
})

export function loadSegmentScript() {

  const segmentScript = document.createElement("script");
  segmentScript.textContent = `
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="om9PeFkRFJaxAEmaSIzIzJE1xirJPnm0";;analytics.SNIPPET_VERSION="4.15.3";
    analytics.load("om9PeFkRFJaxAEmaSIzIzJE1xirJPnm0");
    analytics.page();
    }}();
       `;
  document.head.appendChild(segmentScript);
}

export function identifyEvent() {
  try {
    window.analytics &&
      window.analytics.ready(function () {
        identifyUser(localStorage.getItem('testing_user_id'), {});
        trackEvent("Testing Track Event", {
          email: "krishna.pasupuleti@nxtwave.co.in",
          firstName: "Krishna",
          lastName: "Pasupuleti",
          phone: '9989889899',
          gender: 'male'
        });
      });
  } catch (err) { }
}

export function identifyUser(userId, extraData) {

  try {
    window.analytics.identify(userId, extraData, {
      integrations: {
        All: true,
        WebEngage: true
      }
    });
  } catch (e) {
    console.log("Identify user in segment failed", e);
  }

}

export function trackEvent(
  event,
  extraData,
  options = {}
) {

  try {
    window.analytics.track(event, extraData, {
      integrations: {
        All: true,
        WebEngage: true
      },
      ...options
    });
  } catch {
    console.log("Tracking event in segment failed");
  }

}


export function loginEvent() {
  if (window.webengage) {
    window.webengage.user.login(localStorage.getItem('testing_user_id'));
  }
}


export function logoutEvent() {
  if (window.webengage) {
    window.webengage.user.logout();
  }
}

