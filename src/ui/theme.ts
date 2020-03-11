const themeDefaults = {
  primary: '#991E2A',
  active: '#d93f4e',
  secondary: '#283593',
  pilot: '#424242',
  accent: '#FF1744',
  error: '#F44336',
  info: '#1565C0',
  success: '#00C853',
  warning: '#FFAB00',
  text: '#212121',
  'light-text': '#424242',
  panel: '#ccc',
  'light-panel': '#dbdbdb',
  'panel-border': '#8a949e',
  frame: '#673AB7',
  weapon: '#212121',
  'mech-weapon': '#212121',
  'pilot-weapon': '#212121',
  system: '#58b434',
  'mech-system': '#58b434',
  'pilot-gear': '#58b434',
  trait: '#673AB7',
  protocol: '#1b6361',
  mod: '#00BFA5',
  'weapon-mod': '#00BFA5',
  structure: '#F50057',
  hp: '#0284FF',
  armor: '#82B1FF',
  'pilot-armor': '#82B1FF',
  heat: '#FF7043',
  stress: '#FF3D00',
  heatcap: '#EF5350',
  dangerzone: '#FF1744',
  repcap: '#8E8E8E',
  overcharge: '#F50057',
  corepower: '#00BFA5',
  background: '#EDEDED',

  'action--move': '#C62828',
  'action--full': '#283593',
  'action--quick': '#3949AB',
  'action--overcharge': '#F50057',
  'action--reaction': '#512DA8',
  'action--free': '#00695C',
  'action--downtime': '#37474F',
  'action--protocol': '#007676',
  'action--tech': '#802475',

  'damage--kinetic': '#757575',
  'damage--energy': '#29B6F6',
  'damage--explosive': '#FFA726',
  'damage--burn': '#B71C1C',
  'damage--heat': '#FF7043',
  'damage--variable': '#D500F9',

  'reserve--resources': '#00695C',
  'reserve--tactical': '#827717',
  'reserve--mech': '#BF360C',
  'reserve--project': '#5D4037',
  'reserve--organization': '#455A64',
  'reserve--custom': '#D84315',

  'role--striker': '#bd3f39',
  'role--defender': '#d67e08',
  'role--controller': '#398ad6',
  'role--support': '#6aa84f',
  'role--artillery': '#a64d79',
  'role--biological': '#7e52a3',

  'npc--feature': '#991E2A',
  'npc--trait': '#991E2A',
  'npc--system': '#58b434',
  'npc--weapon': '#212121',
  'npc--tech': '#007674',
  'npc--reaction': '#512DA8',

  enemy: '#C62828',
  ally: '#1661b8',
  neutral: '#455A64',
}

const theme: any = {
  icons: {
    iconfont: 'mdi',
    values: {
      move: 'mdi-arrow-right-bold-hexagon-outline',
      quick: 'mdi-hexagon-slice-3',
      full: 'mdi-hexagon-slice-6',
      reaction: 'mdi-redo-variant',
      overcharge: 'mdi-alert-octagram',
      downtime: 'mdi-weather-sunset-down',
      free: 'mdi-axis-arrow',
    },
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        ...themeDefaults,
        background: '#EDEDED',

        'stark-panel': '#EDEDED',
        'stark-text': '#000',
      },
      dark: {
        ...themeDefaults,

        'light-text': '#E0E0E0',

        background: '#202020',
        panel: {
          base: '#202020',
          darken1: '#191919',
        },
        text: '#EEEEEE',

        'stark-panel': '#000',
        'stark-text': '#fff',

        secondary: '#4658db',

        weapon: '#2f2f2f',

        'action--downtime': '#586a73',
      },
    },
  },
}

export default theme
