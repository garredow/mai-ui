import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './List.module.css';

type Props = ComponentBaseProps & {};

export function List(props: Props): any {
  return <div className={styles.root}>{props.children}</div>;
}
