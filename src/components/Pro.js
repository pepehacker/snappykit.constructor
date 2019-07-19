import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

// Containers
import { PLANS_MODAL_ID } from 'containers/Plans';

// Services
import { openModal } from 'services/modals';

// Style
import style from './Pro.scss';

const VARIANT = {
  DEFAULT: 'default',
};

type ProPropTypes = {
  className: string,
  handleClick: SyntheticEvent => void,
  title: string,
  variant: VARIANT.DEFAULT,
};

const Pro = ({
  className,
  handleClick,
  title = 'Pro',
  variant = VARIANT.DEFAULT,
}: ProPropTypes): React.Element<'div'> => (
  <div
    className={classNames(className, style.Root, {
      [style.RootVariantDefault]: variant === VARIANT.DEFAULT,
    })}
    onClick={handleClick}
    role="button"
    tabIndex={0}
  >
    {title}
  </div>
);

export default compose(
  connect(
    null,
    { openModal },
  ),
  withHandlers({
    handleClick: ({ openModal }): Function => (): void => openModal(PLANS_MODAL_ID),
  }),
)(Pro);
