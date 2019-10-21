Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
    // addGlobalClass: true,
  },
  externalClasses: 'class',
  properties: {
    label: {
      type: String,
      value: ''
    },
    hasCity: {
      type: Boolean,
      value: false
    },
    selected: {
      type: Boolean,
      value: false
    }
  },
  ready() {

  }
})