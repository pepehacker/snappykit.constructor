import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

// Components
import { Container, Title } from 'views/Editor';
import Card from './components/Card';

// Templates
import templates from 'template';

// Styles
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
      {templates && templates.length > 0 && (
        <div className={styles.List}>
          {templates.map(({ id, preview }) => (
            <Card
              image={preview}
              isActive
              id={id}
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
