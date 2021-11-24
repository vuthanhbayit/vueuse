import { ref, Ref, watch } from '@vue/composition-api'
import { useDebounceFn } from '../useDebounceFn'
import { DebounceFilterOptions } from '../utils'

/**
 * Debounce updates of a ref.
 *
 * @return A new debounced ref.
 */
export function useDebounce<T>(value: Ref<T>, ms = 200, options: DebounceFilterOptions = {}): Readonly<Ref<T>> {
  if (ms <= 0)
    return value

  const debounced = ref(value.value as T) as Ref<T>

  const updater = useDebounceFn(() => {
    debounced.value = value.value
  }, ms, options)

  watch(value, () => updater())

  return debounced
}
