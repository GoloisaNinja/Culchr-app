import React, { Fragment } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const Social = () => {
  return (
    <Fragment>
      <div className='social'>
        <div className='social-container'>
          <RedditShareButton
            className='social-icons'
            url={window.location.href}
            title="I just reinvented my company's whole ethos with Culchr!">
            <RedditIcon round={true}></RedditIcon>
          </RedditShareButton>
          <FacebookShareButton
            className='social-icons'
            url={window.location.href}
            quote="I just reinvented my company's whole ethos with Culchr!"
            hashtag='#culchr'>
            <FacebookIcon round={true}></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton
            className='social-icons'
            url={window.location.href}
            title="I just reinvented my company's whole ethos with Culchr!"
            hashtags={['culchr', 'sodumb', 'omgIgotFired', 'worthIt']}>
            <TwitterIcon round={true}></TwitterIcon>
          </TwitterShareButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Social;
