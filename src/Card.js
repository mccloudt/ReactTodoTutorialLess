import React, { Component } from "react";
import "./styles.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Beans"],
      itemsCompleted: [],
      itemsAvail: true,
      itemsCompletedAvail: false
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addToCompleted = this.addToCompleted.bind(this);
  }
  addItem() {
    const itemsNew = this.state.items;
    itemsNew.push(document.getElementById("newItem").value);
    this.setState({ items: itemsNew });
    document.getElementById("newItem").value = "";
  }
  removeItem(item) {
    const itemsList = this.state.items;
    itemsList.indexOf(item) !== -1
      ? itemsList.splice(itemsList.indexOf(item), 1)
      : false;

    this.setState({
      items: itemsList
    });
    this.state.items.length == 0 ? this.setState({ itemsAvail: false }) : null;
  }
  addToCompleted(item) {
    const itemsCompletedData = this.state.itemsCompleted;
    itemsCompletedData.push(item);
    this.setState({ itemsCompleted: itemsCompletedData });
    if (this.state.itemsCompleted.length > 0) {
      this.setState({ itemsCompletedAvail: true });
    }
  }

  render() {
    const dataItems = this.state.items;
    const listItems = dataItems.map((x) => {
      return (
        <li key={x}>
          {x}{" "}
          <input
            key={x}
            onClick={() => {
              this.addToCompleted(x);
              this.removeItem(x);
            }}
            type="checkbox"
          />
        </li>
      );
    });
    const dataItemsCompleted = this.state.itemsCompleted;
    const listItemsCompleted = dataItemsCompleted.map((x) => {
      return <p key={x}>{x}</p>;
    });

    return (
      <div className="container">
        <div className="card">
          <h1>Daily Todo</h1>
          <ul>{listItems}</ul>
          <div className="input">
            {!this.state.itemsAvail ? (
              <p class="allCompleted">
                Nothing left to complete, add more items.
              </p>
            ) : (
              false
            )}
            <input type="text" placeholder="add a new item..." id="newItem" />
            <button onClick={this.addItem}>Add</button>
          </div>
        </div>
        <div className="card">
          <h1>Daily Completed</h1>
          <ul>{listItemsCompleted}</ul>
          <div className="input">
            {!this.state.itemsCompletedAvail ? (
              <p className="noneCompleted">
                Nothing completed yet. Finish something first!
              </p>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
