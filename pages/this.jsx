import React from 'react';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';

const Index = () => (
  <>
    <div className="center">
      <PageHeader title="This" />
      <div className="page-conent pb-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                {'What is this?'}
              </p>
              <p>
                {'This page is just a pet project. A refresh of my knowledge of React.'}
              </p>
              <p>
                {"You can find it's repo "}
                <a
                  href="https://github.com/pilniczek/next"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="gtm-github"
                >
                  {'here'}
                </a>
                {'.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <Quote text="Say what you mean, mean what you say." author="Bob Cody, Interstate 60" />
    </div>
  </>
);

export default Index;
