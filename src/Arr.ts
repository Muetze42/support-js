export class Arr {
  /**
   * Pluck an array of values from an array.
   */
  public static pluck(array: Array<any>, value: string | number): any[] {
    return array.map((i) => i[value])
  }
}
