import dynamic from 'next/dynamic';

const ErrorMessage = dynamic(() => import('@/components/ui/error-message'));
const BannerWithStaticImage = dynamic(
    () => import('@/components/banners/banner-with-static-image')
);
import MenImage from '@/assets/home-slider/men.jpg'
import WomenImage from '@/assets/home-slider/women.jpg'
import KidsImage from '@/assets/home-slider/kids.jpg'

const banners = [
    {
        id: '1',
        slug: 'men',
        image: MenImage,
        title: 'Men Fashion',
        description: 'Men fashion'
    },
    {
        id: '2',
        slug: 'women',
        image: WomenImage,
        title: 'Women Fashion',
        description: 'Women fashion'
    },
    {
        id: '3',
        slug: 'kids',
        image: KidsImage,
        title: 'Kids Fashion',
        description: 'Kids fashion'
    }
]

const StaticBanner: React.FC = () => {
    const Component = BannerWithStaticImage;
    return (
        <Component banners={banners}/>
    );
};

export default StaticBanner;
