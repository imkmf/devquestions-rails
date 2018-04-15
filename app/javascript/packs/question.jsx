import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Emoji} from 'emoji-mart';

const Question = ({data}) => (
  <article className="helvetica">
    <header className="vh-100 dt w-100">
      <div className="dtc v-mid cover ph3 ph4-m ph5-l">
        <h1 className="f2 f-subheadline-l measure lh-title fw9">
          <a className="link dim base07" href={data.question.url}>
            <Emoji emoji={data.question.emoji} native={true} />{' '}
            {data.question.text} →
          </a>
        </h1>
        <h2 className="base03">{data.meta.text}</h2>

        <div className="w-100 h1 base03-bg" />

        <h3 className="base03">
          <a className="link dim base05" href={data.meta.mailer.url}>
            <Emoji emoji="envelope" native={true} /> {data.meta.mailer.text} →
          </a>
        </h3>

        <h3 className="base03">
          <a className="link dim base05" href={data.meta.archive.url}>
            <Emoji emoji="book" native={true} /> {data.meta.archive.text} →
          </a>
        </h3>

        <h3 className="base03">
          <a className="link dim base06" href={data.meta.tagline.url}>
            <Emoji emoji="muscle" native={true} /> {data.meta.tagline.text} →
          </a>
        </h3>
      </div>
    </header>
  </article>
);

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('question');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <Question data={data} />,
    document.body.appendChild(document.createElement('div')),
  );
});
