import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ComponentBaseProps, SelectableProps } from '../../models';
import { ifClass, joinClasses } from '../../utils/classes';
import { SelectableBase } from '../SelectableBase';
import styles from './Tile.module.css';

export type TileProps = ComponentBaseProps &
  SelectableProps & {
    width?: 1 | 2 | 3;
    accentColor?: string;
    frontContent?: any /* TODO: Fix */;
    backContent: any /* TODO: Fix */;
  };

export function Tile({ width = 1, ...props }: TileProps): h.JSX.Element & any {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);
  return (
    <SelectableBase
      {...props.selectable}
      className={joinClasses(styles.root, styles[`width${width}`])}
      style={{ gridColumn: `auto / span ${width}` }}
    >
      <div
        className={joinClasses(
          styles.content,
          ifClass(animate, styles.animateUnflip)
        )}
      >
        <div
          className={styles.back}
          style={{
            backgroundColor: props.accentColor || 'var(--app-accent-color)',
          }}
        >
          {props.backContent}
        </div>
        <div
          className={styles.front}
          style={{
            backgroundColor: props.accentColor || 'var(--app-accent-color)',
          }}
        >
          {props.frontContent}
        </div>
      </div>
    </SelectableBase>
  );
}
