import classNames from 'classnames';
import * as React from 'react';
import { compose, withHandlers } from 'recompose';

// Components
import Pro from 'components/Pro';

// Styles
import style from './Item.scss';

type FormSelectItemPropTypes = {
  handleClick: SyntheticEvent => void,
  isCurrent: boolean,
  isPro: boolean,
  label: string,
  value: number | string,
};

const FormSelectItem = ({
  label,
  value,

  // Handlers
  handleClick,

  // State
  isCurrent,
  isPro,
}: FormSelectItemPropTypes): React.Element<'div'> => {
  const rootClassNames = classNames(style.Root, {
    [style.RootIsCurrent]: isCurrent,
    [style.RootIsPro]: isPro,
  });

  return (
    <div
      className={rootClassNames} onClick={isPro ? null : handleClick}
      role="button" tabIndex={0}
    >
      <div className={style.Label}>
        {label}
      </div>
      {isPro && <Pro className={style.Pro} />}
    </div>
  );
};

export default compose(
  withHandlers({
    handleClick: ({ label, onClick, value }) => (event: Object) => onClick && onClick(value, event),
  }),
)(FormSelectItem);

export type { FormSelectItemPropTypes };
