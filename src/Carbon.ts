export class Carbon {
  current: Date
  locale: string | null

  constructor(date: Date | string, locale: string | null = null) {
    this.current = typeof date === 'string' ? new Date(date) : date
    this.locale = locale
  }

  public setLocale(locale: string | null): void {
    this.locale = locale
  }

  public static getDayName(date: Date, locale: string): string {
    return date.toLocaleDateString(locale, { weekday: 'short' })
  }

  /**
   * Returns the formatted date string.
   */
  format(value: string): string {
    const saveLocale: string = this.locale ? this.locale : 'en'

    const replacements = {
      D: Carbon.getDayName(this.current, saveLocale),
      d: this.current.getDate().toString().padStart(2, '0')
    }

    for (const [search, replace] of Object.entries(replacements)) {
      const reg = new RegExp(search, 'g')

      value = value.replace(reg, replace)
    }

    return value
  }
}
