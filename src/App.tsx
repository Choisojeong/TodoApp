import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import Mainpage from './Pages/Mainpage';

const App: React.FC = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <GlobalStyles />
    <Mainpage />
  </>
  );

export default App;