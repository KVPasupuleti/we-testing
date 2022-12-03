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

      const manifest = self.__WB_MANIFEST

      workbox.precaching.precacheAndRoute([])
   } else {
      console.error('Workbox could not be loaded. No offline support')
   }
}

importScripts('https://ssl.widgets.webengage.com/js/service-worker.js')
