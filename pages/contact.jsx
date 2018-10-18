import React from 'react';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';


const Contact = () => (
  <>
    <div className="center">
      <PageHeader title="Contact" />
      <div className="page-conent pb-4">
        <div className="container">
          <p>
            {'I used '}
            <a
              href="https://cz.linkedin.com/in/tom-pilnaj"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'LinkedIn'}
            </a>
            {', but It is not the best way to contact me.'}
          </p>
          <p>
            {'Using an '}
            <a href="mailto:pilnaj.t@gmail.com">
              {'e-mail'}
            </a>
            {' is much better.'}
          </p>
          <p>
            {'And you can follow me on '}
            <a
              href="https://twitter.com/pilniczek"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Twitter'}
            </a>
            {'.'}
          </p>
        </div>
      </div>
    </div>
    <div className="footer">
      <Quote text="I g-guess you guys aren't ready for that yet. But your kids are gonna love it." author="Marty McFly, Back to the Future" />
    </div>
  </>
);

export default Contact;
