import { Fragment, h } from 'preact';
import { ComponentBaseProps } from '../models';

export type IconName =
  | 'cancel'
  | 'download'
  | 'grid'
  | 'home'
  | 'list'
  | 'menu'
  | 'moreVert'
  | 'play'
  | 'search'
  | 'settings'
  | 'chevronUp'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'time'
  | 'filter';

export enum IconSize {
  Small = 18,
  Medium = 24,
  Large = 36,
}

export enum IconColor {
  Light = '#ffffff',
  Dark = '#000000',
}

export type SvgIconProps = ComponentBaseProps & {
  icon: IconName;
  size?: IconSize | number;
  color?: IconColor | string;
};

export function SvgIcon({
  icon,
  size = IconSize.Medium,
  color,
}: SvgIconProps): h.JSX.Element & any {
  function getIcon() {
    switch (icon) {
      case 'cancel':
        return (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </Fragment>
        );
      case 'download':
        return (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </Fragment>
        );
      case 'grid':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
          </Fragment>
        );
      case 'home':
        return (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </Fragment>
        );
      case 'list':
        return (
          <Fragment>
            <g fill="none">
              <path d="M0 0h24v24H0V0z" />
              <path d="M0 0h24v24H0V0z" opacity=".87" />
            </g>
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </Fragment>
        );
      case 'menu':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </Fragment>
        );
      case 'moreVert':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </Fragment>
        );
      case 'play':
        return (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </Fragment>
        );
      case 'search':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </Fragment>
        );
      case 'settings':
        return (
          <Fragment>
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
            </g>
          </Fragment>
        );
      case 'chevronUp':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </Fragment>
        );
      case 'chevronDown':
        return (
          <Fragment>
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </Fragment>
        );
      case 'chevronLeft':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
          </Fragment>
        );
      case 'chevronRight':
        return (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </Fragment>
        );
      case 'time':
        return (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </Fragment>
        );
      case 'filter':
        return (
          <Fragment>
            <g>
              <path d="M0,0h24 M24,24H0" fill="none" />
              <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
          </Fragment>
        );
    }
  }

  return (
    <svg
      style={{ fill: color ? color : 'var(--primary-text-color)' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      height={`${size}px`}
      width={`${size}px`}
      fill={color || 'inherit'}
    >
      {getIcon()}
    </svg>
  );
}
