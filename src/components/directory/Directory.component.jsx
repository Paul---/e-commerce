import React from 'react';
import { connect } from 'react-redux';
import { DirectoryStyles } from './DirectoryStyles.component';
import MenuItem from '../menu-item/Menu-Item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <DirectoryStyles>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </DirectoryStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
