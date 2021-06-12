type user = {
    pw: string
}
type additional = {
    email: string
}
type merge = user|additional
const user: merge = {
    pw: "",
}