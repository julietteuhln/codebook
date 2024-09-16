export const Rating = ({ rating }) => {
    let ratingArray = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }

    return (
        <div className="rating">
            {ratingArray.map((value, index) => (
                <input
                    key={index}
                    type="radio"
                    name="rating"
                    className={`mas mask-star-2 ${value ? 'bg-orange-400' : 'bg-gray-300'}`}
                    readOnly
                    checked={value}
                />
            ))}
        </div>
    );
};
