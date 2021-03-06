/**
 * Reserved props
 */
export const PROPS_RESERVED = {
  children: true,
  parent: true,
}

/**
 * Removes any props that have reserved names
 * @param props
 */
export default function sanitizeProps(
  props: Record<string, any>
): Record<string, any> {
  return Object.keys(props).reduce((filteredProps, key) => {
    if (Object.keys(PROPS_RESERVED).indexOf(key) === -1) {
      return {
        ...filteredProps,
        [key]: props[key],
      }
    }

    return {
      ...filteredProps,
    }
  }, {})
}
