import React, { Component } from 'react';
import BookingApi from './BookingApi';
import BookingView from './BookingViewSingle';

class BookingsList extends Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			bookings: []
		};
		this.assignSeat = this.assignSeat.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.setState({bookings: nextProps.bookings});
	}
	assignSeat(booking){
		BookingApi.updateBooking(booking)
			.then((bookings)=>{
				this.setState({
					bookings: bookings
				});
			});
	}
	render(){
		return (
			<div>
				{this.state.bookings.map(booking =>
					<BookingView key={booking.bookingId} booking={booking} assignSeat={this.assignSeat} />
				)}
			</div>
		);
	}
}

export default BookingsList;
