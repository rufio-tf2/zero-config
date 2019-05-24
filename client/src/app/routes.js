const routes = [
  {
    id: 'options',
    label: 'Options',
    routes: [
      {
        id: 'keyboard',
        label: 'Keyboard',
        path: '/keyboard',
      },
      {
        id: 'mouse',
        label: 'Mouse',
        path: '/mouse',
      },
      {
        id: 'audio',
        label: 'Audio',
        path: '/audio',
      },
      {
        id: 'video',
        label: 'Video',
        path: '/video',
      },
      {
        id: 'voice',
        label: 'Voice',
        path: '/voice',
      },
      {
        id: 'multiplayer',
        label: 'Multiplayer',
        path: '/multiplayer',
      },
    ],
  },
  {
    id: 'advancedOptions',
    label: 'Advanced Options',
    routes: [
      {
        id: 'combatOptions',
        label: 'Combat Options',
        path: '/combat-options',
      },
    ],
  },
];

export default routes;
