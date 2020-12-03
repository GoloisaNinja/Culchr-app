import React, { Fragment, useState, useEffect } from 'react';
import { User, X } from 'phosphor-react';
import Reviews from './Reviews';
import FormInput from './FormInput';

const Landing = (props) => {
  const [shouldHide, setHide] = useState(true);
  const { location } = props;

  const [queryData, setQuery] = useState({
    letters: null,
    phrases: null,
  });
  const { letters, phrases } = queryData;
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search);
    const query = queryParam.get('query');
    const phraseQuery = queryParam.get('phrases');
    setQuery({
      letters: query,
      phrases: phraseQuery,
    });
  }, []);

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
      <FormInput query={letters} phraseQuery={phrases} />
    </Fragment>
  );
};

export default Landing;
