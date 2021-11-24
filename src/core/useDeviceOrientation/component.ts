import { defineComponent, reactive } from '@vue/composition-api'
import { useDeviceOrientation } from '@vueuse/core'

export const UseDeviceOrientation = defineComponent({
  name: 'UseDeviceOrientation',
  setup(props, { slots }) {
    const data = reactive(useDeviceOrientation())

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
