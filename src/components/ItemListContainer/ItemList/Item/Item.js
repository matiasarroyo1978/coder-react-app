import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import BotonGenerico from '../../../../BotonGenerico/BotonGenerico';
import './Item.css';



function Item({ prodData }) {
    const {id, title, description, price, imgDir, stock} = prodData
    return(
                <Card style={{width: '18rem', padding: '2rem'}} className="col-md-4 card-prod">
                    <Card.Img variant="top" src={imgDir} alt= {title} />
                    <Card.Body>
                        <Card.Title style={{color:"var(--blue)"}}>{title}</Card.Title>
                        <Card.Text>{description} <br/></Card.Text>
                        <Card.Text>Precio: ${price} <br/></Card.Text> 
                        <Card.Text>Stock: {stock} <br/></Card.Text>                        
                        <BotonGenerico contenido={
                            <Link to={`/item/${id}`} className="text-decoration-none text-light" >
                            Detalles
                        </Link>
                        }/>
                    </Card.Body>
                </Card>
            )
            }
            
    

export default Item;