import { SheriffConfig } from '@softarc/sheriff-core';

/**
  * Minimal configuration for Sheriff
  * Assigns the 'noTag' tag to all modules and
  * allows all modules to depend on each other.
  */

export const config: SheriffConfig = {
  enableBarrelLess: true,
  modules: {
    'src': ['domain:app'],
    'src/app': ['domain:app'],
    'src/app/shop': ['domain:shop', 'type:feature'],
    'src/app/account': ['domain:account', 'type:feature'],
  },
  depRules: {
    // root is a virtual module, which contains all files not being part
    // of any module, e.g. application shell, main.ts, etc.
    'root': 'noTag',
    'noTag': 'noTag',

    // add your dependency rules here
    'domain:app': ['type:feature', 'domain:app'],
    'domain:shop': ['domain:shop'],
    'domain:account': ['domain:account'],
  },
};
