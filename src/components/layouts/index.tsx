import SectionBlock from '@/components/ui/section-block';
import FilterBar from './filter-bar';
import StaticBanner from '@/components/banners/static-banner';
import TopBrandsGrid from '@/components/brand/top-brands-grid';
import {useTranslation} from 'next-i18next';
import type {HomePageProps} from '@/types';
import GroupsGrid from "@/components/groups/groups-grid";

export default function IndexLayout({variables}: HomePageProps) {
    const {t} = useTranslation('common');
    return (
        <div className="flex flex-1 flex-col bg-white">
            <FilterBar className="lg:hidden" variables={variables.categories}/>
            <main className="mt-12 block w-full xl:overflow-hidden pt-6">
                <SectionBlock>
                    <StaticBanner/>
                </SectionBlock>
                <GroupsGrid/>
                <TopBrandsGrid/>
            </main>
        </div>
    );
}
