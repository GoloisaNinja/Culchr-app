import React, { Fragment, useState, useEffect } from 'react';
import { BookmarkSimple } from 'phosphor-react';
import axios from 'axios';

const Api = ({ userInput }) => {
  const [apiResults, setRes] = useState({
    response: {},
    respOne: {
      def: '',
      fl: '',
      phrase: '',
    },
    respTwo: {
      def: '',
      fl: '',
      phrase: '',
    },
  });
  const { respOne, respTwo } = apiResults;

  const culchrShock = {
    noun: [
      'Think of the company when you think of',
      'Nothing represents the company more than',
    ],
    verb: [
      'The company lives, eats, sleeps and works',
      'No one is better than the company at',
    ],
    adverb: ['The company conquers', 'The company razzle dazzles'],
    adjective: [
      'The company could be described as',
      'The company should never be described as',
    ],
    unknown: [
      'Not sure what to say here about...',
      'Look, this word is weird, but the company is going to work the hell out of',
    ],
    unknown2: ["Maybe try a new word that isn't", 'You should not have chosen'],
  };

  const badForYou = [
    'This will definitely be bad for you.',
    "I'd probably start worrying.",
    'Peace was never an option.',
    "It's never too late to switch careers!",
    "At least it's not Friday - they fire people on Friday. Wait. Is it Friday?",
    "Who's ready for some overtime!",
    "No, I'm not threatening you Dave. I'm warning you.",
  ];

  useEffect(() => {
    const dictKey = process.env.REACT_APP_DICT_API;
    const colDictApi = `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${dictKey}`;
    const fetchData = async () => {
      try {
        let respArr = [];
        const result = await axios(colDictApi);
        console.log(result);
        const madeUp1 = {
          shortdef: ["Whoopsie - API couldn't find your input..."],
          fl: 'unknown',
        };
        const madeUp2 = {
          shortdef: ['Hey, at least you still have cool values above...'],
          fl: 'unknown2',
        };
        const arrLen = result.data.length;
        const getArrs = (arr) => {
          for (let i = 0; respArr.length < 2; i++) {
            respArr.push(arr[i]);
          }
        };
        if (arrLen >= 2) {
          getArrs(result.data);
        } else if (arrLen === 1) {
          respArr.push(result.data[0]);
          respArr.push(madeUp2);
        } else {
          respArr.push(madeUp1);
          respArr.push(madeUp2);
        }

        const pOneTag = respArr[0].fl;
        const pTwoTag = respArr[1].fl;
        const pOnePh = culchrShock[pOneTag][0];
        const pTwoPh = culchrShock[pTwoTag][1];

        setRes({
          response: result,
          respOne: {
            def: respArr[0].shortdef[0],
            fl: respArr[0].fl,
            phrase: pOnePh,
          },
          respTwo: {
            def: respArr[1].shortdef[0],
            fl: respArr[1].fl,
            phrase: pTwoPh,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className='container-lead'>
        <div className='lead-line'>
          <p>Let's incorporate this into your corporates.</p>
          <p>I don't know what that means either.</p>
        </div>
        <div className='grid'>
          <div className='testimonial'>
            <div style={{ paddingBottom: '1rem' }}>
              <BookmarkSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
              <p>
                {userInput} ({respOne.fl})
              </p>
            </div>
            <div className='test-def'>
              <p>{respOne.def}</p>
            </div>
          </div>
          <div className='testimonial'>
            <div style={{ paddingBottom: '1rem' }}>
              <BookmarkSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
              <p>
                {userInput} ({respTwo.fl})
              </p>
            </div>
            <div className='test-def'>
              <p>{respTwo.def}</p>
            </div>
          </div>
          <div className='testimonial'>
            <div style={{ paddingBottom: '1rem' }}>
              <BookmarkSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
              <p>culchrize {userInput}!</p>
            </div>
            <div className='test-def'>
              <p>
                {respOne.phrase} {userInput}. {respTwo.phrase} {userInput}.{' '}
                {badForYou[Math.floor(Math.random() * badForYou.length)]}{' '}
                Imagine this directed at your hapless employees!
              </p>
            </div>
          </div>
        </div>
        <p className='goodbyeSwine'>Thank you for using Culchr</p>
      </div>
    </Fragment>
  );
};

export default Api;
