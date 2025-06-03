import { assertEquals, assertThrows } from "jsr:@std/assert";

export function minesweeper(input: string): string {
    if (!input.includes("\n")) {
        const row = input;
        let result = "";
        for (let i = 0; i < row.length; i++) {
            if (row[i] === "*") {
                result += "*";
            } else {
                let count = 0;
                if (i > 0 && row[i - 1] === "*") count++;
                if (i < row.length - 1 && row[i + 1] === "*") count++;
                result += count.toString();
            }
        }
        return result;
    }

    return "";
}

Deno.test("1x1 sans mine", () => {
    const input = ".";
    const expected = "0";
    assertEquals(minesweeper(input), expected);
});

Deno.test("1x1 avec mine", () => {
    const input = "*";
    const expected = "*";
    assertEquals(minesweeper(input), expected);
});

Deno.test("1x2 avec une mine à droite", () => {
    const input = ".*";
    const expected = "1*";
    assertEquals(minesweeper(input), expected);
});

Deno.test("1x2 avec une mine à gauche", () => {
    const input = "*.";
    const expected = "*1";
    assertEquals(minesweeper(input), expected);
});

Deno.test("1x3 avec une mine au centre", () => {
    const input = ".*.";
    const expected = "1*1";
    assertEquals(minesweeper(input), expected);
});
