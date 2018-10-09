import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';


const Index = () => (
  <Layout>
    <PageHeader title="Hi" />
    <Quote text="Our work is never over!" author="Daft Punk" />
  </Layout>
);

export default Index;
