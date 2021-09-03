import React, { Component } from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import CardImg from 'reactstrap/lib/CardImg';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';
import CardTitle from 'reactstrap/lib/CardTitle';
import Card from 'reactstrap/lib/Card';


class Directory extends Component {


    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite})
    }


    render(){
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    {directory};
                </div>
            </div>

        )
    }
}

export default Directory;