import useLayout from '@/lib/hooks/use-layout';
import Header from './header';
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';
import Footer from './footer';
import NoticeHighlightedBar from '@/components/store-notice/notice-highlightedBar';
import {useRouter} from 'next/router';
import {motion} from "framer-motion";
import {SearchIcon} from "@/components/icons/search-icon";
import {useTranslation} from "next-i18next";
import {useAtom} from "jotai";
import {displayMobileHeaderSearchAtom} from "@/store/display-mobile-header-search-atom";

export default function SiteLayout({children}: React.PropsWithChildren<{}>) {
    const {layout} = useLayout();
    const router = useRouter();
    const {t} = useTranslation('common');
    const [, setDisplayMobileHeaderSearch] = useAtom(
        displayMobileHeaderSearchAtom
    );
    return (
        <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
            {router.query.slug && <NoticeHighlightedBar/>}
            <HeaderMinimal layout={layout}/>
            {children}
            <Footer/>
            <MobileNavigation>
                <motion.button
                    whileTap={{scale: 0.88}}
                    onClick={() => setDisplayMobileHeaderSearch((prev) => !prev)}
                    className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent"
                >
                    <span className="sr-only">{t('text-search')}</span>
                    <SearchIcon width="17.05" height="18"/>
                </motion.button>
            </MobileNavigation>
        </div>
    );
}
export const getLayout = (page: React.ReactElement) => (
    <SiteLayout>{page}</SiteLayout>
);
