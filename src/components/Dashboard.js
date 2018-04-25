import React, { Component } from 'react';
import { FontIcon, Card, CardTitle, CardText } from 'react-md';
import AdminTemplate from './AdminTemplate';



export default class Dashboard extends Component {
    render() {
        return (
            <AdminTemplate>
                <div className="md-grid ">
                    <Card className="md-cell ">
                        <CardText className="md-grid ">
                            <div className="md-cell md-cell--6">
                                 <FontIcon>home</FontIcon>
                            </div>
                            <div className="md-cell md-cell--6 md-text-right">
                                764
                            </div>
                        </CardText>
                        <CardTitle title="Locataires" />
                    </Card>
                    <Card className="md-cell">
                        <CardTitle title="Nombres de propriétaires" />
                        <CardText>
                            <p>797</p>
                        </CardText>
                    </Card>
                    <Card className="md-cell">
                        <CardTitle title="Nombre de loations" />
                        <CardText>
                            <p>1287</p>
                        </CardText>
                    </Card>
                </div>
            </AdminTemplate>
        );
    }
}
