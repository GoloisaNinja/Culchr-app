import React, { Fragment, useState } from 'react';
import { User, X } from 'phosphor-react';
import Reviews from './Reviews';
import FormInput from './FormInput';

const Landing = () => {
  const [shouldHide, setHide] = useState(true);

  return (
    <Fragment>
      <div className='container-lead'>
        <div className='lead'>
          <p>Corporate culture is hard.</p>
          <p>Let us make it easy.</p>
          {shouldHide ? (
            <button
              className='review-hide'
              onClick={(e) => setHide(!shouldHide)}>
              <User
                className='icon-pulse'
                style={{ color: '#5eafaf' }}
                size={20}
              />{' '}
              Click for Reviews!
            </button>
          ) : (
            <button
              className='review-hide'
              onClick={(e) => setHide(!shouldHide)}>
              <X
                className='icon-pulse'
                style={{ color: '#5eafaf' }}
                size={20}
              />{' '}
              Hide Reviews
            </button>
          )}
        </div>
        {!shouldHide && <Reviews />}
        <p>Try Culchur for yourself!</p>
      </div>
      <FormInput />
    </Fragment>
  );
};

export default Landing;
