import MobileNavigation from './mobile-navigation';
import HeaderMinimal from "@/components/layouts/header-minimal";
import {motion} from "framer-motion";
import {SearchIcon} from "@/components/icons/search-icon";
import {useAtom} from "jotai";
import {displayMobileHeaderSearchAtom} from "@/store/display-mobile-header-search-atom";
import {useTranslation} from "next-i18next";
import Footer from "@/components/layouts/footer";

export default function GeneralLayout({
                                          children,
                                          layout,
                                      }: React.PropsWithChildren<{ layout?: string }>) {
    const {t} = useTranslation('common');
    const [, setDisplayMobileHeaderSearch] = useAtom(
        displayMobileHeaderSearchAtom
    );
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
            <HeaderMinimal
                // @ts-ignore
                layout={layout}
            />
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

export const getGeneralLayout = (page: React.ReactElement) => (
    <GeneralLayout layout={page.props.layout}>
        {page}
        <MobileNavigation/>
    </GeneralLayout>
);
