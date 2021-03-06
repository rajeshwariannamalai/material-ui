import * as React from 'react';
import { StandardProps } from '..';

/**
 * `<TableCell>` will be rendered as an `<th>`or `<td>` depending
 * on the context it is used in. Where context literally is the
 * React `context`.
 *
 * Since it is not decided via prop, we have create loose typings
 * here.
 */
export interface TableCellProps
  extends StandardProps<TableCellBaseProps, TableCellClassKey, 'align'> {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  component?: React.ReactType<TableCellBaseProps>;
  numeric?: boolean;
  padding?: Padding;
  size?: Size;
  sortDirection?: SortDirection;
  variant?: 'head' | 'body' | 'footer';
}

export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  React.TdHTMLAttributes<HTMLTableDataCellElement>;

export type Padding = 'normal' | 'checkbox' | 'none';

export type Size = 'small' | 'medium';

export type SortDirection = 'asc' | 'desc' | false;

export type TableCellClassKey =
  | 'root'
  | 'head'
  | 'body'
  | 'footer'
  | 'numeric'
  | 'paddingDense'
  | 'paddingCheckbox'
  | 'paddingNone';

declare const TableCell: React.ComponentType<TableCellProps>;

export default TableCell;
