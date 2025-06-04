import MenuListStyle from './MenuList.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function MenuList({ menus = [], selected, onSelect }) {
    return (
        <div className={MenuListStyle.menuList}>
            <span className={MenuListStyle.menuTitle}>커뮤니티</span>
            {menus.map((menu) => (
                <Button
                    key={menu.key}
                    className={`${MenuListStyle.menuButton} ${selected === menu.key ? MenuListStyle.selected : ''}`}
                    onClick={() => onSelect(menu.key)}
                >
                    {menu.label}
                </Button>
            ))}
        </div>
    );
}
