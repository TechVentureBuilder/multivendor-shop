import NotFound from '@/components/ui/not-found';
import Carousel from '@/components/ui/carousel';
import SectionBlock from '@/components/ui/section-block';
import {Routes} from '@/config/routes';
import ErrorMessage from '@/components/ui/error-message';
import {useTopManufacturers} from '@/framework/manufacturer';
import ManufacturerLoader from '@/components/ui/loaders/manufacturer-loader';
import rangeMap from '@/lib/range-map';
import AuthorCard from "@/components/ui/author-card";
import Link from '@/components/ui/link';

const breakpoints = {
    320: {
        slidesPerView: 1,
    },

    600: {
        slidesPerView: 2,
    },

    960: {
        slidesPerView: 3,
    },

    1280: {
        slidesPerView: 4,
    },

    1600: {
        slidesPerView: 8,
    },
    2600: {
        slidesPerView: 10,
    },
};

const TopBrandsGrid: React.FC = () => {
    const {manufacturers, isLoading, error} = useTopManufacturers({
        limit: 10,
    });

    if (error) return <ErrorMessage message={error.message}/>;

    if (isLoading && manufacturers.length) {
        return (
            <SectionBlock title="Top Brands" href={Routes.brands}>
                <div className="">
                    <div className="grid w-full grid-flow-col gap-6">
                        {rangeMap(8, (i) => (
                            <ManufacturerLoader key={i} uniqueKey={`manufacturer-${i}`}/>
                        ))}
                    </div>
                </div>
            </SectionBlock>
        );
    }
    return (
        <div className="top-brand-section mb-20 mt-20">
            <div className="container mx-auto">
                <h2 className="text-center w-full text-3xl lg:text-[40px] 4xl:text-4xl font-semibold mb-10">Top
                    Brands</h2>
                {!isLoading && !manufacturers.length ? (
                    <div className="min-h-full px-9 pt-6 pb-8 lg:p-8">
                        <NotFound text="text-no-category" className="h-96"/>
                    </div>
                ) : (
                    <div>
                        <Carousel
                            items={manufacturers}
                            breakpoints={breakpoints}
                            spaceBetween={30}
                        >
                            {(item) => <AuthorCard item={item}/>}
                        </Carousel>
                    </div>
                )}
                <div className="button-wrapper text-center mt-20">
                    <Link href={Routes.brands} className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none px-3 py-0 h-9 text-sm bg-accent text-light border border-transparent hover:bg-accent-hover transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700'">
                        See All Brands
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBrandsGrid;
