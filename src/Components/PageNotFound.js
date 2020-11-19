import React, { Fragment } from 'react';

const PageNotFound = () => {
  return (
    <Fragment>
      <div className='container-lead'>
        <div className='overlay'></div>
        <div className='lead'>
          <img
            className='puter'
            src='https://i.imgur.com/RXDpLGl.jpg'
            alt='old broke puter'
          />
        </div>
        <div className='lead-about'>
          <h3 style={{ fontWeight: '500' }}>
            <span className='about-green'>404</span> page not found
          </h3>
          <p className='about-text'>
            Great...you broke the internet. Take this time to reflect on your
            bad choices and maybe user the Culchr icon in the header to navigate
            back to a legitimate page of the application. Don't worry. We're
            already judging you...so it really can't get much worse...
          </p>
        </div>
        <div className='about-footer'>
          <p className='footer-text'>
            Culchr was designed by me, Jon Collins. It is a work of pure fun,
            hobby and ridiculousness. In no way, shape, or form should you ever
            entrust me, or anything I build for your work, job, or livelihood. A
            few final words of acknowlegement. The above sweet vector image of
            an old computer just doing it's level best, is provided courtesy of{' '}
            <a href='https://www.vecteezy.com/free-vector/advantage'>
              Advantage Vectors by Vecteezy
            </a>{' '}
            Finally, I'd like to say Hi Marc. And, Jarrett, did you know that
            Prime Day has absolutely nothing to do with Optimus Prime?
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
