import React, { Fragment } from 'react';
import { ShoppingCartSimple, User } from 'phosphor-react';

const Reviews = () => {
  return (
    <Fragment>
      <div className='grid'>
        <div className='testimonial'>
          <div style={{ paddingBottom: '1rem' }}>
            <ShoppingCartSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
            CUSTOMER REVIEW
          </div>
          <p className='testimonial-text'>
            "It was like magic. We used culchr and within minutes every employee
            was fully engaged and believed in our brand! We don't even employ an
            HR department anymore and the rancid smell is gone from the
            breakroom!"
          </p>
          <div className='test-name'>
            <p className='test-name-icon' style={{ fontSize: '1rem' }}>
              <User style={{ verticalAlign: 'bottom' }} size={20} /> Jan
              Chicago, IL
            </p>
          </div>
        </div>
        <div className='testimonial'>
          <div style={{ paddingBottom: '1rem' }}>
            <ShoppingCartSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
            CUSTOMER REVIEW
          </div>
          <p className='testimonial-text'>
            "We must have had several dozen brain-storming sessions around
            culture and value statements. We just couldn't get it right.
            Employees were still asking for better pay and working conditions.
            But not after Culchr!"
          </p>
          <div className='test-name'>
            <p style={{ fontSize: '1rem' }}>
              <User style={{ verticalAlign: 'bottom' }} size={20} /> Peter
              Aunawana, PA
            </p>
          </div>
        </div>
        <div className='testimonial'>
          <div style={{ paddingBottom: '1rem' }}>
            <ShoppingCartSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
            CUSTOMER REVIEW
          </div>
          <p className='testimonial-text'>
            "We had given up hope for having a cool plaque on the wall with
            values we could agree on. But then we used Culchr and now we have
            the legit sweetest plaque on the wall. It's so dope!"
          </p>
          <div className='test-name'>
            <p style={{ fontSize: '1rem' }}>
              <User style={{ verticalAlign: 'bottom' }} size={20} /> Beth
              Finntownship, OH
            </p>
          </div>
        </div>
        <div className='testimonial'>
          <div style={{ paddingBottom: '1rem' }}>
            <ShoppingCartSimple style={{ verticalAlign: 'bottom' }} size={30} />{' '}
            CUSTOMER REVIEW
          </div>
          <p className='testimonial-text'>
            "We had hired a fancy culture team to come in and try to inspire
            culture change in the company. After one week of culture "training"
            we had riots. The culture team tried to take away Pizza Friday - and
            you just don't mess with Pizza Friday. "
          </p>
          <div className='test-name'>
            <p style={{ fontSize: '1rem' }}>
              <User style={{ verticalAlign: 'bottom' }} size={20} /> Dirk
              Stueben, TX
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reviews;
