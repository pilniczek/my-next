import React from 'react';
import Layout from '../components/Layout';
import Iterator from '../components/Iterator';
import PageHeader from '../components/PageHeader';
import CardUltimate from '../components/CardUltimate';
import Quote from '../components/Quote';
import CardFilter from '../components/CardFilter';
import data from '../data/portfolio.json';

const { portfolio } = data;

// get filter filters
const { filter } = data;

const Portfolio = () => (
  <Layout>
    <div className="center">
      <PageHeader title="Portfolio" />
      <div className="filter pb-4">
        <div className="container">
          <div className="row">
            <Iterator
              items={
                filter.map(item => ({
                  id: item.id,
                  isChecked: item.checked,
                  name: item.name,
                }))
              }
              Component={props => (
                <CardFilter
                  {...props}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="page-conent pb-4">
        <div className="container">
          <div className="row">
            <Iterator
              items={portfolio.map(item => ({
                id: `portfolio-${item.id}`,
                company: item.filter.companyId,
                title: item.content.title,
                subtitle: item.content.subtitle,
                content: item.content.body,
                links: item.content.links,
                influence: item.content.influence,
              }))}
              Component={props => (
                <CardUltimate
                  {...props}
                  className="col-lg-4 col-md-6 col-sm-12 flex"
                />
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
