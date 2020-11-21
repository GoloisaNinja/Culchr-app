import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className='container-lead'>
        <div className='lead'>
          <img
            className='jumpy'
            src='https://i.imgur.com/uVA8J21.jpg'
            alt='crazy man jumping over non-impressive chasm'
          />
        </div>
        <div className='lead-about'>
          <h3 style={{ fontWeight: '500' }}>
            <span className='about-green'>Culchr</span> was founded on a single
            idea.
          </h3>
          <p className='about-text'>
            Cartoon guys in business attire jumping across chasms are freaking
            cool. I think generating and implementing your corporate culture
            should make just as much sense as jumping over stuff in tailored
            clothing, while also being super easy.
          </p>
          <h3 style={{ fontWeight: '500' }}>
            <span className='about-green'>Culchr</span> saves time.
          </h3>
          <p className='about-text'>
            You know what's dumb? Being dumb. You know what's smart? Of course
            you do! It's saving time while also being inverse-dumb! Culchr saves
            you loads of time. Instead of sitting around wondering what the new
            letters of your corporate buzzword should stand for, now you can sit
            around and wonder why your earnings are flat, or why they cancelled
            Firefly so damn early. I designed Culchr to be responsive, reliable,
            intelligent and fast. So you don't have to be!
          </p>
          <h3 style={{ fontWeight: '500' }}>
            <span className='about-green'>Culchr</span> understands your
            feelings.
          </h3>
          <p className='about-text'>
            Look, I get it. One minute you're sharing the sweet new baby yoda
            meme you found on Reddit and the next minute your boss is telling
            you that the yellow stain on your shirt is a dead give away that you
            haven't changed your clothes in the last 37 Zoom meetings. Work is
            hard. That's why I designed Culchr to understand your human emotions
            and provide you with soothing advice and cooing noises like your mom
            used to make.
          </p>
          <h3 style={{ fontWeight: '500' }}>
            <span className='about-green'>Culchr</span> does not understand your
            feelings.
          </h3>
          <p className='about-text'>
            Apparently I haven't actually made Culchr self-aware, nor can it
            read your feelings or emotions. The cooing sound thing will come in
            a future update, but you should probably just mostly disregard the
            above paragraph. In fact, maybe just disregard most of what you've
            seen here.
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
            Finally, I'd like to say Hi Marc. Jarrett, I'd like to try the
            gauntlet run on hippity-hops. Thoughts?
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
