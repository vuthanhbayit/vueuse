import { defineComponent, reactive } from '@vue/composition-api'
import { useNetwork } from '@vueuse/core'

export const UseNetwork = defineComponent({
  name: 'UseNetwork',
  setup(props, { slots }) {
    const data = reactive(useNetwork())

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
