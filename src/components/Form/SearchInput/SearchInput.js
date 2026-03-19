import './SearchInput.css';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

const SearchInput = ({
    setSearchValue,
    keywords = [],
}) => {
    return (
        <div className='search-input-container'>
            <div className="search-input-wrap">
                <input
                    className='search-input'
                    placeholder='Search'
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                />
                <Search />
            </div>

            {/* 키워드 버튼 목록 */}
            <div className='keyword-button-scroll-container'>
                <div className="keyword-button-list">
                    {keywords.map((keyword, index) => (
                        <button
                            key={index}
                            className="keyword-button"
                            onClick={() => setSearchValue(keyword.value)}
                        >
                            {keyword.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchInput;