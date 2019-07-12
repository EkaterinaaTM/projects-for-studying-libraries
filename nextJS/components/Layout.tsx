import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

interface ILayoutProps {
  children: any;
}
// 1. как children
const Layout = ({children}:ILayoutProps)  => (
  <div style={layoutStyle}>
    <Header/>
    {children}
  </div>
);

// 2. как props
// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.content}
//   </div>
// );

// 3. как HOC
// const withLayout = Page => {
//     return () => (
//       <div style={layoutStyle}>
//         <Header />
//         <Page />
//       </div>
//     );
//   };

export default Layout;