import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'ring-of-fire-f5547',
          appId: '1:306768987357:web:a6d23cda3fd81bd29bc734',
          storageBucket: 'ring-of-fire-f5547.appspot.com',
          apiKey: 'AIzaSyA74s_dW7NLJ2p3XUbni3wiLD0LIDDxCYY',
          authDomain: 'ring-of-fire-f5547.firebaseapp.com',
          messagingSenderId: '306768987357',
        }),
      ),
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
