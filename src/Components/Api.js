import React, { Fragment, useState, useEffect } from 'react';
import { BookmarkSimple } from 'phosphor-react';
import axios from 'axios';

const Api = ({ userInput }) => {
  const [apiResults, setRes] = useState({
    response: {},
    respOne: {
      def: '',
      fl: '',
      phrase1: '',
      phrase2: '',
    },
    respTwo: {
      def: '',
      fl: '',
      phrase1: '',
      phrase2: '',
    },
  });
  const { respOne, respTwo } = apiResults;

  const culchrShock = {
    noun: [
      'Think of the company when you think of',
      'Nothing represents the company more than words like',
      'The company encapsulates the very idea of',
      'This company was built on ideas like',
    ],
    verb: [
      'The company lives, eats, and sleeps with',
      'No one is better than the company when it comes to all things',
      'Put the company in the same sentence with',
      'Nothing motivates this company quite like',
    ],
    adverb: [
      'The company conquers',
      'The company razzle dazzles',
      'This company avoids',
      'This company embraces',
    ],
    adjective: [
      'The company could be described with the word',
      'The company should never be described with the word',
      'The company is and forever shall be associated with the word',
      'The company never meant to be in the same sentence as',
    ],
    idiom: [
      'The company can be thought to or associated with',
      "It's difficult not to envision the company when you're talking about the word",
      'When this great company was founded it was founded around',
      'During the Great Depression this company was known for',
    ],
    unknown: [
      'Not sure what to say here about...',
      'Look, this word is weird, but the company is going to work the hell out of',
      "Why would you type something that even Merriam-Webster couldn't find...",
      'Look, maybe try a normal noun or verb - those tend to work best for values anyway',
    ],
    unknown2: [
      "Maybe try a new word that isn't",
      'You should not have chosen',
      "This isn't the outcome I hoped for either ok",
      'Honestly, I tried to find what you typed but some things just were not meant to be values',
    ],
  };

  const badForYou = [
    `Now think of ways you can incorporate ${userInput} into your day.`,
    `Imagine how you can be more productive with a sweet buzzword like ${userInput}.`,
    `I want you to feel the word ${userInput} and live it like a James Bond movie.`,
    `I need you to internalize ${userInput} so our executives can make more money.`,
    `Let's all work to make ${userInput} a reality. And by let's, I mean you.`,
    `By the end of the day, you should feel like you've showered in ${userInput}`,
    `No one ever said buzzwords like ${userInput} were easy to live by. No, seriously, no one said that.`,
    `If you haven't made a puppet and named it ${userInput} by the end of the week. You're fired.`,
    `When you talk to customers, imagine yourself as Adele singing your new hit song named ${userInput}.`,
  ];
  let outputArr = [];
  const badOutput = () => {
    for (let i = 0; outputArr.length < 4; i++) {
      let rand = Math.floor(Math.random() * badForYou.length);
      if (!outputArr.includes(badForYou[rand])) {
        outputArr.push(badForYou[rand]);
      }
    }
  };
  badOutput();
  useEffect(() => {
    const dictKey = process.env.REACT_APP_DICT_API;
    const colDictApi = `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${dictKey}`;
    const fetchData = async () => {
      try {
        let respArr = [];
        let pOnePhArr = [];
        let pTwoPhArr = [];
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
        const getPhArrs = (retArr, inputArr) => {
          for (let c = 0; retArr.length < 2; c++) {
            let rand = Math.floor(Math.random() * inputArr.length);
            if (!retArr.includes(inputArr[rand])) {
              retArr.push(inputArr[rand]);
            }
          }
          return retArr;
        };

        console.log(respArr);
        const pOneTag = respArr[0].fl;
        const pTwoTag = respArr[1].fl;
        let pOnePh = [];
        let pTwoPh = [];
        if (pOneTag === pTwoTag) {
          pOnePh = [culchrShock[pOneTag][0], culchrShock[pOneTag][1]];
          pTwoPh = [culchrShock[pOneTag][2], culchrShock[pOneTag][3]];
        } else {
          pOnePh = getPhArrs(pOnePhArr, culchrShock[pOneTag]);
          pTwoPh = getPhArrs(pTwoPhArr, culchrShock[pTwoTag]);
        }

        setRes({
          response: result,
          respOne: {
            def: respArr[0].shortdef[0],
            fl: respArr[0].fl,
            phrase1: pOnePh[0],
            phrase2: pOnePh[1],
          },
          respTwo: {
            def: respArr[1].shortdef[0],
            fl: respArr[1].fl,
            phrase1: pTwoPh[0],
            phrase2: pTwoPh[1],
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
              <p className='py-1'>
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
              <p className='py-1'>
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
              <p className='py-1'>culchrize {userInput}!</p>
            </div>
            <div className='test-def'>
              <ul>
                <li>
                  {respOne.phrase1} {userInput}
                </li>
                <li>
                  {respOne.phrase2} {userInput}
                </li>
                <li>
                  {respTwo.phrase1} {userInput}
                </li>
                <li>
                  {respTwo.phrase2} {userInput}
                </li>
              </ul>
            </div>
          </div>
          <div className='testimonial'>
            <div style={{ paddingBottom: '1rem' }}>
              <BookmarkSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
              <p className='py-1'>culchrized inspirationals!</p>
            </div>
            <div className='test-def'>
              <ul>
                <li>{outputArr[0]}</li>
                <li>{outputArr[1]}</li>
                <li>{outputArr[2]}</li>
                <li>{outputArr[3]}</li>
              </ul>
            </div>
          </div>
        </div>
        <p className='goodbyeSwine'>Thank you for using Culchr</p>
      </div>
    </Fragment>
  );
};

export default Api;
