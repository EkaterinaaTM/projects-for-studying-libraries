import Link from 'next/link';
import { IntlProvider, FormattedMessage } from 'react-intl';

const linkStyle = {
    marginRight: 15
};

const Header: React.FC = () => ( 
    <IntlProvider>
    <header>
        <Link href='/'>
            <a style={linkStyle}> <FormattedMessage id='home'/>  </a>
        </Link>
        <Link href='/about'>
            <a style={linkStyle}> <FormattedMessage id='about'/></a>
      </Link>
    </header>
    </IntlProvider>
);

export default Header;

