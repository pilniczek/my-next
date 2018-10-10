import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Quote from '../components/Quote';


const Contact = () => (
  <Layout>
    <PageHeader title="Contact" />
    <div className="page-conent pb-4">
      <p>
        {'I used '}
        <a href="https://cz.linkedin.com/in/tom-pilnaj" target="_blank">LinkedIn</a>
        {', but It is not the best way to contact me.'}
      </p>
      <p>
        {'Using an '}
        <a href="mailto:pilnaj.t@gmail.com" target="_blank">e-mail</a>
        {' is much better.'}
      </p>
      <p>
        {'And you can follow me on '}
        <a href="https://twitter.com/pilniczek" target="_blank">Twitter</a>
        {'.'}
      </p>
    </div>
    <Quote text="I g-guess you guys aren't ready for that yet. But your kids are gonna love it." author="Marty McFly" />
  </Layout>
);

export default Contact;
