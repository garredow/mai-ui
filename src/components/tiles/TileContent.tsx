import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import { ifClass, joinClasses } from '../../utils/classes';
import styles from './TileContent.module.css';

export type TileContentProps = ComponentBaseProps & {
  backgroundImage?: string;
  scrim?: boolean;
  contentH?: 'left' | 'center' | 'right';
  contentV?: 'top' | 'center' | 'bottom';
};

export function TileContent({
  scrim = true,
  contentH = 'right',
  contentV = 'bottom',
  ...props
}: TileContentProps): h.JSX.Element & any {
  return (
    <div
      className={joinClasses(styles.root)}
      style={
        props.backgroundImage
          ? { backgroundImage: `url(${props.backgroundImage})` }
          : {}
      }
    >
      <div
        className={joinClasses(
          styles.content,
          ifClass(!!props.backgroundImage && scrim, styles.scrim),
          styles[`${contentH}H`],
          styles[`${contentV}V`]
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
