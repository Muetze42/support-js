/**
 * This class is derived from the code of the Laravel™ Framework (2024-08-24), wich is subject of
 * the MIT License (https://github.com/laravel/framework?tab=MIT-1-ov-file#readme)
 * Copyright (c) 2011-2024 Laravel Holdings Inc. (https://laravel.com/)
 */
export class Str {
  /**
   * Make a string's first character uppercase.
   */
  public static ucfirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  /**
   * Convert the given string to upper-case.
   */
  public static upper(string: string): string {
    return string.toUpperCase()
  }

  /**
   * Convert the given number to its currency equivalent.
   */
  public static camel(value: string): string {
    value = value.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')

    return value.substring(0, 1).toLowerCase() + value.substring(1)
  }

  /**
   * Convert a string to kebab case.
   */
  public static kebab(value: string): string {
    return value.replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  }

  /**
   * Convert a string to snake case.
   */
  public static snake(value: string): string {
    return value.replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '_')
      .toLowerCase()
  }

  /**
   * Convert a value to studly caps case.
   */
  public static studly(value: string): string {
    value = value.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    value = value.substring(0, 1).toLowerCase() + value.substring(1)

    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  /**
   * Make a string's first character lowercase.
   */
  public static lcfirst(string: string): string {
    return string.charAt(0).toLowerCase() + string.slice(1)
  }

  /**
   * Limit the number of characters in a string.
   */
  public static limit(value: string, limit: number = 100, end: string = '...'): string {
    value = value.trim()
    let valueLength = value.length
    let endLength = end.length

    if (valueLength <= limit) {
      return value
    }

    return value.substring(0, limit - endLength) + end
  }

  /**
   * Strip whitespace (or other characters) from the beginning and end of a string.
   */
  public static trim(string: string, character: string = '\\s'): string {
    let regex = new RegExp('^' + character + '+|' + character + '+$', 'g')

    return string.replace(regex, '')
  }

  /**
   * Strip whitespace (or other characters) from the beginning of a string
   */
  public static ltrim(string: string, character: string = '\\s'): string {
    let regex = new RegExp('^' + character + '*', 'g')

    return string.replace(regex, '')
  }

  /**
   * Strip whitespace (or other characters) from the end of a string
   */
  public static rtrim(string: string, character: string = '\\s'): string {
    let regex = new RegExp(character + '+$', 'g')

    return string.replace(regex, '')
  }

  /**
   * Determine if a given value is valid JSON string.
   */
  public static isJson(value: any) {
    try {
      JSON.parse(value)
    } catch (e) {
      return false
    }
    return true
  }

  /**
   * Returns an array of strings, each of which is a substring of string formed by splitting it on boundaries
   * formed by the string separator.
   */
  public static explode(separator: string, string: string, limit: number = 2147483647): string[] {
    let parts: string[] = string.split(separator)
    let array: string[] = []
    let key: number = 0
    limit = limit - 1

    for (let i = 0; i < parts.length; i++) {
      if (i > limit) {
        array[key] = array[key] + parts[i]
        continue
      }
      if (i === limit) {
        key = i
      }
      array[i] = parts[i]
    }

    return array
  }

  /**
   * Remove all non-numeric characters from a string.
   */
  public static numbers(value: string): string {
    return value.replace(/[^0-9]/g,'')
  }
}
