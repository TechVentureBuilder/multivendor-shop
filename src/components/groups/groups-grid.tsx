import Scrollbar from '@/components/ui/scrollbar';
import {Menu, Transition} from '@headlessui/react';
import cn from 'classnames';
import {Fragment} from 'react';
import {getIcon} from '@/lib/get-icon';
import {CaretDown} from '@/components/icons/caret-down';
import * as groupIcons from '@/components/icons/groups';
import {useRouter} from 'next/router';
import Link from '@/components/ui/link';
import {ArrowDownIcon} from '@/components/icons/arrow-down';
import {useTypes} from '@/framework/type';
import useHomepage from '@/lib/hooks/use-homepage';
import type {Type} from '@/types';
import {TYPES_PER_PAGE} from '@/framework/client/variables';

interface GroupsGridItemProps {
    groups?: Type[];
}

const GroupsGridItems: React.FC<GroupsGridItemProps> = ({groups}) => {
    return (
        <div className="container mx-auto mb-10">
            <div className="flex justify-around">
                {
                    groups?.map(({id, name, slug, promotional_sliders}) => (
                        <div key={id} className="group-grid-item"
                             style={{backgroundImage: `url(${promotional_sliders && promotional_sliders.length > 0 ? promotional_sliders[0].original : null})`}}>
                            <Link href={slug}>
                                <div className="description">
                                    <div className="des-wrapper">
                                        <p>{name}</p>
                                        <button className="bg-white text-dark rounded py-2 px-4 mt-2">Shop {name}</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const GroupsGrid: React.FC = () => {
    const {types}: any = useTypes({
        limit: TYPES_PER_PAGE,
    });
    console.log(types)
    return (
        <GroupsGridItems groups={types}/>
    );
};

export default GroupsGrid;
