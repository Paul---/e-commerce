import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/Directory.component';

const HomePage = () => {
  return (
    <section className='homepage'>
      <Directory />
      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="paul-pilcher"><a class="LI-simple-link" href='https://www.linkedin.com/in/paul-pilcher?trk=profile-badge'>Paul Pilcher</a></div>
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
    </section>
  );
};

export default HomePage;
