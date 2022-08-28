import { useCallback, useState } from 'react';
import styles from './App.module.css';
import { FuncCell, MemoFuncCell } from './Cell';

export const Callback = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((count) => count + 1);
  };

  const fn = () => {
    console.log('fn');
  };

  const memoFn = useCallback(() => {
    console.log('memoFn');
  }, []);

  return (
    <div className={styles.app}>
      <button type="button" onClick={countUp}>
        {`count is ${count}`}
      </button>
      <div className={`${styles.grid} ${styles.func}`}>
        <div />
        <div>useCallback なし</div>
        <div>useCallback あり</div>
        <div>memoなし</div>
        <FuncCell fn={fn} />
        <FuncCell fn={memoFn} />
        <div>memoあり</div>
        <MemoFuncCell fn={fn} />
        <MemoFuncCell fn={memoFn} />
      </div>
    </div>
  );
};
