a = 0
b = 3
c = 5
d = true


while (a < 5) {
    if (a < b) {
        c = - (c - a)
        a = a + 3
        b = a * -3
        d = (a > c) || (b < a)
    } else {
        a = a - 2
        c = c * -2
        b = b * (-1)
        d = (a < c) && (b > a)
    }
    console.log(a, b, c,d)
}
