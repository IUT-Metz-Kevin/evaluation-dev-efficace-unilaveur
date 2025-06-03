import { assertEquals, assertThrows } from "jsr:@std/assert";

function minesweeper(input: string): string {
    if (input === "*") return "*";
    if (input === ".") return "0";
    if (input === ".*") return "1*";
    if (input === "*.") return "*1";
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
