import { useState, useEffect } from "react";
function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(5);
  let total = 0;
  const fetchData = async () => {
    const result = await fetch(
      `https://dummyjson.com/products?skip=${page * 10 - 10}&limit=${10}`
    );
    const data = await result.json();
    total = data.total;
    console.log(total);
    setProduct(data.products);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        {product.map((pr, id) => (
          <div key={id} className="border p-4 text-center">
            <img key={pr.id} src={pr.thumbnail} className=" object-cover"></img>
            <span key={id}>
              {id}:{pr.title}
            </span>
          </div>
        ))}
      </div>
      <div className="mx-auto text-center h-20 w-20">
        {page > 1 ? (
          <span
            className="text-lg p-3 hover:bg-slate-400 cursor-pointer"
            onClick={(e) => setPage(page - 1)}
          >
            ⬅️
          </span>
        ) : (
          ""
        )}
        {[...Array(10)].map((pr, ind) => (
          <span
            className={
              page === ind + 1
                ? "text-lg p-3 bg-slate-400 cursor-pointer"
                : "text-lg p-3 hover:bg-slate-400 cursor-pointer"
            }
            key={ind + 1}
            onClick={(e) => setPage(ind + 1)}
          >
            {ind + 1}
          </span>
        ))}
        {page < 10 ? (
          <span
            className="text-lg p-3 hover:bg-slate-400 cursor-pointer"
            onClick={(e) => setPage(page + 1)}
          >
            ➡️
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
