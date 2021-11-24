import { computed, ComputedRef, unref } from '@vue/composition-api'
import { MaybeRef } from '../utils'

/**
 * `OR` conditions for refs.
 *
 * @see https://vueuse.org/or
 */
export function or(...args: MaybeRef<any>[]): ComputedRef<boolean> {
  return computed(() => args.some(i => unref(i)))
}
