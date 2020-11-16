import React, { Fragment, useState } from 'react';
import { User, X } from 'phosphor-react';
import Reviews from './Reviews';
import FormInput from './FormInput';

const Landing = () => {
  const [shouldHide, setHide] = useState({
    hide: true,
  });
  const { hide } = shouldHide;
  const handleReviews = (e) => {
    e.preventDefault();
    setHide({
      hide: !hide,
    });
  };
  return (
    <Fragment>
      <div className='container-lead'>
        <div className='lead'>
          <p>Corporate culture is hard.</p>
          <p>Let us make it easy.</p>
          {hide ? (
            <button className='review-hide' onClick={(e) => handleReviews(e)}>
              <User
                className='icon-pulse'
                style={{ color: '#5eafaf' }}
                size={20}
              />{' '}
              Click for Reviews!
            </button>
          ) : (
            <button className='review-hide' onClick={(e) => handleReviews(e)}>
              <X
                className='icon-pulse'
                style={{ color: '#5eafaf' }}
                size={20}
              />{' '}
              Hide Reviews
            </button>
          )}
        </div>
        {!hide && <Reviews />}
        <p>Try Culchur for yourself!</p>
      </div>
      <FormInput />
    </Fragment>
  );
};

export default Landing;
