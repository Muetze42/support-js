// noinspection JSUnusedGlobalSymbols

/**
 * Few functions is derived from the code of the Laravel™ Framework (2024-08-24), wich is
 * subject of the MIT License (https://github.com/laravel/framework?tab=MIT-1-ov-file#readme)
 * Copyright (c) 2011-2024 Laravel Holdings Inc. (https://laravel.com/)
 */

/**
 * Get an item from an array or object using "dot" notation.
 */
export function data_get(obj: object, path: string | number, fallback: any = null) {
    if (Number.isInteger(path)) {
        path = path.toString()
    }
    path = <string>path

    let properties = Array.isArray(path) ? path : path.split('.')
    let value = properties.reduce((prev, curr) => {
        return prev && prev[curr]
    }, obj)

    return value !== undefined ? value : fallback
}

/**
 * Set an item on an array or object using "dot" notation.
 */
// export function data_set(obj, path, value) {
//     let parts = path.split('.');
//     while (parts.length - 1) {
//         let key = parts.shift();
//         let shouldBeArray = parts.length ? new RegExp('^[0-9]+$').test(parts[0]) : false;
//         if (! (key in obj)) {
//             obj[key] = shouldBeArray ? [] : {};
//         }
//         obj = obj[key];
//     }
//     obj[parts[0]] = value;
// }


/**
 * Finds whether the type of variable is float.
 */
export function is_float(n: any): boolean {
  return n === +n && n !== (n | 0)
}

/**
 * Find whether the type of variable is integer
 */
export function is_integer(n: any): boolean {
  return n === +n && n === (n | 0)
}


/**
 * Finds whether a variable is a number.
 */
export function is_numeric(n: any): boolean {
  return is_float(n) || is_integer(n)
}

/**
 * Provide access to optional objects.
 */
export function optional(value: any, defaultValue = null) {
  return value ? value : defaultValue
}

/**
 * Check for lowercase character(s).
 */
export function ctype_lower(text: any): boolean {
  if (typeof text !== 'string') {
    return false
  }

  return text === text.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
}
