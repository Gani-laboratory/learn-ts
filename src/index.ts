type user = {
    woke: string,
    pw: number
}
type dua = {
    woke: string,
    pw: string,
    oke: string
}

type b = Extract<keyof user, keyof dua>
const oke: b = "pw"