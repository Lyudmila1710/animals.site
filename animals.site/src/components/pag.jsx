import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Post from"../components/post";





function PaginatedItems(props) {
    const items = [];
    items.push(...props.data);
    console.log(items);
    function Items({ currentItems }) {
        return (
            <>
            <p className="fs-3 text-center mt-5">{items.length > 0? "Результаты поиска":"По заданному запросу объявлений не найденно"}</p>
              <div className="d-flex p-2  justify-content-around flex-wrap">
                {currentItems.map((item, index) => (
                    <div>
                        <Post data={item} key={index} />
                    </div>
                ))}
                </div>
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);


    const endOffset = itemOffset + 10;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 10);

   
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="d-flex p-2  justify-content-center flex-wrap">
            <ReactPaginate
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<<"
                pageClassName="page-item"
                pageLinkClassName="page-link bg-dark text-light"
                previousClassName="page-item"
                previousLinkClassName="page-link bg-dark text-light"
                nextClassName="page-item"
                nextLinkClassName="page-link bg-dark text-light"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link bg-dark text-light"
                containerClassName="pagination "
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
            </div>
        </>
    );
}

export default PaginatedItems;