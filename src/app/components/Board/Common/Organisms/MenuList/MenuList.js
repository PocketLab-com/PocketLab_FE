// src/app/components/Board/Common/Organisms/MenuList/MenuList.js
"use client";
import MenuListStyle from './MenuList.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';
import { useRouter } from "next/navigation";

export default function MenuList({ menus = [], selected }) {
    const router = useRouter();

    const handleMenuClick = (key) => {
        router.push(`/board/${key}`);
    };

    return (
        <div className={MenuListStyle.menuList}>
            <span className={MenuListStyle.menuTitle}>커뮤니티</span>
            {menus.map((menu) => (
                <Button
                    key={menu.key}
                    className={`${MenuListStyle.menuButton} ${selected === menu.key ? MenuListStyle.selected : ''}`}
                    onClick={() => handleMenuClick(menu.key)}
                    type="button"
                >
                    {menu.label}
                </Button>
            ))}
        </div>
    );
}
