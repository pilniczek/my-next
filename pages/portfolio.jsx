import React from 'react';
import Layout from '../components/Layout';
import Iterator from '../components/Iterator';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import data from '../data/portfolio.json';

const cards = data;

const Portfolio = () => (
  <Layout>
    <PageHeader title="Portfolio" />
    <div className="row">
      <Iterator
        items={cards.map(item => ({
          title: item.title,
          subtitle: item.subtitle,
          content: item.content,
          links: item.links,
        }))}
        Component={props => (
          <div className="col">
            <Card {...props} />
          </div>
        )}
      />
    </div>
  </Layout>
);

export default Portfolio;
