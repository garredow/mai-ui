import { h } from 'preact';
import { useNavKeys } from '../../hooks/useNavKeys';
import { ComponentBaseProps, Option, SelectableProps } from '../../models';
import { getIndexWrap } from '../../utils/array';
import { ifClass, joinClasses } from '../../utils/classes';
import { SelectableBase } from '../SelectableBase';
import { IconSize, SvgIcon } from '../SvgIcon';
import styles from './InlineSelect.module.css';

export type InlineSelectProps = ComponentBaseProps &
  SelectableProps & {
    label: string;
    options: Option[];
    value: string;
    onChange?: (value: string | number) => void;
  };

export function InlineSelect(props: InlineSelectProps): h.JSX.Element & any {
  function change(change: 1 | -1): void {
    const nextIndex = getIndexWrap(
      props.options,
      props.options.findIndex((a) => a.id === props.value),
      change
    );
    props.onChange?.(props.options[nextIndex].id);
  }

  useNavKeys(
    {
      ArrowLeft: () => {
        if (props.selectable?.selected) {
          change(-1);
          return true;
        }
        return false;
      },
      ArrowRight: () => {
        if (props.selectable?.selected) {
          change(1);
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
      <div className={styles.label}>
        {props.options.find((a) => a.id === props.value)?.label}
      </div>
      <SvgIcon icon="chevronRight" size={IconSize.Small} />
    </SelectableBase>
  );
}
