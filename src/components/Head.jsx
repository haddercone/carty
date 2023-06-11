import { useEffect, useState } from "react";
import { QUERY_SEARRCH_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useRef } from "react";


const Head = () => {
    
  const query = useRef(null);
  const { updateData } = useContext(DataContext);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (query === null || query === undefined) return;
    updateData(QUERY_SEARRCH_URL + query.current.value);
    navigate("/data");
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" ref={query} />
      </form>
    </>
  );
};
export default Head;
