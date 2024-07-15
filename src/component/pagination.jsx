import React from "react";
import ReactPagination from "react-paginate";
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const PaginationContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;

    & > * {
        cursor : pointer;
    }
`;

const PaginationLink = styled.a`
    transition: all 0.25s;
    padding : 0.2rem 0.6rem;
    border-radius : 0.3rem;
    
    &.pagination__link_active{
        background-color: #bbb;
        color: #fefefe;
    }
    `;

const Pagination = ({pageCount, onPageChange, currentPage}) => {
    
    return (
        <PaginationContainer>
        <ReactPaginate
            previousLabel = {<FiChevronLeft/>}
            nextLabel = {<FiChevronRight/>}
            pageCount = {pageCount}
            onPageChange = {onPageChange}
            containerClassName = {"pagination"}
            pageLinkClassName={"pagination__link"}
            activeLinkClassName={"pagination__link_active"}
            />
        </PaginationContainer>
    );
};

export default Pagination;