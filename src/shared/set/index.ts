import { Ref, set as _set } from '@vue/composition-api'

export function set<T>(ref: Ref<T>, value: T): void
export function set<O extends object, K extends keyof O>(target: O, key: K, value: O[K]): void

/**
 *  Shorthand for `ref.value = x`
 */
export function set(...args: any[]) {
  if (args.length === 2) {
    const [ref, value] = args
    ref.value = value
  }
  if (args.length === 3) {
    // @ts-ignore
    _set(...args)
  }
}
