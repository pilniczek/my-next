import React from 'react';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';
import Slider from '../components/Slider';

const Index = () => (
  <>
    <div className="center">
      <PageHeader title="Hi" />
      <div className="page-conent pb-4">
        <div className="container">
          <div className="row">
            <div className="col">
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
              </div>
              {/*
              <div className="row">
                <div className="col">
                  <Slider id="my-first-slider" />
                </div>
              </div>
              */}
              <div className="row">
                <div className="col-1">
                  <img src="../static/logo/html5.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/css3.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/js.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/react.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/github.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/redux.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/gulp.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/bootstrap.svg" alt="logo" />
                </div>
                <div className="col-1">
                  <img src="../static/logo/font-awesome.svg" alt="logo" />
                </div>
              </div>
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
