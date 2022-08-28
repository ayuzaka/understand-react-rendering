import { useMemo, useState } from 'react';
import styles from './App.module.css';
import { CountCell, MemoCountCell, EmptyCell, MemoEmptyCell } from './Cell';

export const Primitive = () => {
  const [count, setCount] = useState(0);
  const memoCount = useMemo(() => count, [count]);

  const fixedCount = count % 2;
  const fixedMemoCount = useMemo(() => count % 2, []);

  const countUp = () => {
    setCount((count) => count + 2);
  };

  return (
    <div className={styles.app}>
      <button type="button" onClick={countUp}>
        Count Up
      </button>
      <div className={`${styles.grid} ${styles.primitive}`}>
        <div />
        <div>可変 useMemo なし</div>
        <div>可変 useMemo あり</div>
        <div>不変 useMemo なし</div>
        <div>不変 useMemo あり</div>
        <div>値なし</div>
        <div>memoなし</div>
        <CountCell count={count} />
        <CountCell count={memoCount} />
        <CountCell count={fixedCount} />
        <CountCell count={fixedMemoCount} />
        <EmptyCell />
        <div>memo あり</div>
        <MemoCountCell count={count} />
        <MemoCountCell count={memoCount} />
        <MemoCountCell count={fixedCount} />
        <MemoCountCell count={fixedMemoCount} />
        <MemoEmptyCell />
      </div>
    </div>
  );
};
