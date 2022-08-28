import type { FC } from 'react';
import { memo } from 'react';
import styles from './Cell.module.css';

export const CountCell: FC<{ count: number }> = ({ count }) => (
  <div className={styles.cell} key={Math.random()}>
    {count}
  </div>
);

export const MemoCountCell = memo(CountCell);

export const EmptyCell = () => <div className={styles.cell} key={Math.random()} />;
export const MemoEmptyCell = memo(EmptyCell);

export const ObjCell: FC<{ obj: { count: number } }> = ({ obj }) => (
  <div className={styles.cell} key={Math.random()}>
    {obj.count}
  </div>
);
export const MemoObjCell = memo(ObjCell)

export const FuncCell: FC<{ fn: () => void }> = () => (
  <div className={styles.cell} key={Math.random()} />
)
export const MemoFuncCell = memo(FuncCell)
