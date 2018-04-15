import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Emoji} from 'emoji-mart';
import moment from 'moment';

class Admin extends React.Component {
  state = {
    text: null,
    url: null,
    emoji: null,
    date: null
  }

  onChange(ref, evt) {
    this.setState({
      [ref]: evt.target.value
    })
  }

  render() {
    const { date, emoji, id, text, url } = this.state;
    const { questions } = this.props;

    return <article className="helvetica">
      <form className='ph2'>
        <h1>New Question</h1>
        <div className='pv2'>
          <input className="measure lh-title" onChange={evt => this.onChange('text', evt)} placeholder="Question text" value={text} />
        </div>
        <div className='pv2'>
          <input className="measure lh-title" onChange={evt => this.onChange('url', evt)} placeholder="URL" value={url} />
        </div>
        <div className='pv2'>
          <input className="measure lh-title" onChange={evt => this.onChange('emoji', evt)} placeholder="Emoji" value={emoji} />
          {emoji && <Emoji emoji={emoji} native={true} />}
        </div>
        <div className='pv2'>
          <input className="measure lh-title" onChange={evt => this.onChange('date', evt)} type="datetime-local" value={date} />
        </div>
        <div className='pv2'>
          <input type="hidden" value={id} />
          <input onClick={() => this.submit()} type="submit" />
        </div>
      </form>

      <div className='pa2'>
        <h1>Questions</h1>
        {questions && questions.map(q => <div key={q.id}>
          <h3>
            <Emoji emoji={q.emoji} native={true} />
            <a className="base08 link dim" href={q.url}>
              {q.text}
            </a>
          </h3>
          <div>
            <span className="base08 mr2 pointer underline dim" onClick={evt => this.editQuestion(q)}>
              Edit
            </span>
            <span>{moment(q.published).format('L')}</span>
          </div>
        </div>)}
      </div>
    </article>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('admin');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <Admin questions={data} />,
    document.body.appendChild(document.createElement('div')),
  );
});
