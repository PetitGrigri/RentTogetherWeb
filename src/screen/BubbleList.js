import React, { Component } from 'react';
import Bubble from '../components/Bubble';

class BubbleList extends Component {
    render() {
        return (
            <div>
                <Bubble
                    content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte"
                    left
                />
                <Bubble
                    content="Un message de test"
                    right
                />
                <Bubble
                    content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte"
                    right
                />
                <Bubble
                    content="Yet another message de test"
                    left
                />
                                        <Bubble
                    content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte"
                    right
                />
                <Bubble
                    content="Yet another message de test"
                    left
                />
                                        <Bubble
                    content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte"
                    right
                />
                <Bubble
                    content="Yet another message de test"
                    left
                />
                <Bubble
                    content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte"
                    right
                />
                <Bubble
                    content="Yet another message de test"
                    left
                />
            </div>
        );
    }
}

export default BubbleList;