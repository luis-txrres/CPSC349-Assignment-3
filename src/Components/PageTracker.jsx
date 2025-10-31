export default function PageTracker({page, setPage, totalPages}) 

// {
//   return (
//     <div className="bottomSection">
//       <button className="button" onClick={() => setPage((p) => Math.max(1, p - 1))}>
//         Previous
//       </button>
//       <h3 id="pageNumber">Page {page} of </h3>
//       <button className="button" onClick={() => setPage((p) => p + 1)}>
//         Next
//       </button>
//     </div>

    

//   );
// }



{
  return (
    <div className="bottomSection">
      <button
        className="button"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        // disabled={page === 1}
      >
        Previous
      </button>

      <h3 id="pageNumber">
        Page {page} of {totalPages}
      </h3>

      <button
        className="button"
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        // disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
