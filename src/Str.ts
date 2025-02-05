// noinspection JSUnusedGlobalSymbols

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
    return this.lcfirst(this.studly(value))
  }

  /**
   * Convert a string to kebab case.
   */
  public static kebab(value: string): string {
    return this.snake(value, '-')
  }

  /**
   * Convert a string to snake case.
   */
  public static snake(value: string, delimiter: string = '_'): string {
    if (!this.ctype_lower(value)) {
      value = this.ucwords(value)
      value = value.replace(/\s+/u, '')
      value = value.replace(/(.)(?=[A-Z])/u, '$1' + delimiter)
    }

    return value.toLowerCase()
  }

  private static ctype_lower(text: any): boolean {
    if (typeof text !== 'string') {
      return false
    }

    return text === text.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()
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
   * Strip whitespace (or other characters) from the end of a string.
   */
  public static rtrim(string: string, character: string = '\\s'): string {
    let regex = new RegExp(character + '+$', 'g')

    return string.replace(regex, '')
  }

  /**
   * Reverse a string.
   */
  public static reverse(value: string): string {
    return value.split('').reverse().join('')
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
   * Uppercase the first character of each word in a string.
   */
  public static ucwords(value: string): string {
    return value.toLowerCase().replace(/\b[a-z]/g, function(letter: string) {
      return letter.toUpperCase();
    })
  }

  /**
   * Remove all non-numeric characters from a string.
   */
  public static numbers(value: string): string {
    return value.replace(/[^0-9]/g,'')
  }

  /**
   * Generate a UUID (version 4).
   */
  public static uuid(): string {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
      (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
    )
  }
}
