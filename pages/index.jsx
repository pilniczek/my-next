import React from 'react';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';

const Index = () => (
  <>
    <div className="center">
      <PageHeader title="Hi" />
      <div className="page-conent pb-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                {"I'm Tom. I develop and maintain several websites."}
              </p>
              <p>
                {'I mostly use Nette these days, but I also like other frameworks - React for example.'}
              </p>
              <p>
                {'I also worked as copywriter or webmaster, but I enjoy development the most.'}
              </p>
            </div>
            <div className="col-auto">
              <img src="../static/logo.jpg" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <Quote text="Our work is never over!" author="Daft Punk, Interstella 5555" />
    </div>
  </>
);

export default Index;
