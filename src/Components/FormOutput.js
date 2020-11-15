import React, { Fragment } from 'react';
import { Stack } from 'phosphor-react';
import Api from './Api';

const FormOutput = ({ userInput, letters, phrases }) => {
  const letterOut = letters.map((letter, index) => (
    <p className='letter' key={index}>
      {letter}
    </p>
  ));
  const phraseOut = phrases.map((phrase, index) => (
    <p className='phrase' key={index}>
      {phrase}
    </p>
  ));
  return (
    <Fragment>
      <div className='result-preface'>
        <div className='result-banner'>
          <p>
            CULCHR VALUES{' '}
            <span className='brand'>
              by <Stack size={10} />
              <span className='culchrSpan2'>Culchr</span>
            </span>
          </p>
        </div>
      </div>

      <div className='output-grid-container'>
        <div className='letters-grid'>{letterOut}</div>
        <div className='phrases-grid'>{phraseOut}</div>
      </div>
      <Api userInput={userInput} />
    </Fragment>
  );
};

export default FormOutput;
