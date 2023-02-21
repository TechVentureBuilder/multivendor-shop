import SectionBlock from '@/components/ui/section-block';
import FilterBar from './filter-bar';
import Categories from '@/components/categories/categories';
import CallToAction from '@/components/cta/call-to-action';
import GroupProducts from '@/components/products/group-products';
import PopularProductsGrid from '@/components/products/popular-products';
import TopAuthorsGrid from '@/components/author/top-authors-grid';
import StaticBanner from '@/components/banners/static-banner';
import TopManufacturersGrid from '@/components/manufacturer/top-manufacturers-grid';
import { useTranslation } from 'next-i18next';
import type { HomePageProps } from '@/types';
import ProductGridHome from '@/components/products/grids/home';

export default function IndexLayout({ variables }: HomePageProps) {
    const { t } = useTranslation('common');
    return (
        <div className="flex flex-1 flex-col bg-white">
            <FilterBar className="lg:hidden" variables={variables.categories} />
            <main className="mt-12 block w-full xl:overflow-hidden pt-6">
                <SectionBlock>
                    <StaticBanner />
                </SectionBlock>
                <PopularProductsGrid variables={variables.popularProducts} />
                <Categories layout="compact" variables={variables.categories} />
                <GroupProducts />
                <SectionBlock title={t('text-new-arrival')}>
                    <ProductGridHome
                        column="five"
                        variables={{
                            ...variables.products,
                            sortedBy: 'DESC',
                            orderBy: 'created_at',
                        }}
                    />
                </SectionBlock>
                <TopAuthorsGrid />
                <TopManufacturersGrid />
                <CallToAction />
            </main>
        </div>
    );
}
