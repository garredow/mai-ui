/** @jsx h */
import { h, VNode } from 'preact';
import { SelectablePriority } from '../enums';
import { ComponentBaseProps, SelectableProps } from '../models';
import { joinClasses } from '../utils/classes';
import styles from './SelectableBase.module.css';

export type SelectableBaseProps = ComponentBaseProps & {
  id?: string | number;
  priority?: SelectablePriority;
  shortcut?: string | number;
  selected?: boolean;
  ariaLabel?: string;
};

export function SelectableBase(
  props: SelectableBaseProps
): h.JSX.Element & any {
  return (
    <div
      className={joinClasses(styles.root, props.className)}
      style={props.style}
      title={props.title}
      data-selectable-priority={props.priority || SelectablePriority.Low}
      data-selectable-id={props.id}
      data-selectable-shortcut={props.shortcut}
      data-selected={props.selected}
      data-testid={props['data-testid']}
      tabIndex={1}
      role="button"
      aria-label={props.ariaLabel}
    >
      {props.children}
    </div>
  );
}

export function withSelectable<T>(Wrapped: any): (props: T) => VNode {
  return function Selectable(props: SelectableProps): h.JSX.Element & any {
    return (
      <SelectableBase
        data-selectable-priority={
          props.selectable?.priority || SelectablePriority.Low
        }
        data-selectable-id={props.selectable?.id}
        data-selectable-shortcut={props.selectable?.shortcut}
        data-selected={props.selectable?.selected}
      >
        <Wrapped {...props} />
      </SelectableBase>
    );
  };
}
