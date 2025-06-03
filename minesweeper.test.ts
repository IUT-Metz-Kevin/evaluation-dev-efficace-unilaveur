import { assertEquals, assertThrows } from "jsr:@std/assert";

export function minesweeper(input: string): string {
    const lines = input.split("\n");

    // horizontal
    if (lines.length === 1) {
        const row = lines[0];
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

    // vertical
    if (lines.length === 2 && lines[0].length === 1 && lines[1].length === 1) {
        const top = lines[0];
        const bottom = lines[1];
        const result = [];

        result.push(top === "*" ? "*" : (bottom === "*" ? "1" : "0"));
        result.push(bottom === "*" ? "*" : (top === "*" ? "1" : "0"));

        return result.join("\n");
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

Deno.test("2x1 avec une mine en haut", () => {
    const input = "*\n.";
    const expected = "*\n1";
    assertEquals(minesweeper(input), expected);
});
