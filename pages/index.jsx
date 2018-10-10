import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';

const Index = () => (
  <Layout>
    <div className="page-conent pb-4">
      <div className="row">
        <div className="col">
          <PageHeader title="Hi" />
          <p>
            I'm Tom. I develop and maintain several websites.
          </p>
          <p>
            I mostly use Nette these days, but I also like other frameworks - React for example.
          </p>
          <p>
            I also worked as copywriter or webmaster, but I enjoy development the most.
          </p>
        </div>
        <div className="col-auto bd-title">
          <img src="../static/logo.jpg" alt="logo" />
        </div>
      </div>
    </div>
    <Quote text="Our work is never over!" author="Daft Punk" />
  </Layout>
);

export default Index;
