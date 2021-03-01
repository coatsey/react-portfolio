  
import React from 'react';

import Card from '../components/Card';

import notetaker from '../assets/images/notetaker.png';
import Budget from '../assets/images/budget.png';
import Container from 'react-bootstrap/Container';
import Game from '../assets/images/game.png';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Taker',
                    subTitle: 'Note taking website',
                    imgSrc: notetaker,
                    link: 'https://github.com/coatsey/note_taker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Budget Tracker',
                    subTitle: 'Budget Tracker',
                    imgSrc: Budget,
                    link: 'https://secret-river-70452.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Memory game',
                    subTitle: 'Super Smash bros memory game',
                    imgSrc: Game,
                    link: 'https://memory-games-project.herokuapp.com/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {
    

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;