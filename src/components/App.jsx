import News from 'News/News';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';

export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <News />
        <Footer />
      </Container>
    </>
  );
};
