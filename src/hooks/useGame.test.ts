import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import useGame, { checkWinner } from "./useGame";
import type { BoardState } from "../types";

describe("Тестування утиліти checkWinner (Unit)", () => {
  it("Перевірка поверення null, при старті гри", () => {
    const board: BoardState = Array(9).fill(null);

    expect(checkWinner(board)).toBeNull();
  });

  it("повинен повертати переможця та виграшну комбінацію по горизонталі", () => {
    let board: BoardState = ["X", "X", "X", null, "O", "X", null, "O", "O"];

    expect(checkWinner(board)).toEqual({
      winner: "X",
      combination: [0, 1, 2],
    });
  });
});

describe("Тестування хука useGame (Unit)", () => {
  it("повинен повертати початковий стан гри, а саме стан поля, таймера і поточного гравця", () => {
    const { result } = renderHook(() => useGame());

    expect(result.current.cells).toEqual(Array(9).fill(null));
    expect(result.current.currentPlayer).toBe("X");
    expect(result.current.winner).toBeNull();
    expect(result.current.seconds).toBe(0);
    expect(result.current.winnerCombination).toEqual([]);
    expect(result.current.isDraw).toBe(false);
  });
});
