// 빈 카드 사각형
// components/atoms/CardFrame.js

export default function CardFrame({ children, onClick, selected }) {
    return (
        <div
        onClick={onClick}
        className={`w-32 h-48 border-2 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
          selected ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-300'
        }`}
        >
            <div className="card">
                <img src="/sol.jpg" className="card-img"/>
            </div>
        </div>
    );
}