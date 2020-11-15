import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Info } from 'phosphor-react';

const Header = () => {
  return (
    <Fragment>
      <section className='header'>
        <div className='container'>
          <div className='about-container'>
            <Link to='/about'>
              <h5 className='header__about' style={{ textAlign: 'right' }}>
                <Info
                  className='about-icon'
                  style={{ verticalAlign: 'bottom' }}
                  size={18}
                />{' '}
                about
              </h5>
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 className='header__text text-primary'>You have values.</h2>
          </div>
          <div>
            <Link to='/'>
              <h1 className='branding'>
                <Stack className='brand-icon' size={70} />
                <span className='culchrSpan'></span>
                Culchr
              </h1>
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 className='header__text text-primary'>
              Now all you need is culture.
            </h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
