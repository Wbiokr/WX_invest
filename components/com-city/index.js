Component({
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: 'class',
  properties: {
    label: {
      type: String,
      value: ''
    },
    selected: {
      type: Boolean,
      value: false
    }
  }
})