import { defineComponent, reactive } from '@vue/composition-api'
import { usePreferredDark } from '@vueuse/core'

export const UsePreferredDark = defineComponent({
  name: 'UsePreferredDark',
  setup(props, { slots }) {
    const data = reactive({
      prefersDark: usePreferredDark(),
    })

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
