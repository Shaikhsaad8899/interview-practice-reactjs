// import React, { useState, Profiler, startTransition } from 'react';
// import { Link } from 'react-router-dom';

// const onRenderCallback = (
//   id,
//   phase,
//   actualDuration,
//   baseDuration,
//   startTime,
//   commitTime,
//   interactions
// ) => {
//   console.log(`Profiler [${id}]`);
//   console.log(`Phase: ${phase}`);
//   console.log(`Actual Duration: ${actualDuration}ms`);
//   console.log(`Base Duration: ${baseDuration}ms`);
//   console.log(`Start Time: ${startTime}`);
//   console.log(`Commit Time: ${commitTime}`);
//   console.log('Interactions:', interactions);
// };

// const ChildComponent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <Profiler id="ChildComponent" onRender={onRenderCallback}>
//       <div className="p-4 border rounded-lg shadow-md w-64 text-center">
//         <h2 className="text-xl font-bold mb-2">Profiler Component</h2>
//         <p className="text-lg">Count: {count}</p>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => startTransition(() => setCount(count + 1))}
//         >
//           Increment
//         </button>
//       </div>
//       <Link to="/dashboard">Home</Link>
//       <Link to="/login">Login</Link>
//     </Profiler>
//   );
// };

// const ProfilerComponent = () => {
//   const [showProfiler, setShowProfiler] = useState(true);

//   return (
//     <div className="p-6">
//       <button
//         className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         onClick={() => setShowProfiler(!showProfiler)}
//       >
//         {showProfiler ? 'Unmount Profiler' : 'Mount Profiler'}
//       </button>

//       {showProfiler && <ChildComponent />}
//     </div>
//   );
// };

// export default ProfilerComponent;


import React, { useState, useEffect, Profiler, startTransition } from 'react';

const onRenderCallback = (
    id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
) => {
    console.log(`Profiler [${id}]`);
    console.log(`Phase: ${phase}`);
    console.log(`Actual Duration: ${actualDuration}ms`);
    console.log(`Base Duration: ${baseDuration}ms`);
    console.log(`Start Time: ${startTime}`);
    console.log(`Commit Time: ${commitTime}`);
    console.log('Interactions:', interactions);
};

const ProfilerComponent = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page]);

    return (<>
        <Profiler id="ProfilerComponent" onRender={onRenderCallback}>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
                <ul className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <li key={product.id} className="p-4 border rounded-lg">
                            <img src={product.image} alt={product.title} style={{ width: "50px" }} className="h-32 w-10 object-cover" />
                            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                            <p className="text-sm">${product.price}</p>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => startTransition(() => setPage((prev) => Math.max(prev - 71, 1)))}
                    >
                        Prev
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => startTransition(() => setPage((prev) => prev + 1))}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Profiler>
        <Profiler id="ProfilerComponent2    " onRender={onRenderCallback}>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
                <ul className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <li key={product.id} className="p-4 border rounded-lg">
                            <img src={product.image} alt={product.title} style={{ width: "50px" }} className="h-32 w-10 object-cover" />
                            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                            <p className="text-sm">${product.price}</p>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => startTransition(() => setPage((prev) => Math.max(prev - 71, 1)))}
                    >
                        Prev
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => startTransition(() => setPage((prev) => prev + 1))}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Profiler>
    </>
    );
};

export default ProfilerComponent;
