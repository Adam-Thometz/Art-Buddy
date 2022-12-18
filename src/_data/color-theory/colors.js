import prependBrightnessAndSaturation from "_utils/_general/prependBrightnessAndSaturation";

const colors = {
  // PRIMARY
  yellow: {
    hex: '#FEEE1D',
    filter: 'invert(87%) sepia(48%) saturate(823%) hue-rotate(343deg) brightness(107%) contrast(99%)'
  },
  red: {
    hex: '#EE2024',
    filter: 'invert(36%) sepia(91%) saturate(7216%) hue-rotate(349deg) brightness(95%) contrast(96%)'
  },
  blue: {
    hex: '#4266B4',
    filter: 'invert(36%) sepia(13%) saturate(2712%) hue-rotate(183deg) brightness(100%) contrast(87%)'
  },

  // SECONDARY
  orange: {
    hex: '#F78F20',
    filter: 'invert(74%) sepia(38%) saturate(5375%) hue-rotate(347deg) brightness(101%) contrast(94%)'
  },
  green: {
    hex: '#2DB54F',
    filter: 'invert(64%) sepia(15%) saturate(2216%) hue-rotate(82deg) brightness(89%) contrast(80%)'
  },
  violet: {
    hex: '#783197',
    filter: 'invert(22%) sepia(34%) saturate(4099%) hue-rotate(264deg) brightness(88%) contrast(88%)'
  },

  // TERTIARY
  dandelion: {
    hex: '#FDCE0E',
    filter: 'invert(75%) sepia(92%) saturate(680%) hue-rotate(350deg) brightness(102%) contrast(98%)'
  },
  tangelo: {
    hex: '#F35623',
    filter: 'invert(49%) sepia(88%) saturate(4037%) hue-rotate(349deg) brightness(98%) contrast(94%)'
  },
  plum: {
      hex: '#A0409A',
    filter: 'invert(29%) sepia(85%) saturate(1273%) hue-rotate(273deg) brightness(83%) contrast(80%)'
  },
  blueberry: {
    hex: '#665BAA',
    filter: 'invert(42%) sepia(18%) saturate(1468%) hue-rotate(208deg) brightness(88%) contrast(94%)'
  },
  emerald: {
    hex: '#1A917E',
    filter: 'invert(44%) sepia(52%) saturate(579%) hue-rotate(121deg) brightness(94%) contrast(94%)'
  },
  pear: {
    hex: '#91C940',
    filter: 'invert(68%) sepia(80%) saturate(365%) hue-rotate(38deg) brightness(94%) contrast(87%)'
  },
}

for (let color in colors) {
  colors[color].filter = prependBrightnessAndSaturation(colors[color].filter);
}

export default colors;