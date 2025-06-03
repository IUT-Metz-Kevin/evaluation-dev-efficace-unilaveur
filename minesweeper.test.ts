import { assertEquals, assertThrows } from "jsr:@std/assert";

function minesweeper(input: string): string {
    return "0";
}

Deno.test("1x1 sans mine", () => {
    const input = ".";
    const expected = "0";
    assertEquals(minesweeper(input), expected);
});
