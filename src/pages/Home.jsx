import Hero from '../components/hero';
import Content from '../components/Content';
import { useLoaderData } from 'react-router';
import Achieve from '../components/Achieve';

const Home = () => {
    const doctorsData = useLoaderData()
    return (
        <div className='px-2 lg:px-6'>
            <Hero></Hero>
            <Content doctorsData = {doctorsData}></Content>
            <Achieve></Achieve>
        </div>
    );
};

export default Home;