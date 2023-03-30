import React from "react";
import { Link } from "react-router-dom";

const AllStocks = (props) => {
    const list = [
        {name: "Apple Inc.", symbol: "AAPL"},
        {name: "Microsoft Corporation", symbol: "MSFT"},
        {name: "Facebook, Inc.", symbol: "FB"},
        {name: "Oracle Corporation", symbol: "ORCL"},
        {name: "Intel Corporation", symbol: "INTL"}
      ]
      
      return(
		<div className="list">
			{list.map((stock) => {
				const {name, symbol} = stock
				return (
					<Link to={`/stocks/${symbol}`} key={symbol}>
						<h2>{name}</h2>
					</Link>
				)
			})}
		</div>
	)
}

export default AllStocks