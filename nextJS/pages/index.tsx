import React from 'react';
import Layout  from '../components/Layout';
import Link from 'next/link';
import '../styles/main.scss';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import en from '../i18n/locales/en.json';
import ru from '../i18n/locales/ru.json';

import ruLocaleData from 'react-intl/locale-data/ru';
import enLocaleData from 'react-intl/locale-data/en';

import { flattenMessages } from '../i18n/utils';

interface IPostLink {
  id: string;
  title: string;
}

const PostLink = ( {id, title}:IPostLink ) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a> {title}</a>
    </Link>
  </li>
)

export class Index extends React.Component {
  state = {
    lang: 'en'
  };

  togglLocale = (e: any) => {
    this.setState({ lang: e.target.value });
  };
  
  render(){
    let { lang } = this.state;
    const messages: { [key: string]: object} = {
      'en': en,
      'ru': ru
    };
    addLocaleData([...ruLocaleData, ...enLocaleData]);
    return (
      <IntlProvider locale={lang} messages={flattenMessages(messages[lang])}>
        <Layout>
        <button onClick={this.togglLocale} value='ru'>Русский</button>
        <button onClick={this.togglLocale} value='en'>English</button>
          <h1>
            <FormattedMessage id='title'/>
          </h1>
          <ul>
            {en.posts.map((post, index) => {
              return <PostLink id={post.id} key={index} title={post.title} />
            })}
          </ul>
        </Layout>
      </IntlProvider>
    )
  }
}

export default Index;