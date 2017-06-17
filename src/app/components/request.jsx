import React, { Component } from 'react'

export class RequestForm extends Component {
    render() {
      return(
            <form className="form">
<div className="form__container">
              <label className="form__label">Drug: </label>
              <input className="form__input" />
</div>
<div className="form__container">
              <label className="form__label">Quantity:</label>
              <input className="form__input" />
</div>
<div className="form__container">
              <label className="form__label">Name: </label>
              <input className="form__input" />
</div>
                <button className="form__btn">Send</button>
                <button className="form__btn">Cancel</button>
            </form>

      );
    }
}
