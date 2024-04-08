const Discover = () => {
    return (
        <div className="mt-24 text-center">
            <h1 className="text-4xl font-bold">Discover Our Featured Listings</h1>
            <p className="text-lg text-gray-500">Aliquam lacinia diam quis lacus euismod</p>
            <div>
                <div className="card text-primary-content bg-[url('/public/images/header.jpg')] object-contain">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;