import 'zone.js/dist/zone-testing';

import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
    mode?: string,
  ): {
    keys(): {
      map(context: unknown): void;
    };
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
