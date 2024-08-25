/**
 * This class is derived from the code of the Laravel™ Framework (2024-08-24), wich is subject of
 * the MIT License (https://github.com/laravel/framework?tab=MIT-1-ov-file#readme)
 * Copyright (c) 2011-2024 Laravel Holdings Inc. (https://laravel.com/)
 */
export class NumberHelper {
  /**
   * The current default locale.
   */
  protected static locale: string | null = null

  /**
   * The fallback locale if the client locale could not determine.
   */
  protected static fallBackLocale: string = 'en'

  /**
   * The current default currency.
   */
  protected static defaultCurrency: string = 'EUR'

  /**
   * Format the given number according to the current locale.
   */
  public static format(
    number: number,
    precision: number = 0,
    maxPrecision: number = 0,
    locale: string | null = null
  ) {
    let useLocale: string = locale ? locale : this.getLocale()

    if (maxPrecision < precision) {
      maxPrecision = precision
    }

    return new Intl.NumberFormat(useLocale, {
      minimumFractionDigits: precision,
      maximumFractionDigits: maxPrecision
    }).format(
      number,
    )
  }

  /**
   * Convert the given number to its currency equivalent.
   */
  public static currency(number: number, currency: string | null, locale: string | null = null): string | false {
    let useLocale: string = locale ? locale : this.getLocale()
    let useCurrency: string = currency ? currency : this.defaultCurrency

    console.log('useCurrency', useCurrency)

    try {
      return new Intl.NumberFormat(useLocale, {
        style: 'currency',
        currency: useCurrency
      }).format(
        number,
      )
    } catch (exception) {
      console.error(exception)

      return false
    }
  }

  /**
   * Get the client locale.
   */
  public static getLocale(): string {
    if (!this.locale) {
      this.locale = document.documentElement.lang
    }

    let locale: string = this.locale ? this.locale : this.fallBackLocale

    return locale.replace('_', '-')
  }

  /**
   * Set the default locale.
   */
  public static useLocale(locale: string) {
    this.locale = locale
  }

  /**
   * Set the default currency.
   */
  public static useCurrency(currency: string) {
    this.defaultCurrency = currency
  }
}
