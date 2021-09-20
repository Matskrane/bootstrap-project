import React from 'react';
import { Pagination, Card, Button } from 'react-bootstrap';


function News() {
    return (
        <div className="news-area">
            <h1>News</h1>

                <div className="pagination">
                    <Pagination>
                        <Pagination.Item className="active">{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                    </Pagination>
                </div>

                <div className="cards">
                    <Card>
                    <Card.Img variant="top" src="../images/news-1.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-2.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-3.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-4.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-5.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-6.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-7.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="../images/news-8.jpg" />
                    <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div className="pagination">
                    <Pagination>
                        <Pagination.Item className="active">{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                    </Pagination>
                </div>

            
             
        </div>
    )
}

export default News


