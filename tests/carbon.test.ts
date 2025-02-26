import { Carbon } from '../src';
import { expect, test } from "vitest";

const dateTimeStrings = [
  '2025-01-27 12:12:15',
  // 'Mon Jan 27 2025 07:00:00 GMT+0100 (Mitteleuropäische Normalzeit)'
]

for (const [dateTime, key] of dateTimeStrings) {
  test(key.toString() + ' format d', async () => {
    let dt = new Carbon(new Date(dateTime))

    expect(
      dt.format('d')
    ).toBe(new Date(dateTime).toString())
  })

  // test(key.toString() + ' format D', async () => {
  //   let dt = new Carbon(dateTime)
  //
  //   expect(
  //     dt.format('D')
  //   ).toBe('Mon')
  // })

}
