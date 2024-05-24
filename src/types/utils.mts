declare global {
  type Promisable<T> = T | Promise<T>
  type Readnotonly<T> = { -readonly [P in keyof T]: T[P] }
  type ArrayReadnotonly<T> = Array<Readnotonly<T>>
}
