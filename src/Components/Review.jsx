import ReviewCard from "./ReviewCard";

const Review = () => {
    return (
        <div>
            <div><h1 className="text-4xl font-semibold text-neutral-600 text-center py-10">WHAT CUSTOMERS SAY</h1></div>
            <div className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
};

export default Review;