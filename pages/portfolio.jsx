import React from 'react';
import Layout from '../components/Layout';
import Iterator from '../components/Iterator';
import PageHeader from '../components/PageHeader';
import CardExtended from '../components/CardExtended';
import Quote from '../components/Quote';
import data from '../data/portfolio.json';

const cards = data;

const Portfolio = () => (
  <Layout>
    <div className="center">
      <PageHeader title="Portfolio" />
      <div className="page-conent pb-4">
        <div className="container">
          <div className="row">
            <Iterator
              items={cards.map(item => ({
                title: item.title,
                subtitle: item.subtitle,
                content: item.content,
                links: item.links,
                influence: item.influence,
              }))}
              Component={props => (
                <div className="col-lg-4 col-md-6 col-sm-12 flex">
                  <CardExtended {...props} />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <Quote text="Do. Or do not. There is no try." author="Yoda" />
    </div>
  </Layout>
);

export default Portfolio;
