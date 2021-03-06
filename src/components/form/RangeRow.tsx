import { h } from 'preact';
import { useNavKeys } from '../../hooks/useNavKeys';
import { ComponentBaseProps, SelectableProps } from '../../models';
import { ifClass, joinClasses } from '../../utils/classes';
import { SelectableBase } from '../SelectableBase';
import { IconSize, SvgIcon } from '../SvgIcon';
import styles from './RangeRow.module.css';

export type RangeRowProps = ComponentBaseProps &
  SelectableProps & {
    label: string;
    valueLabel?: string;
    min: number;
    max: number;
    increment: number;
    value: number;
    onChange?: (value: number) => void;
  };

export function RangeRow(props: RangeRowProps): h.JSX.Element & any {
  function change(change: number): void {
    let nextValue = Math.round((props.value + change) * 100) / 100;
    if (nextValue < props.min) {
      nextValue = props.min;
    } else if (nextValue > props.max) {
      nextValue = props.max;
    }

    props.onChange?.(nextValue);
  }

  useNavKeys(
    {
      ArrowLeft: () => {
        if (props.selectable?.selected) {
          change(props.increment * -1);
          return true;
        }
        return false;
      },
      ArrowRight: () => {
        if (props.selectable?.selected) {
          change(props.increment);
          return true;
        }
        return false;
      },
    },
    { stopPropagation: true, capture: true }
  );

  return (
    <SelectableBase
      {...props.selectable}
      className={joinClasses(
        styles.root,
        ifClass(props.selectable?.selected, styles.selected)
      )}
    >
      {props.label}
      <div className={styles.flex} />
      <SvgIcon icon="chevronLeft" size={IconSize.Small} />
      <div className={styles.value}>{`${props.value}${
        props.valueLabel ? ` ${props.valueLabel}` : ''
      }`}</div>
      <SvgIcon icon="chevronRight" size={IconSize.Small} />
    </SelectableBase>
  );
}
