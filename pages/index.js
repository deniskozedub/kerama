import Home from '../components/Wrappers/Home/Home';
import { getMainInfo } from '../services/main';

Home.getInitialProps = async () => {
  const info = await getMainInfo();

  return {
    info: info.data,
  };
};

export default Home;
