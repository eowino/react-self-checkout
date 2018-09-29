/**
 * Concat classes for React className property. Skips empty strings, nulls & undefined.
 * @param classes
 */
export function css(...classes) {
  return classes.filter(c => typeof c === 'string' && !!c.trim()).join(' ');
}
