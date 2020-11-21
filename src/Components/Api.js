import React, { Fragment, useState, useEffect } from 'react';
import { FloppyDisk, FileSearch, Rocket } from 'phosphor-react';
import axios from 'axios';

const Api = ({ userInput }) => {
  const [apiResults, setRes] = useState({
    dictResponse: {},
    thesResponse: {},
    thesArray: [],
    synsArray: [],
  });
  const { thesArray, synsArray } = apiResults;
  const badForYou = [
    `Now think of ways you can incorporate ${userInput} into your day.`,
    `Imagine how you can be more productive with a sweet buzzword like ${userInput}.`,
    `I want you to feel the word ${userInput} and drive it like you are Mad Max and ${userInput} is Fury Road.`,
    `I need you to internalize ${userInput} so our executives can make more money.`,
    `Let's all work to make ${userInput} a reality. And by let's, I mean you.`,
    `By the end of the day, you should feel like you've showered in ${userInput}`,
    `No one ever said buzzwords like ${userInput} were easy to live by. No, seriously, no one said that.`,
    `If you haven't made a puppet and named it ${userInput} by the end of the week. You're fired.`,
    `When you talk to customers, imagine yourself as Adele singing your new hit song named ${userInput}.`,
    `If you want Pizza Friday's to continue to be a thing. You will learn to love ${userInput}.`,
    `If you keep fighting us on implementing ${userInput}, I swear to all things holy we will make you work on Windows 8 touch exclusively.`,
    `We don't want to threaten you. But if you don't adopt ${userInput}, we will make you fight for bananas in the monkey pit. Yes we have a monkey pit.`,
    `Love ${userInput} or DIE. Hahaha, I'm kidding. But seriously. Love it. Love ${userInput}.`,
  ];
  // MAKE RIDICULOUS ARRAY FOR FINAL PANEL
  let outputArr = [];
  const badOutput = () => {
    for (let i = 0; outputArr.length < 6; i++) {
      let rand = Math.floor(Math.random() * badForYou.length);
      if (!outputArr.includes(badForYou[rand])) {
        outputArr.push(badForYou[rand]);
      }
    }
  };
  badOutput();
  useEffect(() => {
    const dictKey = process.env.REACT_APP_DICT_API;
    const thesKey = process.env.REACT_APP_THES_API;
    let thesDefs = [];
    let thesSyns = [];
    const thesApi = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${userInput}?key=${thesKey}`;
    const colDictApi = `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${dictKey}`;
    const fetchData = async () => {
      try {
        // CALL API
        const dictResult = await axios(colDictApi);
        const thesResult = await axios(thesApi);
        console.log(dictResult, thesResult);
        // ERROR HANDLING - POPULATE ARRAYS WITH GOOD DYNAMICS OR BAD STATICS
        if (
          thesResult.data[0]['meta'] === undefined ||
          thesResult.data[0]['shortdef'] === undefined
        ) {
          if (thesResult.data.length > 0) {
            thesResult.data.map((el) => thesSyns.push(el));
          } else {
            thesSyns.push(
              `The robot databases really could not find any words similar to ${userInput}.`
            );
          }
        } else {
          thesResult.data[0]['meta']['syns'].map((arr) =>
            arr.map((val) => thesSyns.push(val))
          );
          thesResult.data.map((arr) =>
            arr['shortdef'].map((el) => thesDefs.push(el))
          );
          dictResult.data.map((arr) =>
            arr['shortdef'].map((el) => thesDefs.push(el))
          );
        }
        // SET STATES
        setRes({
          dictResponse: dictResult,
          thesResponse: thesResult,
          thesArray: thesDefs.slice(0, 15),
          synsArray: thesSyns.slice(0, 15),
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
      </div>
      <div className='container-defined'>
        <div className='defined-margin'>
          <p className='defined-lead'>
            <FloppyDisk style={{ verticalAlign: 'bottom' }} size={30} /> YOUR
            CULCHR DEFINED - WHAT DOES {userInput.toUpperCase()} MEAN?
          </p>
          {thesArray.length > 0 ? (
            <ul className='defined-ul'>
              {thesArray.map((val, index) => (
                <li className='defined-li' key={index}>
                  {val}
                </li>
              ))}
            </ul>
          ) : (
            <Fragment>
              <p className='defined-ul'>
                Sorry, the robot databases could not match any definitions to{' '}
                {userInput}. If we found anything similar, it will be below. If
                available, try using one of these suggestions for a full Culchr
                experience. Apologies for not matching your word...
              </p>
            </Fragment>
          )}
        </div>
        <div className='defined-margin'>
          <p className='defined-lead'>
            <FileSearch style={{ verticalAlign: 'bottom' }} size={30} /> YOUR
            CULCHR EXPANDED - WORDS SIMILAR TO {userInput.toUpperCase()}
          </p>
          <ul className='defined-ul'>
            {synsArray.map((val, index) => (
              <li className='defined-li' key={index}>
                {val}
              </li>
            ))}
          </ul>
        </div>
        <div className='defined-margin'>
          <p className='defined-lead'>
            <Rocket style={{ verticalAlign: 'bottom' }} size={30} /> CULCHR'IZE
            AND INDOCTRINATE - YOUR WORKERS WONT BRAINWASH THEMSELVES!
          </p>
          <ul className='defined-ul'>
            {outputArr.map((val, index) => (
              <li className='defined-li' key={index}>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className='goodbyeSwine'>Thank you for using Culchr</p>
      </div>
    </Fragment>
  );
};

export default Api;
