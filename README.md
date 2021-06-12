# Learn Ts

## Table of Content
* [kenapa typescript](#kenapa-typescript)
* [tsconfig](#tsconfig)
* [Tipe data di typescript](#Tipe-data-di-typescript)
* [interface](#interface)
* [type aliases](#type-aliases)

## kenapa typescript
### Berikut hal hal yang membuat gw belajar ts v:
- membuat semuanya menjadi jelas
- meminimalisir bug
- dah itu aja v:

## tsconfig
### tsconfig adalah file yang di generate dengan command `tsc --init` file ini berguna untuk typescript dalam mengcompile file ts menjadi js

## Tipe data di typescript
- sama kayak yang di javascript
- any
- union
- intersection
- void
- enum
- [advance type](#advance-type)

## interface
### berisi tipe data yang akan di tetapkan

## type aliases
### pengertian nya sama seperti interface hanya saja beda syntax penulisannya

## Perbedaan antara interface dan type aliases
| Feature              | Interface | Type |
| -------------------- | --------- | ---- |
| object               | ✅         | ✅    |
| merge                | ✅         | ✅    |
| implementes          | ✅         | ✅    |
| extend               | ✅         | ❌    |

## advance type
- Partial - membuat semuanya menjadi opsional
`Partial<T>`

- Required
`Required<T>`

- Readonly
`Readonly<T>`

- Pick
`Pick<T, K>`

- Omit
`Omit<T, K>`

- Record
`Record<K, T>`

- Extract
`Extract<T, U>`

- Exclude
`Exclude<T, U>`
