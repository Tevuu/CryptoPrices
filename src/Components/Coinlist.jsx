import Table from 'react-bootstrap/Table';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Coinlist = ( { data }) => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>№</th>
                <th>Название</th>
                <th>Цена</th>
                </tr>
                
            </thead>
            <tbody>
                {data.map((obj) => (
                    <tr>
                        <td>{obj.rank}</td>
                        <td>
                            <img 
                            src= {obj.icon}
                            width={30}
                            style={{marginRight:10}}
                            alt=""
                            />
                            {obj.symbol}
                        </td>
                        <td>$ {obj.price} </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}