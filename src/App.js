import "./styles.css";
import React from "react";
import axios from "axios";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: "",
      breed: "Random"
    };
  }

  async componentDidMount() {
    let response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    // console.log(response);
    this.setState({ pic: response.data.message });
  }

  handleBreedChange = async (event) => {
    this.breed = event.target.value;
    console.log(this.breed);
    if (this.breed === "Random") {
      let response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      // console.log(response);
      this.setState({ pic: response.data.message });
    } else {
      let response = await axios.get(
        `https://dog.ceo/api/breed/${this.breed.toLowerCase()}/images/random`
      );
      // console.log(response);

      this.setState({ pic: response.data.message });
    }
  };

  click = async () => {
    if (this.state.breed === "Random") {
      let response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      // console.log(response);
      this.setState({ pic: response.data.message });
    } else {
      let response = await axios.get(
        `https://dog.ceo/api/breed/${this.state.breed.toLowerCase()}/images/random`
      );
      // console.log(response);

      this.setState({ pic: response.data.message });
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="Dogs">Select a Dog: </label>
        <select id="Dogs" onChange={this.handleBreedChange}>
          <option value="Random">Random</option>
          <option value="Beagle">Beagle</option>
          <option value="Boxer">Boxer</option>
          <option value="Doberman">Doberman</option>
          <option value="Husky">Husky</option>
        </select>
        <br />
        <br />
        <img src={this.state.pic} alt="DOG" />
        <br />
        <br />
        <button onClick={this.click}>NEXT</button>
      </div>
    );
  }
}
