import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BsSearch} from 'react-icons/bs'

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <form
        className="d-flex search-form mx-auto justify-content-center"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-1  pe-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <span className="input-group-text p-2" id="basic-addon2" style={{background: "#F8EA54"}}><BsSearch className='fs-6'/></span>

      </form>
    </div>
  );
};

export default SearchInput;
