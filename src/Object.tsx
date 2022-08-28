import { useMemo, useState } from 'react';
import styles from './App.module.css';
import { ObjCell, MemoObjCell } from './Cell';

export const Object = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((count) => count + 1);
  };

  const obj = { count };
  const memoObj = useMemo(() => ({ count }), [count]);

  const fixedObj = { count: 999 };
  const fixedMemoObj = useMemo(() => ({ count: 999 }), []);

  return (
    <div className={styles.app}>
      <button type="button" onClick={countUp}>
        Count Up
      </button>
      <div className={`${styles.grid} ${styles.obj}`}>
        <div />
        <div>可変 useMemo なし</div>
        <div>可変 useMemo あり</div>
        <div>不変 useMemo なし</div>
        <div>不変 useMemo あり</div>
        <div>memoなし</div>
        <ObjCell obj={obj} />
        <ObjCell obj={memoObj} />
        <ObjCell obj={fixedObj} />
        <ObjCell obj={fixedMemoObj} />
        <div>memoあり</div>
        <MemoObjCell obj={obj} />
        <MemoObjCell obj={memoObj} />
        <MemoObjCell obj={fixedObj} />
        <MemoObjCell obj={fixedMemoObj} />
      </div>
    </div>
  );
};
