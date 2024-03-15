import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4 pt-4 rounded-xl">
            <div>
                <h3 className="text-4xl text-purple-700 font-bold text-center mb-4">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;