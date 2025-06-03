import { assertEquals, assertThrows } from "jsr:@std/assert";

export function minesweeper(input: string): string {
    const grid = input.split("\n");
    const height = grid.length;
    const width = grid[0].length;
    const output: string[] = [];

    for (let row = 0; row < height; row++) {
        let line = "";
        for (let col = 0; col < width; col++) {
            if (grid[row][col] === "*") {
                line += "*";
            } else {
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0) continue;
                        const r = row + dr;
                        const c = col + dc;
                        if (
                            r >= 0 &&
                            r < height &&
                            c >= 0 &&
                            c < width &&
                            grid[r][c] === "*"
                        ) {
                            count++;
                        }
                    }
                }
                line += count.toString();
            }
        }
        output.push(line);
    }

    return output.join("\n");
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

Deno.test("2x1 avec une mine en bas", () => {
    const input = ".\n*";
    const expected = "1\n*";
    assertEquals(minesweeper(input), expected);
});

Deno.test("2x1sans mine", () => {
    const input = ".\n.";
    const expected = "0\n0";
    assertEquals(minesweeper(input), expected);
});

Deno.test("2x2 avec une mine en haut à gauche", () => {
    const input = "*.\n..";
    const expected = "1\n11";
    assertEquals(minesweeper(input), expected);
});
