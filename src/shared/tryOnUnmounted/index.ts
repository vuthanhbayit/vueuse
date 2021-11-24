import { getCurrentInstance, onUnmounted } from '@vue/composition-api'
import { Fn } from '../utils'

/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
export function tryOnUnmounted(fn: Fn) {
  if (getCurrentInstance())
    onUnmounted(fn)
}
