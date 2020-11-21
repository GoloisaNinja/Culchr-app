import React, { Fragment, useState } from 'react';
import Phrases from './Phrases';
import FormOutput from './FormOutput';

const FormInput = () => {
  const [data, setData] = useState({
    userInput: '',
    letterArr: [],
    phraseArr: [],
    reset: false,
  });

  const { userInput, letterArr, phraseArr, reset } = data;

  const getRandom = (arr) => {
    const ran = Math.floor(Math.random() * arr.length);
    return arr[ran];
  };
  const handleReset = (e) => {
    setData({
      ...data,
      reset: false,
    });
  };

  const handleInput = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value.toLowerCase().trim();
    const letterArr = userInput.split('');
    const phraseArr = [];
    letterArr.forEach((letter) => {
      let phrase = getRandom(Phrases[letter]);
      if (phraseArr.includes(phrase)) {
        getRandom(Phrases[letter]);
      } else {
        phraseArr.push(phrase);
      }
    });
    setData({
      ...data,
      userInput,
      letterArr,
      phraseArr,
      reset: true,
    });
    e.target.elements.userInput.value = '';
  };

  return (
    <Fragment>
      <div className='container-lead'>
        <p className='form-intro'>
          It couldn't be more simple. Just use the form below to enter a word
          you want to base your values around. Culchr does the rest. In seconds
          you will have a full and robust corporate culture worthy of a
          PowerPoint presentation and several hours of Human Resource meeting
          material to indoctrinate your employees with!
        </p>
        {!reset && (
          <Fragment>
            <form className='input' onSubmit={(e) => handleInput(e)}>
              <label className='input-label'>Enter a word</label>
              <input
                type='text'
                name='userInput'
                placeholder='try a buzzword, e.g. Power'
                className='input-input'
                required
              />
              <button className='btn'>Get Culchr'd</button>
            </form>
          </Fragment>
        )}

        {reset && (
          <button className='btn-reset' onClick={(e) => handleReset(e)}>
            Reset Form
          </button>
        )}
      </div>
      {reset && (
        <FormOutput
          userInput={userInput}
          letters={letterArr}
          phrases={phraseArr}
        />
      )}
    </Fragment>
  );
};

export default FormInput;
