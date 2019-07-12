import Header from './Header';
import { ReactNode } from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: React.FC = ({children}:ILayoutProps)  => (
  <div style={layoutStyle}>
    <Header/>
    {children}
  </div>
);

export default Layout;