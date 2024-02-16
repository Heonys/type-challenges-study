/*
  9142 - CheckRepeatedChars
  -------
  by Hong (@RThong) #보통 #union #string

  ### 질문

  Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?

  For example:

  ```ts
  type CheckRepeatedChars<'abc'>   // false
  type CheckRepeatedChars<'aba'>   // true
  ```

  > GitHub에서 보기: https://tsch.js.org/9142/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Search<T extends any[], S> = T extends [infer First, ...infer Rest]
  ? First extends S
    ? true
    : Search<Rest, S>
  : false

type CheckRepeatedChars<
  T extends string,
  R extends any[] = [],
> = T extends `${infer First}${infer Rest}`
  ? Search<R, First> extends true
    ? true
    : CheckRepeatedChars<Rest, [...R, First]>
  : false

// type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer R}`
//   ? R extends `${string}${F}${string}`
//     ? true
//     : CheckRepeatedChars<R>
//   : false

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9142/answer/ko
  > 정답 보기: https://tsch.js.org/9142/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
