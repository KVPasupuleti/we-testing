if ('function' === typeof importScripts) {
   importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
   )
   if (workbox) {
      console.log('Workbox is loaded')

      workbox.setConfig({ debug: false })

      self.addEventListener('install', event => {
         self.skipWaiting()
         window.location.reload()
      })

      self.addEventListener('notificationclick', function (event) {
         // Android doesn't close the notification when you click on it
         // See: http://crbug.com/463146
         event.notification.close()

         // This looks to see if the current is already open and
         // focuses if it is
         event.waitUntil(
            clients
               .matchAll({
                  type: 'window'
               })
               .then(function (clientList) {
                  const additionalData = event?.notification?.data?.data
                     ? JSON.parse(event.notification.data.data)
                     : {}
                  const url = event?.notification?.data?.url
                  for (var i = 0; i < clientList.length; i++) {
                     var client = clientList[i]
                     if (client.url === url) return client.focus()
                  }
                  if (clients.openWindow) {
                     if (url) {
                        return clients.openWindow(url)
                     }
                     return clients.openWindow('/')
                  }
               })
         )
      })

      const manifest = self.__WB_MANIFEST

      workbox.precaching.precacheAndRoute([])
   } else {
      console.error('Workbox could not be loaded. No offline support')
   }
}

importScripts('https://ssl.widgets.webengage.com/js/service-worker.js')
