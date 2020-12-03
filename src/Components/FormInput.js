import React, { Fragment, useState, useEffect } from 'react';
import Phrases from './Phrases';
import FormOutput from './FormOutput';

const FormInput = (props) => {
  const [data, setData] = useState({
    userInput: '',
    letterArr: [],
    phraseArr: [],
    reset: false,
  });
  const { userInput, letterArr, phraseArr, reset } = data;

  const handleQuery = (word, phraseIndex) => {
    if (word) {
      let letters = word.toLowerCase().trim();
      const lettersArr = letters.split('');
      const indexArr = phraseIndex.split('-');
      let phrasesArr = [];
      if (letters === 'dennis') {
        phrasesArr = [
          'demonstrate value',
          'engage physically',
          'nurturing dependence',
          'neglect emotionally',
          'inspire hope',
          'separate entirely',
        ];
      } else {
        for (let i = 0; i < lettersArr.length; i++) {
          phrasesArr.push(Phrases[lettersArr[i]][indexArr[i]]);
        }
      }
      setData({
        ...data,
        userInput: letters,
        letterArr: lettersArr,
        phraseArr: phrasesArr,
        reset: true,
      });
    }
  };

  useEffect(() => {
    handleQuery(props.query, props.phraseQuery);
  }, [props.query, props.phraseQuery]);

  const getRandom = (arr, popArr) => {
    const ran = Math.floor(Math.random() * arr.length);
    if (!popArr.includes(arr[ran])) {
      return {
        arr: arr[ran],
        index: ran + '-',
      };
    } else {
      return getRandom(arr, popArr);
    }
  };
  const handleReset = (e) => {
    window.location.href = 'http://www.culchr.pw';
    setData({
      ...data,
      reset: false,
    });
  };

  const handleInput = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-z]*/g;
    const allowedInput = e.target.elements.userInput.value.match(regex);
    const userInput = allowedInput[0].toLowerCase().trim();
    const letterArr = userInput.split('');
    let phraseArr = [];
    let indexStr = '';
    letterArr.forEach((letter) => {
      let { arr, index } = getRandom(Phrases[letter], phraseArr);
      phraseArr.push(arr);
      indexStr = indexStr + index;
    });
    indexStr = indexStr.slice(0, -1);
    window.location.href = encodeURI(`?query=${userInput}&phrases=${indexStr}`);
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
              <div className='form-group'>
                <input
                  type='text'
                  id='input'
                  name='userInput'
                  className='input-input'
                  required
                />
                <label className='input-label' htmlFor='input'>
                  Enter a buzzword
                </label>
              </div>

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
