import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

// Components
import { Container, Title } from 'views/Editor';
import Card from './components/Card';

import screen from './assets/screen.jpg';
import styles from './Templates.scss';

const Templates = ({
  currentTemplate,
  handleClick,
  items,
}) => (
  <div className={styles.Root}>
    <Title title="Templates" />

    <Container>
      {items && items.length > 0 && (
        <div className={styles.List}>
          {items.map(id => (
            <Card
              image={screen}
              isActive={id === currentTemplate}
              id={id}
              isPro={id === 3}
              key={id}
              title={`Template #${id}`}
            />
          ))}
        </div>
      )}
    </Container>
  </div>
);

const mapStateToProps = ({ views }) => get(views, 'templates', {});

export default connect(mapStateToProps)(Templates);
