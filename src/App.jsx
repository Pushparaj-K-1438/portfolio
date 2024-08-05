import Header from './components/Header';
import HeroSection from './components/HeroSection';

const App = () => {
  const profileImage = '../src/assets/profile_img.png';
  const awards = [
    {
      title: 'Full stack developer for more than 4 years',
      description: 'Professional and for 12 years by vocation, the creation of applications is a passion before being a profession.',
      image: null,
    },
    {
      title: 'Best Developer Award',
      description: '',
      image: 'path_to_trophy_image', // Replace with actual image path
    },
    {
      title: '50+ happy clients',
      description: '',
      image: 'path_to_clients_image', // Replace with actual image path
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <HeroSection profileImage={profileImage} />
      {/* <ContentSection awards={awards} /> */}
    </div>
  );
};

export default App;
