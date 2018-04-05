import React, { Component } from 'react';
import styled from 'styled-components';

import Article from './Components/Article';
import Collection from './Components/Collection';
import Promo from './Components/Promo';
import Title from './Components/Title';

const Wrapper = styled.div``;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Title title="What is HackDelft?" />
        <Article content="HackDelft is the second hackathon organized by TU Delft’s W.I.S.V ‘Christiaan Huygens’. Join 100 other students interested in math, computer science or design for 24 hours of learning, building, and having fun. We’re excited to work with our four premium partners (Booking.com, Deloitte, MICompany and ORTEC Finance) to provide HackDelft-exclusive tools and data for you to hack with this year!" />
        <Title title="When is HackDelft?" />
        <Article content="HackDelft will be taking place in the weekend of April 28 and 29. Schedule coming soon!" />
        <Promo
          title="Our partners"
          items={[
            {
              asset: 'booking.png',
              title: 'Booking.com',
              href: 'https://booking.com/'
            },
            {
              asset: 'deloitte.png',
              title: 'Deloitte',
              href: 'https://www2.deloitte.com/nl/nl.html'
            },
            {
              asset: 'micompany.png',
              title: 'MICompany',
              href: 'https://www.micompany.nl'
            },
            {
              asset: 'ortec.jpg',
              title: 'Ortec Finance',
              href: 'http://www.ortec-finance.com/nl-nl'
            }
          ]}
        />
        <Promo
          title="Our supporting partners"
          items={[
            {
              asset: 'mlh.png',
              title: 'MLH',
              href: 'https://mlh.io'
            },
            {
              asset: 'picnic.jpg',
              title: 'Picnic',
              href: 'https://www.picnic.nl'
            },
            {
              asset: 'rb.png',
              title: 'Red Bull',
              href: 'https://www.redbull.com/nl-nl/'
            },
            {
              asset: 'tudSC.jpg',
              title: 'Sports and Culture - TU Delft',
              href: 'https://www.tudelft.nl/sc/'
            }
          ]}
        />
        <Collection
          title="Frequently Asked Questions"
          items={[
            {
              title: 'Who can attend?',
              body:
                'Any current university student ― undergraduate (BSc) or graduate (MSc) ― can apply to attend HackDelft.',
              href: null,
              hrefText: null
            },
            {
              title: 'How do applications work?',
              body:
                'You can register now by filling out the registration form! We’ll get in touch to let you know whether you’ve been invited to attend.',
              href:
                'https://docs.google.com/forms/d/e/1FAIpQLSekDqaHtcEw-ZQ5gajyMnqVUXO-Gdrs3lSLnjWJKGr8h5pCqA/viewform',
              hrefText: 'Register now!'
            },
            {
              title: "What if I've never been to a hackathon before?",
              body:
                'That’s fine! In the first few hours of HackDelft, we’ll explain exactly how everything works, and you’ll be hacking away with the rest of the participants in no time.',
              href: null,
              hrefText: null
            },
            {
              title: 'How much does it cost to attend HackDelft?',
              body:
                'Nothing! HackDelft is completely free, thanks to our amazing partners.',
              href: null,
              hrefText: null
            },
            {
              title: 'What should I bring to HackDelft?',
              body:
                "Bring your laptop, all the chargers you need (!), and some personal hygiene items to stay fresh for 24 hours (toothbrush, toothpaste, and deodorant). If you're planning to sleep, also bring your own mat and sleeping bag!",
              href: null,
              hrefText: null
            },
            {
              title: 'Are you going to feed me?',
              body:
                'Yes. We’ll provide a dinner on Saturday (April 28), as well as breakfast and lunch on Sunday (April 29). There’ll also be plenty of snacks and drinks, of course!',
              href: null,
              hrefText: null
            },
            {
              title: 'Can I sleep?',
              body:
                'Of course! Although many people will keep hacking through the night, we’re setting up a room to power nap in for a couple of hours. Please do remember to bring your own mat and sleeping bag.',
              href: null,
              hrefText: null
            },
            {
              title: 'Can I start working before the event?',
              body:
                'No. You may not start work on any code or models you end up submitting to HackDelft before the official hacking kickoff.',
              href: null,
              hrefText: null
            },
            {
              title: 'How do teams work?',
              body:
                "You'll be working in teams of up to four hackers. You can come with a team in mind, but if you don't have one, don't worry! You'll be able to form a group on Saturday.",
              href: null,
              hrefText: null
            },
            {
              title: 'How does judging work?',
              body:
                'Once you’ve finished your project, there’ll be an expo. The judges will walk around, and you’ll have a short (think two-three minute) window to pitch to them. Based on these pitches, the judges will pick a few teams to pitch on the finalists stage. There, you’ll again give a short pitch and answer some questions. Finally the judges will retire and announce the case-specific winners and grand prize winner.',
              href: null,
              hrefText: null
            },
            {
              title: 'Do you have a code of conduct?',
              body:
                'Just be nice to each other! If you want to read the boring stuff:',
              href: 'http://static.mlh.io/docs/mlh-code-of-conduct.pdf',
              hrefText: 'MLH: Code of conduct'
            },
            {
              title: 'What data do you share?',
              body: 'We share some of your registration data with MLH.',
              href: 'https://mlh.io/privacy',
              hrefText: 'MLH: Data Sharing Provision'
            },
            {
              title: 'Where is HackDelft?',
              body:
                "HackDelft will be held at TU Delft Sports and Culture, at Mekelweg 8, 2628 CD Delft. If you've been invited to attend, you'll get more details about the logistics as HackDelft approaches.",
              href: 'https://goo.gl/maps/Kg6afMXTab12',
              hrefText: 'Get Directions'
            },
            {
              title: 'What if I have more questions?',
              body: 'Send us a message on facebook!',
              href: 'https://www.facebook.com/hackdelft',
              hrefText: 'Visit Facebook Page'
            }
          ]}
        />
      </Wrapper>
    );
  }
}

export default Content;
