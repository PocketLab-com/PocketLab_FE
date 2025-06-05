import NavigationStyle from "./Navigation.module.css";
import Button from "@/app/components/common/Atoms/Button/Button";

export default function Navigation({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };
    
    return (
        <nav className={NavigationStyle.navigation}>
        <Button
            className={NavigationStyle.pageButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            이전
        </Button>
        </nav>
    );
}