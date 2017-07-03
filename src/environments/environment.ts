// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '<AIzaSyCC_V1WhtRChA_k_f9dP3MZvj_kJFvxkD8',
    authDomain: 'angular2-business-app.firebaseapp.com',
    databaseURL: 'https://angular2-business-app.firebaseio.com',
    projectId: 'angular2-business-app',
    storageBucket: 'angular2-business-app.appspot.com',
    messagingSenderId: '995992632125'
  }
};
