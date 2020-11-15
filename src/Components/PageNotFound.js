import React, { Fragment } from 'react';

const PageNotFound = () => {
  return (
    <Fragment>
      <div className='container-lead'>
        <div className='lead'>
          <img className='jumpy' src='./img/roo.jpg' alt='a cute kangaroo' />
        </div>
        <div className='lead-about'>
          <h3 style={{ fontWeight: '500' }}>
            <span className='about-green'>404</span> page not found
          </h3>
          <p className='about-text'>
            Looks like you've bounced off the path. Please allow this friendly
            and cute kangaroo to bounce you back. Also, never try and get a real
            life kangaroo to bounce you anywhere. The pouch is sticky and most
            roos are jerks.
          </p>
        </div>
        <div className='about-footer'>
          <p className='footer-text'>
            Culchr was designed by me, Jon Collins. It is a work of pure fun,
            hobby and ridiculousness. In no way, shape, or form should you ever
            entrust me, or anything I build for your work, job, or livelihood. A
            few final words of acknowlegement. The definitions and sometimes
            lack of definitions are courtesy of Merriam-Webster and their API.
            Info on how to use the API for yourself or your projects can be
            found here{' '}
            <a href='https://dictionaryapi.com/'>https://dictionaryapi.com/</a>{' '}
            Additionally, the above sweet vector image of a portly business man
            doing a sweet 360 fakie inward double heelflip over the world's
            smallest grand canyon, is provided courtesy of{' '}
            <a href='https://www.vecteezy.com/free-vector/advantage'>
              Advantage Vectors by Vecteezy
            </a>{' '}
            Finally, I'd like to say Hi Marc, and Jarrett, stop backflipping off
            dophins just to throw your car batteries in the ocean. You'll get
            more batteries in there with less complicated maneuvers.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
